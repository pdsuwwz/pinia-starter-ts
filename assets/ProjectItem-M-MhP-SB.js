import{d as j,l as v,h as g,f as w,x as b,E as k,_ as y,o,c as a,w as d,r as n,e as t,g as p,t as i,A as _,z as C,B as P}from"./index-DtiSfgo9.js";const $=j({name:"ProjectItem",components:{Loading:v},props:{dataset:{type:Object,default(){return{}}}},setup(e){const s=g(!1),l=w(()=>e.dataset.isPublished?"iconstop":"iconplay");async function r(m){s.value||(s.value=!0,await b(300),s.value=!1,k.success({message:"Successful!"}),e.dataset.isPublished=!e.dataset.isPublished)}return{isLoading:s,getActionIcon:l,handlePublish:r}}}),I={class:"project-item-container"},L={style:{flex:"1","min-width":"0"}},B={class:"project-item__name"},N={class:"project-item__name-left"},A={class:"project-item__name-desc"},T={class:"project-item__name-desc__corpname"},V={class:"project-item__name-desc__corpname-maintext text_nowrap"},z={class:"project-item__name-desc__fullname text_nowrap"},E={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},F={class:"project-item-action__icon"},M={class:"project-item-action__status"};function S(e,s,l,r,m,D){const c=n("IconFont"),u=n("TooltipCustom"),f=n("Loading"),h=n("router-link");return o(),a(h,{to:`${e.$route.params.locale?"/"+e.$route.params.locale+"/":"/"}result/${e.dataset.id}/overview`},{default:d(()=>[t("ul",I,[t("li",L,[t("div",B,[t("div",N,[p(c,{icon:"iconfile"})]),t("div",A,[t("div",T,[t("span",V,i(e.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=_(()=>{},["prevent"]))},[e.dataset.notes?(o(),a(u,{key:0,content:e.dataset.notes},{default:d(()=>[p(c,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):C("",!0)])]),t("p",z,i(e.dataset.name),1)])])]),t("li",E,i(e.dataset.createTime),1),t("li",{class:P(["project-item-action text_nowrap",{active:e.dataset.isPublished,loading:e.isLoading}]),onClick:s[1]||(s[1]=_(O=>e.handlePublish(e.dataset.id),["prevent"]))},[t("span",F,[e.isLoading?(o(),a(f,{key:1,class:"transform-rotate360"})):(o(),a(c,{key:0,icon:e.getActionIcon},null,8,["icon"]))]),t("span",M,i(e.dataset.isPublished?e._t("project.stop"):e._t("project.publish")),1)],2)])]),_:1},8,["to"])}const G=y($,[["render",S],["__scopeId","data-v-17718468"]]);export{G as default};
