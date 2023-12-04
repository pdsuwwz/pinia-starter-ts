import{T as x}from"./Translations-xClot6A8.js";import{d as v,u as w,f as k,k as y,_ as f,o as a,b as d,e as o,F as N,A as C,t as b,T as B,K as L,H as T,M as $,r as e,c as m,w as r,g as l,a as D,O as R,D as V,p as j,h as E}from"./index-QqBRTgt2.js";const F=v({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=y(),i=w();function c(){n.$emit("click")}return{title:k(()=>i.t("base.systemTitle")),handleClick:c}}}),I={class:"side-action-container"},O={class:"action-list"};function q(n,i,c,t,h,g){return a(),d("div",I,[o("ul",O,[(a(),d(N,null,C(3,s=>o("li",{key:s,class:"action-item"}," Action "+b(s),1)),64))])])}const z=f(F,[["render",q],["__scopeId","data-v-524a1713"]]),H=v({name:"NavigationAvatar",components:{SwitchButton:B},setup(){L(),T();const n=w();return{commandList:k(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),K=""+new URL("navigation-avatar-v7Eq-VOa.webp",import.meta.url).href,M=o("div",{style:{outline:"none",padding:"0 12px"}},[o("img",{src:K})],-1),U={class:"navigation-avatar__dropdown-command"};function G(n,i,c,t,h,g){const s=e("el-icon"),_=e("el-dropdown-item"),p=e("el-dropdown-menu"),A=e("el-dropdown");return a(),m(A,{class:"navigation-avatar",trigger:"hover"},{dropdown:r(()=>[l(p,null,{default:r(()=>[(a(!0),d(N,null,C(n.commandList,(u,S)=>(a(),m(_,{key:S,onClick:Z=>n.handleCommand(u)},{default:r(()=>[o("div",U,[l(s,null,{default:r(()=>[(a(),m(D(u.icon)))]),_:2},1024),o("span",null,b(u.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:r(()=>[M]),_:1})}const J=f(H,[["render",G]]),P=v({name:"NavigationNavBar",components:{Translations:x,NavigationSideAction:z,NavigationAvatar:J},props:{fixed:{type:Boolean,default:!0}}}),Q=n=>(j("data-v-c806d0f0"),n=n(),E(),n),W={class:"navbar-header-box"},X=Q(()=>o("div",{style:{flex:"1"}},null,-1));function Y(n,i,c,t,h,g){const s=e("NavigationSideAction"),_=e("NavigationAvatar"),p=e("Translations");return a(),d("div",null,[o("header",{class:V(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[o("div",W,[R(n.$slots,"default",{},void 0,!0),X,l(s),l(_),l(p,{dark:""})])],2)])}const tn=f(P,[["render",Y],["__scopeId","data-v-c806d0f0"]]);export{tn as N};
