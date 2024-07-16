"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3014],{47232:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var r=s(85893),a=s(11151);const t={title:"Params",sidebar_label:"Params",sidebar_position:7,slug:"/apps/transfer/params"},o="Parameters",i={id:"apps/transfer/params",title:"Params",description:"The IBC transfer application module contains the following parameters:",source:"@site/versioned_docs/version-v8.3.x/02-apps/01-transfer/07-params.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/params",permalink:"/v8/apps/transfer/params",draft:!1,unlisted:!1,tags:[],version:"v8.3.x",sidebarPosition:7,frontMatter:{title:"Params",sidebar_label:"Params",sidebar_position:7,slug:"/apps/transfer/params"},sidebar:"defaultSidebar",previous:{title:"Metrics",permalink:"/v8/apps/transfer/metrics"},next:{title:"Authorizations",permalink:"/v8/apps/transfer/authorizations"}},d={},l=[{value:"<code>SendEnabled</code>",id:"sendenabled",level:2},{value:"<code>ReceiveEnabled</code>",id:"receiveenabled",level:2},{value:"Queries",id:"queries",level:2},{value:"Changing Parameters",id:"changing-parameters",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"The IBC transfer application module contains the following parameters:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SendEnabled"})}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ReceiveEnabled"})}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The IBC transfer module stores its parameters in its keeper with the prefix of ",(0,r.jsx)(n.code,{children:"0x03"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"sendenabled",children:(0,r.jsx)(n.code,{children:"SendEnabled"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SendEnabled"})," parameter controls send cross-chain transfer capabilities for all fungible tokens."]}),"\n",(0,r.jsxs)(n.p,{children:["To prevent a single token from being transferred from the chain, set the ",(0,r.jsx)(n.code,{children:"SendEnabled"})," parameter to ",(0,r.jsx)(n.code,{children:"true"})," and then, depending on the Cosmos SDK version, do one of the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For Cosmos SDK v0.46.x or earlier, set the bank module's ",(0,r.jsxs)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.46.x/x/bank/spec/05_params.md#sendenabled",children:[(0,r.jsx)(n.code,{children:"SendEnabled"})," parameter"]})," for the denomination to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["For Cosmos SDK versions above v0.46.x, set the bank module's ",(0,r.jsx)(n.code,{children:"SendEnabled"})," entry for the denomination to ",(0,r.jsx)(n.code,{children:"false"})," using ",(0,r.jsx)(n.code,{children:"MsgSetSendEnabled"})," as a governance proposal."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Doing so will prevent the token from being transferred between any accounts in the blockchain."})}),"\n",(0,r.jsx)(n.h2,{id:"receiveenabled",children:(0,r.jsx)(n.code,{children:"ReceiveEnabled"})}),"\n",(0,r.jsx)(n.p,{children:"The transfers enabled parameter controls receive cross-chain transfer capabilities for all fungible tokens."}),"\n",(0,r.jsxs)(n.p,{children:["To prevent a single token from being transferred to the chain, set the ",(0,r.jsx)(n.code,{children:"ReceiveEnabled"})," parameter to ",(0,r.jsx)(n.code,{children:"true"})," and then, depending on the Cosmos SDK version, do one of the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For Cosmos SDK v0.46.x or earlier, set the bank module's ",(0,r.jsxs)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.46.x/x/bank/spec/05_params.md#sendenabled",children:[(0,r.jsx)(n.code,{children:"SendEnabled"})," parameter"]})," for the denomination to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["For Cosmos SDK versions above v0.46.x, set the bank module's ",(0,r.jsx)(n.code,{children:"SendEnabled"})," entry for the denomination to ",(0,r.jsx)(n.code,{children:"false"})," using ",(0,r.jsx)(n.code,{children:"MsgSetSendEnabled"})," as a governance proposal."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Doing so will prevent the token from being transferred between any accounts in the blockchain."})}),"\n",(0,r.jsx)(n.h2,{id:"queries",children:"Queries"}),"\n",(0,r.jsx)(n.p,{children:"Current parameter values can be queried via a query message."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-protobuf",children:"// proto/ibc/applications/transfer/v1/query.proto\n\n// QueryParamsRequest is the request type for the Query/Params RPC method.\nmessage QueryParamsRequest {}\n\n// QueryParamsResponse is the response type for the Query/Params RPC method.\nmessage QueryParamsResponse {\n  // params defines the parameters of the module.\n  Params params = 1;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To execute the query in ",(0,r.jsx)(n.code,{children:"simd"}),", you use the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"simd query ibc-transfer params\n"})}),"\n",(0,r.jsx)(n.h2,{id:"changing-parameters",children:"Changing Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["To change the parameter values, you must make a governance proposal that executes the ",(0,r.jsx)(n.code,{children:"MsgUpdateParams"})," message."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-protobuf",children:"// proto/ibc/applications/transfer/v1/tx.proto\n\n// MsgUpdateParams is the Msg/UpdateParams request type.\nmessage MsgUpdateParams {\n  // signer address (it may be the address that controls the module, which defaults to x/gov unless overwritten).\n  string signer = 1;\n\n  // params defines the transfer parameters to update.\n  //\n  // NOTE: All parameters must be supplied.\n  Params params = 2 [(gogoproto.nullable) = false];\n}\n\n// MsgUpdateParamsResponse defines the response structure for executing a\n// MsgUpdateParams message.\nmessage MsgUpdateParamsResponse {}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var r=s(67294);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);