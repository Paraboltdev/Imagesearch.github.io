(this.webpackJsonpbusquedadirecta=this.webpackJsonpbusquedadirecta||[]).push([[0],{146:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){},457:function(e,t,c){},458:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(23),s=c.n(n),r=(c(146),c(31)),j=c(3),i=c(5),o=c(40),b=(c(149),c(150),c(2));function u(){return Object(b.jsx)("div",{class:"item",children:Object(b.jsx)("i",{class:"spinner"})})}var l="563492ad6f917000010000018ea226ab410445598752da54d545dbad";Object(o.a)(l);var d=function(e){return fetch("https://api.pexels.com/v1/"+e,{headers:{Authorization:l}}).then((function(e){return e.json()}))};function h(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],n=(t[1],Object(a.useState)(null)),s=Object(i.a)(n,2),r=s[0],l=s[1],h=(Object(o.a)("563492ad6f917000010000018ea226ab410445598752da54d545dbad"),Object(j.g)().photoId);return console.log({photoId:h}),Object(a.useEffect)((function(){d("photos/"+h).then((function(e){console.log(e),l(e)})).catch((function(e){return console.log(e)}))}),[h]),c?Object(b.jsx)(u,{}):r?Object(b.jsx)("div",{className:"pic_div",children:Object(b.jsxs)("div",{className:"info_div",children:[Object(b.jsx)("img",{src:r.src.large2x,className:"pic_img",alt:r.alt}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Photographer:"})," ",r.photographer]})]})}):null}c(152);function O(e){var t=e.photo;return Object(b.jsx)("div",{className:"card_container",children:Object(b.jsx)(r.b,{to:"/photo/"+t.id,children:Object(b.jsx)("div",{className:"card_img",children:Object(b.jsx)("img",{className:"img",src:t.src.large,alt:t.type})})})})}var x=c.p+"static/media/ocean.43c7a836.jpg",f=(c(153),c(139)),p=(c(154),c(142));c(457);function m(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(j.f)(),o=Object(r.c)(),u=Object(i.a)(o,2),l=u[0],d=u[1],h=l.get("search");Object(a.useEffect)((function(){n(h||"")}),[h]);return Object(b.jsx)("div",{className:"search-div",children:Object(b.jsxs)("form",{onSubmit:function(e){n(""),e.preventDefault(),s("?search="+c)},children:[Object(b.jsx)("input",{className:"input-search",onChange:function(e){var t=e.target.value;d({search:t})},type:"text",placeholder:"Search...",value:null!==h&&void 0!==h?h:"",autoFocus:!0}),Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{className:"btn_search"})})]})})}function g(e){var t=e.search,c=Object(a.useState)([]),n=Object(i.a)(c,2),s=(n[0],n[1]),r=Object(a.useState)(""),j=Object(i.a)(r,2),l=(j[0],j[1],Object(a.useState)([])),h=Object(i.a)(l,2),p=h[0],g=h[1],v=Object(a.useState)(!0),N=Object(i.a)(v,2),S=N[0],_=N[1],E=Object(a.useState)(),y=Object(i.a)(E,2),F=(y[0],y[1],Object(a.useState)(!1)),I=Object(i.a)(F,2),k=I[0],q=I[1],T=Object(a.useState)(1),w=Object(i.a)(T,2),A=w[0],J=w[1];Object(o.a)("563492ad6f917000010000018ea226ab410445598752da54d545dbad");return Object(a.useEffect)((function(){q(!0),d(t?"search?query="+t+"&page="+A:"curated/?&page="+A).then((function(e){s(e.photos),g((function(t){return t.concat(e.photos)})),q(!1),_(e.page<e.total_results)})).catch((function(e){return console.log(e)}))}),[t,A]),k||0!==p.length?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("header",{className:"header",children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)("span",{className:"span1",children:"I"}),"mage"," ",Object(b.jsx)("span",{className:"span2",children:"S"}),"earch"]}),Object(b.jsx)("h2",{children:" Fotos de stock gratis, im\xe1genes libres para descargar"}),Object(b.jsxs)("div",{className:"searchbar",children:[" ",Object(b.jsx)(m,{})," "]})]}),Object(b.jsx)("img",{className:"header_img",src:x,alt:"ocean"}),Object(b.jsx)(f.a,{dataLength:p.length,next:function(){return J((function(e){return e+1}))},hasMore:S,loader:Object(b.jsx)(u,{}),children:Object(b.jsx)("ul",{className:"grid_div",children:p.map((function(e,t){return Object(b.jsx)(O,{photo:e},t)}))})})]})}):Object(b.jsx)("p",{className:"no_match",children:"No matches"})}var v=function(){var e=Object(r.c)(),t=Object(i.a)(e,2),c=t[0],n=(t[1],function(e,t){var c=Object(a.useState)(e),n=Object(i.a)(c,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){var c=setTimeout((function(){r(e)}),t);return function(){clearTimeout(c)}}),[e,t]),s}(c.get("search"),500));return Object(b.jsx)("div",{children:Object(b.jsx)(g,{search:n},n)})},N=function(){return Object(b.jsx)("div",{style:{textAlign:"center",marginTop:"500px"},children:Object(b.jsx)("h1",{children:" Error 404 Not Found"})})};var S=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(r.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",element:Object(b.jsx)(v,{})}),Object(b.jsx)(j.a,{path:"/photo/:photoId",element:Object(b.jsx)(h,{})}),Object(b.jsx)(j.a,{path:"*",element:Object(b.jsx)(N,{})})]})})})};s.a.render(Object(b.jsx)(S,{}),document.getElementById("root"))}},[[458,1,2]]]);
//# sourceMappingURL=main.a475ba9b.chunk.js.map