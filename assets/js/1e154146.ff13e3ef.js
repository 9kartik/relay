(self.webpackChunk=self.webpackChunk||[]).push([[67538],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>s,mdx:()=>v,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),s=i,g=p["".concat(o,".").concat(s)]||p[s]||m[s]||a;return n?r.createElement(g,d(d({ref:t},l),{},{components:n})):r.createElement(g,d({ref:t},l))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},97012:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>g});var r,i=n(74034),a=n(79973),o=(n(67294),n(3905)),d=["components"],c={id:"declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",slug:"/debugging/declarative-mutation-directives/",description:"Debugging declarative mutation directives",keywords:["debugging","troubleshooting","declarative mutation directive","deleteRecord","handlerProvider","appendEdge","prependEdge","appendNode","prependNode"]},l=void 0,p={unversionedId:"debugging/declarative-mutation-directives",id:"debugging/declarative-mutation-directives",isDocsHomePage:!1,title:"Debugging Declarative Mutation Directives",description:"Debugging declarative mutation directives",source:"@site/docs/debugging/declarative-mutation-directives.md",sourceDirName:"debugging",slug:"/debugging/declarative-mutation-directives/",permalink:"/docs/next/debugging/declarative-mutation-directives/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/debugging/declarative-mutation-directives.md",tags:[],version:"current",lastUpdatedBy:"Jianfeng Chen",lastUpdatedAt:1646700941,formattedLastUpdatedAt:"3/8/2022",frontMatter:{id:"declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",slug:"/debugging/declarative-mutation-directives/",description:"Debugging declarative mutation directives",keywords:["debugging","troubleshooting","declarative mutation directive","deleteRecord","handlerProvider","appendEdge","prependEdge","appendNode","prependNode"]},sidebar:"docs",previous:{title:"Inconsistent Typename Error",permalink:"/docs/next/debugging/inconsistent-typename-error/"},next:{title:"Thinking in GraphQL",permalink:"/docs/next/principles-and-architecture/thinking-in-graphql/"}},u=[],s=(r="FbEnvHandlerExample",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),m={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,d);return(0,o.mdx)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"If you see an error similar to:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"RelayFBHandlerProvider: No handler defined for `deleteRecord`. [Caught in: An uncaught error was thrown inside `RelayObservable`.]\n")),(0,o.mdx)("p",null,"or"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"RelayModernEnvironment: Expected a handler to be provided for handle `deleteRecord`.\n")),(0,o.mdx)("p",null,"This probably means that you are using a Relay environment to which a ",(0,o.mdx)("inlineCode",{parentName:"p"},"handlerProvider")," is passed. However, the handler provider does not know how to accept the handles ",(0,o.mdx)("inlineCode",{parentName:"p"},'"deleteRecord"'),", ",(0,o.mdx)("inlineCode",{parentName:"p"},'"appendEdge"')," or ",(0,o.mdx)("inlineCode",{parentName:"p"},'"prependEdge"'),". If this is the case, you should return ",(0,o.mdx)("inlineCode",{parentName:"p"},"MutationHandlers.DeleteRecordHandler"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"MutationHandlers.AppendEdgeHandler"),", or ",(0,o.mdx)("inlineCode",{parentName:"p"},"MutationHandlers.PrependEdgeHandler")," respectively (these can be imported from ",(0,o.mdx)("inlineCode",{parentName:"p"},"relay-runtime"),")."),(0,o.mdx)(s,{mdxType:"FbEnvHandlerExample"}))}g.isMDXComponent=!0}}]);