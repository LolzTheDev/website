"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[6322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(n),m=l,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:l,a[1]=s;for(var o=2;o<i;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(7462),l=(n(7294),n(3905));const i={id:"CommandType",title:"Enumeration: CommandType",sidebar_label:"CommandType",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"api/enums/CommandType",id:"api/enums/CommandType",title:"Enumeration: CommandType",description:"Since",source:"@site/docs/api/enums/CommandType.md",sourceDirName:"api/enums",slug:"/api/enums/CommandType",permalink:"/docs/api/enums/CommandType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CommandType",title:"Enumeration: CommandType",sidebar_label:"CommandType",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Sern",permalink:"/docs/api/namespaces/Sern"},next:{title:"EventType",permalink:"/docs/api/enums/EventType"}},u={},o=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Both",id:"both",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Button",id:"button",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ChannelSelect",id:"channelselect",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"CtxMsg",id:"ctxmsg",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"CtxUser",id:"ctxuser",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"MentionableSelect",id:"mentionableselect",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Modal",id:"modal",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"RoleSelect",id:"roleselect",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Slash",id:"slash",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"StringSelect",id:"stringselect",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"Text",id:"text",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"UserSelect",id:"userselect",level:3},{value:"Defined in",id:"defined-in-11",level:4}],d={toc:o},p="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Since"))),(0,l.kt)("p",null,"1.0.0\nA bitfield that discriminates command modules"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export default commandModule({\n    // highlight-next-line\n    type : CommandType.Text,\n    name : 'a text command'\n    execute(message) {\n        console.log(message.content)\n    }\n})\n")),(0,l.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,l.kt)("h3",{id:"both"},"Both"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"Both")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"3")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L20"},"src/core/structures/enums.ts:20")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"button"},"Button"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"Button")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"16")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L23"},"src/core/structures/enums.ts:23")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"channelselect"},"ChannelSelect"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"ChannelSelect")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"1024")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L29"},"src/core/structures/enums.ts:29")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ctxmsg"},"CtxMsg"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"CtxMsg")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"8")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L22"},"src/core/structures/enums.ts:22")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ctxuser"},"CtxUser"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"CtxUser")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"4")),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L21"},"src/core/structures/enums.ts:21")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mentionableselect"},"MentionableSelect"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"MentionableSelect")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"512")),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L28"},"src/core/structures/enums.ts:28")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"modal"},"Modal"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"Modal")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"64")),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L25"},"src/core/structures/enums.ts:25")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"roleselect"},"RoleSelect"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"RoleSelect")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"256")),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L27"},"src/core/structures/enums.ts:27")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"slash"},"Slash"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"Slash")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"2")),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L19"},"src/core/structures/enums.ts:19")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stringselect"},"StringSelect"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"StringSelect")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"32")),(0,l.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L24"},"src/core/structures/enums.ts:24")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"text"},"Text"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"Text")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"1")),(0,l.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L18"},"src/core/structures/enums.ts:18")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"userselect"},"UserSelect"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"UserSelect")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"128")),(0,l.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/enums.ts#L26"},"src/core/structures/enums.ts:26")))}c.isMDXComponent=!0}}]);