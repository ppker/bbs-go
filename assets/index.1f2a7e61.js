import{_ as V,b as _,w as j,x as D}from"./index.524fc109.js";/* empty css              */import{b as F,j as H}from"./index.62d9be8e.js";/* empty css                *//* empty css               */import{e as l,o as S,B as u,C as v,F as c,aH as n,aG as i,aL as g,aJ as T,aI as E,u as e,aD as z,j as L,aE as P,aW as $,aV as A,bH as G,bP as J,b9 as K,D as U,aM as W,R as Y}from"./arco.bfc06e8a.js";import"./chart.8d130ef7.js";import"./vue.203b0a99.js";const q={class:"container"},O={class:"container-header"},Q={style:{width:"max-content"}},X={class:"container-main"},Z={class:"role-item-list"},ee=["onClick"],ae={__name:"index",setup(te){const m=l(!1),o=l([]),r=l([]),a=l(),t=l([]),y={overflowY:"auto",height:"calc(100% - 46px)"};S(()=>{F(),k()});const k=async()=>{await Promise.all([b(),I()]),a.value||o.value&&o.value.length&&(a.value=o.value[0].id),await p()},w=async d=>{a.value=d.id,await p()},x=async()=>{try{await _.postForm("/api/admin/role/save_role_menus",H({roleId:a.value,menuIds:t.value?t.value.join(","):""})),j("\u4FDD\u5B58\u6210\u529F")}catch(d){D(d)}await p()},b=async()=>{o.value=await _.get("/api/admin/role/all_roles")},I=async()=>{try{m.value=!0,r.value=await _.get("/api/admin/menu/tree")}finally{m.value=!1}},p=async()=>{t.value=await _.get(`/api/admin/role/role_menu_ids?roleId=${a.value}`)};return(d,h)=>{const C=$,R=A,B=Y,f=G,M=J,N=K;return u(),v("div",q,[c("div",O,[c("div",Q,[n(C,{type:"warning"},{default:i(()=>[g("\u8BBE\u7F6E\u89D2\u8272\u5BF9\u5E94\u6743\u9650")]),_:1})]),n(R,{type:"primary",onClick:x},{default:i(()=>[g("\u4FDD\u5B58")]),_:1})]),c("div",X,[n(f,{title:"\u89D2\u8272\u5217\u8868",class:"roles-panel","body-style":y},{default:i(()=>[c("div",Z,[(u(!0),v(T,null,E(e(o),s=>(u(),v("div",{key:s.id,class:U(["role-item",{active:s.id===e(a)}]),onClick:se=>w(s)},[c("span",null,W(s.name),1),n(B)],10,ee))),128))])]),_:1}),n(f,{title:"\u83DC\u5355\u6743\u9650",class:"menus-panel","body-style":y},{default:i(()=>[n(N,{loading:e(m),dot:"",style:{width:"100%"}},{default:i(()=>[e(r)&&e(r).length?(u(),z(M,{key:0,"checked-keys":e(t),"onUpdate:checkedKeys":h[0]||(h[0]=s=>L(t)?t.value=s:null),data:e(r),checkable:!0,"default-expand-all":!0,size:"large"},null,8,["checked-keys","data"])):P("",!0)]),_:1},8,["loading"])]),_:1})])])}}},ue=V(ae,[["__scopeId","data-v-cd9deebc"]]);export{ue as default};
