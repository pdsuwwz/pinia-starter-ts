import{d as s,_ as r,r as t,o as c,b as k,g as o,w as a,e as i,t as N,I as b,c as B}from"./index.607cce7b.js";import{N as S}from"./NavBar.936114fe.js";import"./Translations.97093abc.js";const w=s({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),y={class:"go-back-container"},G={class:"go-back-title"},I=s({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:r(w,[["render",function(e,u,d,f,g,p){const n=t("IconFont"),l=t("router-link");return c(),k("div",y,[o(l,{to:`/${e.$route.params.locale||""}`},{default:a(()=>[o(n,{icon:"iconarrow_left",class:"go-back-icon"}),i("h1",G,N(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-3442880f"]])},setup:()=>(b(),{})}),L=i("ul",null,[i("li",null,"111"),i("li",null,"222"),i("li",null,"333")],-1),A=r(I,[["render",function(e,u,d,f,g,p){const n=t("NavigationSideGoBack"),l=t("NavigationNavBar"),v=t("LayoutSection"),_=t("router-view"),m=t("LayoutArea");return c(),B(m,null,{top:a(()=>[o(l,{fixed:!1},{default:a(()=>[o(n,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:a(()=>[o(v,{"has-divider":"",title:e._t("result.title")},{default:a(()=>[L]),_:1},8,["title"])]),content:a(()=>[o(_)]),_:1})}]]);export{A as default};