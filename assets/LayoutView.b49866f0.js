import{_ as r}from"./index.c8ab7494.js";import{g as s,r as t,o as c,t as N,n as a,m as o,v as i,I as b,i as k,l as B}from"./vendor.5ef5f1f6.js";import{N as S}from"./NavBar.e30e518b.js";import"./Translations.a6fdba29.js";const j=s({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),y={class:"go-back-container"},w={class:"go-back-title"},x=s({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:r(j,[["render",function(e,u,d,f,v,m){const n=t("IconFont"),l=t("router-link");return c(),N("div",y,[a(l,{to:`/${e.$route.params.locale||""}`},{default:o(()=>[a(n,{icon:"iconarrow_left",class:"go-back-icon"}),i("h1",w,b(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-f11fc9f6"]])},setup:()=>(k(),{})}),G=i("ul",null,[i("li",null,"111"),i("li",null,"222"),i("li",null,"333")],-1);var A=r(x,[["render",function(e,u,d,f,v,m){const n=t("NavigationSideGoBack"),l=t("NavigationNavBar"),p=t("LayoutSection"),g=t("router-view"),_=t("LayoutArea");return c(),B(_,null,{top:o(()=>[a(l,{fixed:!1},{default:o(()=>[a(n,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[a(p,{"has-divider":"",title:e._t("result.title")},{default:o(()=>[G]),_:1},8,["title"])]),content:o(()=>[a(g)]),_:1})}]]);export{A as default};
