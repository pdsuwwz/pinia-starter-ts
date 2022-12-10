import{l as V}from"./lodash-e9f1b42e.js";import{f as I}from"./type-f2772668.js";import{u as q}from"./useCurrentInstance-52cff94f.js";import{x,r as A,ai as B,y as a,z as f,A as i,H as b,L as $,B as D,O as d,P as p,I as u,a7 as l,F,a0 as L,M as P,T as g,a1 as E,a4 as N,ab as U}from"./_plugin-vue_export-helper-cb68d2ee.js";import{a as O}from"./runtime-dom.esm-bundler-7fe9d643.js";import"./_commonjsHelpers-725317a4.js";const j=x({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default(){return[]},required:!0},formData:{type:Object,default(){return{}},required:!0},formConfig:{type:Array,default(){return[]},required:!0}},emits:["on-submit"],setup(){const{proxy:e}=q(),n=A(!1),c=A();function h(){n.value=!n.value}function C(o){const s={},r=o.type==="password";return r?s.type=n.value?"text":"password":s.type="text",{clearable:!r,placeholder:o.placeholder,...s}}function w(o){return{rules:I(o.rules)?o.rules.call(e):"",...V.exports.omit(o,["rules"])}}function _(o){const s={};return Object.keys(o).forEach(r=>{s[r]=o[r].bind(e.$parent,c.value)}),s}function y(o){o.click.call(e.$parent,c.value)}function m(){e.$emit("on-submit",c.value)}return{showPassword:n,boxForm:c,tooglePassword:h,getInputItemAttrs:C,getFormItemAttrs:w,getActionItemEvent:_,handleClickLink:y,onSubmit:m}}});const z={class:"user-account-container-layout"},H={class:"form-title"},K={class:"form-title-icon"},T={class:"form-title-text"},M={class:"form-desc-text"},G={class:"form-custom-label"};function J(e,n,c,h,C,w){const _=l("IconFont"),y=l("el-link"),m=l("FontAwesomeIcon"),o=l("el-input"),s=l("el-form-item"),r=l("el-button"),S=l("el-form");return a(),f("div",z,[i("div",H,[i("div",K,[e.titleIcon?(a(),b(_,{key:0,icon:e.titleIcon},null,8,["icon"])):$("",!0),D(e.$slots,"titleIcon",{},void 0,!0)]),i("p",T,d(e.title),1),i("p",M,d(e.desc),1)]),p(S,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:n[1]||(n[1]=O(t=>e.onSubmit(),["enter"]))},{default:u(()=>[(a(!0),f(F,null,L(e.formConfig,(t,k)=>(a(),b(s,N(g({key:k},e.getFormItemAttrs(t.attrs))),{default:u(()=>[i("div",G,[i("p",null,d(t.label),1),t.link?(a(),b(y,{key:0,type:"primary",underline:!1,onClick:v=>e.handleClickLink(t.link)},{default:u(()=>[P(d(t.link.text),1)]),_:2},1032,["onClick"])):$("",!0)]),p(o,g({modelValue:e.formData[t.attrs.prop],"onUpdate:modelValue":v=>e.formData[t.attrs.prop]=v},e.getInputItemAttrs(t)),E({_:2},[t.prefixIcon?{name:"prefix",fn:u(()=>[p(m,{class:"input-icon-prefix",icon:t.prefixIcon},null,8,["icon"])]),key:"0"}:void 0,t.type==="password"?{name:"suffix",fn:u(()=>[p(m,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:n[0]||(n[0]=v=>e.tooglePassword())},null,8,["icon"])]),key:"1"}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(a(!0),f(F,null,L(e.actionList,(t,k)=>(a(),f("div",{key:`${k}-`,class:"submit-form-action-list"},[p(r,g(t.attrs,{class:"submit-form-action-button"},U(e.getActionItemEvent(t.on)||{})),{default:u(()=>[P(d(t.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}const ee=B(j,[["render",J],["__scopeId","data-v-d9c30083"]]);export{ee as default};
