import{e as i,g as n,u as v,j as d,r as c,o as l,l as u,m as f,v as m,I as w}from"./vendor.568efef7.js";import{s as p,_ as g}from"./index.12e1afd2.js";const D={title:"\u6D4B\u8BD5\u6807\u9898\u603B\u89C8",content:"\u6D4B\u8BD5\u5185\u5BB9 overview"},j=i("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{demoList:t=>t.demoList},actions:{async getResultOverview({commit:t},a){await p(800);const e={msg:"ok",error:0,data:D};return this.filterResponse(e,({data:s})=>{this.overviewData=s},()=>{})}}}),x=n({name:"ResultOverView",setup(){const t=j(),a=v(),e=d(()=>t.overviewData);return async function(){const{error:s,data:o}=await t.getResultOverview({projectId:a.params.projectId})}(),{overviewData:e}}}),R={style:{height:"100%",flex:"1",border:"1px solid"}};var L=g(x,[["render",function(t,a,e,s,o,h){const r=c("LayoutSection");return l(),u(r,{"flex-content":"",title:t.overviewData.title},{default:f(()=>[m("div",R,w(t.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-6022bdaf"]]);export{L as default};
