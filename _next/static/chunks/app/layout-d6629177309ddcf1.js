(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6908:function(e,a,t){Promise.resolve().then(t.bind(t,9660)),Promise.resolve().then(t.bind(t,5612)),Promise.resolve().then(t.bind(t,6421)),Promise.resolve().then(t.t.bind(t,6338,23)),Promise.resolve().then(t.t.bind(t,7354,23)),Promise.resolve().then(t.t.bind(t,6968,23))},8916:function(e,a,t){"use strict";var i=t(7437),n=t(2265),s=t(3949);a.Z=e=>{let{isOpen:a,onClose:t}=e,{t:r}=(0,s.$G)(),[o,l]=(0,n.useState)(!1),[c,d]=(0,n.useState)(!1),p=async e=>{e.preventDefault(),l(!0);let a=e.currentTarget,i=new FormData(a);try{await fetch("https://script.google.com/macros/s/AKfycbxU6W56jKgJqc7LY53iq0Jj5Wr3SUQH5KQro9lRTNkBmFLZNm6x_nvFWsGL-r91tfwu/exec",{method:"POST",body:i}),d(!0),a.reset(),t(),setTimeout(()=>{d(!1)},4e3)}catch(e){console.error("Error!",e)}finally{l(!1)}};return(0,i.jsx)("div",{className:"modal ".concat(a?"show":"hide"),onClick:t,children:(0,i.jsxs)("div",{className:"modal-body",onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)("span",{className:"close-modal-btn",onClick:t,children:[(0,i.jsx)("span",{className:"line"}),(0,i.jsx)("span",{className:"line"})]}),(0,i.jsxs)("form",{name:"submit-to-google-sheet",className:"modal-form",onSubmit:p,children:[(0,i.jsxs)("div",{className:"about-info",children:[(0,i.jsx)("legend",{className:"form-legend form-legend-title",children:r("request_calculation")}),(0,i.jsx)("input",{type:"text",name:"name",placeholder:r("name"),className:"input",required:!0}),(0,i.jsx)("input",{type:"text",name:"phone",placeholder:r("phone"),className:"input"}),(0,i.jsx)("input",{type:"email",name:"email",placeholder:r("email"),className:"input",required:!0}),(0,i.jsx)("input",{type:"text",name:"company",placeholder:r("company"),className:"input",required:!0})]}),(0,i.jsxs)("div",{className:"address-info",children:[(0,i.jsxs)("div",{className:"address",children:[(0,i.jsx)("legend",{className:"form-legend",children:r("loading_address")}),(0,i.jsx)("input",{type:"text",name:"upload-location",placeholder:r("upload_location"),className:"input"}),(0,i.jsx)("input",{type:"text",name:"customs-clearance-start",placeholder:r("customs_clearance_start"),className:"input"})]}),(0,i.jsxs)("div",{className:"address",children:[(0,i.jsx)("legend",{className:"form-legend",children:r("unloading_address")}),(0,i.jsx)("input",{type:"text",name:"unload-location",placeholder:r("unload_location"),className:"input"}),(0,i.jsx)("input",{type:"text",name:"customs-clearance-end",placeholder:r("customs_clearance_end"),className:"input"})]})]}),(0,i.jsxs)("div",{className:"additionally-info",children:[(0,i.jsx)("legend",{className:"form-legend",children:r("cargo_information")}),(0,i.jsx)("input",{type:"text",name:"cargo-information",placeholder:r("cargo_type"),className:"input"}),(0,i.jsx)("input",{type:"number",name:"weight",placeholder:r("weight"),className:"input"}),(0,i.jsxs)("select",{name:"truck-type",className:"input",children:[(0,i.jsx)("option",{value:"",children:r("select_trailer")}),(0,i.jsx)("option",{value:"tent",children:r("tent")}),(0,i.jsx)("option",{value:"ref",children:r("ref")}),(0,i.jsx)("option",{value:"any",children:r("any")})]}),(0,i.jsx)("input",{type:"date",name:"date",className:"input"}),(0,i.jsx)("textarea",{name:"message",placeholder:r("additional_information"),className:"comment"})]}),(0,i.jsx)("button",{className:"request-btn",type:"submit",style:{cursor:"pointer"},children:r("send_request")})]}),o&&(0,i.jsx)("div",{className:"loader"}),c&&(0,i.jsx)("div",{className:"feedback-thanks show",children:r("thank_you")})]})})}},9660:function(e,a,t){"use strict";var i=t(7437),n=t(7648),s=t(3949);a.default=()=>{let{t:e}=(0,s.$G)(),a=[{text:e("home"),href:"/"},{text:e("aboutUs"),href:"/about-us"},{text:e("services"),href:"/services"},{text:e("trucks"),href:"/auto-park"},{text:e("careers"),href:"/careers"},{text:e("contactUs"),href:"/contacts"}];return(0,i.jsx)("footer",{id:"contact",style:{backgroundColor:"#242b33"},children:(0,i.jsxs)("div",{className:"footer-content container",children:[(0,i.jsxs)("div",{className:"footer-card",children:[(0,i.jsx)("h4",{className:"footer-card-title",children:e("information")}),(0,i.jsx)("nav",{className:"footer-navigation",children:(0,i.jsx)("ul",{className:"footer-nav-list",children:a.map((e,a)=>(0,i.jsx)("li",{className:"footer-nav-item",children:(0,i.jsx)(n.default,{className:"nav-item-link",href:e.href,children:e.text})},a))})})]}),(0,i.jsxs)("div",{className:"footer-card",children:[(0,i.jsx)("h4",{className:"footer-card-title",children:e("contactUs")}),(0,i.jsxs)("div",{className:"footer-card-row",children:[(0,i.jsxs)("h5",{className:"card-row-title",children:[e("address"),":"]}),(0,i.jsx)("p",{className:"card-row-info",children:e("address_text")})]}),(0,i.jsxs)("div",{className:"footer-card-row",children:[(0,i.jsxs)("h5",{className:"card-row-title",children:[e("phoneNumbers"),":"]}),(0,i.jsx)("p",{className:"card-row-info",children:"+ 38 (050) 449 52 71"}),(0,i.jsx)("p",{className:"card-row-info",children:"+ 38 (050) 206 64 50"})]}),(0,i.jsxs)("div",{className:"footer-card-row",children:[(0,i.jsxs)("h5",{className:"card-row-title",children:[e("email"),":"]}),(0,i.jsx)("p",{className:"card-row-info",children:"ua@agrotep.com"}),(0,i.jsx)("p",{className:"card-row-info",children:"agrotep@agrotep.com"})]})]}),(0,i.jsxs)("div",{className:"footer-card",children:[(0,i.jsx)("h4",{className:"footer-card-title",children:e("socialMedia")}),(0,i.jsxs)("div",{className:"footer-socials",children:[(0,i.jsx)("a",{href:"",className:"social-link youtube"}),(0,i.jsx)("a",{href:"",className:"social-link facebook"}),(0,i.jsx)("a",{href:"",className:"social-link instagram"}),(0,i.jsx)("a",{href:"",className:"social-link linkedin"})]}),(0,i.jsxs)("a",{className:"logo",href:"index.html",children:[(0,i.jsx)("img",{className:"logo-img",src:"/Agrotep/img/main/logo.svg",alt:""}),(0,i.jsx)("img",{className:"logo-text",src:"/Agrotep/img/main/White_text3.png",alt:""})]})]})]})})}},5612:function(e,a,t){"use strict";var i=t(7437),n=t(2265),s=t(611),r=t(8916),o=t(7648),l=t(3949);a.default=()=>{let[e,a]=(0,n.useState)(!1),[t,c]=(0,n.useState)(!1),[d,p]=(0,n.useState)(-1),[u,h]=(0,n.useState)("UA"),{t:m}=(0,l.$G)(),{i18n:g}=(0,l.$G)();console.log(d);let f=[{text:m("home"),href:"/"},{text:m("aboutUs"),href:"/about-us"},{text:m("services"),href:"/services"},{text:m("trucks"),href:"/auto-park"},{text:m("careers"),href:"/careers"},{text:m("contactUs"),href:"/contacts"}],v=()=>c(e=>!e),y=(e,a)=>{e.preventDefault(),g.changeLanguage("UA"===a?"uk":"en"),h(a),localStorage.setItem("activeLang",a)},x=()=>{a(e=>!e),document.body.classList.toggle("no-scroll",!e)};(0,n.useEffect)(()=>{let e=localStorage.getItem("activeLang");console.log(e),e&&(h(e),setTimeout(()=>{g.changeLanguage("UA"===e?"uk":"en")},100))},[g]),(0,n.useEffect)(()=>{let e=()=>{p(window.innerWidth?window.innerWidth>=1051?1:0:-1)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let b={hidden:{opacity:0,x:100},visible:{opacity:1,x:0,transition:{duration:.9,staggerChildren:.2,delay:.2}}},T={active:{scale:1.2,backgroundColor:"#eff3f3",color:"#f2cd00",transition:{type:"spring",stiffness:300,damping:25}},inactive:{scale:1,backgroundColor:"transparent",color:"#fff",transition:{type:"spring",stiffness:300,damping:25}}};return(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"container header",children:[(0,i.jsxs)(o.default,{className:"logo",href:"/",children:[(0,i.jsx)(s.E.img,{className:"logo-img",src:"/Agrotep/img/main/logo.svg",alt:"",initial:"hidden",animate:"visible",variants:{hidden:{y:-175,opacity:0},visible:{y:0,opacity:1,transition:{duration:1.2}}}}),(0,i.jsx)(s.E.img,{className:"logo-text",src:"/Agrotep/img/main/White_text3.png",alt:"",initial:"hidden",animate:"visible",variants:{hidden:{y:-175,opacity:0},visible:{y:0,opacity:1,transition:{duration:1.2,delay:.4}}}})]}),(0,i.jsxs)("div",{className:"navigation-container",children:[1===d?(0,i.jsx)(s.E.nav,{className:"navigation ".concat(e?"show-nav":""),initial:"hidden",animate:d||e?"visible":"hidden",variants:b,children:(0,i.jsx)("ul",{className:"nav-list",children:f.map(e=>(0,i.jsx)(s.E.li,{className:"nav-item",variants:b,children:(0,i.jsx)(o.default,{href:e.href,className:"nav-item-link",children:e.text})},e.text))})}):0===d?(0,i.jsx)("div",{className:"navigation ".concat(e?"show-nav":""),children:(0,i.jsx)("ul",{className:"nav-list",children:f.map(e=>(0,i.jsx)(s.E.li,{className:"nav-item",variants:b,onClick:x,children:(0,i.jsx)(o.default,{href:e.href,className:"nav-item-link",children:e.text})},e.text))})}):(0,i.jsx)(i.Fragment,{}),(0,i.jsxs)(s.E.button,{className:"nav-request-btn extra-top extra-bottom",onClick:v,initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.9,delay:1},children:[(0,i.jsx)("span",{className:"nav-request-line"}),m("transportation_calculation")]}),(0,i.jsx)(r.Z,{isOpen:t,onClose:v}),(0,i.jsxs)(s.E.div,{className:"lang-menu",initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.9,delay:1},children:[(0,i.jsx)(s.E.a,{href:"#",className:"lang",variants:T,animate:"UA"===u?"active":"inactive",onClick:e=>y(e,"UA"),children:(0,i.jsx)("span",{children:"UA"})}),(0,i.jsx)(s.E.a,{href:"#",className:"active-lang lang",variants:T,animate:"EN"===u?"active":"inactive",onClick:e=>y(e,"EN"),children:(0,i.jsx)("span",{children:"EN"})})]}),(0,i.jsxs)("div",{className:"burger-menu ".concat(e?"active":""),onClick:x,children:[(0,i.jsx)("span",{className:"burger-line"}),(0,i.jsx)("span",{className:"burger-line"}),(0,i.jsx)("span",{className:"burger-line"})]})]})]})})}},6421:function(e,a,t){"use strict";t.d(a,{default:function(){return o}});var i=t(6550),n=t(3949),s=JSON.parse('{"home":"Home","aboutUs":"About Us","services":"Services","trucks":"Trucks","careers":"Careers","contactUs":"Contact us","name":"Full Name *","phone":"Phone Number","email":"Email *","company":"Company Name *","loading_address":"Loading Address","upload_location":"Loading Place","customs_clearance_start":"Customs Clearance Place","unloading_address":"Unloading Address","unload_location":"Unloading Place","customs_clearance_end":"Customs Clearance Place","cargo_information":"Cargo Information","cargo_type":"Cargo Type","weight":"Weight","select_trailer":"Select Trailer Type","tent":"Tent","ref":"Refrigerator","any":"Any","date":"Date","additional_information":"Additional Information","send_request":"SEND REQUEST","thank_you":"Thank you for your request!","request_calculation":"Request Calculation","transportation_calculation":"Transportation Calculation","information":"Information","address":"Address","address_text":"Kyiv, 8 Roberta Lisovskyi Street","phoneNumbers":"Phone numbers","socialMedia":"Social media","serviceTitle":"Our Services","serviceFirstLink":"trucks","serviceFirstList0":"DAF and Mergedec models","serviceFirstList1":"Eco-class Euro 6","serviceFirstList2":"GPS tracking","serviceFirstList3":"Latest safety and control systems","serviceSecondLink":"curtain trailers","serviceSecondList0":"XL certification for curtains","serviceSecondList1":"Full curtain opening capability","serviceSecondList2":"Full un-tenting capability","serviceSecondList3":"Anti-vandal trailers","serviceThirdLink":"refrigerators","serviceThirdList0":"Modern semi-trailers with Carrier refrigerators","serviceThirdList1":"Multi-mode refrigerators","serviceThirdList2":"FRC certification of each semi-trailer","serviceThirdList3":"Double-deck refrigerators (for 66 pallets)","transportationTitle":"Transportation Services","transportationList0":"Transporting all ADR hazard classes except 7","transportationList1":"Official license from State Transport Safety Service of Ukraine","transportationList2":"Over 20 years of experience with hazardous cargo","routesTitle":"Transportation Routes","westernEuropeTitle":"Western Europe","westernEuropeText":"France, Belgium, the Netherlands, Luxembourg, Germany, Austria, Switzerland","northernEuropeTitle":"Northern Europe","northernEuropeText":"Finland, Sweden, Norway, Denmark, the United Kingdom, Iceland, Estonia, Lithuania, Latvia","southernEuropeTitle":"Southern Europe","southernEuropeText":"Italy, Greece, Spain, Portugal, Croatia, Slovenia","easternEuropeTitle":"Eastern Europe","easternEuropeText":"Ukraine, Moldova, Romania, Bulgaria, Hungary, the Czech Republic, Slovakia, Poland","balkansTitle":"The Balkans","balkansText":"Albania, Serbia, Montenegro, Bosnia and Herzegovina, North Macedonia","asiaTitle":"Asia","asiaText":"Armenia, Georgia, Azerbaijan, Turkey","logosTitle":"Our Partners","dangerous_transportation":"Transportation of {span}DANGEROUS{span} goods","danger_sign":"Danger Sign","start_globe":"Start Globe","main_logistics_routes":"Our main logistics routes","why_choose_us":"Why choose us","why_choose_us_description":"With many years of experience working with LLC \'AGROTEP\' and consistently high-quality services, we have built a solid foundation for leadership in the field of refrigerated transportation. This not only enables us to maintain our leading position but also continuously expand our network of clients and partners. Our reliability and professionalism inspire confidence in our continued growth and the achievement of new milestones in the industry","repair_sites":"Service includes","repair_sites_description":"repair sites","trailers":"Trawles","cranes":"Cranes","excavators":"Excavators","lifts":"Lifts","diagnostic":"Diagnostic","welding":"Welding","preparatory":"Preparatory","tyre_fitting":"Tyre fitting","truck_car_wash":"Truck car wash","repair_zone":"Repair zone with","special_transport":"types of special transport","agrotep_class":"Training class \\"AGROTEP\\"","agrotep_class_description":"LLC \\"AGROTEP\\" provides high-quality and professional driver training in its own training class. Training is conducted according to approved programs, as well as under the {span}\\"Code 95\\"{span} program. The training class meets high standards of quality and safety, ensuring training at the highest level. Instructors in the training class have relevant professional experience and qualifications, providing drivers with both theoretical and practical knowledge and skills. We implement innovative training methods and use modern equipment to guarantee maximum quality and training efficiency.","transportationTypes":"Frozen products","refrigeratorAdvantages":"Perishable and Sensitive Goods","anyRefrigeratorList":"Chilled Products","anyAdditionalRefList":"Pharmaceuticals and Medicines","transportationTypes2":"Chemical Products","refrigeratorAdvantages2":"Electronics and Household Appliances","anyRefrigeratorList2":"Agricultural Products","anyAdditionalRefList2":"Industrial Materials","gpsMonitoringTitle":"GPS Monitoring: Control in Your Hands!","gpsMonitoringText":"Ensure peace of mind and confidence with every shipment! All AGROTEP LLC vehicles are equipped with advanced satellite tracking systems, enabling real-time monitoring of freight movement.","fuelTitle":"Automotive Fuel: Quality and Environmental Responsibility","fuelText":"Choose the best for both the environment and your vehicles! AGROTEP LLC uses only top-quality fuel sourced from trusted suppliers in Ukraine and Europe.","technicalConditionTitle":"Vehicle Maintenance: Safety First","technicalConditionText":"Trust your shipments to professionals! AGROTEP LLC ensures the highest standards of maintenance and repair for its freight vehicles, backed by years of experience and state-of-the-art equipment.","temperatureControlTitle":"Temperature Control: Reliability Every Step of the Way","temperatureControlText":"Your cargo is in safe hands! All AGROTEP LLC vehicles are equipped with advanced temperature recorders, ensuring precise temperature monitoring and the ability to generate detailed reports.","firstListTitle":"First Service List","secondListTitle":"Second Service List","slide":"Slide","modernAndInnovativePark":"Modern and Innovative Fleet","parkDescription":"The fleet of \\"AGROTEP\\" LTD includes over 250 state-of-the-art DAF and Mercedes-Benz Euro 6 tractors, complemented by a corresponding number of modern and reliable refrigerated semi-trailers from leading manufacturers Schmitz Cargobull and Carrier. Renowned for their German quality and environmental leadership, all vehicles are built to meet global quality standards.","aboutUsInNumbers":"About Us in Numbers","completedOrders":"vehicles in our own fleet","yearsOfExperience":"years of experience","partnerNetworkVehicles":"trusted clients","loyalClients":"successful shipments","transportationMonthly":"tons transported every month","Trucks":"Trucks","historyData.1993":"The foundation of Agrotep as a small enterprise with a few vehicles. Entering {span}international markets{span} from the very beginning allowed the company to provide fast and reliable logistics services to customers in Ukraine and Europe.","historyData.1997":"Opening a dedicated repair zone with {span}12 repair sites{span}, allowing technical maintenance and repairs of vehicles directly at the company\'s base, improving operational efficiency and ensuring high-quality services.","historyData.2005":"Expanding the fleet to {span}80 vehicles{span}, enabling \'Agrotep\' to effectively serve the growing needs of clients. The company optimizes its logistics processes, enhancing efficiency and delivery speed.","historyData.2012":"\'Agrotep\' receives a license to {span}transport goods of all danger classes{span}, except radioactive (ADR 7), which opens up new opportunities for providing services.","historyData.2013":"\'Agrotep\' becomes one of the first operators to introduce new {span}Euro-6{span} class DAF XF models on the Ukrainian market. These trucks offer significantly reduced fuel consumption and emissions, improving the environmental impact of transportation. The company begins equipping all trucks with GPS systems, enhancing delivery tracking and ensuring reliable transportation.","historyData.2015":"\'Agrotep\' invests in new trailers, including {span}Double Deck{span} trailers that can transport up to 66 pallets, as well as trailers with multi-functional capabilities. The company also implements trailers that combine both technologies — {span}Double Deck with multi-functionality{span}. This innovative solution ensures maximum flexibility and efficiency in transportation, strengthening \'Agrotep\'s position in the logistics services market.","historyData.2023":"\'Agrotep\' expands its fleet by purchasing new Mercedes-Benz and DAF {span}Euro-6{span} class trucks that meet modern environmental standards. These vehicles feature advanced technologies, ensuring not only safety but also a reduced environmental impact, making transportation more eco-friendly and efficient.","logosList.quality":"Quality","logosList.reliability":"Reliability","logosList.innovations":"Innovations","logosList.clientOrientation":"Client-Oriented","logosList.leadership":"Leadership","logosList.ecoResponsibility":"Environmental Responsibility","sliderList.1.title":"Agrotep and Ronald McDonald House Foundation in Ukraine","sliderList.1.text":"Agrotep LLC proudly supports the family room in the neonatal department of the National Specialized Children’s Hospital \'Okhmatdyt\'. For over a year, we have been assisting families whose newborns are fighting for their lives by providing them with the opportunity for free accommodation. We believe that care and social responsibility are our duty to society.","sliderList.2.text":"We partner with INGO, one of the leaders in the insurance market. Thanks to this collaboration, we provide our clients with high-quality insurance services that offer an additional layer of protection for their cargo. This allows our partners to be confident in the safety of every shipment.","sliderList.3.text":"Agrotep LLC is a member of the Ukrainian Association of International Road Carriers (ASMAP), which grants access to advanced solutions in the field of international logistics. We guarantee reliable cargo transportation by adhering to European standards, which confirms our competence and high professional level.","leader":"Leader in Refrigerated Transport","aboutUsDescription":"Agrotep LLC is a leader in international refrigerated transportation. Since 1993, we have been providing high-quality transport services. Over the past 30 years, we have earned a reputation as a reliable and efficient partner. We specialize in road transport for both international and domestic routes. As active members of ASMAP and the Ukrainian Chamber of Commerce and Industry, we maintain strong industry ties. Partnering with leading insurance providers such as INGO, we ensure the safety, reliability, and quality of every shipment.","aboutUsInfoTitle":"Today, Agrotep is a company with its own fleet of over 250 new trucks with Euro-6 or better environmental class","aboutUsInfoDescription":"We remain the {span}leader{span} in international refrigerated transport in Ukraine. The company continues to provide high-quality logistics services and innovative solutions for its clients.","companyPrinciples":"Company Principles","hero_title":"Leading the Way in International Refrigerated Transportation","consultation_button":"Contact Us for Expert Guidance","advantage_1":"Competent pricing policy","advantage_2":"Over 30 years of experience","advantage_3":"Market leaders","history_text":"\\"{span}AGROTEP{span}\\" LTD has been a leader in regular freight transportation across Ukraine, the EU, and Asian countries since 1993. With a commitment to continuous fleet renewal and the adoption of cutting-edge logistics technologies, we ensure reliable and timely deliveries. For over {span}30 years{span}, we have consistently delivered top-quality services to our partners.","experience_quality":"Quality","experience_speed":"Speed","experience_reliable":"Reliable","experience_years":"Years of experience","phoneNumberTitle":"Phone Number","emailTitle":"Email Address","addressTitle":"Address","contactUsPage":"Have any questions? Contact us","namePlaceholder":"Name *","phonePlaceholder":"Phone Number *","subjectPlaceholder":"Subject","additionalInfoPlaceholder":"Additional Information","contactButton":"Contact Us","feedbackThanks":"Request received","career":{"heroTitle":"Join Our Team","heroDescription":"At AGROTEP LLC, we value teamwork and invite talented people to realize their dreams and grow with us.","driverTitle":"International Transportation Driver","driverDescription":"AGROTEP LLC, a Ukrainian transport company, invites candidates for the position of CE category drivers. Candidates must have a CE driver\'s license and a responsible approach to their work duties. The main tasks will include transportation of goods on routes Ukraine-Europe or within Ukraine.","serviceTitle":"Repair Service","serviceDescription":"We invite candidates to join our team in the repair service. Candidates must have professional skills in vehicle repair and maintenance. The main responsibilities will include diagnostics, repairs, and maintenance of vehicles.","advantagesTitle":"Advantages of Working at AGROTEP","advantage1":"Long-term career prospects and official employment","advantage2":"Decent and stable salary","advantage3":"Working with like-minded individuals, mutual support, and comfortable working conditions","advantage4":"Opportunities for learning, professional development, and self-realization","advantage5":"Transparent performance evaluation system and recognition of employee achievements","advantage6":"Modern and efficient fleet that ensures reliability and comfort at work"},"formTitle":"Share the details of your cargo – we’ll provide the perfect solution!","pickupPlaceholder":"Pickup Location","deliveryPlaceholder":"Delivery Location","submitButton":"Get in Touch","loadingButton":"Submitting...","thankYouMessage":"Request received"}'),r=JSON.parse('{"home":"Головна","aboutUs":"Про нас","services":"Послуги","trucks":"Автопарк","careers":"Кар\'єра","contactUs":"Контакти","name":"Повне ім\'я *","phone":"Номер телефону","email":"Електронна пошта *","company":"Назва компанії *","loading_address":"Адреса завантаження","upload_location":"Місце завантаження","customs_clearance_start":"Місце митного оформлення","unloading_address":"Адреса розвантаження","unload_location":"Місце розвантаження","customs_clearance_end":"Місце митного оформлення","cargo_information":"Інформація про вантаж","cargo_type":"Тип вантажу","weight":"Вага","select_trailer":"Виберіть тип причепа","tent":"Тент","ref":"Рефрижератор","any":"Будь-який","date":"Дата","additional_information":"Додаткова інформація","send_request":"ВІДПРАВИТИ ЗАПИТ","thank_you":"Дякуємо за ваш запит!","request_calculation":"Запит розрахунку","transportation_calculation":"Розрахунок транспортування","information":"Інформація","address":"Адреса","address_text":"м. Київ, вул. Роберта Лісовського 8","phoneNumbers":"Телефони","socialMedia":"Соціальні мережі","serviceTitle":"Наші Послуги","serviceFirstLink":"Trucks","serviceFirstList0":"Тягачі моделі DAF та Mergedec","serviceFirstList1":"Клас екологічності евро 6","serviceFirstList2":"GPS трекінг","serviceFirstList3":"Новітні системи безпеки і контролю","serviceSecondLink":"тентованих напівпричепів","serviceSecondList0":"Напівпричепи Schmitz Cargobull","serviceSecondList1":"XL сертифікація для тентів","serviceSecondList2":"Можливість повного розтентування","serviceSecondList3":"Антивандальні напівпричепи","serviceThirdLink":"рефрижераторів","serviceThirdList0":"Сучасні напівпричепи з рефрижераторами від Carrier","serviceThirdList1":"Мультережимні рефрижератори","serviceThirdList2":"FRC сертифікація кожного напівпричепа","serviceThirdList3":"Рефрижератори даблдек (на 66 палет)","transportationTitle":"Послуги Транспортування","transportationList0":"Перевезення усіх класів небезпеки (ADR) окрім 7","transportationList1":"Офіційна ліцензія від укртрансбезпеки","transportationList2":"Більше 20 років роботи з небезпечними вантажами","routesTitle":"Маршрути Перевезень","westernEuropeTitle":"Західна Європа","westernEuropeText":"Франція, Бельгія, Нідерланди, Люксембург, Німеччина, Австрія, Швейцарія","northernEuropeTitle":"Північна Європа","northernEuropeText":"Фінляндія, Швеція, Норвегія, Данія, Велика Британія, Естонія, Литва, Латвія","southernEuropeTitle":"Південна Європа","southernEuropeText":"Італія, Греція, Іспанія, Португалія, Хорватія, Словенія","easternEuropeTitle":"Східна Європа","easternEuropeText":"Україна, Молдова, Румунія, Болгарія, Угорщина, Чехія, Словаччина, Польща","balkansTitle":"Балкани","balkansText":"Албанія, Сербія, Чорногорія, Боснія і Герцеговина, Північна Македонія","asiaTitle":"Азія","asiaText":"Вірменія, Грузія, Азербайджан, Туреччина","logosTitle":"Наші Партнери","dangerous_transportation":"Перевезення {span}НЕБЕЗПЕЧНИХ{span} вантажів","danger_sign":"Знак небезпеки","start_globe":"Стар глобус","main_logistics_routes":"Наші основні логістичні маршрути","why_choose_us":"Чому нас обирають","why_choose_us_description":"Багаторічний досвід роботи ТОВ \\"АГРОТЕП\\" і незмінно висока якість послуг, становлять основу лідерства в галузі рефрижераторних перевезень. Це дозволяє не лише утримувати позицію лідера, а й безперервно розширювати коло клієнтів та партнерів. Наша надійність і професіоналізм забезпечують впевненість у подальшому розвитку та досягненні нових вершин у цій галузі.","repair_sites":"СТО налічує","repair_sites_description":"ремонтних майданчиків","trailers":"Трали","cranes":"Крани","excavators":"Екскаватори","lifts":"Підйомники","diagnostic":"Діагностичні","welding":"Зварювальні","preparatory":"Рихтувальні","tyre_fitting":"Шиномонтажні","truck_car_wash":"Мийка вантажних автомобілів","repair_zone":"Ремзона з","special_transport":"видами спецтранспорту","agrotep_class":"Навчальний клас \\"АГРОТЕП\\"","agrotep_class_description":"ТОВ \\"АГРОТЕП\\" забезпечує якісну та професійну підготовку водіїв у власному навчальному класі. Навчання проводиться відповідно до затверджених програм, а також за програмою {span}\\"Код 95\\"{span}. Навчальний клас відповідає високим стандартам якості та безпеки, що передбачає навчання на найвищому рівні. Інструктори навчального класу мають відповідний професійний досвід та кваліфікації, забезпечуючи водіїв не лише теоретичними, а й практичними знаннями та навичками. Ми впроваджуємо інноваційні методи навчання та використовуємо сучасне обладнання, чим гарантуємо максимальну якість та ефективність навчання.","transportationTypes":"Заморожена продукція","refrigeratorAdvantages":"Швидкопсувні та чутливі товари","anyRefrigeratorList":"Охолоджені товари","anyAdditionalRefList":"Фармацевтичні товари і медикаменти","transportationTypes2":"Хімічна продукція","refrigeratorAdvantages2":"Електроніка та побутова техніка","anyRefrigeratorList2":"Сільськогосподарська продукція","anyAdditionalRefList2":"Промислові матеріали","gpsMonitoringTitle":"GPS-Моніторинг: Контроль у Ваших Руках!","gpsMonitoringText":"Забезпечте спокій та впевненість у кожному перевезенні! Автомобілі ТОВ \'АГРОТЕП\' оснащені сучасною системою супутникового спостереження, що дозволяє постійно моніторити рух автопоїзда.","fuelTitle":"Автомобільне Паливо: Якість та Екологічна Відповідальність","fuelText":"Обирайте найкраще для природи та вашого транспорту! ТОВ \'АГРОТЕП\' використовує тільки найякісніше паливо від перевірених виробників в Україні та Європі.","technicalConditionTitle":"Технічний Стан Автомобілів: Безпека на Першому Місці","technicalConditionText":"Довірте свої перевезення професіоналам! ТОВ \'АГРОТЕП\' забезпечує високий рівень технічного обслуговування та ремонту вантажного автотранспорту завдяки багаторічному досвіду та сучасному обладнанню.","temperatureControlTitle":"Контроль Температурного Режиму: Надійність на Кожному Кроці","temperatureControlText":"Ваш вантаж — у надійних руках! Усі транспортні засоби ТОВ \'АГРОТЕП\' оснащені сучасними реєстраторами температури, які гарантують точний контроль температури з можливістю роздруківки звітів.","firstListTitle":"Перший Список Послуг","secondListTitle":"Другий Список Послуг","slide":"Слайд","modernAndInnovativePark":"Сучасний та іноваційний парк","parkDescription":"Парк ТОВ \\"АГРОТЕП\\" налічує більше 250 найсучасніших тягачів DAF і Mercedes-Benz типу Euro 6, а також відповідну кількість сучасних і надійних автопричепів-рефрижераторів від провідних світових виробників Schmitz Cargo Bull і Carrier, відомих своєю якістю та екологічним лідерством, виготовлених за світовими стандартами якості.","aboutUsInNumbers":"Про нас у цифрах","completedOrders":"Власного автопарку","yearsOfExperience":"Років досвіду","partnerNetworkVehicles":"Клієнтів які довіряють Нам","loyalClients":"Виконаних перевезень","transportationMonthly":"Транспортується щомісяця","Trucks":"Trucks","historyData.1993":"Заснування компанії \xabАгротеп\xbb як невеликого підприємства з кількома транспортними засобами. Вихід на {span}міжнародні ринки{span} з самого початку дозволив забезпечити швидкі та надійні логістичні послуги для клієнтів в Україні та Європі.","historyData.1997":"Відкриття власної ремонтної зони на {span}12{span} ремонтних майданчиках, що дозволяє здійснювати технічне обслуговування та ремонти транспорту безпосередньо на базі компанії, підвищуючи ефективність роботи та забезпечуючи високу якість послуг.","historyData.2005":"Розширення автопарку до {span}80 машин{span}, що дозволяє \'Агротеп\' ефективно обслуговувати зростаючі потреби клієнтів. Компанія оптимізує свої логістичні процеси, підвищуючи ефективність і швидкість доставки.","historyData.2012":"\'Агротеп\' отримує ліцензію на {span}транспортування вантажів усіх класів небезпеки{span}, за винятком радіоактивних (ADR 7), що відкриває нові можливості для надання послуг.","historyData.2013":"\'Агротеп\' стає одним із перших операторів, які впроваджують нові моделі DAF XF класу {span}Euro-6{span} на українському ринку. Ці вантажівки забезпечують значно зменшене споживання пального та викидів, підвищуючи екологічність перевезень. Компанія починає обладнання всіх вантажівок системами GPS, що покращує контроль за доставками та забезпечує надійність перевезень.","historyData.2015":"\'Агротеп\' інвестує в нові причепи, включаючи причепи з системою {span}Double Deck{span}, які дозволяють транспортувати до 66 палет, а також впроваджуються причепи з мультирежимною функцією. Компанія також впроваджує причепи, які поєднують обидві ці технології — {span}Double Deck з мультирежимом{span}. Це інноваційне рішення забезпечує максимальну гнучкість та ефективність перевезень, зміцнюючи позиції \'Агротеп\' на ринку логістичних послуг.","historyData.2023":"Компанія \'Агротеп\' розширює свій автопарк, купуючи нові вантажівки Mercedes-Benz і DAF класу {span}Euro-6{span}, які відповідають сучасним екологічним стандартам. Ці автомобілі відрізняються передовими технологіями, забезпечуючи не лише безпеку, але й зниження впливу на довкілля, що робить перевезення більш екологічними та ефективними.","logosList.quality":"Якість","logosList.reliability":"Надійність","logosList.innovations":"Інновації","logosList.clientOrientation":"Клієнтоорієнтованість","logosList.leadership":"Лідерство","logosList.ecoResponsibility":"Екологічна відповідальність","sliderList.1.title":"Агротеп і Фундація Дім Рональда МакДональда в Україні","sliderList.1.text":"\xabКомпанія \xabАгротеп\xbb із гордістю підтримує сімейну кімнату у відділенні неонатології НДСЛ \xabОхматдит\xbb. Уже понад рік ми допомагаємо родинам, чиї новонароджені малюки борються за життя, забезпечуючи їм можливість безкоштовного перебування. Ми віримо, що турбота та соціальна відповідальність – це наш обов’язок перед суспільством.\xbb","sliderList.2.text":"\\"Ми співпрацюємо з компанією INGO, яка є одним із лідерів на ринку страхування. Завдяки цій співпраці ми надаємо нашим клієнтам високоякісні страхові послуги, що забезпечують додатковий рівень захисту для їхніх вантажів. Це дозволяє нашим партнерам бути впевненими у безпеці кожного перевезення.","sliderList.3.text":"ТОВ \xabАгротеп\xbb є членом Асоціації міжнародних автомобільних перевізників України (АСМАП), що відкриває доступ до передових рішень у сфері міжнародної логістики. Ми гарантуємо надійні перевезення вантажів, дотримуючись європейських стандартів, що підтверджує нашу компетентність і високий професійний рівень.","leader":"Лідер Рефрижераторних Перевезень","aboutUsDescription":"ТОВ \\"Агротеп\\" —лідер у сфері міжнародних рефрижераторних перевезень. Ми надаємо високоякісні транспортні послуги з 1993 року. За понад 30 років ми здобули репутацію стабільного та ефективного партнера. Здійснюємо перевезення автомобільним транспортом як у міжнародному, так і в міжміському сполученні. Ми є активними учасниками АСМАП і Торгово-промислової палати України. Співпрацюючи з провідними страховими партнерами, такими як INGO, ми гарантуємо безпеку, надійність та якість кожного перевезення.","aboutUsInfoTitle":"У наш час Агротеп – це компанія що має власний автопарк у понад 250 новеньких вантажівок класу екологічності не менше Euro-6","aboutUsInfoDescription":"Ми залишаємось {span}лідером{span} міжнародних рефрижераторних перевезень в Україні. Компанія продовжує забезпечувати високоякісні логістичні послуги та інноваційні рішення для своїх клієнтів.","companyPrinciples":"Принципи діяльності компанії","hero_title":"Лідер міжнародних рефрижераторних перевезень","consultation_button":"Отримати консультацію","advantage_1":"Компетентна цінова політика","advantage_2":"Понад 30 років досвіду","advantage_3":"Лідери ринку","history_text":"\xab{span}AGROTEP{span}\xbb ТОВ є лідером у регулярних вантажних перевезеннях по Україні, країнах ЄС та Азії з 1993 року. Постійне оновлення автопарку та впровадження інноваційних логістичних технологій забезпечують надійність і своєчасність перевезень. Більше {span}30 років{span} ми забезпечуємо стабільно високу якість послуг для наших партнерів.","experience_quality":"Якість","experience_speed":"Швидкість","experience_reliable":"Надійність","experience_years":"Років досвіду","phoneNumberTitle":"Номер телефону","emailTitle":"Електронна адреса","addressTitle":"Адреса","contactUsPage":"Залишились питання? Зв\'яжіться з нами","namePlaceholder":"Ім\'я *","phonePlaceholder":"Номер телефону *","subjectPlaceholder":"Тема","additionalInfoPlaceholder":"Додаткова інформація","contactButton":"Зв\'язатись","feedbackThanks":"Запит отримано","career":{"heroTitle":"Приєднуйся до нашої команди","heroDescription":"У компанії ТОВ \\"АГРОТЕП\\" ми цінуємо командну роботу і запрошуємо талановитих людей, щоб вони могли реалізувати свої мрії та розвиватися разом з нами.","driverTitle":"Водій міжнародних перевезень","driverDescription":"Українська транспортна компанія ТОВ \\"АГРОТЕП\\" запрошує кандидатів на посаду водіїв категорії СЕ. Основні вимоги до претендентів включають наявність водійського посвідчення категорії СЕ та відповідальне ставлення до виконання робочих обов\'язків. Головними завданнями водіїв буде здійснення перевезень вантажів на маршрутах Україна-Європа або виключно в межах України.","serviceTitle":"Ремонтний сервіс","serviceDescription":"Запрошуємо кандидатів приєднатися до нашої команди у ремонтному сервісі. Основні вимоги до кандидатів включають професійні навички у сфері ремонту та обслуговування транспортних засобів, а також відповідальне ставлення до виконання робочих завдань. Головними обов\'язками співробітників буде діагностика, ремонт та технічне обслуговування автомобілів.","advantagesTitle":"Переваги роботи в ТОВ \\"АГРОТЕП\\"","advantage1":"Довгострокові перспективи роботи та офіційне працевлаштування","advantage2":"Гідна та стабільна заробітна плата","advantage3":"Робота з однодумцями, взаємна підтримка та комфортні умови праці","advantage4":"Відкриті можливості для навчання, професійного розвитку та самореалізації","advantage5":"Прозора система оцінки результатів та визнання досягнень працівників","advantage6":"Сучасний та ефективний автопарк, що забезпечить надійність і комфорт у роботі"},"formTitle":"Розкажіть про вантаж — ми знайдемо рішення!","pickupPlaceholder":"Місце завантаження","deliveryPlaceholder":"Місце розвантаження","submitButton":"Зв\'язатись","loadingButton":"Відправляється...","thankYouMessage":"Запит отримано"}');i.ZP.use(n.Db).init({resources:{en:{translation:s},uk:{translation:r}},lng:"uk",fallbackLng:"uk",interpolation:{escapeValue:!1}});var o=e=>{let{children:a}=e;return a}},6338:function(){}},function(e){e.O(0,[772,297,505,793,971,117,744],function(){return e(e.s=6908)}),_N_E=e.O()}]);