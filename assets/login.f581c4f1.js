import{d as x,U as k,N as _,J as I,I as R,f as c,D as S,v as A,h as C,V as E,z as T,K as y,E as U,A as q,_ as D,r as u,o as z,b as O,e,t as P,g as m,w as V,C as j,q as F,u as J}from"./index.607cce7b.js";import K from"./ContainerLayout.06f6dc63.js";import{T as N}from"./Translations.97093abc.js";import{_ as $}from"./pinia.84339ab1.js";import"./lodash.61f2a9d8.js";const B=x({name:"UserAccountLogin",components:{UserAccountContainerLayout:K,Promotion:k,Translations:N},setup(){const{proxy:a}=q(),d=_(),p=I(),v=R(),o=c(!0),n=c(""),t=c(""),l=S({email:"vite.admin@gmail.com",password:"123456"}),s=A(),b=C(()=>({title:s.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:o.value,size:"large"},text:s.t("login.signin"),on:{click(i){a.onSubmit(i)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules:()=>[a.getRequiredRules({trigger:"change",message:s.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:s.t("login.plscurrentemail")})]},label:s.t("login.email"),prefixIcon:"user-tie",placeholder:s.t("login.plsemail")},{attrs:{prop:"password",error:t.value,rules:()=>a.getRequiredRules({trigger:"change",message:s.t("login.plspwd")})},link:{text:s.t("login.fgtpwd"),click(){}},type:"password",label:s.t("login.pwd"),prefixIcon:"lock",placeholder:s.t("login.plspwd")}]}));function r(i=!1){o.value=i}return r(!0),E(()=>{T(()=>{r(!1)})}),{isLoading:o,inputErrorEmail:n,inputErrorPassword:t,formData:l,configLogin:b,setLoading:r,onSubmit:function(i){o.value||i.validate(async w=>{if(!w)return;n.value="",t.value="",r(!0);const{error:h,data:f,msg:L}=await d.login(l);if(h)return n.value=" ",t.value=L,void r(!1);y.set("token",f.user.token),y.set("name",f.user.username),v.replace(`/${p.params.locale||""}`).then(()=>{U.success({message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),g=a=>(F("data-v-2ffcddaa"),a=a(),J(),a),G={class:"user-account-login"},H={class:"user-account-nav"},M={class:"nav-left"},Q=g(()=>e("div",{class:"nav-logo"},null,-1)),W=g(()=>e("div",{class:"nav-circle"},null,-1)),X={class:"nav-title"},Y={class:"nav-right"},Z={class:"user-account-body"},aa=g(()=>e("img",{src:$,alt:""},null,-1)),ra=D(B,[["render",function(a,d,p,v,o,n){const t=u("Translations"),l=u("UserAccountContainerLayout"),s=u("Footer");return z(),O("div",G,[e("div",H,[e("div",M,[Q,W,e("div",X,P(a._t("base.systemTitle")),1)]),e("div",Y,[m(t)])]),e("div",Z,[m(l,j(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:V(()=>[aa]),_:1},16,["form-data","onOnSubmit"])]),m(s)])}],["__scopeId","data-v-2ffcddaa"]]);export{ra as default};