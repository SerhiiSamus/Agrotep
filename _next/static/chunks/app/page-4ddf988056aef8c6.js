(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5140:function(e,t,n){Promise.resolve().then(n.bind(n,9597))},9597:function(e,t,n){"use strict";n.d(t,{default:function(){return f}});var i=n(7437),s=n(2265),a=()=>{let[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),r=async e=>{e.preventDefault(),t(!0);let n=e.currentTarget,i=new FormData(n);try{await fetch("https://script.google.com/macros/s/AKfycbxU6W56jKgJqc7LY53iq0Jj5Wr3SUQH5KQro9lRTNkBmFLZNm6x_nvFWsGL-r91tfwu/exec",{method:"POST",body:i}),a(!0),n.reset(),setTimeout(()=>{a(!1)},4e3)}catch(e){console.error("Error!")}finally{t(!1)}};return(0,i.jsxs)("section",{className:"locations",children:[(0,i.jsx)("img",{src:"/Agrotep/img/main/map.jpg",alt:"",className:"location-map"}),(0,i.jsxs)("form",{onSubmit:r,className:"modal-form location-form",name:"submit-to-google-sheet-contact",children:[(0,i.jsxs)("div",{className:"about-info",children:[(0,i.jsx)("legend",{className:"form-legend form-legend-title location-legend",children:"Розкажіть про вантаж — ми знайдемо рішення!"}),(0,i.jsx)("input",{type:"text",name:"name",placeholder:"Ім'я *",className:"input location-input",required:!0}),(0,i.jsx)("input",{type:"text",name:"phone",placeholder:"Номер телефону *",className:"input location-input",required:!0}),(0,i.jsx)("input",{type:"text",name:"upload-location",placeholder:"Місце завантаження",className:"input location-input"}),(0,i.jsx)("input",{type:"text",name:"unload-location",placeholder:"Місце розвантаження",className:"input location-input"})]}),(0,i.jsx)("textarea",{name:"message",placeholder:"Додаткова інформація",className:"comment location-comment",required:!0}),(0,i.jsx)("button",{className:"request-btn",type:"submit",disabled:e,children:e?"Відправляється...":"Зв'язатись"}),n&&(0,i.jsxs)("div",{className:"feedback-thanks show",children:[(0,i.jsx)("img",{src:"/svg/done.svg",alt:"",style:{width:40,marginRight:10}}),"Request received"]})]})]})},r=n(3223),o=n(8771),l=n(5647);function c(e,t){[...t].reverse().forEach(n=>{let i=e.getVariant(n);i&&(0,o.C)(e,i),e.variantChildren&&e.variantChildren.forEach(e=>{c(e,t)})})}function d(){let e=!1,t=new Set,n={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(n,i){(0,r.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let s=[];return t.forEach(e=>{s.push((0,l.d)(e,n,{transitionOverride:i}))}),Promise.all(s)},set:n=>((0,r.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{Array.isArray(n)?c(e,n):"string"==typeof n?c(e,[n]):(0,o.C)(e,n)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,n.stop()})};return n}var u=n(3576),h=n(1534);let m=function(){let e=(0,u.h)(d);return(0,h.L)(e.mount,[]),e};var p=n(611),x=n(3949),g=n(8819),f=()=>{let{t:e}=(0,x.$G)(),[t,n]=(0,g.YD)({triggerOnce:!0,threshold:.3}),r=m();return(0,s.useEffect)(()=>{n&&r.start({x:0,opacity:1})},[n,r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("section",{className:"hero",children:(0,i.jsxs)("div",{className:"hero-content container",children:[(0,i.jsx)(p.E.img,{src:"/Agrotep/img/main/name.png",alt:"",className:"hero-name",initial:{y:"-175%",opacity:0},animate:{y:"0%",opacity:1},transition:{duration:1.2}}),(0,i.jsx)(p.E.h1,{className:"hero-title",initial:{y:"-175%",opacity:0},animate:{y:"0%",opacity:1},transition:{duration:1.2,delay:.5},children:e("hero_title")}),(0,i.jsx)(p.E.button,{className:"hero-btn",initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.9,delay:1},children:e("consultation_button")})]})}),(0,i.jsx)("section",{className:"history",children:(0,i.jsxs)("div",{className:"history-container",ref:t,children:[(0,i.jsx)(p.E.p,{className:"history-text",initial:{x:"140%",opacity:0},animate:r,transition:{duration:1.2},children:e("history_text")}),(0,i.jsx)("div",{className:"history-img-bg"})]})}),(0,i.jsx)("section",{className:"experience",children:(0,i.jsxs)("div",{className:"exp-bg",children:[(0,i.jsxs)(p.E.div,{className:"exp-bg-content",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{hidden:{x:-275,opacity:0},visible:{x:0,opacity:1,transition:{duration:.8,staggerChildren:.6}}},children:[(0,i.jsx)("span",{className:"exp-bg-text",children:e("experience_quality")}),(0,i.jsx)("span",{className:"exp-bg-text",children:e("experience_speed")}),(0,i.jsx)("span",{className:"exp-bg-text",children:e("experience_reliable")})]}),(0,i.jsxs)(p.E.div,{className:"exp-years",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{hidden:{x:270,opacity:0},visible:{x:0,opacity:1,transition:{duration:1,delay:1.2,staggerChildren:.8}}},children:[(0,i.jsx)("span",{className:"exp-years-img exp-3d",children:"30"}),(0,i.jsx)("span",{className:"exp-years-text exp-years-img2 exp-3d",children:e("experience_years")})]})]})}),(0,i.jsx)(a,{})]})}},8819:function(e,t,n){"use strict";n.d(t,{YD:function(){return c}});var i=n(2265),s=Object.defineProperty,a=new Map,r=new WeakMap,o=0,l=void 0;function c(){var e;let{threshold:t,delay:n,trackVisibility:s,rootMargin:c,root:d,triggerOnce:u,skip:h,initialInView:m,fallbackInView:p,onChange:x}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[g,f]=i.useState(null),y=i.useRef(),[v,b]=i.useState({inView:!!m,entry:void 0});y.current=x,i.useEffect(()=>{let e;if(!h&&g)return e=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if(void 0===window.IntersectionObserver&&void 0!==i){let s=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}let{id:s,observer:c,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return"".concat(t,"_").concat("root"===t?(n=e.root)?(r.has(n)||(o+=1,r.set(n,o.toString())),r.get(n)):"0":e[t])}).toString(),n=a.get(t);if(!n){let i;let s=new Map,r=new IntersectionObserver(t=>{t.forEach(t=>{var n;let a=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=s.get(t.target))||n.forEach(e=>{e(a,t)})})},e);i=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:r,elements:s},a.set(t,n)}return n}(n),u=d.get(e)||[];return d.has(e)||d.set(e,u),u.push(t),c.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(d.delete(e),c.unobserve(e)),0===d.size&&(c.disconnect(),a.delete(s))}}(g,(t,n)=>{b({inView:t,entry:n}),y.current&&y.current(t,n),n.isIntersecting&&u&&e&&(e(),e=void 0)},{root:d,rootMargin:c,threshold:t,trackVisibility:s,delay:n},p),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,g,d,c,u,h,s,p,n]);let j=null==(e=v.entry)?void 0:e.target,N=i.useRef();g||!j||u||h||N.current===j||(N.current=j,b({inView:!!m,entry:void 0}));let w=[f,v.inView,v.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}i.Component}},function(e){e.O(0,[505,971,117,744],function(){return e(e.s=5140)}),_N_E=e.O()}]);