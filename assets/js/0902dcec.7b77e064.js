"use strict";(self.webpackChunknuchain_wiki_2=self.webpackChunknuchain_wiki_2||[]).push([[513],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9391:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o={en:"learn-extrinsic",title:"Extrinsic",sidebar_label:"Extrinsic"},c=void 0,s={unversionedId:"learn/learn-extrinsic",id:"learn/learn-extrinsic",isDocsHomePage:!1,title:"Extrinsic",description:"Extrinsic is a term for executing transactions or operations on the network that are mutable,",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/learn/learn-extrinsic.md",sourceDirName:"learn",slug:"/learn/learn-extrinsic",permalink:"/docs/learn/learn-extrinsic",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/learn-extrinsic.md",tags:[],version:"current",frontMatter:{en:"learn-extrinsic",title:"Extrinsic",sidebar_label:"Extrinsic"}},l=[{value:"Using Dashboard",id:"using-dashboard",children:[]},{value:"Programmatic",id:"programmatic",children:[]}],u={toc:l};function p(e){var n=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Extrinsic is a term for executing transactions or operations on the network that are ",(0,i.kt)("em",{parentName:"p"},"mutable"),",\nmeaning that operations will affect state/data on the network."),(0,i.kt)("p",null,"There are two ways to access extrinsic:"),(0,i.kt)("h2",{id:"using-dashboard"},"Using Dashboard"),(0,i.kt)("p",null,"The easiest way is to use ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.nuchain.network"},"Nuchain dashboard"),". This method is\nusually used for testing or exploration only. The practical way is the programmatic way, see the\nsection ",(0,i.kt)("a",{parentName:"p",href:"#programmatic"},"Programmatic"),"."),(0,i.kt)("p",null,"You can access extrinsic functions via ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.nuchain.network"},"Nuchain dashboard")," >\n",(0,i.kt)("strong",{parentName:"p"},"Extrinsic"),": menu"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Extrinsic Menu",src:t(4549).Z})),(0,i.kt)("p",null,"On the ",(0,i.kt)("strong",{parentName:"p"},"Extrinsic")," page you will find an interface that makes it easy for you to call function\nbased on the modules available in Nuchain."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Extrinsic Submission",src:t(6995).Z})),(0,i.kt)("p",null,"The above image is an example of transferring an ARA to another account via an extrinsic function\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"balances")," module with the function name ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer"),"."),(0,i.kt)("h2",{id:"programmatic"},"Programmatic"),(0,i.kt)("p",null,"Nuchain provides a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nusantarachain/api"},"javascript library")," to make it easier to\naccess extrinsic programmatically."),(0,i.kt)("p",null,"Example of doing transfer programmatically:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const api = await ApiPromise.create({\n  provider: new WsProvider(NUCHAIN_NODE_ADDRESS),\n});\n\n// make extrinsic function calls\n// in the `balances` module of the `transfer` function.\napi.tx.balances.transfer(recipient, 100).signAndSend(sender, ({ status, events }) => {\n  if (status.isInBlock || status.isFinalized) {\n    console.log("Transfer successful!");\n  }\n});\n')))}p.isMDXComponent=!0},6995:function(e,n,t){n.Z=t.p+"assets/images/extrinsic-submission-19914434c820698db660ec5e77a5be19.png"},4549:function(e,n,t){n.Z=t.p+"assets/images/extrinsics-menu-64998d352dc3d39621a122ebf874d13c.png"}}]);