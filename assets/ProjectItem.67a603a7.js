import{g as v,a0 as h,L as g,j as b,r as o,o as n,l as i,m as d,v as a,n as p,I as c,G as m,K as x,A as y}from"./vendor.489f965a.js";import{_ as w,u as P,s as k}from"./index.af9801f6.js";const I=v({name:"ProjectItem",components:{Loading:h},props:{dataset:{type:Object,default:()=>({})}},setup(t){const{proxy:s}=P(),e=g(!1),r=b(()=>t.dataset.isPublished?"iconstop":"iconplay");return{isLoading:e,getActionIcon:r,handlePublish:async function(u){e.value||(e.value=!0,await k(300),e.value=!1,s.$message({message:"Successful!"}),t.dataset.isPublished=!t.dataset.isPublished)}}}}),L={class:"project-item-container"},$={style:{flex:"1","min-width":"0"}},A={class:"project-item__name"},C={class:"project-item__name-left"},T={class:"project-item__name-desc"},F={class:"project-item__name-desc__corpname"},G={class:"project-item__name-desc__corpname-maintext text_nowrap"},K={class:"project-item__name-desc__fullname text_nowrap"},N={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},O={class:"project-item-action__icon"},S={class:"project-item-action__status"};var E=w(I,[["render",function(t,s,e,r,u,q){const l=o("IconFont"),_=o("TooltipCustom"),f=o("Loading"),j=o("router-link");return n(),i(j,{to:`${t.$route.params.locale?"/"+t.$route.params.locale+"/":"/"}result/${t.dataset.id}/overview`},{default:d(()=>[a("ul",L,[a("li",$,[a("div",A,[a("div",C,[p(l,{icon:"iconfile"})]),a("div",T,[a("div",F,[a("span",G,c(t.dataset.corpName),1),a("span",{onClick:s[0]||(s[0]=m(()=>{},["prevent"]))},[t.dataset.notes?(n(),i(_,{key:0,content:t.dataset.notes},{default:d(()=>[p(l,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):x("",!0)])]),a("p",K,c(t.dataset.name),1)])])]),a("li",N,c(t.dataset.createTime),1),a("li",{class:y(["project-item-action text_nowrap",{active:t.dataset.isPublished,loading:t.isLoading}]),onClick:s[1]||(s[1]=m(z=>t.handlePublish(t.dataset.id),["prevent"]))},[a("span",O,[t.isLoading?(n(),i(f,{key:1,class:"transform-rotate360"})):(n(),i(l,{key:0,icon:t.getActionIcon},null,8,["icon"]))]),a("span",S,c(t.dataset.isPublished?t._t("project.stop"):t._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-1bad966e"]]);export{E as default};
