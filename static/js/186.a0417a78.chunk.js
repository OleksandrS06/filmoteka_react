"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{854:function(e,t,r){var n=r(643),a=r(184);t.Z=function(){return(0,a.jsx)(n.yk,{height:"100",width:"100",color:"#077728",visible:!0,outerCircleColor:"#094677",innerCircleColor:"#c0119a",barColor:"#bbce0b",ariaLabel:"circles-with-bar-loading"})}},186:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),i=r(7757),u=r.n(i),c=r(854),o=r(2791),s=r(7689),p=r(4390),f=r(184);t.default=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],i=t[1],l=(0,o.useState)(""),h=(0,a.Z)(l,2),v=h[0],d=h[1],m=(0,o.useState)(!0),g=(0,a.Z)(m,2),w=g[0],b=g[1],x=(0,s.UO)().moviesId;return(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(""),e.prev=1,e.next=4,(0,p.Jh)(x);case 4:t=e.sent,i(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d("something went wrong");case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]),(0,f.jsxs)(f.Fragment,{children:[w&&(0,f.jsx)(c.Z,{}),v&&(0,f.jsx)("p",{children:v}),r.length>0?(0,f.jsx)("ul",{children:r.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,f.jsxs)("li",{children:["Author: ",(0,f.jsx)("span",{children:t}),(0,f.jsx)("p",{children:r})]},n)}))}):(0,f.jsx)("p",{children:"'Looks like there are no reviews at the moment'"})]})}},4390:function(e,t,r){r.d(t,{Gc:function(){return l},JS:function(){return o},Jh:function(){return v},Ph:function(){return m},TP:function(){return p},xn:function(){return w}});var n=r(5861),a=r(7757),i=r.n(a),u=r(3263),c=r(1862);function o(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results.map((function(e){return{original_title:e.original_title,id:e.id,poster_path:w(e.poster_path),vote_average:x(e.vote_average)}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(i().mark((function e(t){var r,n,a,c,o,s,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,a=n.original_title,c=n.vote_average,o=n.overview,s=n.poster_path,p=n.genres,e.abrupt("return",{original_title:a,vote_average:x(c),overview:o,poster_path:w(s),genres:b(p)});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results.map((function(e){return{original_title:e.original_title,id:e.id,poster_path:w(e.poster_path),vote_average:x(e.vote_average)}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"13b039c8ea964a53c22455b956eb62e0"};var w=function(e){return e?"https://image.tmdb.org/t/p/w500".concat(e):c},b=function(e){if(e)return e.map((function(e){return e.name+","})).join(" ")},x=function(e){return Math.round(10*e)}},1862:function(e,t,r){e.exports=r.p+"static/media/noImage.e0e17cef2bdf36b3c5b5.jpeg"}}]);
//# sourceMappingURL=186.a0417a78.chunk.js.map