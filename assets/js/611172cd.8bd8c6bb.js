"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3445],{88647:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(85893),i=s(11151);const r={title:"State Transitions",sidebar_label:"State Transitions",sidebar_position:3,slug:"/apps/transfer/state-transitions"},a="State transitions",o={id:"apps/transfer/state-transitions",title:"State Transitions",description:"Send fungible tokens",source:"@site/versioned_docs/version-v6.3.x/02-apps/01-transfer/03-state-transitions.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/state-transitions",permalink:"/v6/apps/transfer/state-transitions",draft:!1,unlisted:!1,tags:[],version:"v6.3.x",sidebarPosition:3,frontMatter:{title:"State Transitions",sidebar_label:"State Transitions",sidebar_position:3,slug:"/apps/transfer/state-transitions"},sidebar:"defaultSidebar",previous:{title:"State",permalink:"/v6/apps/transfer/state"},next:{title:"Messages",permalink:"/v6/apps/transfer/messages"}},l={},c=[{value:"Send fungible tokens",id:"send-fungible-tokens",level:2},{value:"Receive fungible tokens",id:"receive-fungible-tokens",level:2}];function h(e){const n={em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"state-transitions",children:"State transitions"}),"\n",(0,t.jsx)(n.h2,{id:"send-fungible-tokens",children:"Send fungible tokens"}),"\n",(0,t.jsx)(n.p,{children:"A successful fungible token send has two state transitions depending if the transfer is a movement forward or backwards in the token's timeline:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Sender chain is the source chain, ",(0,t.jsx)(n.em,{children:"i.e"})," a transfer to any chain other than the one it was previously received from is a movement forwards in the token's timeline. This results in the following state transitions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The coins are transferred to an escrow address (i.e locked) on the sender chain."}),"\n",(0,t.jsx)(n.li,{children:"The coins are transferred to the receiving chain through IBC TAO logic."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Sender chain is the sink chain, ",(0,t.jsx)(n.em,{children:"i.e"})," the token is sent back to the chain it previously received from. This is a backwards movement in the token's timeline. This results in the following state transitions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The coins (vouchers) are burned on the sender chain."}),"\n",(0,t.jsx)(n.li,{children:"The coins are transferred to the receiving chain through IBC TAO logic."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"receive-fungible-tokens",children:"Receive fungible tokens"}),"\n",(0,t.jsx)(n.p,{children:"A successful fungible token receive has two state transitions depending if the transfer is a movement forward or backwards in the token's timeline:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Receiver chain is the source chain. This is a backwards movement in the token's timeline. This results in the following state transitions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The leftmost port and channel identifier pair is removed from the token denomination prefix."}),"\n",(0,t.jsx)(n.li,{children:"The tokens are unescrowed and sent to the receiving address."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Receiver chain is the sink chain. This is a movement forwards in the token's timeline. This results in the following state transitions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Token vouchers are minted by prefixing the destination port and channel identifiers to the trace information."}),"\n",(0,t.jsx)(n.li,{children:"The receiving chain stores the new trace information in the store (if not set already)."}),"\n",(0,t.jsx)(n.li,{children:"The vouchers are sent to the receiving address."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var t=s(67294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);