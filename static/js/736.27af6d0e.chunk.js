"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c=e(9439),i=e(7689),o=e(2791),u=e(2690),s=e(854),p=e(168),f=e(5867),h=f.ZP.header(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 50px;\n  align-items: baseline;\n  font-size: 18px;\n  padding: 20px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),l=f.ZP.nav(a||(a=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n  font-weight: 500;\n  list-style: none;\n"]))),d=e(184),x=function(){var n=(0,i.UO)().movieId,t=(0,o.useState)(!0),e=(0,c.Z)(t,2),r=e[0],a=e[1],p=(0,o.useState)([]),f=(0,c.Z)(p,2),x=f[0],w=f[1];return(0,o.useEffect)((function(){n&&(0,u.uV)("/movie",n).then((function(n){w(n.cast)})).catch(u.NI).finally((function(){return a(!1)}))}),[n]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{className:h,children:"Cast:"}),r&&(0,d.jsx)(s.a,{}),0!==x.length?(0,d.jsx)("ul",{className:l,children:x.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,d.jsxs)("li",{children:[(0,d.jsx)("b",{children:e}),(0,d.jsxs)("p",{children:["Character: ",r]}),(0,d.jsx)("img",{src:a?"http://image.tmdb.org/t/p/w185".concat(a):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:e,width:"100",height:"150"})]},t)}))}):(0,d.jsx)("p",{children:"Sorry! We don't have any information about cast"})]})}},854:function(n,t,e){e.d(t,{a:function(){return c}});var r=e(8881),a=e(184),c=function(){return(0,a.jsx)("div",{className:"loader",children:(0,a.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},2690:function(n,t,e){e.d(t,{Hx:function(){return m},NI:function(){return v},Pu:function(){return u},Y5:function(){return x},bI:function(){return l},uV:function(){return b},vw:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),i=e(340),o=e(1686),u={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"},s="bd27c037ab2cca01c1960a6ee250d410",p="https://api.themoviedb.org/3";function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(p).concat(t,"?api_key=").concat(s),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"?api_key=").concat(s,"&query=").concat(e),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"/").concat(e,"?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"/").concat(e,"/credits?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(t,"/").concat(e,"/reviews?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){o.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",u)}}}]);
//# sourceMappingURL=736.27af6d0e.chunk.js.map