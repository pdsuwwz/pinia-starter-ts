import{T}from"./Translations.ff0d842a.js";import{u as S,_ as m}from"./index.9514457a.js";import{s as u,W as b,i as h,o as i,t as l,v as n,D as w,C as x,I as N,a3 as j,h as B,u as I,d as A,r as o,k as p,l as e,m as d,T as $,J as L,A as D,$ as J,a0 as W}from"./vendor.64f17b98.js";const q=u({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=S(),t=b();return{title:h(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),z={class:"side-action-container"},E={class:"action-list"};var F=m(q,[["render",function(a,t,f,g,k,_){return i(),l("div",z,[n("ul",E,[(i(),l(w,null,x(3,s=>n("li",{key:s,class:"action-item"}," Action "+N(s),1)),64))])])}],["__scopeId","data-v-9dcdcada"]]);const G=u({name:"NavigationAvatar",components:{SwitchButton:j},setup(){B(),I();const a=b();return{commandList:h(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{A.remove("token"),A.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),H=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),K={class:"navigation-avatar__dropdown-command"},M=u({name:"NavigationNavBar",components:{Translations:T,NavigationSideAction:F,NavigationAvatar:m(G,[["render",function(a,t,f,g,k,_){const s=o("el-icon"),r=o("el-dropdown-item"),c=o("el-dropdown-menu"),y=o("el-dropdown");return i(),p(y,{class:"navigation-avatar",trigger:"click"},{dropdown:e(()=>[d(c,null,{default:e(()=>[(i(!0),l(w,null,x(a.commandList,(v,C)=>(i(),p(r,{key:C,onClick:Q=>a.handleCommand(v)},{default:e(()=>[n("div",K,[d(s,null,{default:e(()=>[(i(),p($(v.icon)))]),_:2},1024),n("span",null,N(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:e(()=>[H]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),O={class:"navbar-header-box"},P=(a=>(J("data-v-31d19f53"),a=a(),W(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var X=m(M,[["render",function(a,t,f,g,k,_){const s=o("NavigationSideAction"),r=o("NavigationAvatar"),c=o("Translations");return i(),l("div",null,[n("header",{class:D(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",O,[L(a.$slots,"default",{},void 0,!0),P,d(s),d(r),d(c,{dark:""})])],2)])}],["__scopeId","data-v-31d19f53"]]);export{X as N};
