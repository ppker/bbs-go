import{j as T,a as G}from"./index.1d773328.js";import{d as U,e as w,r as V,B as O,aD as J,aG as a,aH as e,u as t,bF as A,bG as I,b6 as N,b5 as P,b9 as H,b0 as R,c as q,o as K,C as L,F as E,aL as B,aM as Q,ab as W,aV as X,a5 as Y,bJ as Z,bK as ee}from"./arco.2c5416d7.js";import{g as M,b as x,x as S,w as te}from"./index.132414d9.js";/* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css              */import{u as ae}from"./height.78eba64d.js";import"./chart.a2535dd4.js";import"./vue.cdf9f1d2.js";const oe=U({__name:"Edit",emits:["ok"],setup($,{expose:c,emit:f}){const b=f,r=M(),n=w(),i=V({visible:!1,isCreate:!1,title:""}),o=w({type:void 0,word:void 0,remark:void 0}),y={word:[{required:!0,message:"\u8BF7\u8F93\u5165\u8FDD\u7981\u8BCD"}]},h=()=>{n.value.resetFields(),i.isCreate=!0,i.title="\u65B0\u589E",i.visible=!0},D=async u=>{n.value.resetFields(),i.isCreate=!1,i.title="\u7F16\u8F91";try{o.value=await x.get(`/api/admin/forbidden-word/${u}`)}catch(l){S(l)}i.visible=!0},k=()=>{n.value.resetFields()},s=async u=>{if(await n.value.validate()){u(!1);return}try{const m=i.isCreate?"/api/admin/forbidden-word/create":"/api/admin/forbidden-word/update";await x.postForm(m,T(o.value)),te("\u63D0\u4EA4\u6210\u529F"),b("ok"),u(!0)}catch(m){S(m),u(!1)}};return c({show:h,showEdit:D}),(u,l)=>{const m=A,v=I,F=N,C=P,g=H,z=R;return O(),J(z,{visible:t(i).visible,"onUpdate:visible":l[3]||(l[3]=d=>t(i).visible=d),title:t(i).title,size:t(r).table.size,onCancel:k,onBeforeOk:s},{default:a(()=>[e(g,{ref_key:"formRef",ref:n,model:t(o),rules:y},{default:a(()=>[e(F,{label:"\u7C7B\u578B",field:"type"},{default:a(()=>[e(v,{modelValue:t(o).type,"onUpdate:modelValue":l[0]||(l[0]=d=>t(o).type=d),placeholder:"\u7C7B\u578B"},{default:a(()=>[e(m,{label:"\u8BCD\u7EC4",value:"word"}),e(m,{label:"\u6B63\u5219\u8868\u8FBE\u5F0F",value:"regex"})]),_:1},8,["modelValue"])]),_:1}),e(F,{label:"\u8FDD\u7981\u8BCD",field:"word"},{default:a(()=>[e(C,{modelValue:t(o).word,"onUpdate:modelValue":l[1]||(l[1]=d=>t(o).word=d)},null,8,["modelValue"])]),_:1}),e(F,{label:"\u5907\u6CE8",field:"remark"},{default:a(()=>[e(C,{modelValue:t(o).remark,"onUpdate:modelValue":l[2]||(l[2]=d=>t(o).remark=d)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","size"])}}}),le={class:"container"},se={class:"container-header"},ne={class:"action-btns"},ie={class:"container-main"},Ce=U({__name:"index",setup($){const c=M(),f=w(!1),b=w(),r=V({limit:20,page:1,type:void 0,word:void 0}),n=V({page:{page:1,limit:20,total:0},results:[]}),i=q(()=>({total:n.page.total,current:n.page.page,pageSize:n.page.limit,showTotal:!0,showJumper:!0,showPageSize:!0,pageSizeOptions:[20,50,100,200,300,500]}));K(()=>{ae()});const o=async()=>{f.value=!0;try{const s=await x.postForm("/api/admin/forbidden-word/list",T(r));n.page=s.page,n.results=s.results}finally{f.value=!1}};o();const y=()=>{b.value.show()},h=s=>{b.value.showEdit(s)},D=s=>{r.page=s,o()},k=s=>{r.limit=s,o()};return(s,u)=>{const l=A,m=I,v=N,F=P,C=W,g=X,z=H,d=Y,_=Z,j=ee;return O(),L("div",le,[E("div",se,[e(z,{model:t(r),layout:"inline",size:t(c).table.size},{default:a(()=>[e(v,null,{default:a(()=>[e(m,{modelValue:t(r).type,"onUpdate:modelValue":u[0]||(u[0]=p=>t(r).type=p),placeholder:"\u7C7B\u578B",clearable:"",onChange:o},{default:a(()=>[e(l,{label:"\u8BCD\u7EC4",value:"word"}),e(l,{label:"\u6B63\u5219\u8868\u8FBE\u5F0F",value:"regex"})]),_:1},8,["modelValue"])]),_:1}),e(v,null,{default:a(()=>[e(F,{modelValue:t(r).word,"onUpdate:modelValue":u[1]||(u[1]=p=>t(r).word=p),placeholder:"\u8FDD\u7981\u8BCD"},null,8,["modelValue"])]),_:1}),e(v,null,{default:a(()=>[e(g,{type:"primary","html-type":"submit",onClick:o},{icon:a(()=>[e(C)]),default:a(()=>[B(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1},8,["model","size"]),E("div",ne,[e(g,{type:"primary",size:t(c).table.size,onClick:y},{icon:a(()=>[e(d)]),default:a(()=>[B(" \u65B0\u589E ")]),_:1},8,["size"])])]),E("div",ie,[e(j,{loading:t(f),data:t(n).results,size:t(c).table.size,bordered:t(c).table.bordered,pagination:t(i),"sticky-header":!0,style:{height:"100%"},"column-resizable":"",onPageChange:D,onPageSizeChange:k},{columns:a(()=>[e(_,{title:"\u7F16\u53F7","data-index":"id"}),e(_,{title:"\u7C7B\u578B","data-index":"type"}),e(_,{title:"\u8FDD\u7981\u8BCD","data-index":"word"}),e(_,{title:"\u5907\u6CE8","data-index":"remark"}),e(_,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createTime"},{cell:a(({record:p})=>[B(Q(("useFormatDate"in s?s.useFormatDate:t(G))(p.createTime)),1)]),_:1}),e(_,{title:"\u64CD\u4F5C"},{cell:a(({record:p})=>[e(g,{type:"primary",size:t(c).table.size,onClick:ue=>h(p.id)},{default:a(()=>[B("\u7F16\u8F91")]),_:2},1032,["size","onClick"])]),_:1})]),_:1},8,["loading","data","size","bordered","pagination"])]),e(oe,{ref_key:"edit",ref:b,onOk:o},null,512)])}}});export{Ce as default};
