import{e as i,g as n,u as v,j as c,r as d,o as l,l as u,m,v as w,I as f}from"./vendor.8579e0ae.js";import{s as p,_ as g}from"./index.163cc315.js";const D={title:"\u6D4B\u8BD5\u6807\u9898\u603B\u89C8",content:"\u6D4B\u8BD5\u5185\u5BB9 overview"},j=i("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{demoList:e=>e.demoList},actions:{async getResultOverview({commit:e},a){await p(800);const t={msg:"ok",error:0,data:D};return this.filterResponse(t,({data:s})=>{this.overviewData=s},()=>{})}}}),x=n({name:"ResultOverView",setup(){const e=j(),a=v(),t=c(()=>e.overviewData);return async function(){const{error:s,data:o}=await e.getResultOverview({projectId:a.params.projectId})}(),{overviewData:t}}}),R={style:{height:"100%",flex:"1",border:"1px solid"}};var L=g(x,[["render",function(e,a,t,s,o,h){const r=d("LayoutSection");return l(),u(r,{"flex-content":"",title:e.overviewData.title},{default:m(()=>[w("div",R,f(e.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-6022bdaf"]]);export{L as default};
