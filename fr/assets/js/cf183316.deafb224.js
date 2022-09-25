"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:6},a="The SernEmitter class",s={unversionedId:"guide/walkthrough/sern-emitter",id:"guide/walkthrough/sern-emitter",title:"The SernEmitter class",description:"You're shipped with the SernEmitter. This EventEmitter listens to",source:"@site/docs/guide/walkthrough/sern-emitter.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/sern-emitter",permalink:"/fr/docs/guide/walkthrough/sern-emitter",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/sern-emitter.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/fr/docs/guide/walkthrough/plugins"},next:{title:"Good to know",permalink:"/fr/docs/guide/walkthrough/good-to-know"}},l={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-sernemitter-class"},"The SernEmitter class"),(0,i.kt)("p",null,"You're shipped with the SernEmitter. This EventEmitter listens to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"command modules executing and its status, the ",(0,i.kt)("inlineCode",{parentName:"li"},"module.activate")," event"),(0,i.kt)("li",{parentName:"ul"},"command modules registered and its status, the ",(0,i.kt)("inlineCode",{parentName:"li"},"module.register")," event"),(0,i.kt)("li",{parentName:"ul"},"any error that occurs, the ",(0,i.kt)("inlineCode",{parentName:"li"},"error")," event"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"warn")," events, where it is possible to throw errors")),(0,i.kt)("p",null,"You can put these and other event listeners into ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/guide/walkthrough/first-event"},"event modules"),"! "),(0,i.kt)("br",null),"View all ",(0,i.kt)("a",{href:"https://sern-handler.js.org/docs/api/modules#serneventsmapping"},"events"))}p.isMDXComponent=!0}}]);