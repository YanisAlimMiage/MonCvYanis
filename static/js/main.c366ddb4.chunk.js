(this.webpackJsonpcv_yanis=this.webpackJsonpcv_yanis||[]).push([[0],{26:function(e,s,t){},27:function(e,s,t){},33:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),i=t.n(a),l=t(9),n=t.n(l),r=(t(26),t(27),t(7)),d=t(2);var j=function(e){e.history,e.match;var s=function(e,s,t){this.toRotate=s,this.el=e,this.loopNum=0,this.period=parseInt(t,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return s.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,s=this.toRotate[e];this.isDeleting?this.txt=s.substring(0,this.txt.length-1):this.txt=s.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var t=this,c=200-100*Math.random();this.isDeleting&&(c/=2),this.isDeleting||this.txt!==s?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,c=500):(c=this.period,this.isDeleting=!0),setTimeout((function(){t.tick()}),c)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var c=e[t].getAttribute("data-type"),a=e[t].getAttribute("data-period");c&&new s(e[t],JSON.parse(c),a)}var i=document.createElement("style");i.type="text/css",i.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(i)},Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{id:"header",class:"fixed-top",children:Object(c.jsxs)("div",{class:"container d-flex align-items-center justify-content-between",children:[Object(c.jsx)("h1",{class:"logo",children:Object(c.jsx)("a",{href:"index.html",children:"ALIM Yanis"})}),Object(c.jsxs)("nav",{id:"navbar",class:"navbar",children:[Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{class:"nav-link scrollto active",href:"#hero",children:"Accuil"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{class:"nav-link scrollto ",href:"#about",children:"A Propos"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{class:"nav-link scrollto",href:"#for",children:"Formation"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{class:"nav-link scrollto",href:"#exp",children:"Exp\xe9riences"})})]}),Object(c.jsx)("i",{class:"bi bi-list mobile-nav-toggle"})]})]})}),Object(c.jsxs)("div",{id:"hero",class:"hero route bg-image",children:[Object(c.jsx)("div",{class:"overlay-itro"}),Object(c.jsx)("div",{class:"hero-content display-table",children:Object(c.jsx)("div",{class:"table-cell",children:Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("h1",{class:"hero-title mb-4",children:"Je suis Yanis alim"}),Object(c.jsx)("p",{class:"hero-subtitle",children:Object(c.jsx)("span",{class:"typed","data-typed-items":"Designer, Developer, Freelancer, Photographer"})}),Object(c.jsx)("h1",{children:Object(c.jsx)("a",{href:"",class:"typewrite","data-period":"2000","data-type":'[ "D\xe9veloppeur Full Stack.", "BI.", "BIG DATA." ]',children:Object(c.jsx)("span",{class:"wrap"})})})]})})})]})]})},h=t(12),o=t.n(h),b=(t(11),function(e){e.history,e.match;return o.a.init(),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{id:"exp",className:"container",children:Object(c.jsxs)("div",{"data-aos":"zoom-in","data-aos-duration":"3000",children:[Object(c.jsx)("h1",{class:"libb",children:"Exp\xe9riences professionnelles :"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"main-timeline",children:[Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsx)("div",{className:"icon"}),Object(c.jsx)("div",{className:"date-content",children:Object(c.jsx)("div",{className:"date-outer",children:Object(c.jsxs)("span",{className:"date",children:[Object(c.jsx)("span",{className:"month",children:"3 Mois"}),Object(c.jsx)("span",{className:"year",children:"2020"})]})})}),Object(c.jsxs)("div",{className:"timeline-content",children:[Object(c.jsx)("h5",{className:"title",children:"STAGIAIRE CONCEPTION ET D\xc9VELOPPEMENT"}),Object(c.jsx)("p",{className:"description",children:"CONCEPTION ET D\xc9VELOPPEMENT D'UNE APPLICATION WEB DE GESTION D\u2019ENTREPRISE CHEZ BIPRAX CONSULTING (API SYMFONY-REACT ). -conception et cr\xe9ationd'une base de donn\xe9es relationnelle (MCD,MLD,SGBD,MySQL). -d\xe9veloppement d'une APIRest avec Symfony -D\xc9VELOPPEMENT D'UNE INTERFACE WEB AVEC REACT"})]})]}),Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsx)("div",{className:"icon"}),Object(c.jsx)("div",{className:"date-content",children:Object(c.jsx)("div",{className:"date-outer",children:Object(c.jsxs)("span",{className:"date",children:[Object(c.jsx)("span",{className:"month",children:"2019"}),Object(c.jsx)("span",{className:"year",children:"2020"})]})})}),Object(c.jsxs)("div",{className:"timeline-content",children:[Object(c.jsx)("h5",{className:"title",children:"AGENT DE S\xc9CURIT\xc9 PRIV\xc9E (SECULILLE)"}),Object(c.jsx)("p",{className:"description",children:"j'ai travaill\xe9 en tant que qu'agent de s\xe9curit\xe9 priv\xe9e chez seculille dans pleuseur cite different(magasin,magasine site de gardiennage hopital,... )ou j'ai peux travailler en equipe"})]})]}),Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsx)("div",{className:"icon"}),Object(c.jsx)("div",{className:"date-content",children:Object(c.jsx)("div",{className:"date-outer",children:Object(c.jsxs)("span",{className:"date",children:[Object(c.jsx)("span",{className:"month",children:"2018"}),Object(c.jsx)("span",{className:"year",children:"2019"})]})})}),Object(c.jsxs)("div",{className:"timeline-content",children:[Object(c.jsx)("h5",{className:"title",children:"\xc9QUIPIER POLYVALENT MCDONALD'S"}),Object(c.jsx)("p",{className:"description",children:"j'ai travaill\xe9 en tant que equipier polyvalent chez mcdonald ou j'ai peux developper le travaille en equipe"})]})]}),Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsx)("div",{className:"icon"}),Object(c.jsx)("div",{className:"date-content",children:Object(c.jsx)("div",{className:"date-outer",children:Object(c.jsxs)("span",{className:"date",children:[Object(c.jsx)("span",{className:"month",children:"2017"}),Object(c.jsx)("span",{className:"year",children:"2019"})]})})}),Object(c.jsxs)("div",{className:"timeline-content",children:[Object(c.jsx)("h5",{className:"title",children:"COURSIER \xc0 V\xc9LO"}),Object(c.jsx)("p",{className:"description",children:"j'ai travaill\xe9 en tant que coursier a v\xe9lo chez deliveroo et uber eat ou j'ai pu developper mon esprit d'entreprenariat"})]})]})]})]})})})}),m=t(13),x=t.p+"static/media/yanis.1b944d7b.png",O=function(e){return Object(m.a)(e),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{id:"about",className:"about container pt-5","data-aos":"fade-left","data-aos-anchor":"#example-anchor","data-aos-offset":"1500","data-aos-duration":"1500",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h5",{className:"card-header",children:"A Propos"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h3",{className:"card-title",children:"D\xe9veloppeur full stack"}),Object(c.jsx)("div",{class:"container",children:Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col-sm",children:Object(c.jsx)("img",{src:x,class:"figure-img img-fluid rounded",alt:"A generic square placeholder image with rounded corners in a figure."})}),Object(c.jsxs)("div",{class:"col-sm",children:[Object(c.jsx)("p",{className:"card-text",children:"Autonome, rigoureux et passionn\xe9, dans le cadre de ma formation, je suis \xe0 la recherche d\u2019une alternance a partir de septembre 2021,en d\xe9veloppement ou bi et Big Data. Je saurai mettre \xe0 profit toutes mes comp\xe9tences et mes qualit\xe9s pour votre entreprise."}),Object(c.jsx)("p",{children:"Passionn\xe9 par le d\xe9veloppement Back-End et Front-End."}),Object(c.jsxs)("p",{children:[" ",Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor",class:"bi bi-geo-alt-fill",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})})," Mobile sur tout la France"]}),Object(c.jsxs)("p",{children:[Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor",class:"bi bi-house-fill",viewBox:"0 0 16 16",children:[Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}),Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"})]})," Seclin,Lille,France"]}),Object(c.jsxs)("p",{children:[" ",Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor",class:"bi bi-envelope-fill",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"})})," yanis.alim.info@gmail.com"]}),Object(c.jsxs)("p",{children:[" ",Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor",class:"bi bi-phone-fill",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"})})," +33 7 69 07 04 77"]}),Object(c.jsxs)("p",{children:["  ",Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",fill:"currentColor",class:"bi bi-calendar-event-fill",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"})})," 23 ans "]})]})]})})]})]})})})},p=t.p+"static/media/mywatch.bc7c981f.png",v=t.p+"static/media/cv.3db8152c.png",u=t.p+"static/media/carte.89d919ae.PNG",N=t.p+"static/media/pyramide.48e08a26.PNG",g=t.p+"static/media/accuil.22943c7a.jpg",f=t.p+"static/media/biprax.0c5d9b6c.PNG",E=function(e){e.history,e.match;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{id:"about",className:"about container pt-5",children:Object(c.jsxs)("div",{class:"row",children:[Object(c.jsxs)("div",{className:"card carte",width:"100",height:"100",children:[Object(c.jsx)("img",{class:"card-img-top pro ",src:p,alt:"Card image cap",width:"100",height:"100"}),Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h5",{class:"card-title",children:"MyWatch"}),Object(c.jsx)("p",{class:"card-text",children:"Site de E-Commerce Pour la vente de montre realiser avec les technologie  spring boot ,Jsp,bootstrap,java script,JPA ."}),Object(c.jsx)("a",{href:"https://github.com/YanisAlimMiage/MyWatch",class:"btn btn-primary",children:"CODE"})]})]}),Object(c.jsxs)("div",{class:"card carte",children:[Object(c.jsx)("img",{class:"card-img-top pro",src:v,alt:"Card image cap"}),Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h5",{class:"card-title",children:"Mon Cv"}),Object(c.jsx)("p",{class:"card-text",children:"Mon Cv en ligne realiser avec les technologie React et bootstrap."}),Object(c.jsx)("a",{href:"https://github.com/YanisAlimMiage/MonCvYanis",class:"btn btn-primary",children:"Code"})]})]}),Object(c.jsxs)("div",{class:"card carte",children:[Object(c.jsx)("img",{class:"card-img-top pro",src:u,alt:"Card image cap"}),Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h5",{class:"card-title",children:"JEUX DE CARTES"}),Object(c.jsx)("p",{class:"card-text",children:"Jeux de carte realiser avec html,css,Jquary."}),Object(c.jsx)("a",{href:"https://github.com/YanisAlimMiage/JeuxDeCarte",class:"btn btn-primary",children:"CODE"})]})]}),Object(c.jsxs)("div",{class:"card carte",children:[Object(c.jsx)("img",{class:"card-img-top",src:N,alt:"Card image cap"}),Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h5",{class:"card-title",children:"Pyramide"}),Object(c.jsx)("p",{class:"card-text",children:"creation d'un jeux (pyramide) ou on doit trouver un mots cacher avec des indices ,une API reste ou j'ai developper le back end avec .net (c#) et la partie frant end avec react et bootstrape."}),Object(c.jsx)("a",{href:"https://github.com/YanisAlimMiage/pyramide",class:"btn btn-primary",children:"CODE"})]})]}),Object(c.jsxs)("div",{class:"card carte",children:[Object(c.jsx)("img",{class:"card-img-top",src:g,alt:"Card image cap"}),Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h5",{class:"card-title",children:"n'oubliez pas les paroles"}),Object(c.jsx)("p",{class:"card-text",children:"N'oubliez pas les paroles application mobile android realiser avec app inventor ."}),Object(c.jsx)("a",{href:"https://github.com/YanisAlimMiage/musique",class:"btn btn-primary",children:"CODE"})]})]}),Object(c.jsxs)("div",{class:"card carte",children:[Object(c.jsx)("img",{class:"card-img-top",src:f,alt:"Card image cap"}),Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h5",{class:"card-title",children:"SATGE"}),Object(c.jsx)("p",{class:"card-text",children:"  CONCEPTION ET D\xc9VELOPPEMENT D'UNE APPLICATION WEB DE GESTION D\u2019ENTREPRISE CHEZ BIPRAX CONSULTING (API SYMFONY-REACT ). -conception et cr\xe9ationd'une base de donn\xe9es relationnelle (MCD,MLD,SGBD,MySQL). -d\xe9veloppement d'une APIRest avec Symfony -D\xc9VELOPPEMENT D'UNE INTERFACE WEB AVEC REACT."})]})]})]})})})},y=function(e){e.history,e.match;return o.a.init(),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{id:"for",className:"container",children:Object(c.jsxs)("div",{"data-aos":"zoom-in","data-aos-duration":"3000",children:[Object(c.jsx)("h1",{class:"libb",children:"Formation et diplome :"}),Object(c.jsxs)("div",{className:"main-timeline",children:[Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsx)("div",{className:"icon"}),Object(c.jsx)("div",{className:"date-content",children:Object(c.jsx)("div",{className:"date-outer",children:Object(c.jsxs)("span",{className:"date",children:[Object(c.jsx)("span",{className:"month",children:"2020"}),Object(c.jsx)("span",{className:"year",children:"2021"})]})})}),Object(c.jsxs)("div",{className:"timeline-content",children:[Object(c.jsx)("h5",{className:"title",children:"Master 1"}),Object(c.jsx)("p",{className:"description",children:"Informatique parcours Miage Universit\xe9 de Lille depuit septembre 2020"})]})]}),Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsx)("div",{className:"icon"}),Object(c.jsx)("div",{className:"date-content",children:Object(c.jsx)("div",{className:"date-outer",children:Object(c.jsxs)("span",{className:"date",children:[Object(c.jsx)("span",{className:"month",children:"2019"}),Object(c.jsx)("span",{className:"year",children:"2020"})]})})}),Object(c.jsxs)("div",{className:"timeline-content",children:[Object(c.jsx)("h5",{className:"title",children:"Licence 3"}),Object(c.jsx)("p",{className:"description",children:"Informatique parcours Miage Universit\xe9 de Lille"})]})]}),Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsx)("div",{className:"icon"}),Object(c.jsx)("div",{className:"date-content",children:Object(c.jsx)("div",{className:"date-outer",children:Object(c.jsxs)("span",{className:"date",children:[Object(c.jsx)("span",{className:"month",children:"2018"}),Object(c.jsx)("span",{className:"year",children:"2019"})]})})}),Object(c.jsxs)("div",{className:"timeline-content",children:[Object(c.jsx)("h5",{className:"title",children:"Licence 2"}),Object(c.jsx)("p",{className:"description",children:"Informatique Universit\xe9 de Lille"})]})]}),Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsx)("div",{className:"icon"}),Object(c.jsx)("div",{className:"date-content",children:Object(c.jsx)("div",{className:"date-outer",children:Object(c.jsxs)("span",{className:"date",children:[Object(c.jsx)("span",{className:"month",children:"2016"}),Object(c.jsx)("span",{className:"year",children:"2017"})]})})}),Object(c.jsxs)("div",{className:"timeline-content",children:[Object(c.jsx)("h5",{className:"title",children:"Licence 1"}),Object(c.jsx)("p",{className:"description",children:"Sciences exactes et sciences pour l'ing\xe9nieurs Universit\xe9 de Lille 2016-2017"})]})]})]})]})})})},w=t.p+"static/media/github.ce02960d.png",C=t.p+"static/media/facebook.4f037d96.png",A=t.p+"static/media/instagram.e719d8b2.png",M=t.p+"static/media/linkedin.6892b3ae.png",P=function(e){return Object(m.a)(e),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("diV",{className:"bas",children:Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)("p",{}),Object(c.jsx)("p",{}),Object(c.jsx)("h3",{children:"Resaux sociaux"}),Object(c.jsxs)("a",{href:"https://github.com/YanisAlimMiage",children:[" ",Object(c.jsx)("img",{className:"bas_logo",src:w})]}),Object(c.jsxs)("a",{href:"https://www.facebook.com/profile.php?id=100011112513011",children:[" ",Object(c.jsx)("img",{className:"bas_logo",src:C})]}),Object(c.jsxs)("a",{href:"https://www.instagram.com/yanis_alim/",children:["  ",Object(c.jsx)("img",{className:"bas_logo",src:A})]}),Object(c.jsxs)("a",{href:"https://www.linkedin.com/in/yanis-alim/",children:["  ",Object(c.jsx)("img",{className:"bas_logo",src:M})]})]})})})},D=t(18);var I=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(r.a,{children:[Object(c.jsx)(d.a,{path:"/",exact:!0,component:j}),Object(c.jsx)(d.a,{path:"/cnx",exact:!0,component:j}),Object(c.jsx)(d.a,{path:"/name",exact:!0,component:j}),Object(c.jsx)(d.a,{path:"/exp",exact:!0,component:b}),Object(c.jsx)(d.a,{path:"/Projets",exact:!0,component:E}),Object(c.jsx)(d.a,{path:"/formation",exact:!0,component:y})]}),Object(c.jsx)(j,{}),Object(c.jsx)(O,{}),Object(c.jsx)(y,{}),Object(c.jsx)(b,{}),Object(c.jsx)(E,{}),Object(c.jsx)(P,{}),Object(c.jsx)(D.a,{position:D.b.POSITION.TOP_CENTER})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,i=s.getLCP,l=s.getTTFB;t(e),c(e),a(e),i(e),l(e)}))};n.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),T()}},[[33,1,2]]]);
//# sourceMappingURL=main.c366ddb4.chunk.js.map