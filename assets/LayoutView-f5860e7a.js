import{x as c,ai as r,y as _,z as k,P as e,I as o,a7 as t,A as n,O as N,H as $}from"./_plugin-vue_export-helper-1773af58.js";import{N as B}from"./NavBar-d588cebc.js";import{b as y}from"./request-762bd987.js";import"./Translations-904a23f1.js";import"./index-2f9f74fd.js";import"./pinia-a0afc3cc.js";import"./index-75232f1c.js";import"./useCurrentInstance-7afa7fff.js";import"./index-99a5d9b1.js";import"./index-67d5d8ce.js";import"./type-f2772668.js";const S=c({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}});const h={class:"go-back-container"},b={class:"go-back-title"};function w(a,l,p,u,d,m){const i=t("IconFont"),s=t("router-link");return _(),k("div",h,[e(s,{to:`/${a.$route.params.locale||""}`},{default:o(()=>[e(i,{icon:"iconarrow_left",class:"go-back-icon"}),n("h1",b,N(a.title),1)]),_:1},8,["to"])])}const L=r(S,[["render",w],["__scopeId","data-v-3442880f"]]),G=c({name:"LayoutView",components:{NavigationNavBar:B,NavigationSideGoBack:L},setup(){return y(),{}}}),x=n("ul",null,[n("li",null,"111"),n("li",null,"222"),n("li",null,"333")],-1);function I(a,l,p,u,d,m){const i=t("NavigationSideGoBack"),s=t("NavigationNavBar"),f=t("LayoutSection"),v=t("router-view"),g=t("LayoutArea");return _(),$(g,null,{top:o(()=>[e(s,{fixed:!1},{default:o(()=>[e(i,{title:a._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[e(f,{"has-divider":"",title:a._t("result.title")},{default:o(()=>[x]),_:1},8,["title"])]),content:o(()=>[e(v)]),_:1})}const j=r(G,[["render",I]]);export{j as default};
