import{d as S,I as k,J as I,H as C,K as R,i as l,s as x,u as A,f as E,L as T,n as U,M as v,E as $,k as q,_ as B,r as u,o as D,b as M,e as o,t as P,g as p,w as V,q as F,p as N,h as O}from"./index-QqBRTgt2.js";import j from"./ContainerLayout-9xtA87dx.js";import{T as z}from"./Translations-xClot6A8.js";import{_ as H}from"./pinia-unKfjad7.js";import"./lodash-cWVc46Tp.js";const J=S({name:"UserAccountLogin",components:{UserAccountContainerLayout:j,Promotion:k,Translations:z},setup(){const{proxy:e}=q(),m=I(),g=C(),_=R(),a=l(!0),n=l(""),s=l(""),c=x({email:"vite.admin@gmail.com",password:"123456"}),t=A(),h=E(()=>({title:t.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:a.value,size:"large"},text:t.t("login.signin"),on:{click(i){e.onSubmit(i)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules(){return[e.getRequiredRules({trigger:"change",message:t.t("login.plsemail")}),e.getValidatorRules("","blur",{type:"email",message:t.t("login.plscurrentemail")})]}},label:t.t("login.email"),prefixIcon:"user-tie",placeholder:t.t("login.plsemail")},{attrs:{prop:"password",error:s.value,rules(){return e.getRequiredRules({trigger:"change",message:t.t("login.plspwd")})}},link:{text:t.t("login.fgtpwd"),click(){}},type:"password",label:t.t("login.pwd"),prefixIcon:"lock",placeholder:t.t("login.plspwd")}]}));function r(i=!1){a.value=i}function y(i){a.value||i.validate(async w=>{if(!w)return;n.value="",s.value="",r(!0);const{error:b,data:f,msg:L}=await m.login(c);if(b){n.value=" ",s.value=L,r(!1);return}v.set("token",f.user.token),v.set("name",f.user.username),_.replace(`/${g.params.locale||""}`).then(()=>{$.success({message:"登录成功"})}).catch(()=>{})})}return r(!0),T(()=>{U(()=>{r(!1)})}),{isLoading:a,inputErrorEmail:n,inputErrorPassword:s,formData:c,configLogin:h,setLoading:r,onSubmit:y}}}),d=e=>(N("data-v-d32c1588"),e=e(),O(),e),K={class:"user-account-login"},G={class:"user-account-nav"},Q={class:"nav-left"},W=d(()=>o("div",{class:"nav-logo"},null,-1)),X=d(()=>o("div",{class:"nav-circle"},null,-1)),Y={class:"nav-title"},Z={class:"nav-right"},ee={class:"user-account-body"},te=d(()=>o("img",{src:H,alt:""},null,-1));function oe(e,m,g,_,a,n){const s=u("Translations"),c=u("UserAccountContainerLayout"),t=u("Footer");return D(),M("div",K,[o("div",G,[o("div",Q,[W,X,o("div",Y,P(e._t("base.systemTitle")),1)]),o("div",Z,[p(s)])]),o("div",ee,[p(c,F(e.configLogin,{"form-data":e.formData,onOnSubmit:e.onSubmit}),{titleIcon:V(()=>[te]),_:1},16,["form-data","onOnSubmit"])]),p(t)])}const ce=B(J,[["render",oe],["__scopeId","data-v-d32c1588"]]);export{ce as default};
