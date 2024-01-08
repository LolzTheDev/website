"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[5367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={id:"Presence.Result",title:"Interface: Result",sidebar_label:"Result",custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/Presence.Result",id:"api/interfaces/Presence.Result",title:"Interface: Result",description:"Presence.Result",source:"@site/docs/api/interfaces/Presence.Result.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Presence.Result",permalink:"/docs/api/interfaces/Presence.Result",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Presence.Result",title:"Interface: Result",sidebar_label:"Result",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Response",permalink:"/docs/api/interfaces/CommandError.Response"},next:{title:"Welcome!",permalink:"/docs/intro"}},p={},o=[{value:"Properties",id:"properties",level:2},{value:"activities",id:"activities",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"afk",id:"afk",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onRepeat",id:"onrepeat",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"repeat",id:"repeat",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"shardId",id:"shardid",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-5",level:4}],c={toc:o},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/namespaces/Presence"},"Presence"),".Result"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"activities"},"activities"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"activities"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ActivitiesOptions"),"[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/presences.ts#L11"},"src/core/presences.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"afk"},"afk"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"afk"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/presences.ts#L10"},"src/core/presences.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onrepeat"},"onRepeat"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"onRepeat"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"previous"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Presence.Result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result")),") => ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Presence.Result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result"))),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"previous"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Presence.Result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result"))),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"previous")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/api/interfaces/Presence.Result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result")))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Presence.Result"},(0,a.kt)("inlineCode",{parentName:"a"},"Result"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/presences.ts#L14"},"src/core/presences.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"repeat"},"repeat"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"repeat"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ","|"," [",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Emitter"},(0,a.kt)("inlineCode",{parentName:"a"},"Emitter")),", ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"]"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/presences.ts#L13"},"src/core/presences.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"shardid"},"shardId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"shardId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/presences.ts#L12"},"src/core/presences.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"status"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Status")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/presences.ts#L9"},"src/core/presences.ts:9")))}u.isMDXComponent=!0}}]);