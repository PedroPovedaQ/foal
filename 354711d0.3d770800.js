(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{117:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(7),r=(t(0),t(251)),o={},c={unversionedId:"architecture/initialization",id:"version-1.x/architecture/initialization",isDocsHomePage:!1,title:"initialization",description:"Initialization",source:"@site/versioned_docs/version-1.x/architecture/initialization.md",slug:"/architecture/initialization",permalink:"/foal/docs/1.x/architecture/initialization",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/architecture/initialization.md",version:"1.x"},l=[{value:"The <code>main</code> function",id:"the-main-function",children:[]},{value:"The <code>AppController.init</code> method",id:"the-appcontrollerinit-method",children:[]},{value:"The services <code>boot</code> method",id:"the-services-boot-method",children:[]},{value:"Best Practices",id:"best-practices",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"initialization"},"Initialization"),Object(r.b)("p",null,"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database."),Object(r.b)("p",null,"There are three ways to achieve this in FoalTS."),Object(r.b)("h2",{id:"the-main-function"},"The ",Object(r.b)("inlineCode",{parentName:"h2"},"main")," function"),Object(r.b)("p",null,"The most straightforward way to do it, which is used by default, is to add the initialization commands in the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," function before ",Object(r.b)("inlineCode",{parentName:"p"},"createApp")," is called."),Object(r.b)("p",null,"If your application uses TypeORM, your project should have a file ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.ts")," that looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"async function main() {\n  // Initialization\n  await createConnection();\n\n  // Creation of the application\n  const app = createApp(AppController);\n\n  // ...\n}\n\nmain();\n")),Object(r.b)("h2",{id:"the-appcontrollerinit-method"},"The ",Object(r.b)("inlineCode",{parentName:"h2"},"AppController.init")," method"),Object(r.b)("p",null,"Sometimes, however, this approach is not sufficient because we need to call the methods of some services. In this case, you can add an ",Object(r.b)("inlineCode",{parentName:"p"},"init")," method to the root controller class which will be called before the application is fully created. This method can be synchronous or asynchronous."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example 1")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n\n  @dependency\n  serviceA: ServiceA;\n\n  async init() {\n    await this.serviceA.doSomething();\n  }\n\n}\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example 2")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n\n  @dependency\n  serviceA: ServiceA;\n\n  @dependency\n  serviceB: ServiceB;\n\n  async init() {\n    this.serviceA.init();\n    this.serviceB.init();\n  }\n\n}\n")),Object(r.b)("p",null,"For this to work, you need to update your ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.ts")," file and create the application with the asynchronous function ",Object(r.b)("inlineCode",{parentName:"p"},"createAndInitApp"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createAndInitApp } from '@foal/core';\n\nasync function main() {\n  const app = await createAndInitApp(AppController);\n\n  // ...\n}\n\nmain();\n")),Object(r.b)("h2",{id:"the-services-boot-method"},"The services ",Object(r.b)("inlineCode",{parentName:"h2"},"boot")," method"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"boot")," methods are available in v1.8.0 onwards.")),Object(r.b)("p",null,"Alternatively you can add a ",Object(r.b)("inlineCode",{parentName:"p"},"boot")," method in your services. This method can be synchronous or asynchronous."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class ServiceA {\n\n  async boot() {\n    await doSomething();\n  }\n\n}\n")),Object(r.b)("p",null,"Then, you have to call the ",Object(r.b)("inlineCode",{parentName:"p"},"boot")," method of your service manager (it will be automatically called starting from version 2)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createAndInitApp } from '@foal/core';\n\nasync function main() {\n  const serviceManager = new ServiceManager();\n  const app = createApp(AppController, {\n    serviceManager\n  });\n  // This line calls the `boot` method of all your services that have one.\n  await serviceManager.boot();\n\n  // ...\n}\n\nmain();\n")),Object(r.b)("p",null,"If you manually inject services to your service manager and you want their ",Object(r.b)("inlineCode",{parentName:"p"},"boot")," methods to be called, you must specify this in the ",Object(r.b)("inlineCode",{parentName:"p"},"set")," method options."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const serviceManager = new ServiceManager();\nserviceManager.set(ServiceA, myServiceInstance, { boot: true })\n")),Object(r.b)("h2",{id:"best-practices"},"Best Practices"),Object(r.b)("p",null,"If your initialization consists of several asynchronous tasks, you may want to perform them in ",Object(r.b)("em",{parentName:"p"},"parallel"),". This will reduce the initialization time, which has an impact if you use a serverless architecture."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n\n  async init() {\n    // Don't do\n    await createConnection();\n    await createAnotherConnection();\n\n    // Do\n    await Promise.all([\n      createConnection(),\n      createAnotherConnection()\n    ])\n  }\n\n}\n")))}s.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return t?i.a.createElement(m,c(c({ref:n},p),{},{components:t})):i.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);