import{u as $,b,l as v}from"./request-c94bf330.js";import{u as y}from"./index-c1964d0d.js";import{f as B}from"./index-207f543d.js";import{x as f,ai as g,y as r,z as h,D as k,ak as I,al as x,A as e,r as S,e as z,H as u,I as n,a7 as t,P as m,a0 as A,O as T,F as H}from"./_plugin-vue_export-helper-cb68d2ee.js";const M=f({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}});const D=o=>(I("data-v-b0ee8b2d"),o=o(),x(),o),N=D(()=>e("svg",{viewBox:"0 0 512 512"},[e("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),e("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1)),V=[N];function F(o,c,a,l,d,i){return r(),h("span",{class:k(["locales-logo-icon",{"is-dark":o.dark}])},V,2)}const R=g(M,[["render",F],["__scopeId","data-v-b0ee8b2d"]]),E=f({name:"TranslationsBox",components:{ArrowDown:B,LogoIcon:R},props:{dark:{type:Boolean,default:!1}},setup(){const o=$(),c=b(),a=y(),l=S(v),d=z(()=>a.locale);return{localesList:l,currentLocale:d,handleChange:p=>{setTimeout(()=>{const{localeCode:s}=p;c.replace({params:{...o.params,locale:s}}),a.setLanguage({locale:s})})}}}});const O={class:"icon-outer"},P={class:"custom-dropdown-item"};function U(o,c,a,l,d,i){const p=t("LogoIcon"),s=t("el-dropdown-item"),w=t("el-dropdown-menu"),L=t("el-dropdown");return r(),u(L,{class:k(["translations-box",{"is-dark":o.dark}]),trigger:"click","popper-class":"translations-box",onCommand:o.handleChange},{dropdown:n(()=>[m(w,null,{default:n(()=>[(r(!0),h(H,null,A(o.localesList,(_,C)=>(r(),u(s,{key:C,command:_,disabled:o.currentLocale===_.localeCode},{default:n(()=>[e("span",P,T(_.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:n(()=>[e("span",O,[m(p,{dark:o.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}const K=g(E,[["render",U]]);export{K as T};
