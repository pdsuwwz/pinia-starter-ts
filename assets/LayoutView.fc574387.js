import{_ as r}from"./index.8b46f649.js";import{g as s,r as t,o as c,t as b,n as a,m as o,v as e,I as N,i as k,l as B}from"./vendor.199bc874.js";import{N as S}from"./NavBar.c0886178.js";import"./Translations.f3aabb77.js";const j=s({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),y={class:"go-back-container"},w={class:"go-back-title"},x=s({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:r(j,[["render",function(i,u,d,f,v,m){const n=t("IconFont"),l=t("router-link");return c(),b("div",y,[a(l,{to:`/${i.$route.params.locale||""}`},{default:o(()=>[a(n,{icon:"iconarrow_left",class:"go-back-icon"}),e("h1",w,N(i.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-f11fc9f6"]])},setup:()=>(k(),{})}),G=e("ul",null,[e("li",null,"111"),e("li",null,"222"),e("li",null,"333")],-1);var A=r(x,[["render",function(i,u,d,f,v,m){const n=t("NavigationSideGoBack"),l=t("NavigationNavBar"),p=t("LayoutSection"),g=t("router-view"),_=t("LayoutArea");return c(),B(_,null,{top:o(()=>[a(l,{fixed:!1},{default:o(()=>[a(n,{title:i._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[a(p,{"has-divider":"",title:i._t("result.title")},{default:o(()=>[G]),_:1},8,["title"])]),content:o(()=>[a(g)]),_:1})}]]);export{A as default};
