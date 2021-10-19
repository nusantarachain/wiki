"use strict";(self.webpackChunknuchain_wiki_2=self.webpackChunknuchain_wiki_2||[]).push([[977],{3905:function(n,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var t=a(7294);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function r(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function u(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function s(n,e){if(null==n)return{};var a,t,i=function(n,e){if(null==n)return{};var a,t,i={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}var o=t.createContext({}),l=function(n){var e=t.useContext(o),a=e;return n&&(a="function"==typeof n?n(e):u(u({},e),n)),a},p=function(n){var e=l(n.components);return t.createElement(o.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},k=t.forwardRef((function(n,e){var a=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),k=l(a),d=i,c=k["".concat(o,".").concat(d)]||k[d]||m[d]||r;return a?t.createElement(c,u(u({ref:e},p),{},{components:a})):t.createElement(c,u({ref:e},p))}));function d(n,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=a.length,u=new Array(r);u[0]=k;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s.mdxType="string"==typeof n?n:i,u[1]=s;for(var l=2;l<r;l++)u[l]=a[l];return t.createElement.apply(null,u)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8938:function(n,e,a){a.r(e),a.d(e,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return m}});var t=a(7462),i=a(3366),r=(a(7294),a(3905)),u={id:"browser-extension",title:"Browser Extension",sidebar_label:"Extension"},s=void 0,o={unversionedId:"learn/browser-extension",id:"learn/browser-extension",isDocsHomePage:!1,title:"Browser Extension",description:"Untuk mengakses sebuah layanan/aplikasi biasanya dibutuhkan login, namun istilah login di dunia Web3",source:"@site/docs/learn/extension.md",sourceDirName:"learn",slug:"/learn/browser-extension",permalink:"/id/docs/learn/browser-extension",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/extension.md",tags:[],version:"current",frontMatter:{id:"browser-extension",title:"Browser Extension",sidebar_label:"Extension"},sidebar:"tutorialSidebar",previous:{title:"Nominator",permalink:"/id/docs/learn/nominator"},next:{title:"Intro",permalink:"/id/docs/build/build-intro"}},l=[{value:"Memasang ekstensi",id:"memasang-ekstensi",children:[]},{value:"Fungsi ekstensi",id:"fungsi-ekstensi",children:[]},{value:"Membuat akun",id:"membuat-akun",children:[]}],p={toc:l};function m(n){var e=n.components,u=(0,i.Z)(n,["components"]);return(0,r.kt)("wrapper",(0,t.Z)({},p,u,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Untuk mengakses sebuah layanan/aplikasi biasanya dibutuhkan login, namun istilah login di dunia Web3\ntidak relevan. Yang dibutuhkan di Web3 untuk otentikasi dan otorisasi adalah kunci kriptografi bukan\nlagi ",(0,r.kt)("em",{parentName:"p"},"user name")," dan ",(0,r.kt)("em",{parentName:"p"},"password")," seperti di dunia sentralisasi."),(0,r.kt)("p",null,"Saat ini perkembangan Web3 belum didukung oleh adanya native frontend pada browser, sehingga untuk\nmengakses jaringan Web3 masih membutuhkan alat bantu, sebagai contoh pada ekosistem Ethereum ada\nalat bantu Metamask, pada Polkadot ada Polkadot JS app, dll. hal ini untuk mempermudah pengguna\ndalam mengakses Web3, kedepannya ketika semua peramban (",(0,r.kt)("em",{parentName:"p"},"browser"),") sudah mendukung Web3 maka\nalat-alat bantu (",(0,r.kt)("em",{parentName:"p"},"extension"),") seperti ini tidak dibutuhkan lagi, karena telah tersedia secara native\ndi peramban."),(0,r.kt)("h2",{id:"memasang-ekstensi"},"Memasang ekstensi"),(0,r.kt)("p",null,"Untuk sementara ini hingga mayoritas peramban mendukung Web3, maka kita membutuhkan alat bantu untuk\nmengakses jaringan Nuchain, alat bantu ini berupa ",(0,r.kt)("em",{parentName:"p"},"browser extension"),", yang bisa Anda dapatkan di:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/nuchain-app/hfcdboaniimgkememgmilhmnkdgggkne"},"Nuchain App untuk peramban Chrome")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/nuchain-app/"},"Nuchain App untuk peramban Firefox"))),(0,r.kt)("p",null,"Setelah terpasang di peramban maka akan muncul icon Nuchain seperti pada gambar berikut:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Nuchain App web extension",src:a(5902).Z})),(0,r.kt)("h2",{id:"fungsi-ekstensi"},"Fungsi ekstensi"),(0,r.kt)("p",null,"Fungsi dari ekstensi peramban Nuchain App ini adalah untuk menyimpan ",(0,r.kt)("em",{parentName:"p"},"private key")," dan\nmengamankannya secara ",(0,r.kt)("em",{parentName:"p"},"offline")," di peramban Anda dengan kata kunci, selanjutnya ketika Anda\nmengakses website yang mendukung Web3 maka ekstensi ini akan aktif dan meminta ijin Anda untuk\notorisasi dalam melakukan operasi/transaksi yang diperlukan di jaringan Nuchain secara aman tanpa\nperlu meng-expose kunci privat Anda."),(0,r.kt)("p",null,"Hal ini lebih aman daripada Anda menaruh kunci privat ke aplikasi pihak ke-3, dan lebih baik jangan\npernah melakukan hal itu (menyimpan ke pihak ke-3)."),(0,r.kt)("h2",{id:"membuat-akun"},"Membuat akun"),(0,r.kt)("p",null,"Ekstensi peramban bisa juga untuk membuat akun. Pada hakekatnya akun di dunia Web3 itu hanyalah\npasangan asimetris kunci kriptografi, jadi ekstensi ini hanya membuatkan kunci kriptografi secara\nacak. Untuk lebih detailnya silahkan baca bagian\n",(0,r.kt)("a",{parentName:"p",href:"/id/docs/learn/account#menggunakan-ekstensi-peramban"},"Membuat akun menggunakan ekstensi peramban"),"."))}m.isMDXComponent=!0},5902:function(n,e,a){e.Z=a.p+"assets/images/nuchain-app-web-extension1-7eed3e5bdbd7628f07b14762a2096625.png"}}]);