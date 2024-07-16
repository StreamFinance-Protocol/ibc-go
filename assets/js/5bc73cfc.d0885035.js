"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6653],{18893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(85893),o=t(11151);const s={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/apps/transfer/overview"},r="Overview",a={id:"apps/transfer/overview",title:"Overview",description:"Learn about what the token Transfer module is",source:"@site/versioned_docs/version-v4.6.x/02-apps/01-transfer/01-overview.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/overview",permalink:"/v4/apps/transfer/overview",draft:!1,unlisted:!1,tags:[],version:"v4.6.x",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/apps/transfer/overview"},sidebar:"defaultSidebar",previous:{title:"Roadmap",permalink:"/v4/roadmap/roadmap"},next:{title:"State",permalink:"/v4/apps/transfer/state"}},c={},l=[{value:"What is the Transfer module?",id:"what-is-the-transfer-module",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Acknowledgements",id:"acknowledgements",level:3},{value:"Denomination trace",id:"denomination-trace",level:3},{value:"UX suggestions for clients",id:"ux-suggestions-for-clients",level:2},{value:"Direct connection",id:"direct-connection",level:3},{value:"Multiple hops",id:"multiple-hops",level:3},{value:"Locked funds",id:"locked-funds",level:2},{value:"Security considerations",id:"security-considerations",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.admonition,{title:"Synopsis",type:"note",children:(0,i.jsx)(n.p,{children:"Learn about what the token Transfer module is"})}),"\n",(0,i.jsx)(n.h2,{id:"what-is-the-transfer-module",children:"What is the Transfer module?"}),"\n",(0,i.jsxs)(n.p,{children:["Transfer is the Cosmos SDK implementation of the ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer",children:"ICS-20"})," protocol, which enables cross-chain fungible token transfers."]}),"\n",(0,i.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,i.jsx)(n.h3,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,i.jsxs)(n.p,{children:["ICS20 uses the recommended acknowledgement format as specified by ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope",children:"ICS 04"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["A successful receive of a transfer packet will result in a Result Acknowledgement being written\nwith the value ",(0,i.jsx)(n.code,{children:"[]byte{byte(1)}"})," in the ",(0,i.jsx)(n.code,{children:"Response"})," field."]}),"\n",(0,i.jsxs)(n.p,{children:["An unsuccessful receive of a transfer packet will result in an Error Acknowledgement being written\nwith the error message in the ",(0,i.jsx)(n.code,{children:"Response"})," field."]}),"\n",(0,i.jsx)(n.h3,{id:"denomination-trace",children:"Denomination trace"}),"\n",(0,i.jsx)(n.p,{children:"The denomination trace corresponds to the information that allows a token to be traced back to its\norigin chain. It contains a sequence of port and channel identifiers ordered from the most recent to\nthe oldest in the timeline of transfers."}),"\n",(0,i.jsxs)(n.p,{children:["This information is included on the token denomination field in the form of a hash to prevent an\nunbounded denomination length. For example, the token ",(0,i.jsx)(n.code,{children:"transfer/channelToA/uatom"})," will be displayed\nas ",(0,i.jsx)(n.code,{children:"ibc/7F1D3FCF4AE79E1554D670D1AD949A9BA4E4A3C76C63093E17E446A46061A7A2"}),"."]}),"\n",(0,i.jsx)(n.p,{children:'Each send to any chain other than the one it was previously received from is a movement forwards in\nthe token\'s timeline. This causes trace to be added to the token\'s history and the destination port\nand destination channel to be prefixed to the denomination. In these instances the sender chain is\nacting as the "source zone". When the token is sent back to the chain it previously received from, the\nprefix is removed. This is a backwards movement in the token\'s timeline and the sender chain is\nacting as the "sink zone".'}),"\n",(0,i.jsxs)(n.p,{children:["It is strongly recommended to read the full details of ",(0,i.jsx)(n.a,{href:"/architecture/adr-001-coin-source-tracing",children:"ADR 001: Coin Source Tracing"})," to understand the implications and context of the IBC token representations."]}),"\n",(0,i.jsx)(n.h2,{id:"ux-suggestions-for-clients",children:"UX suggestions for clients"}),"\n",(0,i.jsx)(n.p,{children:"For clients (wallets, exchanges, applications, block explorers, etc) that want to display the source of the token, it is recommended to use the following alternatives for each of the cases below:"}),"\n",(0,i.jsx)(n.h3,{id:"direct-connection",children:"Direct connection"}),"\n",(0,i.jsx)(n.p,{children:"If the denomination trace contains a single identifier prefix pair (as in the example above), then\nthe easiest way to retrieve the chain and light client identifier is to map the trace information\ndirectly. In summary, this requires querying the channel from the denomination trace identifiers,\nand then the counterparty client state using the counterparty port and channel identifiers from the\nretrieved channel."}),"\n",(0,i.jsx)(n.p,{children:"A general pseudo algorithm would look like the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Query the full denomination trace."}),"\n",(0,i.jsxs)(n.li,{children:["Query the channel with the ",(0,i.jsx)(n.code,{children:"portID/channelID"})," pair, which corresponds to the first destination of the\ntoken."]}),"\n",(0,i.jsxs)(n.li,{children:["Query the client state using the identifiers pair. Note that this query will return a ",(0,i.jsx)(n.code,{children:'"Not Found"'})," response if the current chain is not connected to this channel."]}),"\n",(0,i.jsx)(n.li,{children:"Retrieve the client identifier or chain identifier from the client state (eg: on\nTendermint clients) and store it locally."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Using the gRPC gateway client service the steps above would be, with a given IBC token ",(0,i.jsx)(n.code,{children:"ibc/7F1D3FCF4AE79E1554D670D1AD949A9BA4E4A3C76C63093E17E446A46061A7A2"})," stored on ",(0,i.jsx)(n.code,{children:"chainB"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GET /ibc/apps/transfer/v1/denom_traces/7F1D3FCF4AE79E1554D670D1AD949A9BA4E4A3C76C63093E17E446A46061A7A2"})," -> ",(0,i.jsx)(n.code,{children:'{"path": "transfer/channelToA", "base_denom": "uatom"}'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'GET /ibc/apps/transfer/v1/channels/channelToA/ports/transfer/client_state"'})," -> ",(0,i.jsx)(n.code,{children:'{"client_id": "clientA", "chain-id": "chainA", ...}'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'GET /ibc/apps/transfer/v1/channels/channelToA/ports/transfer"'})," -> ",(0,i.jsx)(n.code,{children:'{"channel_id": "channelToA", port_id": "transfer", counterparty: {"channel_id": "channelToB", port_id": "transfer"}, ...}'})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'GET /ibc/apps/transfer/v1/channels/channelToB/ports/transfer/client_state" -> {"client_id": "clientB", "chain-id": "chainB", ...}'})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Then, the token transfer chain path for the ",(0,i.jsx)(n.code,{children:"uatom"})," denomination would be: ",(0,i.jsx)(n.code,{children:"chainA"})," -> ",(0,i.jsx)(n.code,{children:"chainB"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"multiple-hops",children:"Multiple hops"}),"\n",(0,i.jsx)(n.p,{children:"The multiple channel hops case applies when the token has passed through multiple chains between the original source and final destination chains."}),"\n",(0,i.jsx)(n.p,{children:"The IBC protocol doesn't know the topology of the overall network (i.e connections between chains and identifier names between them). For this reason, in the multiple hops case, a particular chain in the timeline of the individual transfers can't query the chain and client identifiers of the other chains."}),"\n",(0,i.jsxs)(n.p,{children:["Take for example the following sequence of transfers ",(0,i.jsx)(n.code,{children:"A -> B -> C"})," for an IBC token, with a final prefix path (trace info) of ",(0,i.jsx)(n.code,{children:"transfer/channelChainC/transfer/channelChainB"}),". What the paragraph above means is that even in the case that chain ",(0,i.jsx)(n.code,{children:"C"})," is directly connected to chain ",(0,i.jsx)(n.code,{children:"A"}),", querying the port and channel identifiers that chain ",(0,i.jsx)(n.code,{children:"B"})," uses to connect to chain ",(0,i.jsx)(n.code,{children:"A"})," (eg: ",(0,i.jsx)(n.code,{children:"transfer/channelChainA"}),") can be completely different from the one that chain ",(0,i.jsx)(n.code,{children:"C"})," uses to connect to chain ",(0,i.jsx)(n.code,{children:"A"})," (eg: ",(0,i.jsx)(n.code,{children:"transfer/channelToChainA"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Thus the proposed solution for clients that the IBC team recommends are the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connect to all chains"}),": Connecting to all the chains in the timeline would allow clients to\nperform the queries outlined in the ",(0,i.jsx)(n.a,{href:"#direct-connection",children:"direct connection"})," section to each\nrelevant chain. By repeatedly following the port and channel denomination trace transfer timeline,\nclients should always be able to find all the relevant identifiers. This comes at the tradeoff\nthat the client must connect to nodes on each of the chains in order to perform the queries."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Relayer as a Service (RaaS)"}),": A longer term solution is to use/create a relayer service that\ncould map the denomination trace to the chain path timeline for each token (i.e ",(0,i.jsx)(n.code,{children:"origin chain -> chain #1 -> ... -> chain #(n-1) -> final chain"}),"). These services could provide merkle proofs in\norder to allow clients to optionally verify the path timeline correctness for themselves by\nrunning light clients. If the proofs are not verified, they should be considered as trusted third\nparties services. Additionally, client would be advised in the future to use RaaS that support the\nlargest number of connections between chains in the ecosystem. Unfortunately, none of the existing\npublic relayers (in ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/relayer",children:"Golang"})," and\n",(0,i.jsx)(n.a,{href:"https://github.com/informalsystems/ibc-rs",children:"Rust"}),"), provide this service to clients."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The only viable alternative for clients (at the time of writing) to tokens with multiple connection hops, is to connect to all chains directly and perform relevant queries to each of them in the sequence."})}),"\n",(0,i.jsx)(n.h2,{id:"locked-funds",children:"Locked funds"}),"\n",(0,i.jsxs)(n.p,{children:["In some ",(0,i.jsx)(n.a,{href:"/architecture/adr-026-ibc-client-recovery-mechanisms#exceptional-cases",children:"exceptional cases"}),", a client state associated with a given channel cannot be updated. This causes that funds from fungible tokens in that channel will be permanently locked and thus can no longer be transferred."]}),"\n",(0,i.jsx)(n.p,{children:"To mitigate this, a client update governance proposal can be submitted to update the frozen client\nwith a new valid header. Once the proposal passes the client state will be unfrozen and the funds\nfrom the associated channels will then be unlocked. This mechanism only applies to clients that\nallow updates via governance, such as Tendermint clients."}),"\n",(0,i.jsxs)(n.p,{children:["In addition to this, it's important to mention that a token must be sent back along the exact route\nthat it took originally in order to return it to its original form on the source chain (eg: the\nCosmos Hub for the ",(0,i.jsx)(n.code,{children:"uatom"}),"). Sending a token back to the same chain across a different channel will\n",(0,i.jsx)(n.strong,{children:"not"})," move the token back across its timeline. If a channel in the chain history closes before the\ntoken can be sent back across that channel, then the token will not be returnable to its original\nform."]}),"\n",(0,i.jsx)(n.h2,{id:"security-considerations",children:"Security considerations"}),"\n",(0,i.jsxs)(n.p,{children:["For safety, no other module must be capable of minting tokens with the ",(0,i.jsx)(n.code,{children:"ibc/"})," prefix. The IBC\ntransfer module needs a subset of the denomination space that only it can create tokens in."]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);