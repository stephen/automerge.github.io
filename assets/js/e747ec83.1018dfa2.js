"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7051],{3340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var s=n(4848),a=n(8453);const o={sidebar_position:1e3},i="Glossary",r={id:"glossary",title:"Glossary",description:"CRDTs",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/glossary.md",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"API Docs",permalink:"/docs/api"}},c={},h=[{value:"CRDTs",id:"crdts",level:2},{value:"Eventual Consistency",id:"eventual-consistency",level:2},{value:"Documents",id:"documents",level:2},{value:"Types",id:"types",level:2},{value:"Changes",id:"changes",level:2},{value:"History",id:"history",level:2},{value:"Compaction",id:"compaction",level:2},{value:"Synchronization",id:"synchronization",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"glossary",children:"Glossary"}),"\n",(0,s.jsx)(t.h2,{id:"crdts",children:"CRDTs"}),"\n",(0,s.jsx)(t.p,{children:"Automerge is a type of CRDT (Conflict-Free Replicated Datatype). A CRDT is a data structure that simplifies multi-user applications. We can use them to synchronize data between two devices in a way that both devices see the same application state. In many systems, copies of some data need to be stored on multiple computers. Examples include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Mobile apps that store data on the local device, and that need to sync that data to other devices belonging to the same user (such as calendars, notes, contacts, or reminders);"}),"\n",(0,s.jsx)(t.li,{children:"Distributed databases, which maintain multiple replicas of the data (in the same datacenter or in different locations) so that the system continues working correctly if some of the replicas are offline;"}),"\n",(0,s.jsx)(t.li,{children:"Collaboration software, such as Google Docs, Trello, Figma, or many others, in which several users can concurrently make changes to the same file or data;"}),"\n",(0,s.jsx)(t.li,{children:"Large-scale data storage and processing systems, which replicate data in order to achieve global scalability."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"https://crdt.tech/",children:"Read more about CRDTs"})})}),"\n",(0,s.jsx)(t.h2,{id:"eventual-consistency",children:"Eventual Consistency"}),"\n",(0,s.jsxs)(t.p,{children:["Applications built with Automerge are ",(0,s.jsx)(t.em,{children:"eventually consistent."})," This means if several users are working together, they will ",(0,s.jsx)(t.em,{children:"eventually"})," all see the same application state, but at any given moment it's possible for the users to be temporarily out of sync."]}),"\n",(0,s.jsxs)(t.p,{children:["Eventual consistency allows applications to work offline: even if a user is disconnected from the internet, Automerge allows that user to view and modify their data. If the data is shared between several users, they may all update their data independently. Later, when a network is available again, Automerge ensures that those edits are cleanly merged. See the page on ",(0,s.jsx)(t.a,{href:"/docs/documents/conflicts/",children:"conflicts"})," for more detail on these merges."]}),"\n",(0,s.jsx)(t.h2,{id:"documents",children:"Documents"}),"\n",(0,s.jsx)(t.p,{children:"A document is a collection of data that holds the current state of the application. A document in Automerge is represented as an object. Each document has a set of keys which can be used to hold variables that are one of the Automerge datatypes."}),"\n",(0,s.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,s.jsxs)(t.p,{children:["All collaborative data structures conform to certain rules. Each variable in the document must be of one of the implemented types. Each type must conform to the rules of CRDTs. Automerge comes with a set of ",(0,s.jsx)(t.a,{href:"/docs/documents/values",children:"pre-defined types"})," such as ",(0,s.jsx)(t.code,{children:"Map"}),", ",(0,s.jsx)(t.code,{children:"Array"}),", ",(0,s.jsx)(t.code,{children:"Counter"}),", ",(0,s.jsx)(t.code,{children:"number"}),", ",(0,s.jsx)(t.code,{children:"Text"}),", and so on."]}),"\n",(0,s.jsx)(t.h2,{id:"changes",children:"Changes"}),"\n",(0,s.jsx)(t.p,{children:"A change describes some update to a document; think of it like a commit in Git. A change could perform several operations, for example setting several properties or updating several objects within the document, and these will all be executed atomically. Changes are commutative, which means that the order in which they are applied does not matter. When the same set of changes has been applied to two documents, Automerge guarantees that they will be in the same state."}),"\n",(0,s.jsxs)(t.p,{children:["To do this, typically each change depends upon a previous change. Automerge creates a directed acyclic graph (DAG) of changes. To learn more about how automerge works internally, see the ",(0,s.jsx)(t.a,{href:"/docs/how-it-works/backend/",children:"Internals"})," section."]}),"\n",(0,s.jsx)(t.h2,{id:"history",children:"History"}),"\n",(0,s.jsx)(t.p,{children:"Each change that is made to a data structure builds upon other changes to create a shared, materialized view of a document. Each change is dependent on a previous change, which means that all replicas are able to construct a history of the data structure. This is a powerful property in multi-user applications, and can be implemented in a way that is storage and space efficient."}),"\n",(0,s.jsx)(t.h2,{id:"compaction",children:"Compaction"}),"\n",(0,s.jsx)(t.p,{children:"Compaction is a way to serialize the current state of the document without the history. You might want to do this when:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"You don't want to replicate the entire history because of bandwidth or resource concerns on the target device. This might be useful in embedded systems or mobile phones."}),"\n",(0,s.jsx)(t.li,{children:"A deleted element contains some sensitive information that you would like to be purged from the history."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The downsides of compacting the history of a document include not being able to synchronize that compacted document with another document that doesn't have a common ancestor."}),"\n",(0,s.jsx)(t.h2,{id:"synchronization",children:"Synchronization"}),"\n",(0,s.jsxs)(t.p,{children:["When two or more devices make changes to a document, and then decide to exchange those changes to come to a consistent state, we call that ",(0,s.jsx)(t.em,{children:"synchronization"}),". Synchronization can, in the most simple implementation, consist of sending the full list of changes in the history to all connected devices. To improve performance, devices may negotiate which changes are missing on either end and exchange only those changes which are missing, rather than the entire change history."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);