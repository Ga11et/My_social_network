(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[7],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(3),c=n(57),a=(n(0),n(17)),r=n(7),i=n(2),u=["isAuth"];function s(e){return Object(a.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){var n=t.isAuth,a=Object(c.a)(t,u);return n?Object(i.jsx)(e,Object(o.a)({},a)):Object(i.jsx)(r.a,{to:"/login"})}))}},244:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var o=n(245),c=function(e){return e.findpeople},a={isLoadingSelector:Object(o.a)(c,(function(e){return e.isLoading})),getPeopleSelector:Object(o.a)(c,(function(e){return e.people})),countPagesSelector:Object(o.a)(c,(function(e){return e.countPeople})),countPeopleOnPageSelector:Object(o.a)(c,(function(e){return e.countPeopleOnPage})),activePageSelector:Object(o.a)(c,(function(e){return e.active}))},r=function(e){return e.contentPage},i={profileInfoSelector:Object(o.a)(r,(function(e){return e.profile})),statusSelector:Object(o.a)(r,(function(e){return e.status})),isSuccessedSelector:Object(o.a)(r,(function(e){return e.successed}))},u={authIdSelector:Object(o.a)((function(e){return e.auth}),(function(e){return e.userId}))}},308:function(e,t,n){e.exports={main:"findpeople_main__1WkGT",numberPage:"findpeople_numberPage__201GX",active:"findpeople_active__cy1xI"}},309:function(e,t,n){e.exports={body:"person_body__7eYpn",avatar:"person_avatar__15Rze",main:"person_main__26TwK"}},310:function(e,t,n){e.exports={item:"paginator_item__3iRxz",numberPage:"paginator_numberPage__gpYIb",active:"paginator_active__1yGtR"}},314:function(e,t,n){e.exports={main:"formikSearchForm_main__18gyd"}},330:function(e,t,n){"use strict";n.r(t);var o=n(57),c=n(17),a=n(308),r=n.n(a),i=n(0),u=n(18),s=n(309),l=n.n(s),b=n(2),d=function(e){return Object(b.jsxs)("section",{className:l.a.body,children:[Object(b.jsxs)("div",{className:l.a.avatar,children:[Object(b.jsx)(u.b,{to:"/profile/".concat(e.userId),children:Object(b.jsx)("img",{src:e.avatar,alt:"avatar"})}),e.followed?Object(b.jsx)("button",{disabled:e.isButtonLoading.some((function(t){return t===e.userId})),onClick:function(){return e.unFollow(e.userId)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:e.isButtonLoading.some((function(t){return t===e.userId})),onClick:function(){return e.follow(e.userId)},children:"Follow"})]}),Object(b.jsxs)("div",{className:l.a.main,children:[Object(b.jsxs)("div",{className:l.a.name,children:[Object(b.jsx)(u.b,{to:"/profile/".concat(e.userId),children:Object(b.jsx)("p",{children:e.name})}),Object(b.jsx)("p",{children:e.status})]}),Object(b.jsxs)("div",{className:l.a.location,children:[Object(b.jsx)("p",{children:e.country}),Object(b.jsx)("p",{children:e.city})]})]})]})},j=n.p+"static/media/user.5edf0c2b.jpg",p=n(83),f=n(237),g=n(310),P=n.n(g),m=function(e){for(var t=Math.ceil(e.countPages/e.countPeopleOnPage),n=Object(i.useState)(1),o=Object(f.a)(n,2),c=o[0],a=o[1],r=10*(c-1)+1,u=r+10,s=[],l=1;l<=t;l++)s[l]=l;var d=s.filter((function(e){return e>=r&&e<=u})).map((function(t){return Object(b.jsx)("div",{onClick:function(){return e.onNumberPageClick(t)},className:"".concat(P.a.numberPage," ").concat(e.activePage===t?P.a.active:P.a.noactive),children:t},t)}));return Object(b.jsxs)("div",{className:P.a.item,children:[c>1&&Object(b.jsx)("button",{onClick:function(){return a(c-1)},children:"-"}),d,c<t/10&&Object(b.jsx)("button",{onClick:function(){return a(c+1)},children:"+"})]})},O=n(324),h=n(314),v=n.n(h),x=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O.c,{initialValues:{term:"",friend:""},onSubmit:function(t,n){var o=n.setSubmitting;e.putSearchForm(t),o(!1)},children:function(e){var t=e.isSubmitting;return Object(b.jsxs)(O.b,{className:v.a.main,children:[Object(b.jsx)(O.a,{type:"test",name:"term"}),Object(b.jsxs)(O.a,{component:"select",id:"friend",name:"friend",children:[Object(b.jsx)("option",{value:"",children:"All"}),Object(b.jsx)("option",{value:"true",children:"Only followed"}),Object(b.jsx)("option",{value:"false",children:"Only not followed"})]}),Object(b.jsx)("button",{type:"submit",disabled:t,children:"Search"})]})}})})},_=function(e){var t=e.people.map((function(t){return Object(b.jsx)(d,{userId:t.id,avatar:null!=t.photos.small?t.photos.small:j,followed:t.followed,name:t.name,status:t.status,country:"some country",city:"some city",follow:e.followPerson,unFollow:e.unFollowPerson,isButtonLoading:e.isButtonLoading},t.id)}));return Object(b.jsxs)("div",{className:r.a.main,children:[Object(b.jsx)(x,{putSearchForm:e.putSearchForm}),Object(b.jsx)(m,{countPages:e.countPages,countPeopleOnPage:e.countPeopleOnPage,onNumberPageClick:e.onNumberPageClick,activePage:e.activePage}),e.isLoading?Object(b.jsx)("img",{src:p.a,alt:"loadingIcon"}):null,t,Object(b.jsx)(m,{countPages:e.countPages,countPeopleOnPage:e.countPeopleOnPage,onNumberPageClick:e.onNumberPageClick,activePage:e.activePage})]})},w=n(236),S=n(30),F=n(244),y=n(76),k=["searchForm","activePage","countPeopleOnPage","showPeople"],L={changeActivePage:y.a.changeActivePage,showPeople:y.b.showPeople,followPerson:y.b.followPerson,unFollowPerson:y.b.unFollowPerson,putSearchForm:y.a.putSearchForm};t.default=Object(S.d)(w.a,Object(c.b)((function(e){return{people:F.c.getPeopleSelector(e),countPages:F.c.countPagesSelector(e),countPeopleOnPage:F.c.countPeopleOnPageSelector(e),activePage:F.c.activePageSelector(e),isLoading:F.c.isLoadingSelector(e),isButtonLoading:e.findpeople.arrayButtonsLoading,searchForm:e.findpeople.searchForm}}),L))((function(e){var t=e.searchForm,n=e.activePage,c=e.countPeopleOnPage,a=e.showPeople,r=Object(o.a)(e,k);Object(i.useEffect)((function(){r.changeActivePage(1),a(1,c,t)}),[t,c,a]),Object(i.useEffect)((function(){a(n,c,t)}),[n]),Object(i.useMemo)((function(){a(1,c,t)}),[t,c,a]);return Object(b.jsx)(_,{searchForm:t,onNumberPageClick:function(e){r.changeActivePage(e)},people:r.people,countPages:r.countPages,countPeopleOnPage:c,isLoading:r.isLoading,activePage:n,followPerson:r.followPerson,unFollowPerson:r.unFollowPerson,isButtonLoading:r.isButtonLoading,putSearchForm:r.putSearchForm})}))}}]);
//# sourceMappingURL=7.00d2bc49.chunk.js.map