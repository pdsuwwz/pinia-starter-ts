import{T as S}from"./Translations.43cee893.js";import{u as T,_ as u}from"./index.cb116887.js";import{g as p,Y as b,j as h,o as i,t as l,v as n,D as N,C as x,I as A,a3 as B,i as I,u as L,d as w,r as o,l as m,m as s,n as d,V as $,J as j,A as D,M as J,O as M}from"./vendor.2a544937.js";const O=p({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=T(),t=b();return{title:h(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),V={class:"side-action-container"},Y={class:"action-list"};var q=u(O,[["render",function(a,t,f,g,k,_){return i(),l("div",V,[n("ul",Y,[(i(),l(N,null,x(3,e=>n("li",{key:e,class:"action-item"}," Action "+A(e),1)),64))])])}],["__scopeId","data-v-9dcdcada"]]);const z=p({name:"NavigationAvatar",components:{SwitchButton:B},setup(){I(),L();const a=b();return{commandList:h(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{w.remove("token"),w.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),E=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),F={class:"navigation-avatar__dropdown-command"},G=p({name:"NavigationNavBar",components:{Translations:S,NavigationSideAction:q,NavigationAvatar:u(z,[["render",function(a,t,f,g,k,_){const e=o("el-icon"),r=o("el-dropdown-item"),c=o("el-dropdown-menu"),y=o("el-dropdown");return i(),m(y,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[d(c,null,{default:s(()=>[(i(!0),l(N,null,x(a.commandList,(v,C)=>(i(),m(r,{key:C,onClick:P=>a.handleCommand(v)},{default:s(()=>[n("div",F,[d(e,null,{default:s(()=>[(i(),m($(v.icon)))]),_:2},1024),n("span",null,A(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[E]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),H={class:"navbar-header-box"},K=(a=>(J("data-v-31d19f53"),a=a(),M(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var W=u(G,[["render",function(a,t,f,g,k,_){const e=o("NavigationSideAction"),r=o("NavigationAvatar"),c=o("Translations");return i(),l("div",null,[n("header",{class:D(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",H,[j(a.$slots,"default",{},void 0,!0),K,d(e),d(r),d(c,{dark:""})])],2)])}],["__scopeId","data-v-31d19f53"]]);export{W as N};