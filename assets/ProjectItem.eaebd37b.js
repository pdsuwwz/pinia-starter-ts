import{_ as j,d as v,l as h,u as g,f as b,h as w,o as e,c as o,w as r,e as t,g as d,t as n,i as p,j as x,n as y,s as P,E as k,r as i}from"./index.b88b1796.js";const I=v({name:"ProjectItem",components:{Loading:h},props:{dataset:{type:Object,default:()=>({})}},setup(a){g();const s=b(!1),l=w(()=>a.dataset.isPublished?"iconstop":"iconplay");return{isLoading:s,getActionIcon:l,handlePublish:async function(m){s.value||(s.value=!0,await P(300),s.value=!1,k.success({message:"Successful!"}),a.dataset.isPublished=!a.dataset.isPublished)}}}}),L={class:"project-item-container"},$={style:{flex:"1","min-width":"0"}},A={class:"project-item__name"},C={class:"project-item__name-left"},T={class:"project-item__name-desc"},E={class:"project-item__name-desc__corpname"},F={class:"project-item__name-desc__corpname-maintext text_nowrap"},N={class:"project-item__name-desc__fullname text_nowrap"},O={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},S={class:"project-item-action__icon"},q={class:"project-item-action__status"};var H=j(I,[["render",function(a,s,l,m,z,B){const c=i("IconFont"),u=i("TooltipCustom"),_=i("Loading"),f=i("router-link");return e(),o(f,{to:`${a.$route.params.locale?"/"+a.$route.params.locale+"/":"/"}result/${a.dataset.id}/overview`},{default:r(()=>[t("ul",L,[t("li",$,[t("div",A,[t("div",C,[d(c,{icon:"iconfile"})]),t("div",T,[t("div",E,[t("span",F,n(a.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=p(()=>{},["prevent"]))},[a.dataset.notes?(e(),o(u,{key:0,content:a.dataset.notes},{default:r(()=>[d(c,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):x("",!0)])]),t("p",N,n(a.dataset.name),1)])])]),t("li",O,n(a.dataset.createTime),1),t("li",{class:y(["project-item-action text_nowrap",{active:a.dataset.isPublished,loading:a.isLoading}]),onClick:s[1]||(s[1]=p(D=>a.handlePublish(a.dataset.id),["prevent"]))},[t("span",S,[a.isLoading?(e(),o(_,{key:1,class:"transform-rotate360"})):(e(),o(c,{key:0,icon:a.getActionIcon},null,8,["icon"]))]),t("span",q,n(a.dataset.isPublished?a._t("project.stop"):a._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-37f40af2"]]);export{H as default};
