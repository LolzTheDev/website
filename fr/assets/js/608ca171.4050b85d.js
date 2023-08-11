"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[6146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},a="CLI",l={unversionedId:"guide/walkthrough/cli",id:"guide/walkthrough/cli",title:"CLI",description:"Setting up the CLI is easy.",source:"@site/docs/guide/walkthrough/cli.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/cli",permalink:"/fr/docs/guide/walkthrough/cli",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/cli.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a new project",permalink:"/fr/docs/guide/walkthrough/new-project"},next:{title:"transition from v2 to v3",permalink:"/fr/docs/guide/walkthrough/transition"}},u={},s=[],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli"},"CLI"),(0,o.kt)("p",null,"Setting up the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/cli"},"CLI")," is easy. ",(0,o.kt)("br",null),"\nThe cli is your plug to the sern ecosystem. This will allow you to install plugins with ease, install extra utilities, and much more.\nIf you haven't yet: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @sern/cli\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To install ",(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/plugins"},"plugins")," maintained by the community ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/awesome-plugins"},"repository"),",")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sern plugins\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to have a correct ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/guide/walkthrough/good-to-know#sernconfigjson"},"sern.config.json"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../cli"},"Click here")),(0,o.kt)("p",null,"This will display a menu selection of all installable plugins. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": You must have a ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/guide/walkthrough/good-to-know"},"sern.config.json")," to use this command.\nIf you want to view plugins, visit the repository linked above."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To install extra utilities into your project")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sern extra\n")))}d.isMDXComponent=!0}}]);