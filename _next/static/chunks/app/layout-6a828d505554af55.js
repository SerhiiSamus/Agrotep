(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6908:function(e,a,s){Promise.resolve().then(s.bind(s,8965)),Promise.resolve().then(s.bind(s,5612)),Promise.resolve().then(s.bind(s,8972)),Promise.resolve().then(s.t.bind(s,6338,23)),Promise.resolve().then(s.t.bind(s,7354,23)),Promise.resolve().then(s.t.bind(s,6968,23))},8965:function(e,a,s){"use strict";s.d(a,{default:function(){return m}});var t=s(7437);let i={"/":"/about-us","/about-us":"/services","/services":"/auto-park","/auto-park":"/careers","/careers":"/contacts","/contacts":"/"};var n=s(7648),r=s(9376),c=s(2265),l=s(3949),o=s(7065),d=s.n(o),m=()=>{let{t:e}=(0,l.$G)(),a=(0,r.useRouter)(),s=(0,r.usePathname)(),[o,m]=(0,c.useState)(!1),h=["/","/about-us","/services","/auto-park","/careers","/contacts"],u=(0,c.useCallback)(d()(()=>{if(h.includes(s)&&!o){if((window.scrollY||window.pageYOffset)+window.innerHeight>=document.documentElement.scrollHeight){console.log("Пользователь прокрутил до 90% страницы");let e=i[s];e?(console.log("Переход на следующий путь: ".concat(e)),m(!0),a.push(e)):console.log("Следующий путь не найден в pageSequence")}}},200),[s,a,h,o]);(0,c.useEffect)(()=>(window.addEventListener("scroll",u),console.log("Добавлен слушатель события scroll"),()=>{window.removeEventListener("scroll",u),console.log("Удалён слушатель события scroll")}),[u]),(0,c.useEffect)(()=>{m(!1)},[s]);let x=[{text:e("home"),href:"/"},{text:e("aboutUs"),href:"/about-us"},{text:e("services"),href:"/services"},{text:e("trucks"),href:"/auto-park"},{text:e("careers"),href:"/careers"},{text:e("contactUs"),href:"/contacts"}];return(0,t.jsx)("footer",{id:"contact",style:{backgroundColor:"#242b33"},children:(0,t.jsxs)("div",{className:"footer-content container",children:[(0,t.jsxs)("div",{className:"footer-card",children:[(0,t.jsx)("h4",{className:"footer-card-title",children:e("information")}),(0,t.jsx)("nav",{className:"footer-navigation",children:(0,t.jsx)("ul",{className:"footer-nav-list",children:x.map((e,a)=>(0,t.jsx)("li",{className:"footer-nav-item",children:(0,t.jsx)(n.default,{className:"nav-item-link",href:e.href,children:e.text})},a))})})]}),(0,t.jsxs)("div",{className:"footer-card",children:[(0,t.jsx)("h4",{className:"footer-card-title",children:e("contactUs")}),(0,t.jsxs)("div",{className:"footer-card-row",children:[(0,t.jsxs)("h5",{className:"card-row-title",children:[e("address"),":"]}),(0,t.jsx)("p",{className:"card-row-info",children:e("address_text")})]}),(0,t.jsxs)("div",{className:"footer-card-row",children:[(0,t.jsxs)("h5",{className:"card-row-title",children:[e("phoneNumbers"),":"]}),(0,t.jsx)("p",{className:"card-row-info",children:"+ 38 (050) 449 52 71"}),(0,t.jsx)("p",{className:"card-row-info",children:"+ 38 (050) 206 64 50"})]}),(0,t.jsxs)("div",{className:"footer-card-row",children:[(0,t.jsxs)("h5",{className:"card-row-title",children:[e("email2"),":"]}),(0,t.jsx)("p",{className:"card-row-info",children:"ua@agrotep.com"}),(0,t.jsx)("p",{className:"card-row-info",children:"agrotep@agrotep.com"})]})]}),(0,t.jsxs)("div",{className:"footer-card",children:[(0,t.jsx)("h4",{className:"footer-card-title",children:e("socialMedia")}),(0,t.jsxs)("div",{className:"footer-socials",children:[(0,t.jsx)("a",{href:"https://www.youtube.com/@agrotep6651/community",target:"_blank",className:"social-link youtube"}),(0,t.jsx)("a",{href:"https://www.facebook.com/agrotep/?locale=uk_UA",target:"_blank",className:"social-link facebook"}),(0,t.jsx)("a",{href:"https://www.instagram.com/agrotep_ltd/",target:"_blank",className:"social-link instagram"}),(0,t.jsx)("a",{href:"https://ua.linkedin.com/company/agrotep",target:"_blank",className:"social-link linkedin"})]}),(0,t.jsxs)("a",{className:"logo",href:"index.html",children:[(0,t.jsx)("img",{className:"logo-img",src:"/Agrotep/img/main/logo.svg",alt:""}),(0,t.jsx)("img",{className:"logo-text",src:"/Agrotep/img/main/White_text3.png",alt:""})]})]})]})})}},5612:function(e,a,s){"use strict";var t=s(7437),i=s(2265),n=s(611),r=s(8916),c=s(7648),l=s(3949);a.default=()=>{let[e,a]=(0,i.useState)(!1),[s,o]=(0,i.useState)(!1),[d,m]=(0,i.useState)(-1),[h,u]=(0,i.useState)("UA"),{t:x}=(0,l.$G)(),{i18n:f}=(0,l.$G)(),v=[{text:x("home"),href:"/"},{text:x("aboutUs"),href:"/about-us"},{text:x("services"),href:"/services"},{text:x("trucks"),href:"/auto-park"},{text:x("careers"),href:"/careers"},{text:x("contactUs"),href:"/contacts"}],g=()=>o(e=>!e),[p,N]=(0,i.useState)(!0),[j,w]=(0,i.useState)(0),b=()=>{window.scrollY>j?N(!1):N(!0),w(window.scrollY)};(0,i.useEffect)(()=>(window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b)}),[j]);let k=(e,a)=>{e.preventDefault(),f.changeLanguage("UA"===a?"uk":"en"),u(a),localStorage.setItem("activeLang",a)},E=()=>{a(e=>!e),document.body.classList.toggle("no-scroll",!e)};(0,i.useEffect)(()=>{let e=localStorage.getItem("activeLang");console.log(e),e&&(u(e),setTimeout(()=>{f.changeLanguage("UA"===e?"uk":"en")},100))},[f]),(0,i.useEffect)(()=>{let e=()=>{m(window.innerWidth?window.innerWidth>=1051?1:0:-1)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let y={hidden:{opacity:0,x:100},visible:{opacity:1,x:0,transition:{duration:.9,staggerChildren:.2,delay:.2}}},_={active:{scale:1.2,backgroundColor:"#eff3f3",color:"#f2cd00",transition:{type:"spring",stiffness:300,damping:25}},inactive:{scale:1,backgroundColor:"transparent",color:"#fff",transition:{type:"spring",stiffness:300,damping:25}}};return(0,t.jsx)("header",{className:"header ".concat(p?"show":"hide"),children:(0,t.jsxs)("div",{className:"container header",children:[(0,t.jsxs)(c.default,{className:"logo",href:"/",children:[(0,t.jsx)(n.E.img,{className:"logo-img",src:"/Agrotep/img/main/logo.svg",alt:"",initial:"hidden",animate:"visible",variants:{hidden:{y:-175,opacity:0},visible:{y:0,opacity:1,transition:{duration:1.2}}}}),(0,t.jsx)(n.E.img,{className:"logo-text",src:"/Agrotep/img/main/White_text3.png",alt:"",initial:"hidden",animate:"visible",variants:{hidden:{y:-175,opacity:0},visible:{y:0,opacity:1,transition:{duration:1.2,delay:.4}}}})]}),(0,t.jsxs)("div",{className:"navigation-container",children:[1===d?(0,t.jsx)(n.E.nav,{className:"navigation ".concat(e?"show-nav":""),initial:"hidden",animate:d||e?"visible":"hidden",variants:y,children:(0,t.jsx)("ul",{className:"nav-list",children:v.map(e=>(0,t.jsx)(n.E.li,{className:"nav-item",variants:y,children:(0,t.jsx)(c.default,{href:e.href,className:"nav-item-link",children:e.text})},e.text))})}):0===d?(0,t.jsx)("div",{className:"navigation ".concat(e?"show-nav":""),children:(0,t.jsxs)("ul",{className:"nav-list",children:[v.map(e=>(0,t.jsx)(n.E.li,{className:"nav-item",variants:y,onClick:E,children:(0,t.jsx)(c.default,{href:e.href,className:"nav-item-link",children:e.text})},e.text)),(0,t.jsxs)(n.E.li,{className:"lang-menu mobile",initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.9,delay:1},children:[(0,t.jsx)(n.E.a,{href:"#",className:"lang",variants:_,animate:"UA"===h?"active":"inactive",onClick:e=>k(e,"UA"),children:(0,t.jsx)("span",{children:"UA"})}),(0,t.jsx)(n.E.a,{href:"#",className:"active-lang lang",variants:_,animate:"EN"===h?"active":"inactive",onClick:e=>k(e,"EN"),children:(0,t.jsx)("span",{children:"EN"})})]})]})}):(0,t.jsx)(t.Fragment,{}),(0,t.jsxs)(n.E.button,{className:"nav-request-btn extra-top extra-bottom",onClick:g,initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.9,delay:1},children:[(0,t.jsx)("span",{className:"nav-request-line"}),x("transportation_calculation")]}),(0,t.jsx)(r.Z,{isOpen:s,onClose:g}),(0,t.jsxs)(n.E.div,{className:"lang-menu",initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.9,delay:1},children:[(0,t.jsx)(n.E.a,{href:"#",className:"lang",variants:_,animate:"UA"===h?"active":"inactive",onClick:e=>k(e,"UA"),children:(0,t.jsx)("span",{children:"UA"})}),(0,t.jsx)(n.E.a,{href:"#",className:"active-lang lang",variants:_,animate:"EN"===h?"active":"inactive",onClick:e=>k(e,"EN"),children:(0,t.jsx)("span",{children:"EN"})})]}),(0,t.jsxs)("div",{className:"burger-menu ".concat(e?"active":""),onClick:E,children:[(0,t.jsx)("span",{className:"burger-line"}),(0,t.jsx)("span",{className:"burger-line"}),(0,t.jsx)("span",{className:"burger-line"})]})]})]})})}},8972:function(e,a,s){"use strict";s(6951),a.default=e=>{let{children:a}=e;return a}},6338:function(){}},function(e){e.O(0,[772,297,505,550,0,535,971,117,744],function(){return e(e.s=6908)}),_N_E=e.O()}]);