(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6908:function(e,a,s){Promise.resolve().then(s.bind(s,9660)),Promise.resolve().then(s.bind(s,5612)),Promise.resolve().then(s.bind(s,8972)),Promise.resolve().then(s.t.bind(s,6338,23)),Promise.resolve().then(s.t.bind(s,7354,23)),Promise.resolve().then(s.t.bind(s,6968,23))},9660:function(e,a,s){"use strict";var t=s(7437),i=s(7648),n=s(3949);a.default=()=>{let{t:e}=(0,n.$G)(),a=[{text:e("home"),href:"/"},{text:e("aboutUs"),href:"/about-us"},{text:e("services"),href:"/services"},{text:e("trucks"),href:"/auto-park"},{text:e("careers"),href:"/careers"},{text:e("contactUs"),href:"/contacts"}];return(0,t.jsx)("footer",{id:"contact",style:{backgroundColor:"#242b33"},children:(0,t.jsxs)("div",{className:"footer-content container",children:[(0,t.jsxs)("div",{className:"footer-card",children:[(0,t.jsx)("h4",{className:"footer-card-title",children:e("information")}),(0,t.jsx)("nav",{className:"footer-navigation",children:(0,t.jsx)("ul",{className:"footer-nav-list",children:a.map((e,a)=>(0,t.jsx)("li",{className:"footer-nav-item",children:(0,t.jsx)(i.default,{className:"nav-item-link",href:e.href,children:e.text})},a))})})]}),(0,t.jsxs)("div",{className:"footer-card",children:[(0,t.jsx)("h4",{className:"footer-card-title",children:e("contactUs")}),(0,t.jsxs)("div",{className:"footer-card-row",children:[(0,t.jsxs)("h5",{className:"card-row-title",children:[e("address"),":"]}),(0,t.jsx)("p",{className:"card-row-info",children:e("address_text")})]}),(0,t.jsxs)("div",{className:"footer-card-row",children:[(0,t.jsxs)("h5",{className:"card-row-title",children:[e("phoneNumbers"),":"]}),(0,t.jsx)("p",{className:"card-row-info",children:"+ 38 (050) 449 52 71"}),(0,t.jsx)("p",{className:"card-row-info",children:"+ 38 (050) 206 64 50"})]}),(0,t.jsxs)("div",{className:"footer-card-row",children:[(0,t.jsxs)("h5",{className:"card-row-title",children:[e("email2"),":"]}),(0,t.jsx)("p",{className:"card-row-info",children:"ua@agrotep.com"}),(0,t.jsx)("p",{className:"card-row-info",children:"agrotep@agrotep.com"})]})]}),(0,t.jsxs)("div",{className:"footer-card",children:[(0,t.jsx)("h4",{className:"footer-card-title",children:e("socialMedia")}),(0,t.jsxs)("div",{className:"footer-socials",children:[(0,t.jsx)("a",{href:"https://www.youtube.com/@agrotep6651/community",target:"_blank",className:"social-link youtube"}),(0,t.jsx)("a",{href:"https://www.facebook.com/agrotep/?locale=uk_UA",target:"_blank",className:"social-link facebook"}),(0,t.jsx)("a",{href:"https://www.instagram.com/agrotep_ltd/",target:"_blank",className:"social-link instagram"}),(0,t.jsx)("a",{href:"https://ua.linkedin.com/company/agrotep",target:"_blank",className:"social-link linkedin"})]}),(0,t.jsxs)("a",{className:"logo",href:"index.html",children:[(0,t.jsx)("img",{className:"logo-img",src:"/img/main/logo.svg",alt:""}),(0,t.jsx)("img",{className:"logo-text",src:"/img/main/White_text3.png",alt:""})]})]})]})})}},5612:function(e,a,s){"use strict";var t=s(7437),i=s(2265),n=s(611),r=s(8916),l=s(7648),c=s(3949);a.default=()=>{let[e,a]=(0,i.useState)(!1),[s,o]=(0,i.useState)(!1),[d,m]=(0,i.useState)(-1),[h,x]=(0,i.useState)("UA"),{t:f}=(0,c.$G)(),{i18n:u}=(0,c.$G)();console.log(d);let v=[{text:f("home"),href:"/"},{text:f("aboutUs"),href:"/about-us"},{text:f("services"),href:"/services"},{text:f("trucks"),href:"/auto-park"},{text:f("careers"),href:"/careers"},{text:f("contactUs"),href:"/contacts"}],g=()=>o(e=>!e),[N,j]=(0,i.useState)(!0),[p,w]=(0,i.useState)(0),b=()=>{window.scrollY>p?j(!1):j(!0),w(window.scrollY)};(0,i.useEffect)(()=>(window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b)}),[p]);let k=(e,a)=>{e.preventDefault(),u.changeLanguage("UA"===a?"uk":"en"),x(a),localStorage.setItem("activeLang",a)},y=()=>{a(e=>!e),document.body.classList.toggle("no-scroll",!e)};(0,i.useEffect)(()=>{let e=localStorage.getItem("activeLang");console.log(e),e&&(x(e),setTimeout(()=>{u.changeLanguage("UA"===e?"uk":"en")},100))},[u]),(0,i.useEffect)(()=>{let e=()=>{m(window.innerWidth?window.innerWidth>=1051?1:0:-1)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let E={hidden:{opacity:0,x:100},visible:{opacity:1,x:0,transition:{duration:.9,staggerChildren:.2,delay:.2}}},_={active:{scale:1.2,backgroundColor:"#eff3f3",color:"#f2cd00",transition:{type:"spring",stiffness:300,damping:25}},inactive:{scale:1,backgroundColor:"transparent",color:"#fff",transition:{type:"spring",stiffness:300,damping:25}}};return(0,t.jsx)("header",{className:"header ".concat(N?"show":"hide"),children:(0,t.jsxs)("div",{className:"container header",children:[(0,t.jsxs)(l.default,{className:"logo",href:"/",children:[(0,t.jsx)(n.E.img,{className:"logo-img",src:"/img/main/logo.svg",alt:"",initial:"hidden",animate:"visible",variants:{hidden:{y:-175,opacity:0},visible:{y:0,opacity:1,transition:{duration:1.2}}}}),(0,t.jsx)(n.E.img,{className:"logo-text",src:"/img/main/White_text3.png",alt:"",initial:"hidden",animate:"visible",variants:{hidden:{y:-175,opacity:0},visible:{y:0,opacity:1,transition:{duration:1.2,delay:.4}}}})]}),(0,t.jsxs)("div",{className:"navigation-container",children:[1===d?(0,t.jsx)(n.E.nav,{className:"navigation ".concat(e?"show-nav":""),initial:"hidden",animate:d||e?"visible":"hidden",variants:E,children:(0,t.jsx)("ul",{className:"nav-list",children:v.map(e=>(0,t.jsx)(n.E.li,{className:"nav-item",variants:E,children:(0,t.jsx)(l.default,{href:e.href,className:"nav-item-link",children:e.text})},e.text))})}):0===d?(0,t.jsx)("div",{className:"navigation ".concat(e?"show-nav":""),children:(0,t.jsxs)("ul",{className:"nav-list",children:[v.map(e=>(0,t.jsx)(n.E.li,{className:"nav-item",variants:E,onClick:y,children:(0,t.jsx)(l.default,{href:e.href,className:"nav-item-link",children:e.text})},e.text)),(0,t.jsxs)(n.E.li,{className:"lang-menu mobile",initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.9,delay:1},children:[(0,t.jsx)(n.E.a,{href:"#",className:"lang",variants:_,animate:"UA"===h?"active":"inactive",onClick:e=>k(e,"UA"),children:(0,t.jsx)("span",{children:"UA"})}),(0,t.jsx)(n.E.a,{href:"#",className:"active-lang lang",variants:_,animate:"EN"===h?"active":"inactive",onClick:e=>k(e,"EN"),children:(0,t.jsx)("span",{children:"EN"})})]})]})}):(0,t.jsx)(t.Fragment,{}),(0,t.jsxs)(n.E.button,{className:"nav-request-btn extra-top extra-bottom",onClick:g,initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.9,delay:1},children:[(0,t.jsx)("span",{className:"nav-request-line"}),f("transportation_calculation")]}),(0,t.jsx)(r.Z,{isOpen:s,onClose:g}),(0,t.jsxs)(n.E.div,{className:"lang-menu",initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.9,delay:1},children:[(0,t.jsx)(n.E.a,{href:"#",className:"lang",variants:_,animate:"UA"===h?"active":"inactive",onClick:e=>k(e,"UA"),children:(0,t.jsx)("span",{children:"UA"})}),(0,t.jsx)(n.E.a,{href:"#",className:"active-lang lang",variants:_,animate:"EN"===h?"active":"inactive",onClick:e=>k(e,"EN"),children:(0,t.jsx)("span",{children:"EN"})})]}),(0,t.jsxs)("div",{className:"burger-menu ".concat(e?"active":""),onClick:y,children:[(0,t.jsx)("span",{className:"burger-line"}),(0,t.jsx)("span",{className:"burger-line"}),(0,t.jsx)("span",{className:"burger-line"})]})]})]})})}},8972:function(e,a,s){"use strict";s(6951),a.default=e=>{let{children:a}=e;return a}},6338:function(){}},function(e){e.O(0,[772,297,505,550,328,535,971,117,744],function(){return e(e.s=6908)}),_N_E=e.O()}]);