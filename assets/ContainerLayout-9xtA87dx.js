import{l as L}from"./lodash-cWVc46Tp.js";import{d as q,i as A,N as E,k as I,_ as B,r as a,o as l,b as f,e as i,c as b,B as $,O as D,t as d,g as p,w as u,P as N,F,A as P,v as S,q as g,m as U,Q as x,R as O}from"./index-QqBRTgt2.js";const j=q({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default(){return[]},required:!0},formData:{type:Object,default(){return{}},required:!0},formConfig:{type:Array,default(){return[]},required:!0}},emits:["on-submit"],setup(){const{proxy:e}=I(),n=A(!1),c=A();function h(){n.value=!n.value}function w(o){const s={},r=o.type==="password";return r?s.type=n.value?"text":"password":s.type="text",{clearable:!r,placeholder:o.placeholder,...s}}function C(o){return{rules:E(o.rules)?o.rules.call(e):"",...L.omit(o,["rules"])}}function y(o){const s={};return Object.keys(o).forEach(r=>{s[r]=o[r].bind(e.$parent,c.value)}),s}function _(o){o.click.call(e.$parent,c.value)}function m(){e.$emit("on-submit",c.value)}return{showPassword:n,boxForm:c,tooglePassword:h,getInputItemAttrs:w,getFormItemAttrs:C,getActionItemEvent:y,handleClickLink:_,onSubmit:m}}}),K={class:"user-account-container-layout"},z={class:"form-title"},H={class:"form-title-icon"},Q={class:"form-title-text"},R={class:"form-desc-text"},T={class:"form-custom-label"};function G(e,n,c,h,w,C){const y=a("IconFont"),_=a("el-link"),m=a("FontAwesomeIcon"),o=a("el-input"),s=a("el-form-item"),r=a("el-button"),V=a("el-form");return l(),f("div",K,[i("div",z,[i("div",H,[e.titleIcon?(l(),b(y,{key:0,icon:e.titleIcon},null,8,["icon"])):$("",!0),D(e.$slots,"titleIcon",{},void 0,!0)]),i("p",Q,d(e.title),1),i("p",R,d(e.desc),1)]),p(V,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:n[1]||(n[1]=N(t=>e.onSubmit(),["enter"]))},{default:u(()=>[(l(!0),f(F,null,P(e.formConfig,(t,k)=>(l(),b(s,x(g({key:k},e.getFormItemAttrs(t.attrs))),{default:u(()=>[i("div",T,[i("p",null,d(t.label),1),t.link?(l(),b(_,{key:0,type:"primary",underline:!1,onClick:v=>e.handleClickLink(t.link)},{default:u(()=>[S(d(t.link.text),1)]),_:2},1032,["onClick"])):$("",!0)]),p(o,g({modelValue:e.formData[t.attrs.prop],"onUpdate:modelValue":v=>e.formData[t.attrs.prop]=v},e.getInputItemAttrs(t)),U({_:2},[t.prefixIcon?{name:"prefix",fn:u(()=>[p(m,{class:"input-icon-prefix",icon:t.prefixIcon},null,8,["icon"])]),key:"0"}:void 0,t.type==="password"?{name:"suffix",fn:u(()=>[p(m,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:n[0]||(n[0]=v=>e.tooglePassword())},null,8,["icon"])]),key:"1"}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(l(!0),f(F,null,P(e.actionList,(t,k)=>(l(),f("div",{key:`${k}-`,class:"submit-form-action-list"},[p(r,g(t.attrs,{class:"submit-form-action-button"},O(e.getActionItemEvent(t.on)||{})),{default:u(()=>[S(d(t.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}const W=B(j,[["render",G],["__scopeId","data-v-15204708"]]);export{W as default};
