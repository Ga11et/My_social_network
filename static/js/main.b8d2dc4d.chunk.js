(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[1],{143:function(t,e,n){},17:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return O}));var r=n(5),a=n.n(r),c=n(8),i=n(3),u=n(33),o=n(9),s="auth/AUTH_ME",l="auth/FIND_ERROR",d="auth/GET_CAPTCHA",f={userId:null,userName:null,userEmail:null,isAuth:!1,fieldError:null,captcha:null},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(i.a)(Object(i.a)({},t),e.data);case l:return Object(i.a)(Object(i.a)({},t),{},{fieldError:e.error});case d:return Object(i.a)(Object(i.a)({},t),{},{captcha:e.captchaUrl});default:return t}},b=function(t,e,n,r){return{type:s,data:{userId:t,userEmail:e,userName:n,isAuth:r}}},j=function(t){return{type:d,captchaUrl:t}},m=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.f)();case 2:0===(n=t.sent).resultCode&&(r=n.id,c=n.email,i=n.login,e(b(r,c,i,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r,c,i,s,l,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.i)(t);case 2:if(0!==(r=e.sent).resultCode){e.next=11;break}return e.next=6,Object(o.f)();case 6:0===(c=e.sent).resultCode&&(i=c.id,s=c.email,l=c.login,n(b(i,s,l,!0))),n(j(null)),e.next=17;break;case 11:if(n(Object(u.a)("login",{_error:r.message})),10!==r.resultCode){e.next=17;break}return e.next=15,Object(o.b)();case 15:d=e.sent,n(j(d));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.g)();case 2:0===t.sent.resultCode&&e(b(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},224:function(t,e,n){},233:function(t,e,n){"use strict";n.r(e);n(143);var r=function(t){t&&t instanceof Function&&n.e(11).then(n.bind(null,319)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))},a=n(89),c=n(17),i=n(79),u=n(88),o=n(3),s="app/INITIALISE_APP",l={initialised:!1},d=n(66),f=n(80),p=n(27),b=n(28),j=n(29),m=n(30),h={links:[{name:"Profile",to:"/profile",id:1111},{name:"Messages",to:"/dialogs",id:2222},{name:"News",to:"/news",id:3333},{name:"Music",to:"/music",id:4444},{name:"Find people",to:"/find",id:5555},{name:"Settings",to:"/settings",id:6666}],friends:[{img:n(31).a,name:"Vadim",id:123},{img:b.a,name:"Fyodor",id:124},{img:j.a,name:"Kirill",id:125},{img:p.a,name:"Andrey",id:126},{img:m.a,name:"Sasha",id:127}]},O=n(26),g=Object(O.c)({auth:c.b,contentPage:d.b,dialogPage:f.a,findpeople:i.b,navPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return t},form:u.a,app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(o.a)(Object(o.a)({},t),{},{initialised:!0});default:return t}}}),v=Object(O.e)(g,Object(O.a)(a.a));window.store=v;var x=v,y=n(62),w=(n(224),n(38)),_=n(39),k=n(41),C=n(40),I=n(18),P=n.p+"static/media/vk_icon.aacb54b4.svg",E=n(19),A=n(57),L=n.n(A),S=n(2),T=function(t){return Object(S.jsxs)("div",{className:L.a.main,children:[Object(S.jsx)("img",{src:t.vkIcon,alt:"vk_icon"}),Object(S.jsx)("div",{className:L.a.loginCont,children:Object(S.jsx)("div",{children:t.loginInfo.isAuth?Object(S.jsx)(E.b,{to:"/profile/".concat(t.loginInfo.userId),children:t.loginInfo.userName}):Object(S.jsx)(E.b,{to:"/login",children:"login"})})})]})},N=n(0),F=n.n(N),M=function(t){Object(k.a)(n,t);var e=Object(C.a)(n);function n(){return Object(w.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return Object(S.jsx)(T,Object(o.a)({},this.props))}}]),n}(F.a.Component),G=Object(I.b)((function(t){return{vkIcon:P,loginInfo:t.auth}}),{authMe:c.a,postLoginData:c.d})(M),R=n(93),H=n.n(R),U=n(94),D=n.n(U),z=function(t){return Object(S.jsxs)("div",{className:D.a.main,children:[Object(S.jsx)("img",{src:t.img,alt:"avatar"}),Object(S.jsx)("p",{children:t.name})]})},B=function(t){var e=t.state.map((function(t){return Object(S.jsx)(z,{img:t.img,name:t.name},t.id)}));return Object(S.jsxs)("div",{className:H.a.main,children:[Object(S.jsx)("h3",{children:"Friends"}),Object(S.jsx)("div",{children:e})]})},K=n(95),V=n.n(K),W=n(60),J=n.n(W),Q=function(t){return Object(S.jsx)("div",{className:J.a.main,children:Object(S.jsx)(E.b,{to:t.to,activeClassName:J.a.active,children:t.name})})},X=function(t){var e=t.state.links.map((function(t){return Object(S.jsx)(Q,{name:t.name,to:t.to},t.id)}));return Object(S.jsxs)("div",{className:V.a.main,children:[e,Object(S.jsx)(B,{state:t.state.friends}),t.isAuth?Object(S.jsx)("p",{onClick:t.logout,children:"Log out"}):null]})},Y=function(t){Object(k.a)(n,t);var e=Object(C.a)(n);function n(){return Object(w.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return Object(S.jsx)(X,Object(o.a)({},this.props))}}]),n}(F.a.Component),q=Object(I.b)((function(t){return{state:t.navPage,isAuth:t.auth.isAuth}}),{logout:c.c})(Y),Z=n(7),$=n(50),tt=function(t){return function(e){return Object(S.jsx)(F.a.Suspense,{fallback:Object(S.jsx)($.a,{}),children:Object(S.jsx)(t,Object(o.a)({},e))})}},et=["initialiasationSuccess"],nt=F.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,325))})),rt=F.a.lazy((function(){return n.e(7).then(n.bind(null,324))})),at=F.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,323))})),ct=F.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,326))})),it=F.a.lazy((function(){return n.e(9).then(n.bind(null,320))})),ut=F.a.lazy((function(){return n.e(8).then(n.bind(null,321))})),ot=F.a.lazy((function(){return n.e(10).then(n.bind(null,322))})),st=Object(O.d)(Z.g,Object(I.b)((function(t){return{isAuth:t.app.initialised}}),{initialiasationSuccess:function(){return function(t){var e=t(Object(c.a)());Promise.all([e]).then((function(){t({type:s})}))}}}))((function(t){var e=t.initialiasationSuccess,n=Object(y.a)(t,et);return Object(N.useMemo)((function(){e()}),[e]),n.isAuth?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(G,{}),Object(S.jsxs)("div",{className:"main",children:[Object(S.jsx)(q,{}),Object(S.jsxs)(Z.d,{children:[Object(S.jsx)(Z.a,{exact:!0,from:"/",to:"/profile"}),Object(S.jsx)(Z.b,{path:"/profile/:userId?",render:tt(at)}),Object(S.jsx)(Z.b,{path:"/dialogs",render:tt(nt)}),Object(S.jsx)(Z.b,{path:"/news",render:tt(it)}),Object(S.jsx)(Z.b,{path:"/music",render:tt(ut)}),Object(S.jsx)(Z.b,{path:"/find",render:tt(rt)}),Object(S.jsx)(Z.b,{path:"/settings",render:tt(ot)}),Object(S.jsx)(Z.b,{path:"/login",render:tt(ct)})]})]})]}):Object(S.jsx)($.a,{})})),lt=n(49);n.n(lt).a.render(Object(S.jsx)(I.a,{store:x,children:Object(S.jsx)(E.a,{basename:"/My_social_network",children:Object(S.jsx)(st,{})})}),document.getElementById("root")),r()},27:function(t,e,n){"use strict";e.a=n.p+"static/media/andrey.8cab7208.jpg"},28:function(t,e,n){"use strict";e.a=n.p+"static/media/fyodor.8864fbea.jpg"},29:function(t,e,n){"use strict";e.a=n.p+"static/media/kirill.195364cd.jpg"},30:function(t,e,n){"use strict";e.a=n.p+"static/media/sasha.f5320e26.jpg"},31:function(t,e,n){"use strict";e.a=n.p+"static/media/vadim.8abdb6ac.jpg"},50:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(87),a=n(2),c=function(){return Object(a.jsx)("img",{src:r.a,alt:"preloader"})}},57:function(t,e,n){t.exports={main:"header_main__3UPcW",loginCont:"header_loginCont__201P4"}},60:function(t,e,n){t.exports={main:"navlink_main__131tj",active:"navlink_active__2z4Ca"}},66:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return O})),n.d(e,"g",(function(){return g})),n.d(e,"d",(function(){return y})),n.d(e,"f",(function(){return w})),n.d(e,"a",(function(){return _})),n.d(e,"e",(function(){return k}));var r=n(5),a=n.n(r),c=n(8),i=n(23),u=n(3),o=n(33),s=n(9),l="profile/ADD_POST",d="profile/SET_PROFILE",f="profile/GET_STATUS",p="profile/SET_PROFILE_SUCCESS",b="profile/DELETE_POST",j="profile/SET_PROFILE_PHOTO",m={profile:{},posts:[{id:1,message:"Are there somebody, who is more clever then me?"},{id:2,message:"Learning React.."},{id:3,message:"I'm broken, bro"},{id:4,message:"I want to say something"}],status:"write something",successed:!1},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:var n={id:5,message:e.text};return Object(u.a)(Object(u.a)({},t),{},{posts:[].concat(Object(i.a)(t.posts),[n]),writing:""});case d:return Object(u.a)(Object(u.a)({},t),{},{profile:e.profile});case f:return Object(u.a)(Object(u.a)({},t),{},{status:e.status});case p:return Object(u.a)(Object(u.a)({},t),{},{successed:e.isTrue});case b:return Object(u.a)(Object(u.a)({},t),{},{posts:Object(i.a)(t.posts.filter((function(t){return t.id!==e.postId})))});case j:return Object(u.a)(Object(u.a)({},t),{},{profile:Object(u.a)(Object(u.a)({},t.profile),{},{photos:e.photos})});default:return t}},O=function(t){return{type:l,text:t}},g=function(t){return{type:d,profile:t}},v=function(t){return{type:f,status:t}},x=function(t){return{type:p,isTrue:t}},y=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(x(!1)),e.next=3,Object(s.e)(t);case 3:return r=e.sent,n(g(r)),e.next=7,Object(s.d)(t);case 7:c=e.sent,n(v(c)),n(x(!0));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.l)(t);case 2:0===e.sent&&n(v(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.k)(t);case 2:0===(r=e.sent).resultCode&&n((a=r.photos,{type:j,photos:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n,r){var c,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r().auth.userId,e.next=3,Object(s.j)(t);case 3:if(0!==(i=e.sent).resultCode){e.next=11;break}return e.next=7,Object(s.e)(c);case 7:u=e.sent,n(g(u)),e.next=13;break;case 11:return n(Object(o.a)("profileForm",{_error:i.errorMessage})),e.abrupt("return",Promise.reject(i.errorMessage));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},79:function(t,e,n){"use strict";n.d(e,"a",(function(){return _})),n.d(e,"d",(function(){return I})),n.d(e,"c",(function(){return P})),n.d(e,"e",(function(){return E}));var r=n(5),a=n.n(r),c=n(8),i=n(23),u=n(3),o=n(9),s=n(27),l=n(28),d=n(29),f=n(30),p=n(31),b="findPeople/FOLLOW",j="findPeople/UNFOLLOW",m="findPeople/GET_PEOPLE",h="findPeople/CHANGE_ACTIVE_PAGE",O="findPeople/TOGGLE_LOADING",g="findPeople/TOGGLE_BUTTON",v={people:[{id:1,followed:!0,photos:{small:s.a},name:"Andrey",status:"I'm not gay",location:{city:"London",country:"Great Britan"}},{id:2,followed:!1,photos:{small:l.a},name:"Fyodor",status:"Hi, i'm your boss",location:{city:"Syktyvkar",country:"Russia"}},{id:3,followed:!1,photos:{small:d.a},name:"Kirill",status:"I live in Moskow",location:{city:"Moskow",country:"Russia"}},{id:4,followed:!1,photos:{small:f.a},name:"Sasha",status:"Hahaahahahaha",location:{city:"Syktyvkar",country:"Russia"}},{id:5,followed:!0,photos:{small:p.a},name:"Vadim",status:"Stop calling me Huim",location:{city:"Kiev",country:"Ukraine"}}],countPages:1e4,countPeopleOnPage:10,active:0,isLoading:!1,arrayButtonsLoading:[]},x=function(t,e,n){return t.map((function(t){var r=t;return t.id===e&&(r=Object(u.a)(Object(u.a)({},t),{},{followed:n})),r}))},y=function(t){return{type:b,userId:t}},w=function(t){return{type:j,userId:t}},_=function(t){return{type:h,number:t}},k=function(t){return{type:O,toggle:t}},C=function(t,e){return{type:g,bool:t,userId:e}},I=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(k(!0)),n.next=3,Object(o.c)(t,e);case 3:c=n.sent,r(k(!1)),r({type:m,people:c});case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},P=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(C(!0,t)),e.next=3,Object(o.h)(t);case 3:0===e.sent&&n(y(t)),n(C(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(C(!0,t)),e.next=3,Object(o.a)(t);case 3:0===e.sent&&n(w(t)),n(C(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(u.a)(Object(u.a)({},t),{},{people:x(t.people,e.userId,!0)});case j:return Object(u.a)(Object(u.a)({},t),{},{people:x(t.people,e.userId,!1)});case m:var n=Object(u.a)(Object(u.a)({},t),{},{people:[]});return e.people.forEach((function(t){n.people.push(t)})),n;case h:return Object(u.a)(Object(u.a)({},t),{},{active:e.newNumber});case O:return Object(u.a)(Object(u.a)({},t),{},{isLoading:e.toggle});case g:return Object(u.a)(Object(u.a)({},t),{},{arrayButtonsLoading:e.bool?[].concat(Object(i.a)(t.arrayButtonsLoading),[e.userId]):[t.arrayButtonsLoading.filter((function(t){return t!==e.userId}))]});default:return t}}},80:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return p}));var r=n(23),a=n(3),c=n(27),i=n(28),u=n(29),o=n(30),s=n(31),l="dialogs/ADD_MESSAGE",d={persons:[{img:s.a,url:"vadim",name:"Vadim",id:1},{img:i.a,url:"fyodor",name:"Fyodor",id:2},{img:u.a,url:"kirill",name:"Kirill",id:4},{img:c.a,url:"andrey",name:"Andrey",id:3},{img:o.a,url:"sasha",name:"Sasha",id:5}],messages:[{author:"you",id:1,message:"Hello there"},{author:"not",id:2,message:"Hi man"},{author:"you",id:3,message:"How are you"},{author:"not",id:4,message:"I'm good"}]},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:var n={author:"you",id:7,message:e.text};return Object(a.a)(Object(a.a)({},t),{},{messages:[].concat(Object(r.a)(t.messages),[n])});default:return t}},p=function(t){return{type:l,text:t}}},87:function(t,e,n){"use strict";e.a=n.p+"static/media/loading.40bf3942.svg"},9:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"a",(function(){return p})),n.d(e,"f",(function(){return b})),n.d(e,"e",(function(){return j})),n.d(e,"d",(function(){return m})),n.d(e,"l",(function(){return h})),n.d(e,"i",(function(){return O})),n.d(e,"b",(function(){return g})),n.d(e,"g",(function(){return v})),n.d(e,"k",(function(){return x})),n.d(e,"j",(function(){return y}));var r=n(5),a=n.n(r),c=n(8),i=n(3),u=n(90),o=n(91),s=n.n(o),l=u.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"48f5b1a7-6286-4f77-9a40-f9b16f3f5224"}}),d=function(t,e){return l.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data.items}))},f=function(t){return l.post("follow/".concat(t)).then((function(t){return t.data.resultCode}))},p=function(t){return l.delete("follow/".concat(t)).then((function(t){return t.data.resultCode}))},b=function(){return l.get("auth/me").then((function(t){return Object(i.a)(Object(i.a)({},t.data.data),{},{resultCode:t.data.resultCode})}))},j=function(t){return l.get("profile/".concat(t)).then((function(t){return t.data}))},m=function(t){return l.get("profile/status/".concat(t)).then((function(t){return t.data}))},h=function(t){return l.put("profile/status",{status:t}).then((function(t){return t.data.resultCode}))},O=function(t){var e=t.email,n=t.password,r=t.rememberMe,a=t.captcha;return l.post("auth/login",{email:e,password:n,rememberMe:r,captcha:a}).then((function(t){return{message:t.data.messages[0],resultCode:t.data.resultCode}}))},g=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.get("security/get-captcha-url");case 2:return e=t.sent,t.abrupt("return",e.data.url);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){return l.delete("auth/login").then((function(t){return{resultCode:t.data.resultCode}}))},x=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new s.a).append("image",e),t.next=4,l.put("profile/photo",n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return r=t.sent,t.abrupt("return",{resultCode:r.data.resultCode,photos:r.data.data.photos});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.put("profile",e);case 2:return n=t.sent,t.abrupt("return",{resultCode:n.data.resultCode,errorMessage:n.data.messages[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},93:function(t,e,n){t.exports={main:"friends_main__2Xj0f"}},94:function(t,e,n){t.exports={main:"friend_main__1S5Q_"}},95:function(t,e,n){t.exports={main:"nav_main___aWJm"}}},[[233,2,3]]]);
//# sourceMappingURL=main.b8d2dc4d.chunk.js.map