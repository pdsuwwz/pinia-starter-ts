import{_ as c}from"./index.9d893781.js";import{g as d,Y as i,j as l,o as a,t as r,D as m,C as j,a1 as p,I as u}from"./vendor.804caef9.js";const h=d({name:"ProjectTableHeader",setup(){const e=i(),n=l(()=>[{name:e.t("project.name")},{name:e.t("project.createDate"),width:"18%"},{name:e.t("project.state"),width:"19%"}]);return{localeInject:e,list:n,getHeadItem:function(t){return{width:t.width,flex:t.width?"initial":1}}}}}),f={class:"project-table-header-container"};var v=c(h,[["render",function(e,n,t,w,I,_){return a(),r("ul",f,[(a(!0),r(m,null,j(e.list,(s,o)=>(a(),r("li",{key:o,style:p(e.getHeadItem(s)),class:"project-table-header-container__head-item"},u(s.name),5))),128))])}],["__scopeId","data-v-641a64ad"]]);export{v as default};
