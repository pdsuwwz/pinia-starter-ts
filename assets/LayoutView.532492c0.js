import{_ as r}from"./index.f9813ccd.js";import{g as s,r as a,o as c,t as N,n as t,m as o,v as e,I as k,i as b,l as B}from"./vendor.085bdc34.js";import{N as S}from"./NavBar.70af527d.js";import"./Translations.8c8f7979.js";const j=s({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),y={class:"go-back-container"},w={class:"go-back-title"},x=s({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:r(j,[["render",function(i,u,d,f,v,m){const n=a("IconFont"),l=a("router-link");return c(),N("div",y,[t(l,{to:`/${i.$route.params.locale||""}`},{default:o(()=>[t(n,{icon:"iconarrow_left",class:"go-back-icon"}),e("h1",w,k(i.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-f11fc9f6"]])},setup:()=>(b(),{})}),G=e("ul",null,[e("li",null,"111"),e("li",null,"222"),e("li",null,"333")],-1);var A=r(x,[["render",function(i,u,d,f,v,m){const n=a("NavigationSideGoBack"),l=a("NavigationNavBar"),p=a("LayoutSection"),g=a("router-view"),_=a("LayoutArea");return c(),B(_,null,{top:o(()=>[t(l,{fixed:!1},{default:o(()=>[t(n,{title:i._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[t(p,{"has-divider":"",title:i._t("result.title")},{default:o(()=>[G]),_:1},8,["title"])]),content:o(()=>[t(g)]),_:1})}]]);export{A as default};
