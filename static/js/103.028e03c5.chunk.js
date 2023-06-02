"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[103],{5510:function(n,r,e){e.d(r,{Bo:function(){return p},E$:function(){return x},cI:function(){return v},h1:function(){return m},s2:function(){return f}});var t=e(5861),a=e(7757),c=e.n(a),o=e(1243),u=e(7596),i="https://api.themoviedb.org/3/",s="dd2eacab57962d131eb2537d52aeafc3";function p(n,r){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(c().mark((function n(r,e){var t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(i,"search/movie?api_key=").concat(s,"&language=en&page=").concat(e,"&include_adult=false&query=").concat(r),n.next=4,o.Z.get(t);case 4:return a=n.sent,n.next=7,a.data;case 7:return n.abrupt("return",n.sent);case 10:n.prev=10,n.t0=n.catch(0),u.Am.error("Oops, an error occurred");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function f(){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(i,"trending/all/day?api_key=").concat(s,"&language=en"),n.next=4,o.Z.get(r);case 4:return e=n.sent,n.next=7,e.data;case 7:return n.abrupt("return",n.sent);case 10:n.prev=10,n.t0=n.catch(0),u.Am.error("Oops, an error occurred");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(i,"/movie/").concat(r,"?api_key=").concat(s),n.next=4,o.Z.get(e);case 4:return t=n.sent,n.next=7,t.data;case 7:return n.abrupt("return",n.sent);case 10:n.prev=10,n.t0=n.catch(0),u.Am.error("Oops, an error occurred");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(i,"/movie/").concat(r,"/credits?api_key=").concat(s),n.next=4,o.Z.get(e);case 4:return t=n.sent,n.next=7,t.data;case 7:return n.abrupt("return",n.sent);case 10:n.prev=10,n.t0=n.catch(0),u.Am.error("Oops, an error occurred");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return(y=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(i,"/movie/").concat(r,"/reviews?api_key=").concat(s),n.next=4,fetch(e);case 4:return t=n.sent,n.abrupt("return",t.json());case 8:n.prev=8,n.t0=n.catch(0),u.Am.error("Oops, an error occurred");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}},4103:function(n,r,e){e.r(r),e.d(r,{default:function(){return b}});var t,a,c,o,u,i=e(9439),s=e(5510),p=e(168),l=e(1087),f=e(6444),d=f.ZP.main(t||(t=(0,p.Z)(["\n  padding: 20px;\n"]))),x=f.ZP.section(a||(a=(0,p.Z)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),h=f.ZP.h1(c||(c=(0,p.Z)(["\n  margin: 0 0 10px;\n  font-size: 38px;\n  font-weight: bold;\n"]))),v=f.ZP.ul(o||(o=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n  list-style: none;\n  padding: 0;\n"]))),g=(0,f.ZP)(l.rU)(u||(u=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #faf4c7;\n  padding: 15px;\n  height: 100px;\n  text-decoration: none;\n  color: #000000;\n  font-size: 18px;\n  &:hover {\n    transform: scale(1.03);\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  }\n"]))),m=e(2791),y=e(7689),Z=e(184),b=function(){var n=(0,y.TH)(),r=(0,m.useState)([]),e=(0,i.Z)(r,2),t=e[0],a=e[1];return(0,m.useEffect)((function(){(0,s.s2)().then((function(n){var r=n.results;return a(r)}))})),(0,Z.jsx)(d,{children:(0,Z.jsxs)(x,{children:[(0,Z.jsx)(h,{children:"Trending Today"}),(0,Z.jsx)(v,{children:t.map((function(r){var e=r.original_title,t=r.original_name,a=r.id;return(0,Z.jsx)(g,{to:"/movies/".concat(a),state:{from:n},children:null!==e&&void 0!==e?e:t},a)}))})]})})}}}]);
//# sourceMappingURL=103.028e03c5.chunk.js.map