import{d as _,u as v,f as k,_ as f,o as g,b as N,g as n,w as s,r as o,e as h,t as V,p as T,h as I,l as E,i as j,j as S,k as y,n as B,c as $,m as F,q as w,s as x,v as H}from"./index-a11dba76.js";import{_ as D}from"./pinia-7d910fa0.js";import{N as M}from"./NavBar-43a3ffc5.js";import R from"./ProjectForm-68731fa7.js";import q from"./TableHeader-8fd3a588.js";import{c as A,P as U,u as K}from"./TableBody-746914ea.js";import{l as z}from"./lodash-47856f3d.js";import"./Translations-5f5fb90c.js";import"./ProjectItem-31a420c4.js";const G=_({name:"NavigationSideLogo",setup(){const e=v();return{title:k(()=>e.t("base.systemTitle"))}}});const J=e=>(T("data-v-96ea4fb6"),e=e(),I(),e),O={class:"side-logo-container"},Q=J(()=>h("img",{class:"side-logo-img",src:D,alt:"商标"},null,-1)),W={class:"side-logo-title"};function X(e,t,r,a,c,l){const i=o("router-link");return g(),N("div",O,[n(i,{to:`/${e.$route.params.locale||""}`},{default:s(()=>[Q,h("h1",W,V(e.title),1)]),_:1},8,["to"])])}const Y=f(G,[["render",X],["__scopeId","data-v-96ea4fb6"]]),Z=_({name:"SearchSelect",components:{Loading:E},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default(){return()=>{}}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:t}=j(),r=S(!1),a=S("");return y(()=>e.modelValue,c=>{a.value=c},{immediate:!0}),y(()=>a,z.exports.debounce(function(c){t.$emit("update:modelValue",c),t.$emit("change",c)},300)),{loading:r,searchValue:a}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText(e){return e.replace(new RegExp(/(<([^>]+)>)/,"gi"),"")},handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,t){const r=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let a=[];if(!r){t(a);return}this.loading=!0,a=await this.fetch(r)||[],a.forEach(l=>{l.label=l.label.replace(new RegExp(r,"gi"),i=>`<span class="search-select-highlight">${i}</span>`)}),t(a),setTimeout(()=>{B(()=>{this.loading=!1})},200)}}});const ee=["title","innerHTML"];function te(e,t,r,a,c,l){const i=o("loading"),u=o("el-icon"),m=o("IconFont"),p=o("el-autocomplete");return g(),$(p,w({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=d=>e.searchValue=d),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:t[1]||(t[1]=d=>e.keydown(d))}),F({default:s(({item:d})=>[h("span",{title:e.getExecText(d.label),innerHTML:d.label},null,8,ee)]),_:2},[e.loading?{name:"suffix",fn:s(()=>[n(u,{class:"search-loading-icon"},{default:s(()=>[n(i)]),_:1})]),key:"0"}:{name:"suffix",fn:s(()=>[h("i",{class:"search-icon"},[n(m,{icon:"iconsearch"})])]),key:"1"}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}const oe=f(Z,[["render",te]]),ae=_({name:"SearchCorporation",components:{SearchSelect:oe},emits:["select"],setup(){return{searchValue:S("")}},methods:{async handleFetchSearch(e){return A.map(t=>({value:t,label:t}))},handleSelectSearch(e){this.$emit("select",e)}}});function ne(e,t,r,a,c,l){const i=o("SearchSelect");return g(),$(i,w({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=u=>e.searchValue=u),fetch:e.handleFetchSearch,placeholder:"搜索项目","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}const se=f(ae,[["render",ne]]),re=_({name:"ProjectList",components:{NavigationNavBar:M,NavigationSideLogo:Y,ProjectTableHeader:q,ProjectTableBody:U,SearchCorporation:se},setup(){const{proxy:e}=j(),t=K(),r=v();function a(){const l=x({name:"",corpName:"",notes:""});e.$ModalDialog({title:r.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:l,component:R},async onConfirm(i,u){if(!await i.validateRules())return Promise.reject(new Error("error"));u.fullLoading=!0;const{error:p,data:d}=await t.createProject(l);if(u.fullLoading=!1,p)return Promise.reject(new Error("error"));t.getProjectList()}})}function c(l){t.getProjectList({kw:l})}return c(),{localeInject:r,handleCreateProject:a,handleSelectSearch:c}}});function ce(e,t,r,a,c,l){const i=o("NavigationSideLogo"),u=o("NavigationNavBar"),m=o("IconFont"),p=o("el-button"),d=o("LayoutSection"),L=o("SearchCorporation"),b=o("ProjectTableHeader"),P=o("ProjectTableBody"),C=o("LayoutArea");return g(),$(C,null,{top:s(()=>[n(u,{fixed:!1},{default:s(()=>[n(i)]),_:1})]),side:s(()=>[n(d,{title:e.localeInject.t("project.manageTitle")},{default:s(()=>[n(p,{type:"primary",class:"create-action",onClick:t[0]||(t[0]=le=>e.handleCreateProject())},{default:s(()=>[n(m,{icon:"iconestablish"}),H(" "+V(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:s(()=>[n(d,{"has-divider":"","flex-content":""},{head:s(()=>[n(L,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:s(()=>[n(b),n(P)]),_:1})]),_:1})}const Se=f(re,[["render",ce],["__scopeId","data-v-c7dc31e1"]]);export{Se as default};