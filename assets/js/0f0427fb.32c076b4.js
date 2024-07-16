"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4046],{90015:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(85893),o=i(11151);const s={title:"IBC-Go v1 to v2",sidebar_label:"IBC-Go v1 to v2",sidebar_position:3,slug:"/migrations/v1-to-v2"},r="Migrating from ibc-go v1 to v2",a={id:"migrations/v1-to-v2",title:"IBC-Go v1 to v2",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/versioned_docs/version-v4.6.x/04-migrations/03-v1-to-v2.md",sourceDirName:"04-migrations",slug:"/migrations/v1-to-v2",permalink:"/v4/migrations/v1-to-v2",draft:!1,unlisted:!1,tags:[],version:"v4.6.x",sidebarPosition:3,frontMatter:{title:"IBC-Go v1 to v2",sidebar_label:"IBC-Go v1 to v2",sidebar_position:3,slug:"/migrations/v1-to-v2"},sidebar:"defaultSidebar",previous:{title:"SDK v0.43 to IBC-Go v1",permalink:"/v4/migrations/sdk-to-v1"},next:{title:"IBC-Go v2 to v3",permalink:"/v4/migrations/v2-to-v3"}},d={},l=[{value:"Chains",id:"chains",level:2},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"sdk.Result removed",id:"sdkresult-removed",level:3},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"migrating-from-ibc-go-v1-to-v2",children:"Migrating from ibc-go v1 to v2"}),"\n",(0,t.jsx)(n.p,{children:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."}),"\n",(0,t.jsx)(n.p,{children:"There are four sections based on the four potential user groups of this document:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Chains"}),"\n",(0,t.jsx)(n.li,{children:"IBC Apps"}),"\n",(0,t.jsx)(n.li,{children:"Relayers"}),"\n",(0,t.jsx)(n.li,{children:"IBC Light Clients"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"github.com/cosmos/ibc-go -> github.com/cosmos/ibc-go/v2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"chains",children:"Chains"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No relevant changes were made in this release."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ibc-apps",children:"IBC Apps"}),"\n",(0,t.jsx)(n.p,{children:"A new function has been added to the app module interface:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// NegotiateAppVersion performs application version negotiation given the provided channel ordering, connectionID, portID, counterparty and proposed version.\n    // An error is returned if version negotiation cannot be performed. For example, an application module implementing this interface\n    // may decide to return an error in the event of the proposed version being incompatible with it's own\n    NegotiateAppVersion(\n        ctx sdk.Context,\n        order channeltypes.Order,\n        connectionID string,\n        portID string,\n        counterparty channeltypes.Counterparty,\n        proposedVersion string,\n    ) (version string, err error)\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This function should perform application version negotiation and return the negotiated version. If the version cannot be negotiated, an error should be returned. This function is only used on the client side."}),"\n",(0,t.jsx)(n.h3,{id:"sdkresult-removed",children:"sdk.Result removed"}),"\n",(0,t.jsx)(n.p,{children:"sdk.Result has been removed as a return value in the application callbacks. Previously it was being discarded by core IBC and was thus unused."}),"\n",(0,t.jsx)(n.h2,{id:"relayers",children:"Relayers"}),"\n",(0,t.jsxs)(n.p,{children:["A new gRPC has been added to 05-port, ",(0,t.jsx)(n.code,{children:"AppVersion"}),". It returns the negotiated app version. This function should be used for the ",(0,t.jsx)(n.code,{children:"ChanOpenTry"})," channel handshake step to decide upon the application version which should be set in the channel."]}),"\n",(0,t.jsx)(n.h2,{id:"ibc-light-clients",children:"IBC Light Clients"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No relevant changes were made in this release."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(67294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);