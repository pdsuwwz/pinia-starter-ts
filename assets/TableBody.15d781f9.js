import{k as c,m as d,s as o,_ as u,d as h,h as j,o as s,b as r,e as i,F as g,p as y,t as b,j as P,q as N,v as f,r as L,c as k}from"./index.e6465abc.js";import v from"./ProjectItem.f17a50eb.js";const w={id:Math.random(),name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8",isPublished:!1,createTime:"2021.01.29"},M=[{id:"111",name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8\u5907\u6CE8",isPublished:!1,createTime:"2021.01.29"},{id:"222",name:"\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8\u5907\u6CE8",isPublished:!0,createTime:"2021.03.29"},{id:"333",name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"",isPublished:!1,createTime:"2021.02.29"}],J=["Alabama","Alaska","Arizona","\u6D4B\u8BD5","\u6D4B\u8BD51","\u6D4B\u8BD52","\u6D4B\u8BD53","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],T=d("Project",{state:()=>({demoList:{},projectList:[],projectDetail:{corpName:"",createTime:"",id:"",isPublished:!0,name:"",notes:""}}),getters:{demoList:e=>e.demoList},actions:{async getSearchProjectByQuery(e){await o(2e3);const a=await(t=e,c({url:"/project/list",method:"get",params:t}));var t;return this.filterResponse(a,null,()=>{})},async getProjectList(e={}){await o(2e3);const a={msg:"ok",error:0,data:{projectList:M}};return this.filterResponse(a,()=>{this.projectList=a.data.projectList},()=>{})},async createProject(e){return await o(1e3),this.filterResponse({msg:"ok",error:0,data:{}},()=>{this.projectList.push(JSON.parse(JSON.stringify(w)))})},async updateTogglePublishStatus({commit:e},a){const t=await function(n){return c({url:"/project/toggle_status",method:"get",params:n})}(a);return this.filterResponse(t,null)}}}),_=h({name:"ProjectTableBody",components:{ProjectItem:v},setup(){const e=T();return{projectList:j(()=>e.projectList)}}}),I={class:"project-table-body-container"},S={class:"project-table-body-container__inner"},O={key:0,class:"project-empty-box"},C=(e=>(N("data-v-15e161d0"),e=e(),f(),e))(()=>i("img",{src:"assets/project-empty.ef06cc83.svg",alt:"Empty"},null,-1));var R=u(_,[["render",function(e,a,t,n,x,A){const l=L("ProjectItem");return s(),r("div",I,[i("div",S,[(s(!0),r(g,null,y(e.projectList,(m,p)=>(s(),k(l,{key:p,dataset:m},null,8,["dataset"]))),128)),e.projectList.length?P("",!0):(s(),r("div",O,[C,i("span",null,b(e._t("base.empty")),1)]))])])}],["__scopeId","data-v-15e161d0"]]),V=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{R as P,V as T,J as c,T as u};