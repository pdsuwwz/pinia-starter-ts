var B=Object.defineProperty,y=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var m=(a,o,s)=>o in a?B(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,i=(a,o)=>{for(var s in o||(o={}))A.call(o,s)&&m(a,s,o[s]);if(p)for(var s of p(o))H.call(o,s)&&m(a,s,o[s]);return a},u=(a,o)=>y(a,z(o));import{_ as g,b as M,l as T}from"./index.9c474095.js";import{g as f,o as l,t as k,A as L,$ as j,a0 as D,v as n,a4 as N,u as V,i as $,L as q,r,l as h,m as c,n as v,C as E,I as F,D as G}from"./vendor.e3993199.js";const J=f({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),K=[(a=>(j("data-v-6168be91"),a=a(),D(),a))(()=>n("svg",{viewBox:"0 0 512 512"},[n("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),n("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1))],O=f({name:"TranslationsBox",components:{ArrowDown:N,LogoIcon:g(J,[["render",function(a,o,s,t,e,w){return l(),k("span",{class:L(["locales-logo-icon",{"is-dark":a.dark}])},K,2)}],["__scopeId","data-v-6168be91"]])},props:{dark:{type:Boolean,default:!1}},setup(){const a=V(),o=$(),s=M();return{localesList:q(T),handleChange:t=>{setTimeout(()=>{const{localeCode:e}=t;o.replace({params:u(i({},a.params),{locale:e})}),s.setLanguage({locale:e})})}}}}),P={class:"icon-outer"},Q={class:"custom-dropdown-item"};var W=g(O,[["render",function(a,o,s,t,e,w){const C=r("LogoIcon"),x=r("el-dropdown-item"),_=r("el-dropdown-menu"),b=r("el-dropdown");return l(),h(b,{class:L(["translations-box",{"is-dark":a.dark}]),trigger:"click","popper-class":"translations-box",onCommand:a.handleChange},{dropdown:c(()=>[v(_,null,{default:c(()=>[(l(!0),k(G,null,E(a.localesList,(d,I)=>(l(),h(x,{key:I,command:d},{default:c(()=>[n("span",Q,F(d.localeName),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:c(()=>[n("span",P,[v(C,{dark:a.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}]]);export{W as T};
