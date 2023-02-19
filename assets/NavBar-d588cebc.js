import{T as b}from"./Translations-904a23f1.js";import{u as S}from"./useCurrentInstance-7afa7fff.js";import{u as w}from"./index-99a5d9b1.js";import{x as v,e as k,ai as f,y as e,z as l,A as n,F as y,a0 as N,O as x,H as m,I as r,a7 as a,P as d,K as B,B as L,D as T,ak as D,al as I}from"./_plugin-vue_export-helper-1773af58.js";import{b as R,u as j,a as $}from"./request-762bd987.js";import{Q as z}from"./index-75232f1c.js";const F=v({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:o}=S(),i=w();function c(){o.$emit("click")}return{title:k(()=>i.t("base.systemTitle")),handleClick:c}}});const V={class:"side-action-container"},E={class:"action-list"};function H(o,i,c,t,g,h){return e(),l("div",V,[n("ul",E,[(e(),l(y,null,N(3,s=>n("li",{key:s,class:"action-item"}," Action "+x(s),1)),64))])])}const K=f(F,[["render",H],["__scopeId","data-v-524a1713"]]),O=v({name:"NavigationAvatar",components:{SwitchButton:z},setup(){R(),j();const o=w();return{commandList:k(()=>[{label:o.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),P=""+new URL("navigation-avatar-d1925bd8.webp",import.meta.url).href;const Q=n("div",{style:{padding:"0 12px"}},[n("img",{src:P})],-1),U={class:"navigation-avatar__dropdown-command"};function q(o,i,c,t,g,h){const s=a("el-icon"),_=a("el-dropdown-item"),p=a("el-dropdown-menu"),A=a("el-dropdown");return e(),m(A,{class:"navigation-avatar",trigger:"click"},{dropdown:r(()=>[d(p,null,{default:r(()=>[(e(!0),l(y,null,N(o.commandList,(u,C)=>(e(),m(_,{key:C,onClick:Z=>o.handleCommand(u)},{default:r(()=>[n("div",U,[d(s,null,{default:r(()=>[(e(),m(B(u.icon)))]),_:2},1024),n("span",null,x(u.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:r(()=>[Q]),_:1})}const G=f(O,[["render",q]]),J=v({name:"NavigationNavBar",components:{Translations:b,NavigationSideAction:K,NavigationAvatar:G},props:{fixed:{type:Boolean,default:!0}}});const M=o=>(D("data-v-c806d0f0"),o=o(),I(),o),W={class:"navbar-header-box"},X=M(()=>n("div",{style:{flex:"1"}},null,-1));function Y(o,i,c,t,g,h){const s=a("NavigationSideAction"),_=a("NavigationAvatar"),p=a("Translations");return e(),l("div",null,[n("header",{class:T(["navigation-navbar-header-container",{"fixed-header":o.fixed}])},[n("div",W,[L(o.$slots,"default",{},void 0,!0),X,d(s),d(_),d(p,{dark:""})])],2)])}const io=f(J,[["render",Y],["__scopeId","data-v-c806d0f0"]]);export{io as N};
