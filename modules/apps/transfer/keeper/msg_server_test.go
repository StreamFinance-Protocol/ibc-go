package keeper_test

import (
	sdkmath "cosmossdk.io/math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"

	"github.com/cosmos/ibc-go/v8/modules/apps/transfer/types"
	ibctesting "github.com/cosmos/ibc-go/v8/testing"
)

// TestMsgTransfer tests Transfer rpc handler
func (suite *KeeperTestSuite) TestMsgTransfer() {
	var msg *types.MsgTransfer

	testCases := []struct {
		name     string
		malleate func()
		expPass  bool
	}{
		{
			"success",
			func() {},
			true,
		},
		{
			"bank send enabled for denom",
			func() {
				err := suite.chainA.GetSimApp().BankKeeper.SetParams(suite.chainA.GetContext(),
					banktypes.Params{
						SendEnabled: []*banktypes.SendEnabled{{Denom: sdk.DefaultBondDenom, Enabled: true}},
					},
				)
				suite.Require().NoError(err)
			},
			true,
		},
		{
			"send transfers disabled",
			func() {
				suite.chainA.GetSimApp().TransferKeeper.SetParams(suite.chainA.GetContext(),
					types.Params{
						SendEnabled: false,
					},
				)
			},
			false,
		},
		{
			"invalid sender",
			func() {
				msg.Sender = "address"
			},
			false,
		},
		{
			"sender is a blocked address",
			func() {
				msg.Sender = suite.chainA.GetSimApp().AccountKeeper.GetModuleAddress(types.ModuleName).String()
			},
			false,
		},
		{
			"bank send disabled for denom",
			func() {
				err := suite.chainA.GetSimApp().BankKeeper.SetParams(suite.chainA.GetContext(),
					banktypes.Params{
						SendEnabled: []*banktypes.SendEnabled{{Denom: sdk.DefaultBondDenom, Enabled: false}},
					},
				)
				suite.Require().NoError(err)
			},
			false,
		},
		{
			"channel does not exist",
			func() {
				msg.SourceChannel = "channel-100"
			},
			false,
		},
	}

	for _, tc := range testCases {
		tc := tc

		suite.Run(tc.name, func() {
			suite.SetupTest()

			path := ibctesting.NewTransferPath(suite.chainA, suite.chainB)
			path.Setup()

			coin := sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(100))
			msg = types.NewMsgTransfer(
				path.EndpointA.ChannelConfig.PortID,
				path.EndpointA.ChannelID,
				sdk.Coins{coin}, suite.chainA.SenderAccount.GetAddress().String(), suite.chainB.SenderAccount.GetAddress().String(),
				suite.chainB.GetTimeoutHeight(), 0, // only use timeout height
				"memo",
			)

			tc.malleate()

			ctx := suite.chainA.GetContext()
			res, err := suite.chainA.GetSimApp().TransferKeeper.Transfer(ctx, msg)

			// Verify events
			events := ctx.EventManager().Events().ToABCIEvents()
			expEvents := ibctesting.EventsMap{
				"ibc_transfer": {
					"sender":   suite.chainA.SenderAccount.GetAddress().String(),
					"receiver": suite.chainB.SenderAccount.GetAddress().String(),
					"amount":   coin.Amount.String(),
					"denom":    coin.Denom,
					"memo":     "memo",
				},
			}

			if tc.expPass {
				suite.Require().NoError(err)
				suite.Require().NotNil(res)
				suite.Require().NotEqual(res.Sequence, uint64(0))
				ibctesting.AssertEventsLegacy(&suite.Suite, expEvents, events)
			} else {
				suite.Require().Error(err)
				suite.Require().Nil(res)
				suite.Require().Len(events, 0)
			}
		})
	}
}

// TestMsgTransfer tests Transfer rpc handler
func (suite *KeeperTestSuite) TestMsgTransfer_MultiDenom() {
	var msg *types.MsgTransfer

	testCases := []struct {
		name     string
		malleate func()
		expPass  bool
	}{
		{
			"success: multidenom",
			func() {},
			true,
		},
	}

	for _, tc := range testCases {
		tc := tc

		suite.Run(tc.name, func() {
			suite.SetupTest()

			path := ibctesting.NewTransferPath(suite.chainA, suite.chainB)
			path.Setup()

			coin := sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(100))
			coin2 := sdk.NewCoin("base", sdkmath.NewInt(100))
			coins := sdk.NewCoins(coin, coin2)

			msg = types.NewMsgTransfer(
				path.EndpointA.ChannelConfig.PortID,
				path.EndpointA.ChannelID,
				coins, suite.chainA.SenderAccount.GetAddress().String(), suite.chainB.SenderAccount.GetAddress().String(),
				suite.chainB.GetTimeoutHeight(), 0, // only use timeout height
				"memo",
			)

			tc.malleate()

			ctx := suite.chainA.GetContext()
			res, err := suite.chainA.GetSimApp().TransferKeeper.Transfer(ctx, msg)

			// Verify events
			events := ctx.EventManager().Events().ToABCIEvents()

			expEvents := ibctesting.EventsMap{
				"ibc_transfer": {
					"sender":   suite.chainA.SenderAccount.GetAddress().String(),
					"receiver": suite.chainB.SenderAccount.GetAddress().String(),
					"amount":   coin.Amount.String(),
					"denom":    coin.Denom,
					"memo":     "memo",
				},
			}

			if tc.expPass {
				suite.Require().NoError(err)
				suite.Require().NotNil(res)
				suite.Require().NotEqual(res.Sequence, uint64(0))
				ibctesting.AssertEventsLegacy(&suite.Suite, expEvents, events)
			} else {
				suite.Require().Error(err)
				suite.Require().Nil(res)
				suite.Require().Len(events, 0)
			}
		})
	}
}

