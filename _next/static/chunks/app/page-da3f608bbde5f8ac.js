(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5140:function(e,t,n){Promise.resolve().then(n.bind(n,9597))},8916:function(e,t,n){"use strict";var a=n(7437),s=n(2265),i=n(3949);t.Z=e=>{let{isOpen:t,onClose:n}=e,{t:r}=(0,i.$G)(),[l,o]=(0,s.useState)(!1),[c,d]=(0,s.useState)(!1),m=async e=>{e.preventDefault(),o(!0);let t=e.currentTarget,a=new FormData(t);try{await fetch("https://script.google.com/macros/s/AKfycbxU6W56jKgJqc7LY53iq0Jj5Wr3SUQH5KQro9lRTNkBmFLZNm6x_nvFWsGL-r91tfwu/exec",{method:"POST",body:a}),d(!0),t.reset(),n(),setTimeout(()=>{d(!1)},4e3)}catch(e){console.error("Error!",e)}finally{o(!1)}};return(0,a.jsx)("div",{className:"modal ".concat(t?"show":"hide"),onClick:n,children:(0,a.jsxs)("div",{className:"modal-body",onClick:e=>e.stopPropagation(),children:[(0,a.jsxs)("span",{className:"close-modal-btn",onClick:n,children:[(0,a.jsx)("span",{className:"line"}),(0,a.jsx)("span",{className:"line"})]}),(0,a.jsxs)("form",{name:"submit-to-google-sheet",className:"modal-form",onSubmit:m,children:[(0,a.jsxs)("div",{className:"about-info",children:[(0,a.jsx)("legend",{className:"form-legend form-legend-title",children:r("request_calculation")}),(0,a.jsx)("input",{type:"text",name:"name",placeholder:r("name"),className:"input",required:!0}),(0,a.jsx)("input",{type:"text",name:"phone",placeholder:r("phone"),className:"input"}),(0,a.jsx)("input",{type:"email",name:"email",placeholder:r("email"),className:"input",required:!0}),(0,a.jsx)("input",{type:"text",name:"company",placeholder:r("company"),className:"input",required:!0})]}),(0,a.jsxs)("div",{className:"address-info",children:[(0,a.jsxs)("div",{className:"address",children:[(0,a.jsx)("legend",{className:"form-legend",children:r("loading_address")}),(0,a.jsx)("input",{type:"text",name:"upload-location",placeholder:r("upload_location"),className:"input"}),(0,a.jsx)("input",{type:"text",name:"customs-clearance-start",placeholder:r("customs_clearance_start"),className:"input"})]}),(0,a.jsxs)("div",{className:"address",children:[(0,a.jsx)("legend",{className:"form-legend",children:r("unloading_address")}),(0,a.jsx)("input",{type:"text",name:"unload-location",placeholder:r("unload_location"),className:"input"}),(0,a.jsx)("input",{type:"text",name:"customs-clearance-end",placeholder:r("customs_clearance_end"),className:"input"})]})]}),(0,a.jsxs)("div",{className:"additionally-info",children:[(0,a.jsx)("legend",{className:"form-legend",children:r("cargo_information")}),(0,a.jsx)("input",{type:"text",name:"cargo-information",placeholder:r("cargo_type"),className:"input"}),(0,a.jsx)("input",{type:"number",name:"weight",placeholder:r("weight"),className:"input"}),(0,a.jsxs)("select",{name:"truck-type",className:"input",children:[(0,a.jsx)("option",{value:"",children:r("select_trailer")}),(0,a.jsx)("option",{value:"tent",children:r("tent")}),(0,a.jsx)("option",{value:"ref",children:r("ref")}),(0,a.jsx)("option",{value:"any",children:r("any")})]}),(0,a.jsx)("input",{type:"date",name:"date",className:"input"}),(0,a.jsx)("textarea",{name:"message",placeholder:r("additional_information"),className:"comment"})]}),(0,a.jsx)("button",{className:"request-btn",type:"submit",style:{cursor:"pointer"},children:r("send_request")})]}),l&&(0,a.jsx)("div",{className:"loader"}),c&&(0,a.jsx)("div",{className:"feedback-thanks show",children:r("thank_you")})]})})}},3992:function(e,t,n){"use strict";var a=n(7437),s=n(2265);t.Z=e=>{let{texts:t,placeholder:n="{span}",Element:i="span",className:r}=e;return(0,s.useMemo)(()=>{let e={};return t.forEach((t,s)=>{let l=t.split(n);e["text".concat(s+1)]=l.map((e,t)=>t%2==1?(0,a.jsx)(i,{className:r,children:e},t):e)}),e},[t,n,i,r])}},9597:function(e,t,n){"use strict";n.d(t,{default:function(){return j}});var a=n(7437),s=n(2265),i=()=>{let[e,t]=(0,s.useState)(!1),[n,i]=(0,s.useState)(!1),r=async e=>{e.preventDefault(),t(!0);let n=e.currentTarget,a=new FormData(n);try{await fetch("https://script.google.com/macros/s/AKfycbxU6W56jKgJqc7LY53iq0Jj5Wr3SUQH5KQro9lRTNkBmFLZNm6x_nvFWsGL-r91tfwu/exec",{method:"POST",body:a}),i(!0),n.reset(),setTimeout(()=>{i(!1)},4e3)}catch(e){console.error("Error!")}finally{t(!1)}};return(0,a.jsxs)("section",{className:"locations",children:[(0,a.jsx)("img",{src:"/Agrotep/img/main/map.jpg",alt:"",className:"location-map"}),(0,a.jsxs)("form",{onSubmit:r,className:"modal-form location-form",name:"submit-to-google-sheet-contact",children:[(0,a.jsxs)("div",{className:"about-info",children:[(0,a.jsx)("legend",{className:"form-legend form-legend-title location-legend",children:"Розкажіть про вантаж — ми знайдемо рішення!"}),(0,a.jsx)("input",{type:"text",name:"name",placeholder:"Ім'я *",className:"input location-input",required:!0}),(0,a.jsx)("input",{type:"text",name:"phone",placeholder:"Номер телефону *",className:"input location-input",required:!0}),(0,a.jsx)("input",{type:"text",name:"upload-location",placeholder:"Місце завантаження",className:"input location-input"}),(0,a.jsx)("input",{type:"text",name:"unload-location",placeholder:"Місце розвантаження",className:"input location-input"})]}),(0,a.jsx)("textarea",{name:"message",placeholder:"Додаткова інформація",className:"comment location-comment",required:!0}),(0,a.jsx)("button",{className:"request-btn",type:"submit",disabled:e,children:e?"Відправляється...":"Зв'язатись"}),n&&(0,a.jsxs)("div",{className:"feedback-thanks show",children:[(0,a.jsx)("img",{src:"/Agrotep/img/main/done.svg",alt:"",style:{width:40,marginRight:10}}),"Request received"]})]})]})},r=n(3223),l=n(8771),o=n(5647);function c(e,t){[...t].reverse().forEach(n=>{let a=e.getVariant(n);a&&(0,l.C)(e,a),e.variantChildren&&e.variantChildren.forEach(e=>{c(e,t)})})}function d(){let e=!1,t=new Set,n={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(n,a){(0,r.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let s=[];return t.forEach(e=>{s.push((0,o.d)(e,n,{transitionOverride:a}))}),Promise.all(s)},set:n=>((0,r.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{Array.isArray(n)?c(e,n):"string"==typeof n?c(e,[n]):(0,l.C)(e,n)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,n.stop()})};return n}var m=n(3576),u=n(1534);let p=function(){let e=(0,m.h)(d);return(0,u.L)(e.mount,[]),e};var h=n(611),x=n(3949),g=n(8819),y=n(8916),f=n(3992),j=()=>{let{t:e}=(0,x.$G)(),[t,n]=(0,g.YD)({triggerOnce:!0,threshold:.3}),r=p(),[l,o]=(0,s.useState)(!1),c=()=>o(e=>!e);(0,s.useEffect)(()=>{n&&r.start({x:0,opacity:1})},[n,r]);let{text1:d}=(0,f.Z)({texts:[e("history_text")],className:"special-span-class"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",{className:"hero",children:(0,a.jsxs)("div",{className:"hero-content container",children:[(0,a.jsx)(h.E.img,{src:"/Agrotep/img/main/name.png",alt:"",className:"hero-name",initial:{y:"-175%",opacity:0},animate:{y:"0%",opacity:1},transition:{duration:1.2}}),(0,a.jsx)(h.E.h1,{className:"hero-title",initial:{y:"-175%",opacity:0},animate:{y:"0%",opacity:1},transition:{duration:1.2,delay:.5},children:e("hero_title")}),(0,a.jsx)(h.E.button,{className:"hero-btn",initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.9,delay:1},onClick:c,children:e("consultation_button")})]})}),(0,a.jsx)("section",{className:"history",children:(0,a.jsxs)("div",{className:"history-container",ref:t,children:[(0,a.jsx)(h.E.p,{className:"history-text",initial:{x:"140%",opacity:0},animate:r,transition:{duration:1.2},children:d}),(0,a.jsx)("div",{className:"history-img-bg"})]})}),(0,a.jsx)("section",{className:"experience",children:(0,a.jsxs)("div",{className:"exp-bg",children:[(0,a.jsxs)(h.E.div,{className:"exp-bg-content",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{hidden:{x:-275,opacity:0},visible:{x:0,opacity:1,transition:{duration:.8,staggerChildren:.6}}},children:[(0,a.jsx)("span",{className:"exp-bg-text",children:e("experience_quality")}),(0,a.jsx)("span",{className:"exp-bg-text",children:e("experience_speed")}),(0,a.jsx)("span",{className:"exp-bg-text",children:e("experience_reliable")})]}),(0,a.jsxs)(h.E.div,{className:"exp-years",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{hidden:{x:270,opacity:0},visible:{x:0,opacity:1,transition:{duration:1,delay:1.2,staggerChildren:.8}}},children:[(0,a.jsx)("span",{className:"exp-years-img exp-3d",children:"30"}),(0,a.jsx)("span",{className:"exp-years-text exp-years-img2 exp-3d",children:e("experience_years")})]})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(y.Z,{isOpen:l,onClose:c})]})}},8819:function(e,t,n){"use strict";n.d(t,{YD:function(){return c}});var a=n(2265),s=Object.defineProperty,i=new Map,r=new WeakMap,l=0,o=void 0;function c(){var e;let{threshold:t,delay:n,trackVisibility:s,rootMargin:c,root:d,triggerOnce:m,skip:u,initialInView:p,fallbackInView:h,onChange:x}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[g,y]=a.useState(null),f=a.useRef(),[j,N]=a.useState({inView:!!p,entry:void 0});f.current=x,a.useEffect(()=>{let e;if(!u&&g)return e=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o;if(void 0===window.IntersectionObserver&&void 0!==a){let s=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}let{id:s,observer:c,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return"".concat(t,"_").concat("root"===t?(n=e.root)?(r.has(n)||(l+=1,r.set(n,l.toString())),r.get(n)):"0":e[t])}).toString(),n=i.get(t);if(!n){let a;let s=new Map,r=new IntersectionObserver(t=>{t.forEach(t=>{var n;let i=t.isIntersecting&&a.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(n=s.get(t.target))||n.forEach(e=>{e(i,t)})})},e);a=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:r,elements:s},i.set(t,n)}return n}(n),m=d.get(e)||[];return d.has(e)||d.set(e,m),m.push(t),c.observe(e),function(){m.splice(m.indexOf(t),1),0===m.length&&(d.delete(e),c.unobserve(e)),0===d.size&&(c.disconnect(),i.delete(s))}}(g,(t,n)=>{N({inView:t,entry:n}),f.current&&f.current(t,n),n.isIntersecting&&m&&e&&(e(),e=void 0)},{root:d,rootMargin:c,threshold:t,trackVisibility:s,delay:n},h),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,g,d,c,m,u,s,h,n]);let v=null==(e=j.entry)?void 0:e.target,b=a.useRef();g||!v||m||u||b.current===v||(b.current=v,N({inView:!!p,entry:void 0}));let w=[y,j.inView,j.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}a.Component}},function(e){e.O(0,[505,971,117,744],function(){return e(e.s=5140)}),_N_E=e.O()}]);