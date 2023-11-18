"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[804],{854:function(n,t,e){e.d(t,{a:function(){return a}});var r=e(8881),i=e(184),a=function(){return(0,i.jsx)("div",{className:"loader",children:(0,i.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},1634:function(n,t,e){e.d(t,{Z:function(){return x}});var r,i,a,o=e(7689),c=e(1087),p=e(168),u=e(5867),s=u.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),l=u.ZP.li(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 5px;\n  width: 154px;\n  max-height: 400px;\n  cursor: pointer;\n  overflow: hidden;\n"]))),d=u.ZP.div(a||(a=(0,p.Z)(["\n  min-height: 169px;\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n"]))),f=e(184),x=function(n){var t=n.films,e=(0,o.TH)();return(0,f.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.title,i=n.overview,a=n.poster_path;return(0,f.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,f.jsxs)(l,{children:[(0,f.jsx)("img",{src:a?"http://image.tmdb.org/t/p/w154".concat(a):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:r}),(0,f.jsxs)(d,{children:[(0,f.jsx)("h3",{children:r}),(0,f.jsx)("p",{children:i})]})]})},t)}))})}},1804:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,i,a,o,c=e(9439),p=e(854),u=e(1634),s=e(168),l=e(5867),d=l.ZP.header(r||(r=(0,s.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 840px;\n  padding-left: 24px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  color: #fff;\n  background-color: #097c69;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),f=l.ZP.form(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),x=l.ZP.button(a||(a=(0,s.Z)(["\n  display: inline-block;\n  /* width: 48px; */\n  height: 48px;\n  border: 0;\n  padding: 10px;\n  font: inherit;\n  font-weight: 500;\n  font-size: 20px;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),h=l.ZP.input(o||(o=(0,s.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=e(184),m=function(n){var t=n.onSubmitSearchBar,e=n.value;return(0,g.jsx)(d,{children:(0,g.jsxs)(f,{onSubmit:t,children:[(0,g.jsx)(x,{children:(0,g.jsx)("span",{children:"Search"})}),(0,g.jsx)(h,{type:"text",name:"search",autoComplete:"off",autoFocus:!0,defaultValue:e,placeholder:"Search movies"})]})})},b=e(1686),w=e(2791),v=e(2690),y=e(5558),Z=e(1087),k=function(){var n,t=(0,w.useState)(!1),e=(0,c.Z)(t,2),r=e[0],i=e[1],a=(0,w.useState)([]),o=(0,c.Z)(a,2),s=o[0],l=o[1],d=(0,Z.lr)(),f=(0,c.Z)(d,2),x=f[0],h=f[1],k=null!==(n=x.get("query"))&&void 0!==n?n:"";(0,w.useEffect)((function(){""!==k&&(s.length>0||(i(!0),(0,v.bI)("/search/movie",k).then((function(n){l(n.results)})).catch(v.NI).finally((function(){return i(!1)}))))}),[s,k]);return(0,g.jsxs)("div",{children:[(0,g.jsx)(m,{onSubmitSearchBar:function(n){n.preventDefault();var t=n.currentTarget.search.value.trim().toLowerCase().split(" ").join("+");if(""===t)return b.Notify.info("Enter your request, please!",v.Pu),h({}),void l([]);t!==k?(h({query:t}),l([])):b.Notify.info("Enter new request, please!",v.Pu)},value:k}),(0,g.jsxs)(y.dE,{children:[r&&(0,g.jsx)(p.a,{}),(0,g.jsx)(u.Z,{films:s})]})]})}},5558:function(n,t,e){e.d(t,{Fg:function(){return f},O2:function(){return x},UE:function(){return h},Z:function(){return g},dE:function(){return d}});var r,i,a,o,c,p,u=e(168),s=e(5867),l=e(1087),d=s.ZP.section(r||(r=(0,u.Z)(["\n  padding: 20px;\n  display: flex;\n  /* align-items: center; */\n  flex-direction: column;\n  gap: 20px;\n"]))),f=(0,s.ZP)(l.rU)(i||(i=(0,u.Z)(["\n  text-align: center;\n\n  color: #084833;\n  font-weight: 600;\n  padding: 6px;\n  border: 1px solid #084833;\n  width: 100px;\n  &.active {\n    color: orange;\n  }\n"]))),x=s.ZP.div(a||(a=(0,u.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),h=s.ZP.div(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 400px;\n"]))),g=s.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 500;\n  text-decoration: underline;\n"])));s.ZP.div(p||(p=(0,u.Z)(["\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])))},2690:function(n,t,e){e.d(t,{Hx:function(){return w},NI:function(){return y},Pu:function(){return p},Y5:function(){return h},bI:function(){return f},uV:function(){return m},vw:function(){return l}});var r=e(5861),i=e(7757),a=e.n(i),o=e(340),c=e(1686),p={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"},u="bd27c037ab2cca01c1960a6ee250d410",s="https://api.themoviedb.org/3";function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s).concat(t,"?api_key=").concat(u),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"?api_key=").concat(u,"&query=").concat(e),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"?api_key=").concat(u),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"/credits?api_key=").concat(u),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"/reviews?api_key=").concat(u),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(){c.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",p)}}}]);
//# sourceMappingURL=804.9cb671dd.chunk.js.map