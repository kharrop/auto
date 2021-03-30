_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){const[e,t]=l.default.useState(!1);return(0,r.default)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{t(window.matchMedia("(prefers-color-scheme: dark)").matches)};return a(),e.addListener(a),()=>{e.removeListener(a)}}),[]),e};var l=n(a("mXGw")),r=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("mXGw")),r=n(a("pWCa")),d=a("I08b"),o=a("GDok"),c=a("nZpd"),s=a("AFBu"),u=a("0oBi");var i=({children:e,...t})=>{const a=l.default.useState(!1);l.default.useEffect((()=>{if("undefined"!==typeof document)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);const n=(0,u.useDarkMode)();return l.default.createElement(c.MobileMenuContext.Provider,{value:t.menuState||a},l.default.createElement(r.default,null,l.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,s.formatPath)(n?"favicon-dark.png":"favicon.png")})),l.default.createElement(d.SkipNavLink,null),l.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},l.default.createElement(o.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),e))};t.default=i},"7UXh":function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),l=a("dV/x"),r=a("mXGw"),d=a.n(r),o=a("/FXl"),c=a("pu0P"),s=a.n(c),u=a("eYS+"),i=(d.a.createElement,{layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/index.mdx",__scans:{}}),m={frontMatter:i},f=s.a;function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.mdx)(f,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("div",{className:"mx-auto max-w-sm my-24 w-full"},Object(o.mdx)("picture",null,Object(o.mdx)("source",{srcSet:"dark-logo-large.png",media:"(prefers-color-scheme: dark)",className:"w-full"}),Object(o.mdx)("img",{src:"light-logo-large.png",alt:"Auto Logo",className:"w-full"}))),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Automated releases powered by pull request labels")),Object(o.mdx)("p",null,"Streamline your release workflow and publish constantly!\n",Object(o.mdx)("inlineCode",{parentName:"p"},"auto")," is meant to be run in a continuous integration (CI) environment, but all the commands work locally as well."),Object(o.mdx)("p",null,"The two main problems auto is trying to solve are: release automation and pull request interaction.\nWith the set of tools we provide you can automate every part of contribution!"),Object(o.mdx)("br",null),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Release Features:")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Calculate semantic version bumps from PRs"),Object(o.mdx)("li",{parentName:"ul"},"Publish ",Object(o.mdx)("a",Object(n.a)({parentName:"li"},{href:"./docs/generated/canary"}),"canaries")," (test versions) directly from PRs or locally"),Object(o.mdx)("li",{parentName:"ul"},"Generate changelogs with fancy headers, authors, and ",Object(o.mdx)("a",Object(n.a)({parentName:"li"},{href:"./docs/generated/changelog#additional-release-notes"}),"detailed release notes")),Object(o.mdx)("li",{parentName:"ul"},"Make GitHub releases")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Pull Request Interaction Features:")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Get the labels for a PR"),Object(o.mdx)("li",{parentName:"ul"},"Set the status of a PR"),Object(o.mdx)("li",{parentName:"ul"},"Comment on a PR with markdown"),Object(o.mdx)("li",{parentName:"ul"},"Update the PR body with contextual build metadata")),Object(o.mdx)("h2",{id:"workflow"},Object(o.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#workflow"}),"Workflow")),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"auto"),"'s main use it to automate the release process for your project.\nThis can be broken down into three core steps:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-text syntax-light",style:{background:"#fff"}}),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"undefined"}}),"pre: (optional) Check if new version\n\n1. Generate CHANGELOG.md\n2. Publish code\n3. Generate github release notes\n")),Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-text syntax-light syntax-dark",style:{background:"#24292e"}}),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"undefined"}}),"pre: (optional) Check if new version\n\n1. Generate CHANGELOG.md\n2. Publish code\n3. Generate github release notes\n"))),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"auto")," makes no assumptions about your publishing process.\nEach tool is a function that can be run in isolation and only does one thing really well.\nFor instance, you could just use ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto changelog")," to generate the changelog and nothing else or use ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto version")," to calculate just the ",Object(o.mdx)("inlineCode",{parentName:"p"},"semver")," bump."),Object(o.mdx)("div",{className:"my-20 flex align-center justify-center w-full"},Object(o.mdx)(u.a,{mdxType:"GetStarted"})))}p.isMDXComponent=!0},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return l.default.join("/auto",`/${e.replace(/\.mdx$/,"")}`)},t.postFixHTML=function(e){return e;if(e.startsWith("#"))return e;if(l.default.basename(e).includes("#"))return e.replace("#",".html#");return`${e}.html`};var l=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var l=n(a("mXGw")),r=n(a("5dyF")),d=n(a("pWCa")),o=n(a("O2/E")),c=n(a("PDtE")),s=a("/FXl"),u=a("dAGg"),i=a("nZpd"),m=a("AFBu");const f=l.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=f;const p=({href:e,children:t})=>{const a=l.default.useContext(f),{SidebarLink:n}=(0,s.useMDXComponents)(),d=o.default.join(a.sidebarFileLocation,e);let c=e;return a.sidebarFileLocation&&(c=d,c.endsWith("/index")&&(c=c.replace("/index","")),c.endsWith("/")&&(c=c.slice(0,-1))),l.default.createElement(r.default,{passHref:!0,href:(0,m.postFixHTML)(c)},l.default.createElement(n,{isActive:a.pathname.replace("/index","")===(0,m.formatPath)(c)},t))};t.Sidebar=({links:t,folder:n})=>{const[r]=l.default.useContext(i.MobileMenuContext),x=`/${n}`,g=(e=>{try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}})(x),h=(t=>{const a=(0,u.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?o.default.relative("/auto",a.pathname):o.default.relative("/",a.pathname);let l=t.find((e=>e.__resourcePath.replace(".mdx","")===n));return l||(l=t.find((e=>{const t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:l.title||"auto",pathname:(0,m.formatPath)(l.__resourcePath)}})(t),{SidebarItemWrapper:b,SidebarLink:v,SidebarTitle:E,SidebarDivider:w,SidebarList:O,Sidebar:j,...y}=(0,s.useMDXComponents)();return l.default.createElement(f.Provider,{value:{...h,sidebarFileLocation:g?x:""}},l.default.createElement(s.MDXProvider,{components:{...y,li:b,ul:O,a:p,p:E,hr:w}},l.default.createElement(d.default,null,l.default.createElement("title",null,h.title.replace(/\\`/g,"`"))),l.default.createElement(j,{className:(0,c.default)(!r&&"hidden","lg:block")},g?l.default.createElement(g,null):l.default.createElement(O,null,t.map((e=>l.default.createElement(b,{key:e.__resourcePath},l.default.createElement(p,{href:e.__resourcePath},e.title))))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var l=n(a("8VmE")),r=n(a("mXGw")),d=n(a("5dyF")),o=a("V5Fo"),c=a("/FXl"),s=n(a("PDtE")),u=a("nZpd"),i=a("AFBu");const m=({className:e,...t})=>r.default.createElement("svg",(0,l.default)({className:(0,s.default)("fill-current w-5 h-5",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t),r.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"})),f=()=>{const{SearchInput:e}=(0,c.useMDXComponents)();return r.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},r.default.createElement(e,null))};t.NavBar=({sections:e,hasHomePage:t})=>{const[a,n]=r.default.useContext(u.MobileMenuContext),{Logo:l,NavBarWrapper:s,NavBar:p,NavBarItem:x,MobileMenuButton:g}=(0,c.useMDXComponents)();return r.default.createElement(r.default.Fragment,null,r.default.createElement(s,null,r.default.createElement(p,null,t?r.default.createElement(d.default,{passHref:!0,href:(0,i.postFixHTML)("/index")},r.default.createElement(l,null)):r.default.createElement(l,null),r.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},r.default.createElement(f,null),r.default.createElement(g,{open:a,setOpen:n,className:"lg:hidden"}),r.default.createElement("div",{className:"hidden lg:flex h-full"},e.map((e=>r.default.createElement(d.default,{passHref:!0,key:e,href:(0,i.postFixHTML)(`/${e}`)},r.default.createElement(x,null,(0,o.titleCase)(e))))),r.default.createElement(x,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},r.default.createElement(m,null)))))),a&&r.default.createElement("div",{className:"lg:hidden"},e.map((e=>r.default.createElement(d.default,{passHref:!0,key:e,href:(0,i.postFixHTML)(`/${e}`)},r.default.createElement(x,null,(0,o.titleCase)(e))))),r.default.createElement(x,{href:"https://github.com/intuit/auto",target:"_blank"},r.default.createElement(m,{className:"mr-2"}),"Open on GitHub")))}},M4dN:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return a("7UXh")}])},TJl4:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.OpenGraphTags=void 0;var l=n(a("mXGw")),r=a("dAGg"),d=n(a("ghLh")),o=n(a("pWCa"));t.OpenGraphTags=({title:e,description:t,image:a})=>{const n=(0,r.useRouter)(),c=(0,d.default)("https://intuit.github.io/auto",n.pathname);return l.default.createElement(o.default,null,l.default.createElement("title",null,e),t&&l.default.createElement("meta",{name:"description",content:t}),l.default.createElement("meta",{property:"og:url",content:c}),l.default.createElement("meta",{property:"og:type",content:"website"}),l.default.createElement("meta",{property:"og:title",content:e}),t&&l.default.createElement("meta",{name:"og:description",content:t}),a&&l.default.createElement("meta",{name:"og:image",content:a}),c&&l.default.createElement("meta",{property:"twitter:domain",content:new URL(c).hostname}),l.default.createElement("meta",{property:"twitter:url",content:c}),l.default.createElement("meta",{name:"twitter:title",content:e}),t&&l.default.createElement("meta",{name:"twitter:description",content:t}),a&&l.default.createElement("meta",{name:"twitter:image",content:a}))}},"eYS+":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("mXGw"),l=a.n(n).a.createElement,r=function(){return l("a",{href:"https://intuit.github.io/auto/docs/welcome/getting-started",className:"uppercase text-xl lg:text-2xl border-2 border-white rounded px-6 py-3 hover:bg-primary-500 hover:text-white"},l("span",{className:"pr-2"},"Get Started")," \ud83c\udf89")}},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;const l=n(a("mXGw")).default.createContext([!1,()=>{}]);t.MobileMenuContext=l},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("mXGw")),r=n(a("O2/E")),d=a("/FXl"),o=n(a("PDtE")),c=a("I08b"),s=a("C3pV"),u=n(a("6f/q")),i=n(a("x3GE")),m=a("TJl4");const f=/([^`]*)`([^`]*)`(.*)/m;var p=({children:e,frontMatter:t})=>{const[a,n]=l.default.useState(!1),p=(0,d.useMDXComponents)(),x=t.__resourcePath.split("/")[0],g=(0,i.default)(),h=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/defaultLabelsRenderer.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((e=>r.default.relative("./",e))).filter((e=>e.startsWith(x))).map((e=>g.find((t=>t.__resourcePath===e))));return l.default.createElement(l.default.Fragment,null,l.default.createElement(m.OpenGraphTags,t),l.default.createElement(u.default,{menuState:[a,n]},l.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},l.default.createElement(s.Sidebar,{links:h,folder:x}),l.default.createElement(c.SkipNavContent,null),l.default.createElement("main",{className:(0,o.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",a&&"hidden")},t.title&&l.default.createElement(p.h1,null,function(e,t){if(!t)return;const a=[];let n=t.replace(/\\`/g,"`");for(;f.test(n);){const[,t,r,d]=n.match(f);a.push(t),a.push(l.default.createElement(e.inlineCode,null,r)),n=d}return a.push(n),l.default.createElement("div",null,a)}(p,t.title)),e))))};t.default=p},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let n=[];try{const e=a("jmz1");n=e.keys().map(e)}catch(r){0}var l=()=>{try{return n}catch(r){return[]}};t.default=l}},[["M4dN",0,1,2,3,4]]]);