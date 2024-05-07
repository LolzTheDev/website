"use strict";(self.webpackChunksern_website=self.webpackChunksern_website||[]).push([[7200],{6265:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=s(4848),r=s(8453);const a={slug:"1.2.0",title:"Release 1.2.0",authors:["jacoobes"],tags:["release"]},i=void 0,l={permalink:"/blog/1.2.0",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-09-28-mdx-blog-post.md",source:"@site/blog/2022-09-28-mdx-blog-post.md",title:"Release 1.2.0",description:"Class-based modules",date:"2022-09-28T00:00:00.000Z",formattedDate:"September 28, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:1.71,hasTruncateMarker:!1,authors:[{name:"jacoobes",title:"Head Dev",url:"https://github.com/jacoobes",imageURL:"https://github.com/jacoobes.png",key:"jacoobes"}],frontMatter:{slug:"1.2.0",title:"Release 1.2.0",authors:["jacoobes"],tags:["release"]},unlisted:!1,prevItem:{title:"How to get started with sern!",permalink:"/blog/getting-started"}},o={authorsImageUrls:[void 0]},d=[{value:"Class-based modules",id:"class-based-modules",level:2},{value:"Class based modules",id:"class-based-modules-1",level:3},{value:"Deprecation Warnings",id:"deprecation-warnings",level:3},{value:"Dependencies Update",id:"dependencies-update",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"class-based-modules",children:"Class-based modules"}),"\n",(0,t.jsx)(n.p,{children:"Today we're announcing the ability to create class based modules!\nTo get started, install"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install @sern/handler@latest\n"})}),"\n",(0,t.jsx)(n.p,{children:"Quick List of changes!"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#class-based-modules",children:"Class based modules"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#deprecation-warnings",children:"Deprecation Warnings"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#dependencies-update",children:"Dependencies update"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"class-based-modules-1",children:"Class based modules"}),"\n",(0,t.jsxs)(n.p,{children:["Incorporate class based modules into your project instead of the traditional ",(0,t.jsx)(n.code,{children:"commandModule"})," or ",(0,t.jsx)(n.code,{children:"eventModule"}),"\nExtend the new ",(0,t.jsx)(n.a,{href:"docs/api/classes/CommandExecutable",children:"CommandExecutable"})," or ",(0,t.jsx)(n.a,{href:"docs/api/classes/EventExecutable",children:"EventExecutable"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="commands/meaning-of-life.ts"',children:"import { CommandType, CommandExecutable, type Args, type Context } from '@sern/handler';\nimport { publish } from '../plugins/publish.js';\nimport { serendipityOnly } from '../plugins/serendipityOnly.js';\n\nexport default class extends CommandExecutable<CommandType.Both> {\n    type = CommandType.Both as const;\n    description = 'What is the meaning of life?'\n    override onEvent = [\n        serendipityOnly()\n    ];\n    override plugins = [\n        publish(),\n    ];\n    // highlight-next-line\n    execute = async (ctx: Context, args: Args) => {\n        await ctx.reply('42')\n    };\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"execute must not be a method of the class. It should be as above, a property on the class!"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="events/guildMemberAdd.ts"',children:"import { CommandType, EventExecutable, type EventType } from '@sern/handler';\nimport type { GuildMember } from 'discord.js'\n\nexport default class extends EventExecutable<EventType.Discord> {\n    type = EventType.Discord as const;\n    // highlight-next-line\n    execute = (member: GuildMember) => {\n        console.log(member)\n    };\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, you might ask ",(0,t.jsx)(n.strong,{children:"why"})," this feature was added. ",(0,t.jsx)(n.br,{})," Simply put, to give flexibility to the developers.\nI believe that you should build your own structures however you might like and customize to your liking.\nIn addition, ",(0,t.jsx)(n.strong,{children:"decorators now unofficially work with modules!"}),"\nFeel free to use TypeScript experimental decorators to augment and customize your classes."]}),"\n",(0,t.jsx)(n.h3,{id:"deprecation-warnings",children:"Deprecation Warnings"}),"\n",(0,t.jsx)(n.p,{children:"The next update will bring sern v2 with some important features. Here are some things to watch out for."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"docs/api/interfaces/Wrapper",children:"Wrapper#client"})," will be deprecated"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"docs/api/interfaces/Wrapper",children:"Wrapper#sernEmitter"})," will be deprecated\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a SernEmitter will be automatically created once Sern#init is called"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The option to pass in a function or array for ",(0,t.jsx)(n.a,{href:"docs/api/interfaces/Wrapper",children:"Wrapper#events"})," will be deprecated. Only strings are accepted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"docs/api/classes/SernEmitter",children:"Sern#addExternal"})," will be deprecated in favor of a better way."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"dependencies-update",children:"Dependencies Update"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"TypeScript has been updated to 4.8.3"}),"\n",(0,t.jsx)(n.li,{children:"Discord.js has been upgraded to 14.5"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(6540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);