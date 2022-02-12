import k from"./ContainerLayout.4fe8e13f.js";import{T as x}from"./Translations.43cee893.js";import{g as S,a8 as _,u as I,i as R,L as c,S as E,Y as T,j as A,a9 as C,X as O,r as u,o as U,t as q,v as e,I as D,n as m,m as P,H as j,d as b,E as z,M as F,O as H}from"./vendor.2a544937.js";import{_ as M,u as V,b as X}from"./index.cb116887.js";import{_ as Y}from"./pinia.8a788826.js";import"./lodash.fbf82d6e.js";const $=S({name:"UserAccountLogin",components:{UserAccountContainerLayout:k,Promotion:_,Translations:x},setup(){const{proxy:a}=V(),d=X(),p=I(),v=R(),o=c(!0),r=c(""),t=c(""),l=E({email:"vite.admin@gmail.com",password:"123456"}),s=T(),y=A(()=>({title:s.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:o.value,size:"large"},text:s.t("login.signin"),on:{click(n){a.onSubmit(n)}}}],formConfig:[{attrs:{prop:"email",error:r.value,rules:()=>[a.getRequiredRules({trigger:"change",message:s.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:s.t("login.plscurrentemail")})]},label:s.t("login.email"),prefixIcon:"user-tie",placeholder:s.t("login.plsemail")},{attrs:{prop:"password",error:t.value,rules:()=>a.getRequiredRules({trigger:"change",message:s.t("login.plspwd")})},link:{text:s.t("login.fgtpwd"),click(){}},type:"password",label:s.t("login.pwd"),prefixIcon:"lock",placeholder:s.t("login.plspwd")}]}));function i(n=!1){o.value=n}return i(!0),C(()=>{O(()=>{i(!1)})}),{isLoading:o,inputErrorEmail:r,inputErrorPassword:t,formData:l,configLogin:y,setLoading:i,onSubmit:function(n){o.value||n.validate(async w=>{if(!w)return;r.value="",t.value="",i(!0);const{error:L,data:f,msg:h}=await d.login(l);if(L)return r.value=" ",t.value=h,void i(!1);b.set("token",f.user.token),b.set("name",f.user.username),v.replace(`/${p.params.locale||""}`).then(()=>{z.success({message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),g=a=>(F("data-v-11ad5494"),a=a(),H(),a),B={class:"user-account-login"},G={class:"user-account-nav"},J={class:"nav-left"},K=g(()=>e("div",{class:"nav-logo"},null,-1)),N=g(()=>e("div",{class:"nav-circle"},null,-1)),Q={class:"nav-title"},W={class:"nav-right"},Z={class:"user-account-body"},aa=g(()=>e("img",{src:Y,alt:""},null,-1));var na=M($,[["render",function(a,d,p,v,o,r){const t=u("Translations"),l=u("UserAccountContainerLayout"),s=u("Footer");return U(),q("div",B,[e("div",G,[e("div",J,[K,N,e("div",Q,D(a._t("base.systemTitle")),1)]),e("div",W,[m(t)])]),e("div",Z,[m(l,j(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:P(()=>[aa]),_:1},16,["form-data","onOnSubmit"])]),m(s)])}],["__scopeId","data-v-11ad5494"]]);export{na as default};
