import{g as j,a0 as v,L as h,j as b,r as e,o,l as n,m as r,v as a,n as d,I as i,G as p,K as g,A as w,E as x}from"./vendor.6af18798.js";import{_ as y,u as P,s as k}from"./index.2f7da8d7.js";const I=j({name:"ProjectItem",components:{Loading:v},props:{dataset:{type:Object,default:()=>({})}},setup(t){P();const s=h(!1),l=b(()=>t.dataset.isPublished?"iconstop":"iconplay");return{isLoading:s,getActionIcon:l,handlePublish:async function(m){s.value||(s.value=!0,await k(300),s.value=!1,x.success({message:"Successful!"}),t.dataset.isPublished=!t.dataset.isPublished)}}}}),L={class:"project-item-container"},C={style:{flex:"1","min-width":"0"}},$={class:"project-item__name"},A={class:"project-item__name-left"},T={class:"project-item__name-desc"},E={class:"project-item__name-desc__corpname"},F={class:"project-item__name-desc__corpname-maintext text_nowrap"},G={class:"project-item__name-desc__fullname text_nowrap"},K={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},N={class:"project-item-action__icon"},O={class:"project-item-action__status"};var H=y(I,[["render",function(t,s,l,m,S,q){const c=e("IconFont"),_=e("TooltipCustom"),u=e("Loading"),f=e("router-link");return o(),n(f,{to:`${t.$route.params.locale?"/"+t.$route.params.locale+"/":"/"}result/${t.dataset.id}/overview`},{default:r(()=>[a("ul",L,[a("li",C,[a("div",$,[a("div",A,[d(c,{icon:"iconfile"})]),a("div",T,[a("div",E,[a("span",F,i(t.dataset.corpName),1),a("span",{onClick:s[0]||(s[0]=p(()=>{},["prevent"]))},[t.dataset.notes?(o(),n(_,{key:0,content:t.dataset.notes},{default:r(()=>[d(c,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):g("",!0)])]),a("p",G,i(t.dataset.name),1)])])]),a("li",K,i(t.dataset.createTime),1),a("li",{class:w(["project-item-action text_nowrap",{active:t.dataset.isPublished,loading:t.isLoading}]),onClick:s[1]||(s[1]=p(z=>t.handlePublish(t.dataset.id),["prevent"]))},[a("span",N,[t.isLoading?(o(),n(u,{key:1,class:"transform-rotate360"})):(o(),n(c,{key:0,icon:t.getActionIcon},null,8,["icon"]))]),a("span",O,i(t.dataset.isPublished?t._t("project.stop"):t._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-5ef90ba6"]]);export{H as default};
