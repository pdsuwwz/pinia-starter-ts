var B=Object.defineProperty,M=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var m=(a,o,s)=>o in a?B(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,u=(a,o)=>{for(var s in o||(o={}))z.call(o,s)&&m(a,s,o[s]);if(p)for(var s of p(o))A.call(o,s)&&m(a,s,o[s]);return a},i=(a,o)=>M(a,y(o));import{_ as g,b as H,l as T}from"./index.163cc315.js";import{g as f,o as n,t as k,A as L,$ as j,a0 as D,v as l,a4 as N,u as V,i as $,L as q,r,l as h,m as c,n as v,C as E,M as F,I as G,D as J}from"./vendor.8579e0ae.js";const K=f({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),O=[(a=>(j("data-v-6168be91"),a=a(),D(),a))(()=>l("svg",{viewBox:"0 0 512 512"},[l("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),l("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1))];var S=g(f({name:"TranslationsBox",components:{ArrowDown:N,LogoIcon:g(K,[["render",function(a,o,s,d,e,C){return n(),k("span",{class:L(["locales-logo-icon",{"is-dark":a.dark}])},O,2)}],["__scopeId","data-v-6168be91"]])},props:{dark:{type:Boolean,default:!1}},setup(){const a=V(),o=$(),s=H();return{localesList:q(T),handleChange:d=>{setTimeout(()=>{const{localeCode:e}=d;o.replace({params:i(u({},a.params),{locale:e})}),s.setLanguage({locale:e})})}}}}),[["render",function(a,o,s,d,e,C){const w=r("LogoIcon"),_=r("el-dropdown-item"),x=r("el-dropdown-menu"),I=r("el-dropdown");return n(),h(I,{class:L(["translations-box",{"is-dark":a.dark}]),trigger:"click",onCommand:a.handleChange},{dropdown:c(()=>[v(x,null,{default:c(()=>[(n(!0),k(J,null,E(a.localesList,(t,b)=>(n(),h(_,{key:b,command:t},{default:c(()=>[F(G(t.localeName),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:c(()=>[l("span",null,[v(w,{dark:a.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}]]);export{S as T};
