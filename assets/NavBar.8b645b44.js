import{T as S}from"./Translations.c5371789.js";import{d as m,u as T,x as b,h,_ as p,o as i,b as l,e as n,F as x,p as N,t as y,H as B,I,J as L,K as _,r as o,c as u,w as s,g as d,a as $,L as q,n as F,q as j,v as H}from"./index.5f5cfb5e.js";const J=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=T(),t=b();return{title:h(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),K={class:"side-action-container"},z={class:"action-list"};var D=p(J,[["render",function(a,t,f,g,k,w){return i(),l("div",K,[n("ul",z,[(i(),l(x,null,N(3,e=>n("li",{key:e,class:"action-item"}," Action "+y(e),1)),64))])])}],["__scopeId","data-v-9dcdcada"]]);const E=m({name:"NavigationAvatar",components:{SwitchButton:B},setup(){I(),L();const a=b();return{commandList:h(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{_.remove("token"),_.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),G=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),M={class:"navigation-avatar__dropdown-command"},O=m({name:"NavigationNavBar",components:{Translations:S,NavigationSideAction:D,NavigationAvatar:p(E,[["render",function(a,t,f,g,k,w){const e=o("el-icon"),c=o("el-dropdown-item"),r=o("el-dropdown-menu"),A=o("el-dropdown");return i(),u(A,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[d(r,null,{default:s(()=>[(i(!0),l(x,null,N(a.commandList,(v,C)=>(i(),u(c,{key:C,onClick:R=>a.handleCommand(v)},{default:s(()=>[n("div",M,[d(e,null,{default:s(()=>[(i(),u($(v.icon)))]),_:2},1024),n("span",null,y(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[G]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),P={class:"navbar-header-box"},Q=(a=>(j("data-v-31d19f53"),a=a(),H(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var W=p(O,[["render",function(a,t,f,g,k,w){const e=o("NavigationSideAction"),c=o("NavigationAvatar"),r=o("Translations");return i(),l("div",null,[n("header",{class:F(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",P,[q(a.$slots,"default",{},void 0,!0),Q,d(e),d(c),d(r,{dark:""})])],2)])}],["__scopeId","data-v-31d19f53"]]);export{W as N};
