"use strict";(self.webpackChunksern_website=self.webpackChunksern_website||[]).push([[7035],{4347:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=i(4848),s=i(8453);const r={sidebar_position:7},d="Dependency Injection",o={id:"guide/walkthrough/dependency-injection",title:"Dependency Injection",description:"This contains version 2 code. Please view transitioning to v3",source:"@site/docs/guide/walkthrough/dependency-injection.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/dependency-injection",permalink:"/docs/guide/walkthrough/dependency-injection",draft:!1,unlisted:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/dependency-injection.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Autocomplete",permalink:"/docs/guide/walkthrough/autocomplete"},next:{title:"The SernEmitter class",permalink:"/docs/guide/walkthrough/sern-emitter"}},c={},a=[{value:"Adding dependencies to root",id:"adding-dependencies-to-root",level:2},{value:"Init",id:"init",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxadmonitiontitle:"mdxadmonitiontitle",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"dependency-injection",children:"Dependency Injection"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["This contains version 2 code. Please view ",(0,t.jsx)(n.a,{href:"./transition",children:"transitioning to v3"})]})}),"\n",(0,t.jsxs)(n.p,{children:["Since version 2.0.0, dependency injection, thanks to ",(0,t.jsx)(n.a,{href:"https://github.com/molszanski/iti",children:"iti"}),", is a feature to customize your bot's utilities and structures."]}),"\n",(0,t.jsx)(n.p,{children:"Minimal setup for any project."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const client = new Client({\n    ...options\n})\nSern.makeDependencies<MyDependencies>({\n    build: root => \n        root.add({ \n            '@sern/client': single(() => client)\n        })\n})\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"For any typescript project, you'll need to add an interface to get intellisense and typings."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface MyDependencies extends Dependencies {\n    '@sern/client': Singleton<Client>\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Full Dependency Injection setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const client = new Client({\n    ...options\n})\n\ninterface MyDependencies extends Dependencies {\n    '@sern/client': Singleton<Client>\n}\n\nexport const useContainer = Sern.makeDependencies<MyDependencies>({\n    build: root => \n        root.add({ \n            '@sern/client': single(() => client)\n        })\n})\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Everything else is handled. However, you may want customize things."}),"\n",(0,t.jsx)(n.h2,{id:"adding-dependencies-to-root",children:"Adding dependencies to root"}),"\n",(0,t.jsx)(n.p,{children:"Each sern built dependency must implement its contracts."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@sern/logger"}),": Log data. ",(0,t.jsx)(n.a,{href:"../../api/interfaces/Logging",children:"Logging"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@sern/errors"}),": Handling errors and lifetime. ",(0,t.jsx)(n.a,{href:"../../api/interfaces/ErrorHandling",children:"ErrorHandling"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@sern/modules"}),": Managing all command modules. ",(0,t.jsx)(n.a,{href:"../../api/interfaces/ModuleManager",children:"ModuleManager"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@sern/emitter"}),": is the key to emit events and occurences in a project. ",(0,t.jsx)(n.a,{href:"../../api/classes/SernEmitter",children:"SernEmitter"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You may also add disposers so that when the application crashes, the targeted dependency calls that function."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export const useContainer = Sern.makeDependencies<MyDependencies>({\n   build: root => \n       root.add({ \n           '@sern/client': single(() => client)\n       })\n       .addDisposer({ '@sern/client': client => client.destroy() })\n})\n\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxadmonitiontitle,{}),(0,t.jsx)(n.p,{children:"Below is v3 api."})]}),"\n",(0,t.jsx)(n.h2,{id:"init",children:"Init"}),"\n",(0,t.jsx)(n.p,{children:"Do you need to perform intializing behavor for a dependency?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Init } from '@sern/handler'; \nclass Database implements Init {\n    init() {\n        await this.connect()\n        console.log('Connected');\n    }\n}\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Modify you Dependencies interface:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/dependencies.d.ts"',children:"import type { Initializable } from '@sern/handler'\n\ninterface Dependencies extends CoreDependencies {\n    database: Initializable<Database>\n}\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Make sure its been added:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/index.ts"',children:"await makeDependencies({ \n    build: root => root \n        .add({ database => new Database() })\n})\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);