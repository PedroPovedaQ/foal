(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{247:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),i=n(22),s=n(260),c=n(258);var u=function(e){const{metadata:t}=e;return a.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},a.a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.a.createElement(c.a,{className:"pagination-nav__link",to:t.previous.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),a.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.a.createElement(c.a,{className:"pagination-nav__link",to:t.next.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),a.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},l=n(259),d=n(257);var f=function(){const{siteConfig:{title:e}}=Object(i.default)(),{pluginId:t}=Object(l.useActivePlugin)({failfast:!0}),{savePreferredVersionName:n}=Object(d.useDocsPreferredVersion)(t),r=Object(l.useActiveVersion)(t),{latestDocSuggestion:o,latestVersionSuggestion:s}=Object(l.useDocVersionSuggestions)(t);if(!s)return a.a.createElement(a.a.Fragment,null);const u=null!=o?o:(f=s).docs.find((e=>e.id===f.mainDocId));var f;return a.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===r.name?a.a.createElement("div",null,"This is unreleased documentation for ",e," ",a.a.createElement("strong",null,r.label)," version."):a.a.createElement("div",null,"This is documentation for ",e," ",a.a.createElement("strong",null,r.label),", which is no longer actively maintained."),a.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",a.a.createElement("strong",null,a.a.createElement(c.a,{to:u.path,onClick:()=>n(s.name)},"latest version"))," ","(",s.label,")."))},m=n(283),g=n(252),v=n(89),p=n.n(v);t.default=function(e){const{siteConfig:t}=Object(i.default)(),{url:n,title:r,titleDelimiter:c}=t,{content:d}=e,{metadata:v}=d,{description:h,title:b,permalink:E,editUrl:D,lastUpdatedAt:P,lastUpdatedBy:_}=v,{frontMatter:{image:O,keywords:V,hide_title:y,hide_table_of_contents:j}}=d,{pluginId:A}=Object(l.useActivePlugin)({failfast:!0}),w=Object(l.useVersions)(A),C=Object(l.useActiveVersion)(A),N=w.length>1,x=b?`${b} ${c} ${r}`:r,L=Object(s.a)(O,{absolute:!0});return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("title",null,x),a.a.createElement("meta",{property:"og:title",content:x}),h&&a.a.createElement("meta",{name:"description",content:h}),h&&a.a.createElement("meta",{property:"og:description",content:h}),V&&V.length&&a.a.createElement("meta",{name:"keywords",content:V.join(",")}),O&&a.a.createElement("meta",{property:"og:image",content:L}),O&&a.a.createElement("meta",{property:"twitter:image",content:L}),O&&a.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${b}`}),E&&a.a.createElement("meta",{property:"og:url",content:n+E}),E&&a.a.createElement("link",{rel:"canonical",href:n+E})),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:Object(g.a)("col",{[p.a.docItemCol]:!j})},a.a.createElement(f,null),a.a.createElement("div",{className:p.a.docItemContainer},a.a.createElement("article",null,N&&a.a.createElement("div",null,a.a.createElement("span",{className:"badge badge--secondary"},"Version: ",C.label)),!y&&a.a.createElement("header",null,a.a.createElement("h1",{className:p.a.docTitle},b)),a.a.createElement("div",{className:"markdown"},a.a.createElement(d,null))),(D||P||_)&&a.a.createElement("div",{className:"margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},D&&a.a.createElement("a",{href:D,target:"_blank",rel:"noreferrer noopener"},a.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},a.a.createElement("g",null,a.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(P||_)&&a.a.createElement("div",{className:"col text--right"},a.a.createElement("em",null,a.a.createElement("small",null,"Last updated"," ",P&&a.a.createElement(a.a.Fragment,null,"on"," ",a.a.createElement("time",{dateTime:new Date(1e3*P).toISOString(),className:p.a.docLastUpdatedAt},new Date(1e3*P).toLocaleDateString()),_&&" "),_&&a.a.createElement(a.a.Fragment,null,"by ",a.a.createElement("strong",null,_)),!1))))),a.a.createElement("div",{className:"margin-vert--lg"},a.a.createElement(u,{metadata:v})))),!j&&d.rightToc&&a.a.createElement("div",{className:"col col--3"},a.a.createElement(m.a,{headings:d.rightToc}))))}},252:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(264);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var a=n(270);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var o=n(265);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return o.isDocsPluginEnabled}});var i=n(274);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return i.isSamePath}});var s=n(275);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return s.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return s.useDocsPreferredVersionByPluginId}});var c=n(266);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return c.DocsPreferredVersionContextProvider}})},258:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10),i=n(263),s=n(11);const c=Object(r.createContext)({collectLink:()=>{}});var u=n(260),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:d,href:f,activeClassName:m,isActive:g,"data-noBrokenLinkCheck":v}=e,p=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]);const{withBaseUrl:h}=Object(u.b)(),b=Object(r.useContext)(c),E=d||f,D=Object(i.a)(E),P=null==E?void 0:E.replace("pathname://",""),_=void 0!==P?(e=>e.startsWith("/"))(O=P)?h(O):O:void 0;var O;const V=Object(r.useRef)(!1),y=n?o.e:o.c,j=s.a.canUseIntersectionObserver;let A;Object(r.useEffect)((()=>(!j&&D&&window.docusaurus.prefetch(_),()=>{j&&A&&A.disconnect()})),[_,j,D]);const w=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,C=!_||!D||w;return _&&D&&!w&&!v&&b.collectLink(_),C?a.a.createElement("a",Object.assign({href:_},E&&!D&&{target:"_blank",rel:"noopener noreferrer"},p)):a.a.createElement(y,Object.assign({},p,{onMouseEnter:()=>{V.current||(window.docusaurus.preload(_),V.current=!0)},innerRef:e=>{var t,n;j&&e&&D&&(t=e,n=()=>{window.docusaurus.prefetch(_)},A=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t),A.disconnect(),n())}))})),A.observe(t))},to:_||""},n&&{isActive:g,activeClassName:m}))}},259:function(e,t,n){try{e.exports=n(271)}catch(r){e.exports={}}},260:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(22),a=n(263);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},261:function(e,t,n){"use strict";n.r(t);var r=n(10);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},263:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},264:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const a=r(n(22));t.useThemeConfig=function(){return a.default().siteConfig.themeConfig}},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(259);t.isDocsPluginEnabled=!!r.useAllDocsData},266:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const s=o(n(0)),c=n(264),u=n(265),l=n(259),d=i(n(276));function f({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=d.default.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(d.default.clear(e,t),{preferredVersionName:null})}(e)})),r}function m(){const e=l.useAllDocsData(),t=c.useThemeConfig().docs.versionPersistence,n=s.useMemo((()=>Object.keys(e)),[e]),[r,a]=s.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));s.useEffect((()=>{a(f({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,s.useMemo((()=>({savePreferredVersion:function(e,n){d.default.save(e,t,n),a((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[a])]}const g=s.createContext(null);function v({children:e}){const t=m();return s.default.createElement(g.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return u.isDocsPluginEnabled?s.default.createElement(v,null,e):s.default.createElement(s.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=s.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(261),a=n(272),o=n(273);t.useAllDocsData=()=>a.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>a.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:a}=r.useLocation();return o.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:a}=r.useLocation();if(n){return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,a)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:a}=r.useLocation();return o.getActiveVersion(n,a)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:a}=r.useLocation();return o.getActiveDocContext(n,a)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:a}=r.useLocation();return o.getDocVersionSuggestions(n,a)}},272:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return i}));var r=n(22);function a(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){const t=a()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function i(e,t="default"){const n=o(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(261);t.getActivePlugin=function(e,t,n={}){const a=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),o=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!o&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return o},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const a=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==a)),a].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const a=t.getActiveVersion(e,n),o=null==a?void 0:a.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:a,activeDoc:o,alternateDocVersions:o?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(o.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),o=a.activeVersion!==r;return{latestDocSuggestion:o?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),a=n(266),o=n(259),i=n(277);t.useDocsPreferredVersion=function(e=i.DEFAULT_PLUGIN_ID){const t=o.useDocsData(e),[n,s]=a.useDocsPreferredVersionContext(),{preferredVersionName:c}=n[e];return{preferredVersion:c?t.versions.find((e=>e.name===c)):null,savePreferredVersionName:r.useCallback((t=>{s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){const e=o.useAllDocsData(),[t]=a.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:a}=t[n];return a?r.versions.find((e=>e.name===a)):null}(n)})),r}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,a={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=a},277:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"},283:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(252);var i=function(e,t,n){const[a,o]=Object(r.useState)(void 0);Object(r.useEffect)((()=>{function r(){const r=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){const n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(r){let n=0,i=!1;const s=document.getElementsByClassName(e);for(;n<s.length&&!i;){const e=s[n],{href:c}=e,u=decodeURIComponent(c.substring(c.indexOf("#")+1));r.id===u&&(a&&a.classList.remove(t),e.classList.add(t),o(e),i=!0),n+=1}}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},s=n(55),c=n.n(s);const u="table-of-contents__link";function l({headings:e,isChild:t}){return e.length?a.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),a.a.createElement(l,{isChild:!0,headings:e.children}))))):null}t.a=function({headings:e}){return i(u,"table-of-contents__link--active",100),a.a.createElement("div",{className:Object(o.a)(c.a.tableOfContents,"thin-scrollbar")},a.a.createElement(l,{headings:e}))}}}]);