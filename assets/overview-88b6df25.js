import{y as i,z as c,d as v,H as u,f as l,_ as d,r as p,o as _,c as w,w as f,e as m,t as y}from"./index-5813ffef.js";const g={title:"测试标题总览",content:"测试内容 overview"},h=i("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{},actions:{async getResultOverview(e){await c(800);const t={msg:"ok",error:0,data:g};return this.filterResponse(t,({data:o})=>{this.overviewData=o},()=>{})}}}),D=v({name:"ResultOverView",setup(){const e=h(),t=u(),o=l(()=>e.overviewData);async function s(){const{error:a,data:r}=await e.getResultOverview({projectId:t.params.projectId})}return s(),{overviewData:o}}});const R={style:{height:"100%",flex:"1",border:"1px solid"}};function x(e,t,o,s,a,r){const n=p("LayoutSection");return _(),w(n,{"flex-content":"",title:e.overviewData.title},{default:f(()=>[m("div",R,y(e.overviewData.content),1)]),_:1},8,["title"])}const k=d(D,[["render",x],["__scopeId","data-v-456b0a56"]]);export{k as default};
