import{d as r,_ as s,r as t,o as c,b,g as o,w as a,e as i,t as k,H as N,c as B}from"./index.e5f65868.js";import{N as S}from"./NavBar.30abb153.js";import"./Translations.6b618bcc.js";const w=r({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),y={class:"go-back-container"},G={class:"go-back-title"},L=r({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:s(w,[["render",function(e,u,d,f,g,p){const n=t("IconFont"),l=t("router-link");return c(),b("div",y,[o(l,{to:`/${e.$route.params.locale||""}`},{default:a(()=>[o(n,{icon:"iconarrow_left",class:"go-back-icon"}),i("h1",G,k(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-f11fc9f6"]])},setup:()=>(N(),{})}),h=i("ul",null,[i("li",null,"111"),i("li",null,"222"),i("li",null,"333")],-1);var A=s(L,[["render",function(e,u,d,f,g,p){const n=t("NavigationSideGoBack"),l=t("NavigationNavBar"),v=t("LayoutSection"),_=t("router-view"),m=t("LayoutArea");return c(),B(m,null,{top:a(()=>[o(l,{fixed:!1},{default:a(()=>[o(n,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:a(()=>[o(v,{"has-divider":"",title:e._t("result.title")},{default:a(()=>[h]),_:1},8,["title"])]),content:a(()=>[o(_)]),_:1})}]]);export{A as default};
