_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[72],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){const[e,t]=c.default.useState(!1);return(0,o.default)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{t(window.matchMedia("(prefers-color-scheme: dark)").matches)};return a(),e.addListener(a),()=>{e.removeListener(a)}}),[]),e};var c=n(a("mXGw")),o=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("mXGw")),o=n(a("pWCa")),l=a("I08b"),d=a("GDok"),r=a("nZpd"),s=a("AFBu"),m=a("0oBi");var p=({children:e,...t})=>{const a=c.default.useState(!1);c.default.useEffect((()=>{if("undefined"!==typeof document)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);const n=(0,m.useDarkMode)();return c.default.createElement(r.MobileMenuContext.Provider,{value:t.menuState||a},c.default.createElement(o.default,null,c.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,s.formatPath)(n?"favicon-dark.png":"favicon.png")})),c.default.createElement(l.SkipNavLink,null),c.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},c.default.createElement(d.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),e))};t.default=p},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return c.default.join("/auto",`/${e.replace(/\.mdx$/,"")}`)},t.postFixHTML=function(e){return e;if(e.startsWith("#"))return e;if(c.default.basename(e).includes("#"))return e.replace("#",".html#");return`${e}.html`};var c=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var c=n(a("mXGw")),o=n(a("5dyF")),l=n(a("pWCa")),d=n(a("O2/E")),r=n(a("PDtE")),s=a("/FXl"),m=a("dAGg"),p=a("nZpd"),u=a("AFBu");const i=c.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=i;const b=({href:e,children:t})=>{const a=c.default.useContext(i),{SidebarLink:n}=(0,s.useMDXComponents)(),l=d.default.join(a.sidebarFileLocation,e);let r=e;return a.sidebarFileLocation&&(r=l,r.endsWith("/index")&&(r=r.replace("/index","")),r.endsWith("/")&&(r=r.slice(0,-1))),c.default.createElement(o.default,{passHref:!0,href:(0,u.postFixHTML)(r)},c.default.createElement(n,{isActive:a.pathname.replace("/index","")===(0,u.formatPath)(r)},t))};t.Sidebar=({links:t,folder:n})=>{const[o]=c.default.useContext(p.MobileMenuContext),x=`/${n}`,O=(e=>{try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}})(x),j=(t=>{const a=(0,m.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?d.default.relative("/auto",a.pathname):d.default.relative("/",a.pathname);let c=t.find((e=>e.__resourcePath.replace(".mdx","")===n));return c||(c=t.find((e=>{const t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:c.title||"auto",pathname:(0,u.formatPath)(c.__resourcePath)}})(t),{SidebarItemWrapper:f,SidebarLink:E,SidebarTitle:g,SidebarDivider:y,SidebarList:h,Sidebar:N,...v}=(0,s.useMDXComponents)();return c.default.createElement(i.Provider,{value:{...j,sidebarFileLocation:O?x:""}},c.default.createElement(s.MDXProvider,{components:{...v,li:f,ul:h,a:b,p:g,hr:y}},c.default.createElement(l.default,null,c.default.createElement("title",null,j.title.replace(/\\`/g,"`"))),c.default.createElement(N,{className:(0,r.default)(!o&&"hidden","lg:block")},O?c.default.createElement(O,null):c.default.createElement(h,null,t.map((e=>c.default.createElement(f,{key:e.__resourcePath},c.default.createElement(b,{href:e.__resourcePath},e.title))))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var c=n(a("8VmE")),o=n(a("mXGw")),l=n(a("5dyF")),d=a("V5Fo"),r=a("/FXl"),s=n(a("PDtE")),m=a("nZpd"),p=a("AFBu");const u=({className:e,...t})=>o.default.createElement("svg",(0,c.default)({className:(0,s.default)("fill-current w-5 h-5",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t),o.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"})),i=()=>{const{SearchInput:e}=(0,r.useMDXComponents)();return o.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},o.default.createElement(e,null))};t.NavBar=({sections:e,hasHomePage:t})=>{const[a,n]=o.default.useContext(m.MobileMenuContext),{Logo:c,NavBarWrapper:s,NavBar:b,NavBarItem:x,MobileMenuButton:O}=(0,r.useMDXComponents)();return o.default.createElement(o.default.Fragment,null,o.default.createElement(s,null,o.default.createElement(b,null,t?o.default.createElement(l.default,{passHref:!0,href:(0,p.postFixHTML)("/index")},o.default.createElement(c,null)):o.default.createElement(c,null),o.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},o.default.createElement(i,null),o.default.createElement(O,{open:a,setOpen:n,className:"lg:hidden"}),o.default.createElement("div",{className:"hidden lg:flex h-full"},e.map((e=>o.default.createElement(l.default,{passHref:!0,key:e,href:(0,p.postFixHTML)(`/${e}`)},o.default.createElement(x,null,(0,d.titleCase)(e))))),o.default.createElement(x,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},o.default.createElement(u,null)))))),a&&o.default.createElement("div",{className:"lg:hidden"},e.map((e=>o.default.createElement(l.default,{passHref:!0,key:e,href:(0,p.postFixHTML)(`/${e}`)},o.default.createElement(x,null,(0,d.titleCase)(e))))),o.default.createElement(x,{href:"https://github.com/intuit/auto",target:"_blank"},o.default.createElement(u,{className:"mr-2"}),"Open on GitHub")))}},GSP7:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/upload-assets",function(){return a("fWHl")}])},TJl4:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.OpenGraphTags=void 0;var c=n(a("mXGw")),o=a("dAGg"),l=n(a("ghLh")),d=n(a("pWCa"));t.OpenGraphTags=({title:e,description:t,image:a})=>{const n=(0,o.useRouter)(),r=(0,l.default)("https://intuit.github.io/auto",n.pathname);return c.default.createElement(d.default,null,c.default.createElement("title",null,e),t&&c.default.createElement("meta",{name:"description",content:t}),c.default.createElement("meta",{property:"og:url",content:r}),c.default.createElement("meta",{property:"og:type",content:"website"}),c.default.createElement("meta",{property:"og:title",content:e}),t&&c.default.createElement("meta",{name:"og:description",content:t}),a&&c.default.createElement("meta",{name:"og:image",content:a}),r&&c.default.createElement("meta",{property:"twitter:domain",content:new URL(r).hostname}),c.default.createElement("meta",{property:"twitter:url",content:r}),c.default.createElement("meta",{name:"twitter:title",content:e}),t&&c.default.createElement("meta",{name:"twitter:description",content:t}),a&&c.default.createElement("meta",{name:"twitter:image",content:a}))}},fWHl:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"default",(function(){return i}));var n=a("Fcif"),c=a("dV/x"),o=a("mXGw"),l=a.n(o),d=a("/FXl"),r=a("pu0P"),s=a.n(r),m=(l.a.createElement,{title:"Upload Assets Plugin",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/generated/upload-assets.mdx",__scans:{}}),p={frontMatter:m},u=s.a;function i(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(d.mdx)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Upload assets to the release.\nGood for executables and extra downloadable files.\nAlso supports canaries!"),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},"NOTE: For canaries to work this plugin must be listed before any other publishing plugin.")),Object(d.mdx)("h2",{id:"installation"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#installation"}),"Installation")),Object(d.mdx)("p",null,"This plugin is not included with the ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," CLI installed via NPM. To install:"),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light",style:{background:"#fff"}}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"npm i --save-dev @auto-it/upload-assets"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#6A737D"}}),"# or"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"yarn add -D @auto-it/upload-assets"),"\n"),Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light syntax-dark",style:{background:"#24292e"}}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"npm i --save-dev @auto-it/upload-assets"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#6A737D"}}),"# or"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"yarn add -D @auto-it/upload-assets"),"\n")),Object(d.mdx)("h2",{id:"usage"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(d.mdx)("p",null,"Simply supply the paths to the assets to add to the release."),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json syntax-light",style:{background:"#fff"}}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"{"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"  "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": ["),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"upload-assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),", { "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"./path/to/file"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"] }],"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// or"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"upload-assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),", ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"./path/to/file"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"]],"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// or use globs to upload multiple things"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"upload-assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),", ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"./path/**/to/*.file"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"]]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"  ]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"}"),"\n"),Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json syntax-light syntax-dark",style:{background:"#24292e"}}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"{"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": ["),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"upload-assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),", { "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"./path/to/file"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"] }],"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// or"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"upload-assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),", ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"./path/to/file"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"]],"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// or use globs to upload multiple things"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"upload-assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),", ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"./path/**/to/*.file"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"]]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  ]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"}"),"\n")),Object(d.mdx)("h2",{id:"options"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#options"}),"Options")),Object(d.mdx)("h3",{id:"maxcanaryassets"},Object(d.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#maxcanaryassets"}),Object(d.mdx)("inlineCode",{parentName:"a"},"maxCanaryAssets"))),Object(d.mdx)("p",null,"Max number of assets to keep in the canary release."),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json syntax-light",style:{background:"#fff"}}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"{"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"  "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": ["),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ["),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"      "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"upload-assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"      {"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"./path/to/file"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"],"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"maxAssets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),"100"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"      }"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"  ]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"}"),"\n"),Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json syntax-light syntax-dark",style:{background:"#24292e"}}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"{"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"plugins"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": ["),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ["),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"upload-assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      {"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"assets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": ["),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"./path/to/file"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"],"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"maxAssets"'),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),"100"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      }"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  ]"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"}"),"\n")))}i.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;const c=n(a("mXGw")).default.createContext([!1,()=>{}]);t.MobileMenuContext=c},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("mXGw")),o=n(a("O2/E")),l=a("/FXl"),d=n(a("PDtE")),r=a("I08b"),s=a("C3pV"),m=n(a("6f/q")),p=n(a("x3GE")),u=a("TJl4");const i=/([^`]*)`([^`]*)`(.*)/m;var b=({children:e,frontMatter:t})=>{const[a,n]=c.default.useState(!1),b=(0,l.useMDXComponents)(),x=t.__resourcePath.split("/")[0],O=(0,p.default)(),j=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/defaultLabelsRenderer.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((e=>o.default.relative("./",e))).filter((e=>e.startsWith(x))).map((e=>O.find((t=>t.__resourcePath===e))));return c.default.createElement(c.default.Fragment,null,c.default.createElement(u.OpenGraphTags,t),c.default.createElement(m.default,{menuState:[a,n]},c.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},c.default.createElement(s.Sidebar,{links:j,folder:x}),c.default.createElement(r.SkipNavContent,null),c.default.createElement("main",{className:(0,d.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",a&&"hidden")},t.title&&c.default.createElement(b.h1,null,function(e,t){if(!t)return;const a=[];let n=t.replace(/\\`/g,"`");for(;i.test(n);){const[,t,o,l]=n.match(i);a.push(t),a.push(c.default.createElement(e.inlineCode,null,o)),n=l}return a.push(n),c.default.createElement("div",null,a)}(b,t.title)),e))))};t.default=b},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let n=[];try{const e=a("jmz1");n=e.keys().map(e)}catch(o){0}var c=()=>{try{return n}catch(o){return[]}};t.default=c}},[["GSP7",0,1,2,3,4]]]);