(self.webpackChunk=self.webpackChunk||[]).push([[19862],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){return function(n){var t=p(n.components);return a.createElement(e,i({},n,{components:t}))}},p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var a=t(79973),r=t(67294),i=t(73727),l=t(52263),o=t(13919),s=t(10412),c=(0,r.createContext)({collectLink:function(){}}),u=t(44996),p=t(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var n,t,m=e.isNavLink,f=e.to,g=e.href,h=e.activeClassName,y=e.isActive,v=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,x=void 0===b||b,w=(0,a.Z)(e,d),N=(0,l.default)().siteConfig,k=N.trailingSlash,C=N.baseUrl,j=(0,u.useBaseUrlUtils)().withBaseUrl,O=(0,r.useContext)(c),E=f||g,S=(0,o.Z)(E),P=null==E?void 0:E.replace("pathname://",""),R=void 0!==P?(t=P,x&&function(e){return e.startsWith("/")}(t)?j(t):t):void 0;R&&S&&(R=(0,p.applyTrailingSlash)(R,{trailingSlash:k,baseUrl:C}));var q=(0,r.useRef)(!1),_=m?i.OL:i.rU,M=s.default.canUseIntersectionObserver,U=(0,r.useRef)();(0,r.useEffect)((function(){return!M&&S&&null!=R&&window.docusaurus.prefetch(R),function(){M&&U.current&&U.current.disconnect()}}),[U,R,M,S]);var I=null!==(n=null==R?void 0:R.startsWith("#"))&&void 0!==n&&n,T=!R||!S||I;return R&&S&&!I&&!v&&O.collectLink(R),T?r.createElement("a",Object.assign({href:R},E&&!S&&{target:"_blank",rel:"noopener noreferrer"},w)):r.createElement(_,Object.assign({},w,{onMouseEnter:function(){q.current||null==R||(window.docusaurus.preload(R),q.current=!0)},innerRef:function(e){var n,t;M&&e&&S&&(n=e,t=function(){null!=R&&window.docusaurus.prefetch(R)},U.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.current.unobserve(n),U.current.disconnect(),t())}))})),U.current.observe(n))},to:R||""},m&&{isActive:y,activeClassName:h}))}},13919:(e,n,t)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,{b:()=>a,Z:()=>r})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>l});var a=t(52263),r=t(13919);function i(){var e=(0,a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(o)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+u:u}(i,t,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,a=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var r,i=e.split(/[#?]/)[0],l="/"===i||i===a?i:(r=i,t?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,l)}},18780:function(e,n,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var r=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return a(i).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var a=t(36742),r=t(44256),i=t(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var s=function(){var e=i.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},p=function(){return i.createElement(o,null,i.createElement(c,null),i.createElement(s,null),i.createElement(u,null))},d=function(){return i.createElement(o,null,i.createElement(s,null),i.createElement(u,null))};const m=function(){return(0,r.fbContent)({internal:i.createElement(p,null),external:i.createElement(d,null)})}},99117:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>m});var a=t(74034),r=t(79973),i=(t(67294),t(3905)),l=t(68629),o=(t(44256),["components"]),s={id:"installation-and-setup",title:"Installation and Setup",slug:"/getting-started/installation-and-setup/"},c=void 0,u={unversionedId:"getting-started/installation-and-setup",id:"version-v11.0.0/getting-started/installation-and-setup",isDocsHomePage:!1,title:"Installation and Setup",description:"Installation",source:"@site/versioned_docs/version-v11.0.0/getting-started/installation-and-setup.md",sourceDirName:"getting-started",slug:"/getting-started/installation-and-setup/",permalink:"/docs/v11.0.0/getting-started/installation-and-setup/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/getting-started/installation-and-setup.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Marshall Roch",lastUpdatedAt:1652411184,formattedLastUpdatedAt:"5/13/2022",frontMatter:{id:"installation-and-setup",title:"Installation and Setup",slug:"/getting-started/installation-and-setup/"},sidebar:"version-v11.0.0/docs",previous:{title:"Prerequisites",permalink:"/docs/v11.0.0/getting-started/prerequisites/"},next:{title:"Step-by-step Guide",permalink:"/docs/v11.0.0/getting-started/step-by-step-guide/"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Set up Relay with a single config file",id:"set-up-relay-with-a-single-config-file",children:[],level:2},{value:"Set up babel-plugin-relay",id:"set-up-babel-plugin-relay",children:[],level:2},{value:"Set up relay-compiler",id:"set-up-relay-compiler",children:[],level:2},{value:"JavaScript environment requirements",id:"javascript-environment-requirements",children:[],level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"installation"},"Installation"),(0,i.mdx)("p",null,"Install React and Relay using ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add react react-dom react-relay\n")),(0,i.mdx)("h2",{id:"set-up-relay-with-a-single-config-file"},"Set up Relay with a single config file"),(0,i.mdx)("p",null,"The below configuration of ",(0,i.mdx)("inlineCode",{parentName:"p"},"babel-plugin-relay")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"relay-compiler")," can be applied using a single configuration file by\nusing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"relay-config")," package. Besides unifying all Relay configuration in a single place, other tooling can leverage\nthis to provide zero-config setup (e.g. ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/relay-tools/vscode-apollo-relay"},"vscode-apollo-relay"),")."),(0,i.mdx)("p",null,"Install the package:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev relay-config\n")),(0,i.mdx)("p",null,"And create the configuration file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// relay.config.js\nmodule.exports = {\n  // ...\n  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.\n  src: "./src",\n  schema: "./data/schema.graphql",\n  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],\n}\n')),(0,i.mdx)("h2",{id:"set-up-babel-plugin-relay"},"Set up babel-plugin-relay"),(0,i.mdx)("p",null,"Relay Modern requires a Babel plugin to convert GraphQL to runtime artifacts:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev babel-plugin-relay graphql\n")),(0,i.mdx)("p",null,"Add ",(0,i.mdx)("inlineCode",{parentName:"p"},'"relay"')," to the list of plugins your ",(0,i.mdx)("inlineCode",{parentName:"p"},".babelrc")," file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    "relay"\n  ]\n}\n')),(0,i.mdx)("p",null,"Please note that the ",(0,i.mdx)("inlineCode",{parentName:"p"},'"relay"')," plugin should run before other plugins or\npresets to ensure the ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," template literals are correctly transformed. See\nBabel's ",(0,i.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/#pluginpreset-ordering"},"documentation on this topic"),"."),(0,i.mdx)("p",null,"Alternatively, instead of using ",(0,i.mdx)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros"},"babel-plugin-macros"),". After installing ",(0,i.mdx)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const graphql = require('babel-plugin-relay/macro');\n")),(0,i.mdx)("p",null,"If you need to configure ",(0,i.mdx)("inlineCode",{parentName:"p"},"babel-plugin-relay")," further (e.g. to enable ",(0,i.mdx)("inlineCode",{parentName:"p"},"compat")," mode), you can do so by ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros/blob/main/other/docs/user.md#config-experimental"},"specifying the options in a number of ways"),"."),(0,i.mdx)("p",null,"For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// babel-plugin-macros.config.js\nmodule.exports = {\n  // ...\n  // Other macros config\n  relay: {\n    compat: true,\n  },\n}\n")),(0,i.mdx)("h2",{id:"set-up-relay-compiler"},"Set up relay-compiler"),(0,i.mdx)("p",null,"Relay's ahead-of-time compilation requires the ",(0,i.mdx)("a",{parentName:"p",href:"../../guides/compiler/"},"Relay Compiler"),", which you can install via ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev relay-compiler\n")),(0,i.mdx)("p",null,"This installs the bin script ",(0,i.mdx)("inlineCode",{parentName:"p"},"relay-compiler")," in your node_modules folder. It's recommended to run this from a ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"npm")," script by adding a script to your ",(0,i.mdx)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql"\n}\n')),(0,i.mdx)("p",null,"or if you are using jsx:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --extensions js jsx"\n}\n')),(0,i.mdx)("p",null,"Then, after making edits to your application files, just run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"relay")," script to generate new compiled artifacts:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn run relay\n")),(0,i.mdx)("p",null,"Alternatively, you can pass the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--watch")," option to watch for file changes in your source code and automatically re-generate the compiled artifacts (",(0,i.mdx)("strong",{parentName:"p"},"Note:")," Requires ",(0,i.mdx)("a",{parentName:"p",href:"https://facebook.github.io/watchman"},"watchman")," to be installed):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn run relay --watch\n")),(0,i.mdx)("p",null,"For more details, check out our ",(0,i.mdx)("a",{parentName:"p",href:"../../guides/compiler/"},"Relay Compiler docs"),"."),(0,i.mdx)("h2",{id:"javascript-environment-requirements"},"JavaScript environment requirements"),(0,i.mdx)("p",null,"The Relay Modern packages distributed on NPM use the widely-supported ES5\nversion of JavaScript to support as many browser environments as possible."),(0,i.mdx)("p",null,"However, Relay Modern expects modern JavaScript global types (",(0,i.mdx)("inlineCode",{parentName:"p"},"Map"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"Set"),",\n",(0,i.mdx)("inlineCode",{parentName:"p"},"Promise"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"Object.assign"),") to be defined. If you support older browsers and\ndevices which may not yet provide these natively, consider including a global\npolyfill in your bundled application, such as ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," or\n",(0,i.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/usage/polyfill/"},"@babel/polyfill"),"."),(0,i.mdx)("p",null,"A polyfilled environment for Relay using ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," to support older browsers\nmight look like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"require('core-js/es6/map');\nrequire('core-js/es6/set');\nrequire('core-js/es6/promise');\nrequire('core-js/es6/object');\n\nrequire('./myRelayApplication');\n")),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);