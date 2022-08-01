import{l as S}from"./lodash.61f2a9d8.js";import{d as $,f as I,Q as D,A as P,_ as V,r as n,o as s,b as p,e as i,c as k,j as x,L as j,t as d,g as m,w as c,R as E,F as g,p as w,G as A,C as b,B as U,S as O,T as B}from"./index.607cce7b.js";const G=$({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default:()=>[],required:!0},formData:{type:Object,default:()=>({}),required:!0},formConfig:{type:Array,default:()=>[],required:!0}},emits:["on-submit"],setup(){const{proxy:e}=P(),a=I(!1),u=I();return{showPassword:a,boxForm:u,tooglePassword:function(){a.value=!a.value},getInputItemAttrs:function(o){const l={},r=o.type==="password";return l.type=r?a.value?"text":"password":"text",{clearable:!r,placeholder:o.placeholder,...l}},getFormItemAttrs:function(o){return{rules:D(o.rules)?o.rules.call(e):"",...S.exports.omit(o,["rules"])}},getActionItemEvent:function(o){const l={};return Object.keys(o).forEach(r=>{l[r]=o[r].bind(e.$parent,u.value)}),l},handleClickLink:function(o){o.click.call(e.$parent,u.value)},onSubmit:function(){e.$emit("on-submit",u.value)}}}}),K={class:"user-account-container-layout"},Q={class:"form-title"},R={class:"form-title-icon"},T={class:"form-title-text"},z={class:"form-desc-text"},H={class:"form-custom-label"},N=V(G,[["render",function(e,a,u,o,l,r){const h=n("IconFont"),C=n("el-link"),v=n("FontAwesomeIcon"),_=n("el-input"),F=n("el-form-item"),q=n("el-button"),L=n("el-form");return s(),p("div",K,[i("div",Q,[i("div",R,[e.titleIcon?(s(),k(h,{key:0,icon:e.titleIcon},null,8,["icon"])):x("",!0),j(e.$slots,"titleIcon",{},void 0,!0)]),i("p",T,d(e.title),1),i("p",z,d(e.desc),1)]),m(L,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:a[1]||(a[1]=E(t=>e.onSubmit(),["enter"]))},{default:c(()=>[(s(!0),p(g,null,w(e.formConfig,(t,f)=>(s(),k(F,O(b({key:f},e.getFormItemAttrs(t.attrs))),{default:c(()=>[i("div",H,[i("p",null,d(t.label),1),t.link?(s(),k(C,{key:0,type:"primary",underline:!1,onClick:y=>e.handleClickLink(t.link)},{default:c(()=>[A(d(t.link.text),1)]),_:2},1032,["onClick"])):x("",!0)]),m(_,b({modelValue:e.formData[t.attrs.prop],"onUpdate:modelValue":y=>e.formData[t.attrs.prop]=y},e.getInputItemAttrs(t)),U({_:2},[t.prefixIcon?{name:"prefix",fn:c(()=>[m(v,{class:"input-icon-prefix",icon:t.prefixIcon},null,8,["icon"])])}:void 0,t.type==="password"?{name:"suffix",fn:c(()=>[m(v,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:a[0]||(a[0]=y=>e.tooglePassword())},null,8,["icon"])])}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(s(!0),p(g,null,w(e.actionList,(t,f)=>(s(),p("div",{key:`${f}-`,class:"submit-form-action-list"},[m(q,b(t.attrs,{class:"submit-form-action-button"},B(e.getActionItemEvent(t.on)||{})),{default:c(()=>[A(d(t.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}],["__scopeId","data-v-d9c30083"]]);export{N as default};