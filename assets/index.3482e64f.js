import{_ as R,w as B,x as j,b as S,y as F,z as C,A as I,g as J}from"./index.57abbbcf.js";/* empty css              *//* empty css               *//* empty css               *//* empty css              */import{B as n,C as p,aJ as L,aI as U,aD as h,F as i,u as t,aM as k,aG as o,aL as y,aE as f,aH as a,bA as G,bB as H,aV as A,bC as M,bD as D,d as q,e as K,r as $,c as Q,b4 as W,b5 as X,bE as Y,bF as Z,ab as ee,b8 as te,bG as ae}from"./arco.bfc06e8a.js";/* empty css               *//* empty css               */import"./chart.8d130ef7.js";import"./vue.203b0a99.js";const se={class:"articles"},oe={class:"article-header"},le=["href"],ne={class:"article-status"},ie={class:"article-item-info"},re={class:"article-item-main"},ue={class:"article-summary"},ce={class:"article-meta"},de={class:"article-meta-left"},_e=["href"],me={class:"article-meta-item"},pe={key:0,class:"article-tags"},he={key:0,class:"article-item-cover"},ge={class:"article-item-actions"},fe={__name:"ArticleList",props:{results:{type:Array,default(){return[]}}},emits:["change"],setup(w,{emit:V}){const v=V,l=async s=>{try{await S.form("/api/admin/article/delete",F({id:s.id})),C("\u5220\u9664\u6210\u529F"),v("change")}catch(u){I(u)}},c=async s=>{try{await S.form("/api/admin/article/audit",F({id:s.id})),C("\u5BA1\u6838\u6210\u529F"),v("change")}catch(u){I(u)}};return(s,u)=>{const b=G,z=H,d=A,r=M,g=D;return n(),p("div",se,[w.results&&w.results.length?(n(!0),p(L,{key:0},U(w.results,e=>(n(),p("div",{key:e.id,class:"article-item"},[i("div",oe,[i("a",{class:"article-title",href:("useSiteURL"in s?s.useSiteURL:t(B))(`/article/${e.id}`),target:"_blank"},k(e.title),9,le),i("div",ne,[e.status===1?(n(),h(b,{key:0,color:"red",size:"mini"},{default:o(()=>[y("\u5DF2\u5220\u9664")]),_:1})):f("",!0),e.status===2?(n(),h(b,{key:1,color:"blue",size:"mini"},{default:o(()=>[y("\u5F85\u5BA1\u6838")]),_:1})):f("",!0)])]),i("div",ie,[i("div",re,[i("div",ue,k(e.summary),1),i("div",ce,[i("div",de,[i("a",{href:("useSiteURL"in s?s.useSiteURL:t(B))(`/user/${e.user.id}`),class:"article-meta-item",target:"_blank"},[i("span",null,k(e.user.nickname),1)],8,_e),i("span",me,"\u53D1\u5E03\u4E8E"+k(("useFormatDate"in s?s.useFormatDate:t(j))(e.createTime)),1)]),e.tags&&e.tags.length>0?(n(),p("div",pe,[(n(!0),p(L,null,U(e.tags,m=>(n(),h(b,{key:m.id,size:"mini"},{default:o(()=>[y(k(m.name),1)]),_:2},1024))),128))])):f("",!0)])]),e.cover?(n(),p("div",he,[a(z,{src:e.cover.url,width:"150",height:"90",fit:"cover"},null,8,["src"])])):f("",!0)]),i("div",ge,[e.status===0||e.status===2?(n(),h(r,{key:0,content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",onOk:m=>l(e)},{default:o(()=>[a(d,{class:"action-item",size:"mini",type:"primary",status:"warning"},{default:o(()=>[y("\u5220\u9664")]),_:1})]),_:2},1032,["onOk"])):f("",!0),e.status===2?(n(),h(r,{key:1,content:"\u662F\u5426\u786E\u5B9A\u53D6\u6D88\u5220\u9664\uFF1F",onOk:m=>c(e)},{default:o(()=>[a(d,{class:"action-item",size:"mini",type:"primary",status:"success"},{default:o(()=>[y("\u5BA1\u6838\u901A\u8FC7")]),_:1})]),_:2},1032,["onOk"])):f("",!0)])]))),128)):(n(),h(g,{key:1}))])}}},ye=R(fe,[["__scopeId","data-v-0b476228"]]),ve={class:"container"},be={class:"container-header"},ke={class:"container-main"},we={key:0},Ve={style:{"margin-top":"10px",display:"flex","justify-content":"flex-end"}},De=q({__name:"index",setup(w){const V=J(),v=K(!1),l=$({limit:20,page:1,id:void 0,userId:void 0,title:void 0,status:0}),c=$({page:{page:1,limit:20,total:0},results:[]}),s=Q(()=>({total:c.page.total,current:c.page.page,pageSize:c.page.limit,showTotal:!0,showJumper:!0,showPageSize:!0})),u=async()=>{v.value=!0;try{const d=await S.postForm("/api/admin/article/list",F(l));c.page=d.page,c.results=d.results}finally{v.value=!1}};u();const b=d=>{l.page=d,u()},z=d=>{l.limit=d,u()};return(d,r)=>{const g=W,e=X,m=Y,E=Z,x=ee,P=A,T=te,N=ae,O=D;return n(),p("div",ve,[i("div",be,[a(T,{model:t(l),layout:"inline",size:t(V).table.size},{default:o(()=>[a(e,null,{default:o(()=>[a(g,{modelValue:t(l).id,"onUpdate:modelValue":r[0]||(r[0]=_=>t(l).id=_),placeholder:"ID"},null,8,["modelValue"])]),_:1}),a(e,null,{default:o(()=>[a(g,{modelValue:t(l).userId,"onUpdate:modelValue":r[1]||(r[1]=_=>t(l).userId=_),placeholder:"\u7528\u6237\u7F16\u53F7"},null,8,["modelValue"])]),_:1}),a(e,null,{default:o(()=>[a(g,{modelValue:t(l).title,"onUpdate:modelValue":r[2]||(r[2]=_=>t(l).title=_),placeholder:"\u6807\u9898"},null,8,["modelValue"])]),_:1}),a(e,null,{default:o(()=>[a(E,{modelValue:t(l).status,"onUpdate:modelValue":r[3]||(r[3]=_=>t(l).status=_),placeholder:"\u72B6\u6001","allow-clear":"",onChange:u},{default:o(()=>[a(m,{value:0,label:"\u6B63\u5E38"}),a(m,{value:1,label:"\u5220\u9664"}),a(m,{value:2,label:"\u5F85\u5BA1\u6838"})]),_:1},8,["modelValue"])]),_:1}),a(e,null,{default:o(()=>[a(g,{modelValue:t(l).title,"onUpdate:modelValue":r[4]||(r[4]=_=>t(l).title=_),placeholder:"\u6807\u9898"},null,8,["modelValue"])]),_:1}),a(e,null,{default:o(()=>[a(P,{type:"primary","html-type":"submit",onClick:u},{icon:o(()=>[a(x)]),default:o(()=>[y(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1},8,["model","size"])]),i("div",ke,[t(c)&&t(c).results?(n(),p("div",we,[a(ye,{results:t(c).results,onChange:u},null,8,["results"]),i("div",Ve,[a(N,{total:t(s).total,current:t(s).current,"page-size":t(s).pageSize,"show-total":t(s).showTotal,"show-jumper":t(s).showJumper,"show-page-size":t(s).showPageSize,onChange:b,onPageSizeChange:z},null,8,["total","current","page-size","show-total","show-jumper","show-page-size"])])])):(n(),h(O,{key:1}))])])}}});export{De as default};
