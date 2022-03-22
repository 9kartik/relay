(self.webpackChunk=self.webpackChunk||[]).push([[86543],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){return function(t){var n=m(t.components);return a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=m(n),p=r,g=s["".concat(l,".").concat(p)]||s[p]||u[p]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90447:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>d,metadata:()=>c,toc:()=>s,default:()=>p});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),l=["components"],i={id:"local-state-management",title:"Local State Management",original_id:"local-state-management"},d=void 0,c={unversionedId:"local-state-management",id:"version-v5.0.0/local-state-management",isDocsHomePage:!1,title:"Local State Management",description:"Relay can be used to read and write local data, and act as a single source of truth for all data in your client application.",source:"@site/versioned_docs/version-v5.0.0/Modern-LocalStateManagement.md",sourceDirName:".",slug:"/local-state-management",permalink:"/docs/v5.0.0/local-state-management",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v5.0.0/Modern-LocalStateManagement.md",tags:[],version:"v5.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1647971084,formattedLastUpdatedAt:"3/22/2022",frontMatter:{id:"local-state-management",title:"Local State Management",original_id:"local-state-management"},sidebar:"version-v5.0.0/docs",previous:{title:"Testing Relay Components",permalink:"/docs/v5.0.0/testing-relay-components"},next:{title:"Thinking in GraphQL",permalink:"/docs/v5.0.0/thinking-in-graphql"}},s=[{value:"Extending the client schema",id:"extending-the-client-schema",children:[],level:2},{value:"Querying local state",id:"querying-local-state",children:[],level:2},{value:"Mutating local state",id:"mutating-local-state",children:[{value:"Create",id:"create",children:[],level:3},{value:"Update",id:"update",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3}],level:2},{value:"Initial local state",id:"initial-local-state",children:[],level:2}],m={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Relay can be used to read and write local data, and act as a single source of truth for ",(0,o.mdx)("em",{parentName:"p"},"all")," data in your client application.\nThe Relay Compiler fully supports client-side extensions of the schema, which allows you to define local fields and types."),(0,o.mdx)("p",null,"Table of Contents:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#extending-the-client-schema"},"Extending the client schema")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#querying-local-state"},"Querying local state")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#mutating-local-state"},"Mutating local state")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#initial-local-state"},"Initial local state"))),(0,o.mdx)("h2",{id:"extending-the-client-schema"},"Extending the client schema"),(0,o.mdx)("p",null,"To extend the server schema, create a new ",(0,o.mdx)("inlineCode",{parentName:"p"},".graphql")," file inside your ",(0,o.mdx)("inlineCode",{parentName:"p"},"--src")," directory.\nLet's call it ",(0,o.mdx)("inlineCode",{parentName:"p"},"./src/clientSchema.graphql"),"."),(0,o.mdx)("p",null,"This schema describes what local data can be queried on the client.\nIt can even be used to extend an existing server schema."),(0,o.mdx)("p",null,"For example, we can create a new type called ",(0,o.mdx)("inlineCode",{parentName:"p"},"Note"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"type Note {\n  ID: ID!\n  title: String\n  body: String\n}\n")),(0,o.mdx)("p",null,"And then extend the server schema type ",(0,o.mdx)("inlineCode",{parentName:"p"},"User"),", with a list of ",(0,o.mdx)("inlineCode",{parentName:"p"},"Note"),", called ",(0,o.mdx)("inlineCode",{parentName:"p"},"notes"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"extend type User {\n  notes: [Note]\n}\n")),(0,o.mdx)("h2",{id:"querying-local-state"},"Querying local state"),(0,o.mdx)("p",null,"Accessing local data is no different from querying your GraphQL server, although you are required to include atleast one server field in the query.\nThe field can be from the server schema, or it can be schema agnostic, like an introspection field (i.e. ",(0,o.mdx)("inlineCode",{parentName:"p"},"__typename"),")."),(0,o.mdx)("p",null,"Here, we use a ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v5.0.0/query-renderer"},"QueryRenderer")," to get the current ",(0,o.mdx)("inlineCode",{parentName:"p"},"User")," via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"viewer")," field, along with their id, name and the local list of notes."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Example.js\nimport React from 'react';\nimport { QueryRenderer, graphql } from 'react-relay';\n\nconst renderQuery = ({error, props}) => {\n  if (error) {\n    return <div>{error.message}</div>;\n  } else if (props) {\n    return (\n      <div>\n        {props.viewer.notes.map(({id, title, body}) => (\n          <div key={id}>\n            {title}\n          </div>\n          <div key={id}>\n            {body}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <div>Loading</div>;\n}\n\nconst Example = (props) => {\n  return (\n    <QueryRenderer\n      render={renderQuery}\n      environment={environment}\n      query={graphql`\n        query ExampleQuery {\n          viewer {\n            id\n            name\n            notes {\n              id\n              title\n              body\n            }\n          }\n        }\n      `}\n    />\n  );\n}\n")),(0,o.mdx)("h2",{id:"mutating-local-state"},"Mutating local state"),(0,o.mdx)("p",null,"All local data lives in the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v5.0.0/relay-store"},"Relay Store"),".\nUpdating local state can be done with any ",(0,o.mdx)("inlineCode",{parentName:"p"},"updater")," function.\nThe ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," function is especially ideal for this, because writes to local state are usually executed outside of a mutation."),(0,o.mdx)("p",null,"To build upon the previous example, let's try creating, updating and deleting a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Note")," from the list of ",(0,o.mdx)("inlineCode",{parentName:"p"},"notes")," on ",(0,o.mdx)("inlineCode",{parentName:"p"},"User"),"."),(0,o.mdx)("h3",{id:"create"},"Create"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nlet tempID = 0;\n\nfunction createUserNote() {\n  commitLocalUpdate(environment, store => {\n    const user = store.getRoot().getLinkedRecord('viewer');\n    const userNoteRecords = user.getLinkedRecords('notes') || [];\n\n    // Create a unique ID.\n    const dataID = `client:Note:${tempID++}`;\n\n    //Create a new note record.\n    const newNoteRecord = store.create(dataID, 'Note');\n\n    // Tell garbage collection to retain the record.\n    environment.retain({\n      dataID,\n      variables: {},\n      node: { selections: [] }\n    });\n\n    // Add the record to the user's list of notes.\n    user.setLinkedRecords([...userNoteRecords, newNoteRecord], 'notes');\n  });\n}\n")),(0,o.mdx)("h3",{id:"update"},"Update"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nfunction updateUserNote(dataID, body, title) {\n  commitLocalUpdate(environment, store => {\n    const note = store.get(dataID);\n\n    note.setValue(body, 'body');\n    note.setValue(title, 'title')\n  });\n}\n")),(0,o.mdx)("h3",{id:"delete"},"Delete"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nfunction deleteUserNote(dataID) {\n  commitLocalUpdate(environment, store => {\n    const user = store.getRoot().getLinkedRecord('viewer');\n    const userNoteRecords = user.getLinkedRecords('notes');\n\n    // Remove the note from the list of user notes.\n    const newUserNoteRecords = userNoteRecords.filter(x => x.getDataID() !== dataID);\n\n    // Delete the note from the store.\n    store.delete(dataID);\n\n    // Set the new list of notes.\n    user.setLinkedRecords(newUserNoteRecords, 'notes');\n  });\n}\n")),(0,o.mdx)("h2",{id:"initial-local-state"},"Initial local state"),(0,o.mdx)("p",null,"All new client-side schema fields default to ",(0,o.mdx)("inlineCode",{parentName:"p"},"undefined")," value. Often however, you will want to set the initial state before querying local data.\nYou can use an updater function via ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," to prime local state."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\ncommitLocalUpdate(environment, store => {\n  const user = store.getRoot().getLinkedRecord('viewer');\n\n  // initialize user notes to an empty array.\n  user.setLinkedRecords([], 'notes');\n});\n")))}p.isMDXComponent=!0}}]);