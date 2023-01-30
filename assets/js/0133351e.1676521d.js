"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1163:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},i="Make a change",l={unversionedId:"tutorial/make-a-change",id:"tutorial/make-a-change",isDocsHomePage:!1,title:"Make a change",description:"In our minimalist todo app, users will need two main interactions:",source:"@site/docs/tutorial/make-a-change.md",sourceDirName:"tutorial",slug:"/tutorial/make-a-change",permalink:"/docs/tutorial/make-a-change",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/tutorial/make-a-change.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Your first document",permalink:"/docs/tutorial/create-a-document"},next:{title:"Rendering the app",permalink:"/docs/tutorial/rendering-app"}},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"make-a-change"},"Make a change"),(0,r.kt)("p",null,"In our minimalist todo app, users will need two main interactions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a todo item"),(0,r.kt)("li",{parentName:"ul"},"Toggle a todo item as complete or not complete")),(0,r.kt)("p",null,"To add a todo item to the list, we will call ",(0,r.kt)("inlineCode",{parentName:"p"},"Automerge.change"),". We will make\nsure ",(0,r.kt)("inlineCode",{parentName:"p"},"doc.items")," exists, and then add a new item to the list with ",(0,r.kt)("inlineCode",{parentName:"p"},"done: false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function addItem(text) {\n  let newDoc = Automerge.change(doc, doc => {\n    if (!doc.items) doc.items = []\n    doc.items.push({ text, done: false })\n  })\n  updateDoc(newDoc)\n}\n")),(0,r.kt)("p",null,"Because Automerge is functional, each document is immutable. ",(0,r.kt)("inlineCode",{parentName:"p"},"Automerge.change")," does\nnot modify the document you pass in, but it returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"newDoc")," which reflects the\nchange you just made. We then call ",(0,r.kt)("inlineCode",{parentName:"p"},"updateDoc()")," as defined\n",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/create-a-document/"},"in the last section")," to update the global variable ",(0,r.kt)("inlineCode",{parentName:"p"},"doc")," with\nthe latest document state. The old state of the document is not used anymore."),(0,r.kt)("p",null,"Now, let's create an input element in the HTML so that items can be added to the list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <input type="text" id="new-todo" />\n</form>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let form = document.querySelector("form")\nlet input = document.querySelector("#new-todo")\nform.onsubmit = (ev) => {\n  ev.preventDefault()\n  addItem(input.value)\n  input.value = null\n}\n')),(0,r.kt)("p",null,"Next, we have to render the items in the list every time an item is added."))}p.isMDXComponent=!0}}]);