// TestMsgTransfer tests Transfer rpc handler
func (suite *KeeperTestSuite) TestMsgTransfer_MultiDenom() {
	var msg *types.MsgTransfer

	testCases := []struct {
		name     string
		malleate func()
		expPass  bool
	}{
		{
			"success",
			func() {},
			true,
		},
	}

	for _, tc := range testCases {
		tc := tc

		suite.Run(tc.name, func() {
			suite.SetupTest()

			path := ibctesting.NewTransferPath(suite.chainA, suite.chainB)
			path.Setup()

			coin := sdk.NewCoin(sdk.DefaultBondDenom, sdkmath.NewInt(100))
			coin1 := sdk.NewCoin("bond", sdkmath.NewInt(100))

			// send some coins of the second denom from bank module to the sender account as well
			suite.chainA.GetSimApp().BankKeeper.MintCoins(suite.chainA.GetContext(), types.ModuleName, sdk.NewCoins(coin1))
			suite.chainA.GetSimApp().BankKeeper.SendCoinsFromModuleToAccount(suite.chainA.GetContext(), types.ModuleName, suite.chainA.SenderAccount.GetAddress(), sdk.NewCoins(coin1))

			msg = types.NewMsgTransfer(
				path.EndpointA.ChannelConfig.PortID,
				path.EndpointA.ChannelID,
				sdk.Coin{}, suite.chainA.SenderAccount.GetAddress().String(), suite.chainB.SenderAccount.GetAddress().String(),
				suite.chainB.GetTimeoutHeight(), 0, // only use timeout height
				"memo", coin, coin1,
			)

			tc.malleate()

			ctx := suite.chainA.GetContext()
			res, err := suite.chainA.GetSimApp().TransferKeeper.Transfer(ctx, msg)

			// Verify events
			expEvents := sdk.Events{
				sdk.NewEvent(types.EventTypeTransfer,
					sdk.NewAttribute(sdk.AttributeKeySender, msg.Sender),
					sdk.NewAttribute(types.AttributeKeyReceiver, msg.Receiver),
					sdk.NewAttribute(types.AttributeKeyMemo, msg.Memo),
					sdk.NewAttribute(types.AttributeKeyDenom, coin.Denom),
					sdk.NewAttribute(types.AttributeKeyAmount, coin.Amount.String()),
				),
				sdk.NewEvent(types.EventTypeTransfer,
					sdk.NewAttribute(sdk.AttributeKeySender, msg.Sender),
					sdk.NewAttribute(types.AttributeKeyReceiver, msg.Receiver),
					sdk.NewAttribute(types.AttributeKeyMemo, msg.Memo),
					sdk.NewAttribute(types.AttributeKeyDenom, coin1.Denom),
					sdk.NewAttribute(types.AttributeKeyAmount, coin1.Amount.String()),
				),
				sdk.NewEvent(
					sdk.EventTypeMessage,
					sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				),
			}.ToABCIEvents()

			events := ctx.EventManager().Events().ToABCIEvents()

			if tc.expPass {
				suite.Require().NoError(err)
				suite.Require().NotNil(res)
				suite.Require().NotEqual(res.Sequence, uint64(0))
				ibctesting.AssertEvents(&suite.Suite, expEvents, events)
			} else {
				suite.Require().Error(err)
				suite.Require().Nil(res)
				suite.Require().Len(events, 0)
			}
		})
	}
}

// TestUpdateParams tests UpdateParams rpc handler
func (suite *KeeperTestSuite) TestUpdateParams() {
	signer := suite.chainA.GetSimApp().TransferKeeper.GetAuthority()
	testCases := []struct {
		name    string
		msg     *types.MsgUpdateParams
		expPass bool
	}{
		{
			"success: valid signer and default params",
			types.NewMsgUpdateParams(signer, types.DefaultParams()),
			true,
		},
		{
			"failure: malformed signer address",
			types.NewMsgUpdateParams(ibctesting.InvalidID, types.DefaultParams()),
			false,
		},
		{
			"failure: empty signer address",
			types.NewMsgUpdateParams("", types.DefaultParams()),
			false,
		},
		{
			"failure: whitespace signer address",
			types.NewMsgUpdateParams("    ", types.DefaultParams()),
			false,
		},
		{
			"failure: unauthorized signer address",
			types.NewMsgUpdateParams(ibctesting.TestAccAddress, types.DefaultParams()),
			false,
		},
	}

	for _, tc := range testCases {
		tc := tc
		suite.Run(tc.name, func() {
			suite.SetupTest()
			_, err := suite.chainA.GetSimApp().TransferKeeper.UpdateParams(suite.chainA.GetContext(), tc.msg)
			if tc.expPass {
				suite.Require().NoError(err)
			} else {
				suite.Require().Error(err)
			}
		})
	}
}
