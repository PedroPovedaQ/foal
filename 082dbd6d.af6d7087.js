(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{251:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||r;return a?i.a.createElement(m,l(l({ref:t},c),{},{components:a})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},252:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},253:function(e,t,a){"use strict";var n=a(0),i=a(254);t.a=function(){const e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},254:function(e,t,a){"use strict";var n=a(0);const i=Object(n.createContext)(void 0);t.a=i},255:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(253),o=a(252),l=a(53),s=a.n(l);const c=37,d=39;t.a=function(e){const{lazy:t,block:a,children:l,defaultValue:b,values:p,groupId:u,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:j}=Object(r.a)(),[h,g]=Object(n.useState)(b);if(null!=u){const e=f[u];null!=e&&e!==h&&p.some((t=>t.value===e))&&g(e)}const O=e=>{g(e),null!=u&&j(u,e)},y=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},m)},p.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(n.cloneElement)(l.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},l.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},256:function(e,t,a){"use strict";var n=a(3),i=a(0),r=a.n(i);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(251)),o=a(255),l=a(256),s={title:"Local and Cloud Storage",sidebar_label:"Local & Cloud Storage"},c={unversionedId:"file-system/local-and-cloud-storage",id:"file-system/local-and-cloud-storage",isDocsHomePage:!1,title:"Local and Cloud Storage",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/file-system/local-and-cloud-storage.md",slug:"/file-system/local-and-cloud-storage",permalink:"/foal/docs/file-system/local-and-cloud-storage",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/file-system/local-and-cloud-storage.md",version:"current",sidebar_label:"Local & Cloud Storage",sidebar:"someSidebar",previous:{title:"Nuxt.js",permalink:"/foal/docs/frontend-integration/nuxt.js"},next:{title:"Upload and Download Files",permalink:"/foal/docs/file-system/upload-and-download-files"}},d=[{value:"Configuration",id:"configuration",children:[{value:"Local storage",id:"local-storage",children:[]},{value:"AWS S3",id:"aws-s3",children:[]},{value:"DigitalOcean",id:"digitalocean",children:[]}]},{value:"Read, Write and Delete Files",id:"read-write-and-delete-files",children:[{value:"Read files",id:"read-files",children:[]},{value:"Write files",id:"write-files",children:[]},{value:"Delete files",id:"delete-files",children:[]},{value:"Create an HttpResponse",id:"create-an-httpresponse",children:[]}]},{value:"Using a Specific Storage",id:"using-a-specific-storage",children:[]},{value:"Implementing a Disk",id:"implementing-a-disk",children:[]}],b={rightToc:d};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/foal/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(r.b)("p",null,"FoalTS provides its own file system for reading, writing and deleting files locally or in the Cloud. Thanks to its unified interface, you can easily choose different storage for each of your environments. This is especially useful when you're moving from development to production."),Object(r.b)("p",null,"For example, when coding the application locally, you can use the file system of your operating system. Then, when deploying the application to staging or production, you can change the configuration to use AWS S3. Regardless of the storage chosen in the background, the code remains the same. Only the configuration changes."),Object(r.b)("p",null,"Using FoalTS' file system has many other advantages as well:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It can generate a unique random name when saving a new file (with the ability to add an extension if necessary)."),Object(r.b)("li",{parentName:"ul"},"File contents can be managed using buffers or streams."),Object(r.b)("li",{parentName:"ul"},"Stream errors are correctly handled to avoid crashing the server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Not found")," errors are unified with a single ",Object(r.b)("inlineCode",{parentName:"li"},"FileDoesNotExist")," error."),Object(r.b)("li",{parentName:"ul"},"FoalTS' file system can generate an ",Object(r.b)("inlineCode",{parentName:"li"},"HttpResponse"),"  to correctly download (large) files to the browser.")),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"First install the package."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install @foal/storage\n")),Object(r.b)("p",null,"Next, you will need to provide the name of the storage to be used with the configuration key ",Object(r.b)("inlineCode",{parentName:"p"},"setings.disk.driver"),". In the case of the local filesystem, this is ",Object(r.b)("inlineCode",{parentName:"p"},"local"),". In other cases, an additional package must be installed. Then the name to be provided is the name of the package."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: local\n")),Object(r.b)("h3",{id:"local-storage"},"Local storage"),Object(r.b)("p",null,"The name of the directory where the files are located is specified with the configuration key ",Object(r.b)("inlineCode",{parentName:"p"},"settings.disk.local.directory"),"."),Object(r.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n"))),Object(r.b)(l.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'))),Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    disk: {\n      driver: "local",\n      local: {\n        directory: "uploaded"\n      }\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"aws-s3"},"AWS S3"),Object(r.b)("p",null,"AWS storage requires the installation of an additional package."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install @foal/aws-s3\n")),Object(r.b)("p",null,"The bucket name is specified with the ",Object(r.b)("inlineCode",{parentName:"p"},"settings.disk.s3.bucket")," configuration key."),Object(r.b)("p",null,"AWS credentials are specified with the configuration keys ",Object(r.b)("inlineCode",{parentName:"p"},"settings.aws.accessKeyId")," and ",Object(r.b)("inlineCode",{parentName:"p"},"settings.aws.secretAccessKey"),"  or using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html"}),"AWS traditional techniques"),"."),Object(r.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  aws:\n    accessKeyId: xxx\n    secretAccessKey: yyy\n  disk:\n    driver: '@foal/aws-s3'\n    s3:\n      bucket: 'uploaded'\n"))),Object(r.b)(l.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "aws": {\n      "accessKeyId": "xxx",\n      "secretAccessKey": "yyy"\n    },\n    "disk": {\n      "driver": "@foal/aws-s3",\n      "s3": {\n        "bucket": "uploaded"\n      }\n    }\n  }\n}\n'))),Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    aws: {\n      accessKeyId: "xxx",\n      secretAccessKey: "yyy"\n    },\n    disk: {\n      driver: "@foal/aws-s3",\n      s3: {\n        bucket: "uploaded"\n      }\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"digitalocean"},"DigitalOcean"),Object(r.b)("p",null,"DigitalOcean Spaces are compatible with AWS S3 API, so you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"@foal/aws-s3")," package to connect to this storage."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install @foal/aws-s3\n")),Object(r.b)("p",null,"The only difference is the configuration key ",Object(r.b)("inlineCode",{parentName:"p"},"settings.aws.endpoint"),", which is mandatory and requires the value ",Object(r.b)("inlineCode",{parentName:"p"},"${REGION}.digitaloceanspaces.com"),"."),Object(r.b)("h2",{id:"read-write-and-delete-files"},"Read, Write and Delete Files"),Object(r.b)("p",null,"FoalTS file system is accessible via the ",Object(r.b)("inlineCode",{parentName:"p"},"Disk")," service. It contains all the methods for reading, writing and deleting files."),Object(r.b)("h3",{id:"read-files"},"Read files"),Object(r.b)("p",null,"Files can be read using the asynchronous ",Object(r.b)("inlineCode",{parentName:"p"},"read")," method. It returns the size of the file as well as its contents in the form of a buffer or a readable stream. If the file does not exist, a ",Object(r.b)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error is rejected."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async readFile() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'buffer');\n\n    // ...\n  }\n\n  async readFile2() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'stream');\n\n    // ...\n  }\n\n} \n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"To check whether an error is an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"FileDoesNotExist"),", you can call the ",Object(r.b)("inlineCode",{parentName:"p"},"isFileDoesNotExist")," function. Using ",Object(r.b)("inlineCode",{parentName:"p"},"error instanceof FileDoesNotExist")," may not work if you have multiple nested packages because of the way ",Object(r.b)("em",{parentName:"p"},"npm")," handles its dependencies.")),Object(r.b)("p",null,"--"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you only need to read the file size and not its content, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"readSize")," method."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const size = await this.disk.readSize('avatars/xxx.jpg');\n"))),Object(r.b)("h3",{id:"write-files"},"Write files"),Object(r.b)("p",null,"Files can be saved using the asynchronous ",Object(r.b)("inlineCode",{parentName:"p"},"write")," method. This method accepts a buffer or a readable stream. If no name is provided, it is automatically generated and used to save the file in the given directory. In this case, a file extension can also be provided to the method."),Object(r.b)("p",null,"Once the file is successfully written, its path is returned so that it can be retrieved later."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Readable } from 'stream';\n\nimport { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async createFile(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content);\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY='\n\n    // ...\n  }\n\n  async createFile2(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      extension: 'jpg'\n    });\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY=.jpg'\n\n    // ...\n  }\n\n  async createFile3(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      name: 'profile.jpg'\n    });\n    // path === 'avatars/profile.jpg'\n\n    // ...\n  }\n\n} \n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Backslashes ",Object(r.b)("inlineCode",{parentName:"p"},"\\")," and slashes ",Object(r.b)("inlineCode",{parentName:"p"},"/")," at the end of the directory name are not supported. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"avatars/img_60")," is valid but ",Object(r.b)("inlineCode",{parentName:"p"},"avatars\\img_60")," and ",Object(r.b)("inlineCode",{parentName:"p"},"avatars/img_60/")," both invalid.")),Object(r.b)("h3",{id:"delete-files"},"Delete files"),Object(r.b)("p",null,"Files can be deleted using the asynchronous ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," method. Depending on the file storage, the method may or may not reject a ",Object(r.b)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error if the file is not found."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async deleteFile(content: Buffer|Readable) {\n    await this.disk.delete('avatars/profile.jpg');\n\n    // ...\n  }\n\n} \n")),Object(r.b)("h3",{id:"create-an-httpresponse"},"Create an HttpResponse"),Object(r.b)("p",null,"The service also provides a special method ",Object(r.b)("inlineCode",{parentName:"p"},"createHttpResponse")," for creating an ",Object(r.b)("inlineCode",{parentName:"p"},"HttpResponse"),". The returned object is optimized for downloading a (large) file in streaming."),Object(r.b)("p",null,"The documentation can be found ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/foal/docs/file-system/upload-and-download-files#file-downloads"}),"here"),"."),Object(r.b)("h2",{id:"using-a-specific-storage"},"Using a Specific Storage"),Object(r.b)("p",null,"In rare cases, you may wish to access multiple storages in your application. Each of them has its own ",Object(r.b)("em",{parentName:"p"},"disk")," that you can inject and use in your controllers and services."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get } from '@foal/core';\nimport { LocalDisk } from '@foal/storage';\nimport { S3Disk } from '@foal/aws-s3';\n\nclass ApiController {\n\n  @dependency\n  local: LocalDisk;\n\n  @dependency\n  s3: S3Disk;\n\n  // ...\n\n}\n")),Object(r.b)("h2",{id:"implementing-a-disk"},"Implementing a Disk"),Object(r.b)("p",null,"If FoalTS does not support your favorite Cloud provider, you can also implement your own ",Object(r.b)("em",{parentName:"p"},"disk")," by extending the ",Object(r.b)("inlineCode",{parentName:"p"},"Disk")," class. "),Object(r.b)("p",null,"If you want to use it through the ",Object(r.b)("inlineCode",{parentName:"p"},"Disk")," service, you need to specify its path in the configuration (or to publish it as an npm package and specify the package name). The name of the exported class should be ",Object(r.b)("inlineCode",{parentName:"p"},"ConcreteDisk"),"."),Object(r.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  disk:\n    driver: './app/services/my-disk.service'\n"))),Object(r.b)(l.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "disk": {\n      "driver": "./app/services/my-disk.service",\n    }\n  }\n}\n'))),Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    disk: {\n      driver: "./app/services/my-disk.service",\n    }\n  }\n}\n')))))}p.isMDXComponent=!0}}]);