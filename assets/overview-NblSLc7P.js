import{y as i,z as c,d as v,H as u,f as l,_ as d,r as p,o as w,c as f,w as _,e as m,t as y}from"./index-pGYOYKXe.js";const h={title:"测试标题总览",content:"测试内容 overview"},D=i("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{},actions:{async getResultOverview(e){await c(800);const t={msg:"ok",error:0,data:h};return this.filterResponse(t,({data:o})=>{this.overviewData=o},()=>{})}}}),R=v({name:"ResultOverView",setup(){const e=D(),t=u(),o=l(()=>e.overviewData);async function s(){const{error:r,data:a}=await e.getResultOverview({projectId:t.params.projectId})}return s(),{overviewData:o}}}),g={style:{height:"100%",flex:"1",border:"1px solid"}};function S(e,t,o,s,r,a){const n=p("LayoutSection");return w(),f(n,{"flex-content":"",title:e.overviewData.title},{default:_(()=>[m("div",g,y(e.overviewData.content),1)]),_:1},8,["title"])}const k=d(R,[["render",S],["__scopeId","data-v-456b0a56"]]);export{k as default};