import{j as U,a as G}from"./index.1d773328.js";import{d as T,e as V,r as w,B as I,aD as J,aG as a,aH as e,u as t,aL as f,b5 as O,b6 as A,aS as R,bF as P,bG as q,b9 as H,b0 as K,c as L,o as Q,C as W,F as h,aM as S,ab as X,aV as Y,a5 as Z,bJ as ee,bK as te}from"./arco.2c5416d7.js";import{g as M,b as x,x as N,w as ae}from"./index.132414d9.js";/* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css              */import{u as oe}from"./height.78eba64d.js";import"./chart.a2535dd4.js";import"./vue.cdf9f1d2.js";const le=T({__name:"Edit",emits:["ok"],setup($,{expose:_,emit:b}){const F=b,i=M(),r=V(),d=w({visible:!1,isCreate:!1,title:""}),o=V({name:void 0,code:void 0,sortNo:0,remark:void 0,status:0}),B={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"}],code:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u7801"}],status:[{required:!0,message:"\u8BF7\u9009\u62E9\u72B6\u6001"}]},E=()=>{r.value.resetFields(),d.isCreate=!0,d.title="\u65B0\u589E",d.visible=!0},C=async n=>{r.value.resetFields(),d.isCreate=!1,d.title="\u7F16\u8F91";try{o.value=await x.get(`/api/admin/role/${n}`)}catch(u){N(u)}d.visible=!0},k=()=>{r.value.resetFields()},s=async n=>{if(await r.value.validate()){n(!1);return}try{const m=d.isCreate?"/api/admin/role/create":"/api/admin/role/update";await x.postForm(m,U(o.value)),ae("\u63D0\u4EA4\u6210\u529F"),F("ok"),n(!0)}catch(m){N(m),n(!1)}};return _({show:E,showEdit:C}),(n,u)=>{const m=O,p=A,y=R,g=P,v=q,z=H,D=K;return I(),J(D,{visible:t(d).visible,"onUpdate:visible":u[5]||(u[5]=l=>t(d).visible=l),title:t(d).title,size:t(i).table.size,onCancel:k,onBeforeOk:s},{default:a(()=>[e(z,{ref_key:"formRef",ref:r,model:t(o),rules:B},{default:a(()=>[e(p,{label:"\u89D2\u8272\u540D\u79F0",field:"name"},{default:a(()=>[e(m,{modelValue:t(o).name,"onUpdate:modelValue":u[0]||(u[0]=l=>t(o).name=l)},null,8,["modelValue"])]),_:1}),e(p,{label:"\u89D2\u8272\u7F16\u7801",field:"code"},{default:a(()=>[e(m,{modelValue:t(o).code,"onUpdate:modelValue":u[1]||(u[1]=l=>t(o).code=l)},null,8,["modelValue"])]),_:1}),e(p,{label:"\u6392\u5E8F",field:"sortNo"},{default:a(()=>[e(y,{modelValue:t(o).sortNo,"onUpdate:modelValue":u[2]||(u[2]=l=>t(o).sortNo=l),mode:"button"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u5907\u6CE8",field:"remark"},{default:a(()=>[e(m,{modelValue:t(o).remark,"onUpdate:modelValue":u[3]||(u[3]=l=>t(o).remark=l)},null,8,["modelValue"])]),_:1}),e(p,{label:"\u72B6\u6001",field:"status"},{default:a(()=>[e(v,{modelValue:t(o).status,"onUpdate:modelValue":u[4]||(u[4]=l=>t(o).status=l)},{default:a(()=>[e(g,{value:0},{default:a(()=>[f("\u6B63\u5E38")]),_:1}),e(g,{value:1},{default:a(()=>[f("\u7981\u7528")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","size"])}}}),ue={class:"container"},se={class:"container-header"},ne={class:"action-btns"},ie={class:"container-main"},Be=T({__name:"index",setup($){const _=M(),b=V(!1),F=V(),i=w({limit:20,page:1,name:void 0,code:void 0,status:0}),r=w({page:{page:1,limit:20,total:0},results:[]}),d=L(()=>({total:r.page.total,current:r.page.page,pageSize:r.page.limit,showTotal:!0,showJumper:!0,showPageSize:!0,pageSizeOptions:[20,50,100,200,300,500]}));Q(()=>{oe()});const o=async()=>{b.value=!0;try{const s=await x.postForm("/api/admin/role/list",U(i));r.page=s.page,r.results=s.results}finally{b.value=!1}};o();const B=()=>{F.value.show()},E=s=>{F.value.showEdit(s)},C=s=>{i.page=s,o()},k=s=>{i.limit=s,o()};return(s,n)=>{const u=O,m=A,p=P,y=q,g=X,v=Y,z=H,D=Z,l=ee,j=te;return I(),W("div",ue,[h("div",se,[e(z,{model:t(i),layout:"inline",size:t(_).table.size},{default:a(()=>[e(m,null,{default:a(()=>[e(u,{modelValue:t(i).name,"onUpdate:modelValue":n[0]||(n[0]=c=>t(i).name=c),placeholder:"\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(m,null,{default:a(()=>[e(u,{modelValue:t(i).code,"onUpdate:modelValue":n[1]||(n[1]=c=>t(i).code=c),placeholder:"\u89D2\u8272\u7F16\u7801"},null,8,["modelValue"])]),_:1}),e(m,null,{default:a(()=>[e(y,{modelValue:t(i).status,"onUpdate:modelValue":n[2]||(n[2]=c=>t(i).status=c),placeholder:"\u72B6\u6001","allow-clear":"",onChange:o},{default:a(()=>[e(p,{value:0,label:"\u6B63\u5E38"}),e(p,{value:1,label:"\u7981\u7528"})]),_:1},8,["modelValue"])]),_:1}),e(m,null,{default:a(()=>[e(v,{type:"primary","html-type":"submit",onClick:o},{icon:a(()=>[e(g)]),default:a(()=>[f(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1},8,["model","size"]),h("div",ne,[e(v,{type:"primary",size:t(_).table.size,onClick:B},{icon:a(()=>[e(D)]),default:a(()=>[f(" \u65B0\u589E ")]),_:1},8,["size"])])]),h("div",ie,[e(j,{loading:t(b),data:t(r).results,size:t(_).table.size,bordered:t(_).table.bordered,pagination:t(d),"sticky-header":!0,style:{height:"100%"},"column-resizable":"",onPageChange:C,onPageSizeChange:k},{columns:a(()=>[e(l,{title:"\u7F16\u53F7","data-index":"id"}),e(l,{title:"\u540D\u79F0","data-index":"name"}),e(l,{title:"\u89D2\u8272\u7F16\u7801","data-index":"code"}),e(l,{title:"\u6392\u5E8F","data-index":"sortNo"}),e(l,{title:"\u5907\u6CE8","data-index":"remark"}),e(l,{title:"\u72B6\u6001","data-index":"status"},{cell:a(({record:c})=>[f(S(c.status===0?"\u6B63\u5E38":"\u7981\u7528"),1)]),_:1}),e(l,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createTime"},{cell:a(({record:c})=>[f(S(("useFormatDate"in s?s.useFormatDate:t(G))(c.createTime)),1)]),_:1}),e(l,{title:"\u64CD\u4F5C"},{cell:a(({record:c})=>[e(v,{type:"primary",size:t(_).table.size,onClick:re=>E(c.id)},{default:a(()=>[f("\u7F16\u8F91")]),_:2},1032,["size","onClick"])]),_:1})]),_:1},8,["loading","data","size","bordered","pagination"])]),e(le,{ref_key:"edit",ref:F,onOk:o},null,512)])}}});export{Be as default};
