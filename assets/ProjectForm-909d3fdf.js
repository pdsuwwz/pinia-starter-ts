import{x as i,r as f,ai as F,y as c,z as _,P as o,I as a,a7 as m}from"./_plugin-vue_export-helper-1773af58.js";const V=i({name:"ProjectForm",props:{modelValue:{type:Object,default(){return{}}}},setup(e){const l=f();return{refForm:l,validateRules:async()=>new Promise(t=>{l.value.validate(s=>{t(!!s)})})}}});const g={class:"project-form-container"};function h(e,l,d,t,s,w){const r=m("el-input"),n=m("el-form-item"),p=m("el-form");return c(),_("div",g,[o(p,{ref:"refForm",model:e.modelValue,"label-position":"right","label-width":"120px"},{default:a(()=>[o(n,{prop:"name",label:e._t("project.name"),rules:e.getRequiredRules({trigger:"change",message:"请输入项目名称"})},{default:a(()=>[o(r,{modelValue:e.modelValue.name,"onUpdate:modelValue":l[0]||(l[0]=u=>e.modelValue.name=u),maxlength:"30","show-word-limit":"",placeholder:"请输入项目名称"},null,8,["modelValue"])]),_:1},8,["label","rules"]),o(n,{prop:"corpName",label:"公司名称",rules:e.getRequiredRules({trigger:"change",message:"请输入公司名称"})},{default:a(()=>[o(r,{modelValue:e.modelValue.corpName,"onUpdate:modelValue":l[1]||(l[1]=u=>e.modelValue.corpName=u),maxlength:"30","show-word-limit":"",placeholder:"请输入公司名称"},null,8,["modelValue"])]),_:1},8,["rules"]),o(n,{prop:"notes",label:"备注"},{default:a(()=>[o(r,{modelValue:e.modelValue.notes,"onUpdate:modelValue":l[2]||(l[2]=u=>e.modelValue.notes=u),type:"textarea",placeholder:"请输入备注",maxlength:"200",autosize:{minRows:2},"show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}const C=F(V,[["render",h],["__scopeId","data-v-fd620e7e"]]);export{C as default};
