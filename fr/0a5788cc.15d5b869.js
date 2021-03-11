(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{265:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=o,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(f,l(l({ref:t},u),{},{components:n})):r.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},336:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/signup-24e5a30a94173658dc445232caddae9b.png"},337:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/signin-d9b7a51ae39f660381153f16f7735a7f.png"},338:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/todo-list-f4c43484fae484238862186d723f3934.png"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(7),a=(n(0),n(265)),i={title:"Introduction"},l={unversionedId:"tutorials/multi-user-todo-list/1-Introduction",id:"version-1.x/tutorials/multi-user-todo-list/1-Introduction",isDocsHomePage:!1,title:"Introduction",description:"In this tutorial you will learn how to manage users, authentication and authorization in FoalTS. You will also have a quick overview of end-to-end testing.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/1-Introduction.md",slug:"/tutorials/multi-user-todo-list/1-Introduction",permalink:"/fr/docs/1.x/tutorials/multi-user-todo-list/1-Introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/1-Introduction.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Unit Testing",permalink:"/fr/docs/1.x/tutorials/simple-todo-list/7-unit-testing"},next:{title:"The User & Todo Models",permalink:"/fr/docs/1.x/tutorials/multi-user-todo-list/2-the-user-and-todo-models"}},s=[],u={toc:s};function c(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this tutorial you will learn how to manage users, authentication and authorization in FoalTS. You will also have a quick overview of end-to-end testing."),Object(a.b)("p",null,"For that, you are going to create a multi-user to-do list. It will extend the application created in the previous tutorial ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/fr/docs/1.x/tutorials/simple-todo-list/1-installation"}),"Simple To-Do List")," that you must follow before going through this one."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The source code of the first tutorial is available ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://foalts.org/simple-todo-list-source-code-v1.zip"}),"here"),".")),Object(a.b)("p",null,"The application will have three pages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a sign up page where users can create a new account with an email and a password,"),Object(a.b)("li",{parentName:"ul"},"a login page that expects an email and a password to sign in,"),Object(a.b)("li",{parentName:"ul"},"and the todo-list page where the tasks are listed, created and deleted.")),Object(a.b)("p",null,"Each user will have her/his own todos and will not be able to view, create or delete other people's todos."),Object(a.b)("p",null,"The pages look like this:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Sign up page",src:n(336).default}),"\n",Object(a.b)("img",{alt:"Login page",src:n(337).default}),"\n",Object(a.b)("img",{alt:"To-do list page",src:n(338).default})),Object(a.b)("p",null,"Let's get started!"))}c.isMDXComponent=!0}}]);