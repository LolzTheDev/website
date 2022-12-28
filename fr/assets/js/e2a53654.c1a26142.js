"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[4781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={id:"CommandPlugin",title:"Interface: CommandPlugin<T>",sidebar_label:"CommandPlugin",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/CommandPlugin",id:"api/interfaces/CommandPlugin",title:"Interface: CommandPlugin<T>",description:"Type parameters",source:"@site/docs/api/interfaces/CommandPlugin.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CommandPlugin",permalink:"/fr/docs/api/interfaces/CommandPlugin",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CommandPlugin",title:"Interface: CommandPlugin<T>",sidebar_label:"CommandPlugin",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ChannelSelectCommand",permalink:"/fr/docs/api/interfaces/ChannelSelectCommand"},next:{title:"ContextMenuMsg",permalink:"/fr/docs/api/interfaces/ContextMenuMsg"}},d={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"execute",id:"execute",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"type",id:"type",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:o};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,r.kt)("a",{parentName:"td",href:"/fr/docs/api/modules#commandmoduledefs"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandModuleDefs"))," = keyof ",(0,r.kt)("a",{parentName:"td",href:"/fr/docs/api/modules#commandmoduledefs"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandModuleDefs")))))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"Plugin"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CommandPlugin"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"description"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,r.kt)("p",null,"will be removed in the next update"),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Plugin"},"Plugin"),".",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Plugin#description"},"description")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L33"},"src/handler/plugins/plugin.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"execute"},"execute"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"execute"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"absPath"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"mod"),": ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api/modules#commandmoduledefs"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandModuleDefs")),"[",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"]"," & { ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }  }, ",(0,r.kt)("inlineCode",{parentName:"p"},"controller"),": ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Controller"},(0,r.kt)("inlineCode",{parentName:"a"},"Controller")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"controller"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload.absPath")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload.mod")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/fr/docs/api/modules#commandmoduledefs"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandModuleDefs")),"[",(0,r.kt)("inlineCode",{parentName:"td"},"T"),"]"," & { ",(0,r.kt)("inlineCode",{parentName:"td"},"description"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"td"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"controller")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/fr/docs/api/interfaces/Controller"},(0,r.kt)("inlineCode",{parentName:"a"},"Controller")))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L39"},"src/handler/plugins/plugin.ts:39")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,r.kt)("p",null,"will be removed in the next update"),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Plugin"},"Plugin"),".",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Plugin#name"},"name")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L31"},"src/handler/plugins/plugin.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api/enums/PluginType#command"},(0,r.kt)("inlineCode",{parentName:"a"},"Command"))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Plugin"},"Plugin"),".",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Plugin#type"},"type")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L38"},"src/handler/plugins/plugin.ts:38")))}s.isMDXComponent=!0}}]);