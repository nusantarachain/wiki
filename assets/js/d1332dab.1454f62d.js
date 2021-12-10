"use strict";(self.webpackChunknuchain_wiki_2=self.webpackChunknuchain_wiki_2||[]).push([[434],{3905:function(a,n,e){e.d(n,{Zo:function(){return m},kt:function(){return d}});var t=e(7294);function i(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function r(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function o(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function u(a,n){if(null==a)return{};var e,t,i=function(a,n){if(null==a)return{};var e,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(i[e]=a[e]);return i}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var l=t.createContext({}),s=function(a){var n=t.useContext(l),e=n;return a&&(e="function"==typeof a?a(n):o(o({},n),a)),e},m=function(a){var n=s(a.components);return t.createElement(l.Provider,{value:n},a.children)},p={inlineCode:"code",wrapper:function(a){var n=a.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,l=a.parentName,m=u(a,["components","mdxType","originalType","parentName"]),c=s(e),d=i,k=c["".concat(l,".").concat(d)]||c[d]||p[d]||r;return e?t.createElement(k,o(o({ref:n},m),{},{components:e})):t.createElement(k,o({ref:n},m))}));function d(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,o=new Array(r);o[0]=c;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=a,u.mdxType="string"==typeof a?a:i,o[1]=u;for(var s=2;s<r;s++)o[s]=e[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,e)}c.displayName="MDXCreateElement"},9376:function(a,n,e){e.r(n),e.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var t=e(7462),i=e(3366),r=(e(7294),e(3905)),o={id:"governance",title:"Governance",sidebar_label:"Governance"},u=void 0,l={unversionedId:"general/governance",id:"general/governance",isDocsHomePage:!1,title:"Governance",description:"Governance memberikan kesempatan pada komunitas dalam menentukan arah dan kebijakan sistem secara",source:"@site/docs/general/governance.md",sourceDirName:"general",slug:"/general/governance",permalink:"/docs/general/governance",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/general/governance.md",tags:[],version:"current",frontMatter:{id:"governance",title:"Governance",sidebar_label:"Governance"},sidebar:"tutorialSidebar",previous:{title:"Community",permalink:"/docs/general/community"},next:{title:"Faucet",permalink:"/docs/general/faucet"}},s=[{value:"Dewan",id:"dewan",children:[]},{value:"Proposal",id:"proposal",children:[]},{value:"Perubahan/pengembangan yang bisa dilakukan?",id:"perubahanpengembangan-yang-bisa-dilakukan",children:[]}],m={toc:s};function p(a){var n=a.components,e=(0,i.Z)(a,["components"]);return(0,r.kt)("wrapper",(0,t.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Governance memberikan kesempatan pada komunitas dalam menentukan arah dan kebijakan sistem secara\ndemokratis."),(0,r.kt)("p",null,"Nuchain mendukung sistem on-chain governance, yakni mekanisme pengambilan keputusan strategis secara\nvoting yang ditulis dan dieksekusi langsung di dalam jaringan blockchain."),(0,r.kt)("p",null,'Penerapan mekanisme governance secara "on-chain" bertujuan untuk:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Memastikan kebijakan tertulis di jaringan blockchain dan dapat dipastikan informasinya tidak\nberubah."),(0,r.kt)("li",{parentName:"ol"},"Memastikan bahwa keputusan yang diambil adalah hasil dari keputusan bersama dan tidak bisa\ndisangkal oleh pemberi voting (non-repudiation)."),(0,r.kt)("li",{parentName:"ol"},"Memastikan bahwa semua perubahan tercatat dan dapat diaudit (auditability)."),(0,r.kt)("li",{parentName:"ol"},"Memastikan pengambil keputusan adalah akun otentik dan telah dipercaya oleh publik untuk\nmengambil keputusan secara kolektif."),(0,r.kt)("li",{parentName:"ol"},"Memastikan mekanisme demokrasi berjalan otomatis sesuai aturan yang telah ditulis di dalam\nsistem.")),(0,r.kt)("h2",{id:"dewan"},"Dewan"),(0,r.kt)("p",null,"Dewan merupakan entitas yang memiliki peranan sebagai pembuat rencana perubahan/pengembangan yang\nkemudian bisa di-voting oleh semua anggota dewan lainnya."),(0,r.kt)("p",null,"Anggota dewan dipilih melalui mekanisme voting, dimana siapapun bisa mengajukan diri sebagai\nkandidat dan siapapun bisa memberikan suaranya kepada kandidat tertentu agar memiliki kekuatan yang\ncukup untuk terpilih sebagai anggota dewan."),(0,r.kt)("p",null,"Jumlah anggota dewan dibatasi maksimal 13 kursi."),(0,r.kt)("p",null,"Daftar anggota dewan bisa dilihat di dashboard > Governance >\n",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nuchain.network/#/council"},"Council")),(0,r.kt)("p",null,"Anggota dewan bisa mengajukan rencana perubahan/pengembangan, dengan cara membuat mosi\n(",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.nuchain.network/#/council/motions"},"motions"),"), kemudian anggota dewan lainnya\nbisa melakukan voting pada mosi yang ada."),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("p",null,"Ada beberapa cara untuk mengajukan perubahan/pengembangan di jaringan Nuchain, pertama melalui mosi\ndan kedua melalui referendum."),(0,r.kt)("p",null,"Mosi hanya bisa dibuat dan divoting oleh anggota dewan, sementara referendum bisa diajukan oleh\nsiapa saja dan bisa divoting secara langsung oleh siapa saja pengguna nuchain."),(0,r.kt)("h2",{id:"perubahanpengembangan-yang-bisa-dilakukan"},"Perubahan/pengembangan yang bisa dilakukan?"),(0,r.kt)("p",null,"Semua fungsi yang ada di pallet Nuchain bisa dieksekusi melalui mekanisme on-chain governance,\nberikut adalah beberapa fungsi strategis yang bisa dieksekusi untuk melakukan perubahan/pengembangan\nsistem:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Meningkatkan jumlah batas maksimal validator."),(0,r.kt)("li",{parentName:"ol"},"Memberikan ijin (approval) pencairan anggaran dari kebendaharaan (treasury) yang diajukan oleh\nmasyarakat untuk keperluan tertentu (proyek) yang membangun."),(0,r.kt)("li",{parentName:"ol"},"Memperbaharui sistem Nuchain (runtime)."),(0,r.kt)("li",{parentName:"ol"},"Memindahkan proposal yang diajukan oleh dewan teknis (technical commite) ke mosi."),(0,r.kt)("li",{parentName:"ol"},"Menambahkan registrar (verifikator on-chain identity)."),(0,r.kt)("li",{parentName:"ol"},"Mengeluarkan (kick) validator dari daftar aktif.")))}p.isMDXComponent=!0}}]);