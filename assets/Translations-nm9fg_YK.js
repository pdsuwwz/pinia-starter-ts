import{d as f,_ as h,o as c,b as g,D as w,p as $,h as b,e,U as B,H as v,K as I,J as S,i as A,f as y,V as z,r as n,c as _,w as t,g as m,A as H,t as M,F as T}from"./index-yT1VfScK.js";const V=f({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),x=o=>($("data-v-b0ee8b2d"),o=o(),b(),o),D=x(()=>e("svg",{viewBox:"0 0 512 512"},[e("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),e("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1)),N=[D];function F(o,r,a,l,d,i){return c(),g("span",{class:w(["locales-logo-icon",{"is-dark":o.dark}])},N,2)}const R=h(V,[["render",F],["__scopeId","data-v-b0ee8b2d"]]),U=f({name:"TranslationsBox",components:{ArrowDown:B,LogoIcon:R},props:{dark:{type:Boolean,default:!1}},setup(){const o=v(),r=I(),a=S(),l=A(z),d=y(()=>a.locale);return{localesList:l,currentLocale:d,handleChange:p=>{setTimeout(()=>{const{localeCode:s}=p;r.replace({params:{...o.params,locale:s}}),a.setLanguage({locale:s})})}}}}),E={class:"icon-outer"},J={class:"custom-dropdown-item"};function K(o,r,a,l,d,i){const p=n("LogoIcon"),s=n("el-dropdown-item"),k=n("el-dropdown-menu"),C=n("el-dropdown");return c(),_(C,{class:w(["translations-box",{"is-dark":o.dark}]),trigger:"hover","popper-class":"translations-box",onCommand:o.handleChange},{dropdown:t(()=>[m(k,null,{default:t(()=>[(c(!0),g(T,null,H(o.localesList,(u,L)=>(c(),_(s,{key:L,command:u,disabled:o.currentLocale===u.localeCode},{default:t(()=>[e("span",J,M(u.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:t(()=>[e("span",E,[m(p,{dark:o.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}const q=h(U,[["render",K]]);export{q as T};
