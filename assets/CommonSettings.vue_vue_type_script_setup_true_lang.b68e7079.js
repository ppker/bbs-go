import{b as p,z as y,A as T}from"./index.9590b422.js";/* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css               *//* empty css                */import{d as N,e as D,r as U,b4 as x,bK as I,bE as L,bL as R,aT as v,bj as H,aV as k,b8 as K,aD as A,aG as a,u as l,B as f,aH as t,C as S,aI as z,aL as G,aJ as i,b5 as O,bG as j}from"./arco.d3370bfb.js";import{I as J}from"./ImageUpload.2536de98.js";const le=N({__name:"CommonSettings",setup(M){const s=D(!1),e=U({siteTitle:"",siteLogo:"",siteDescription:"",siteKeywords:[],siteNotification:"",recommendTags:[],defaultNodeId:void 0,urlRedirect:!1,enableHideContent:!1,modules:{tweet:!1,topic:!1,article:!1}}),c=D([]),F=async()=>{const d=await p.get("/api/admin/sys-config/all");e.siteTitle=d.siteTitle,e.siteLogo=d.siteLogo,e.siteDescription=d.siteDescription,e.siteKeywords=d.siteKeywords,e.siteNotification=d.siteNotification,e.recommendTags=d.recommendTags,e.defaultNodeId=d.defaultNodeId,e.urlRedirect=d.urlRedirect,e.enableHideContent=d.enableHideContent,e.modules=d.modules,c.value=await p.get("/api/admin/topic-node/nodes")};F();const B=async()=>{s.value=!0;try{await p.post("/api/admin/sys-config/save",e),await F(),y("\u63D0\u4EA4\u6210\u529F")}catch(d){T(d)}finally{s.value=!1}};return(d,o)=>{const E=x,n=O,V=I,m=L,g=j,r=R,b=v,_=H,w=k,C=K;return f(),A(C,{model:l(e),"auto-label-width":""},{default:a(()=>[t(n,{label:"\u7F51\u7AD9\u540D\u79F0"},{default:a(()=>[t(E,{modelValue:l(e).siteTitle,"onUpdate:modelValue":o[0]||(o[0]=u=>l(e).siteTitle=u),type:"text",placeholder:"\u7F51\u7AD9\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u7F51\u7AD9LOGO"},{default:a(()=>[t(J,{modelValue:l(e).siteLogo,"onUpdate:modelValue":o[1]||(o[1]=u=>l(e).siteLogo=u)},null,8,["modelValue"])]),_:1}),t(n,{label:"\u7F51\u7AD9\u63CF\u8FF0"},{default:a(()=>[t(V,{modelValue:l(e).siteDescription,"onUpdate:modelValue":o[2]||(o[2]=u=>l(e).siteDescription=u),"auto-size":{minRows:2,maxRows:5},placeholder:"\u7F51\u7AD9\u63CF\u8FF0"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u7F51\u7AD9\u5173\u952E\u5B57"},{default:a(()=>[t(m,{modelValue:l(e).siteKeywords,"onUpdate:modelValue":o[3]||(o[3]=u=>l(e).siteKeywords=u),multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"\u7F51\u7AD9\u5173\u952E\u5B57"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u7F51\u7AD9\u516C\u544A"},{default:a(()=>[t(V,{modelValue:l(e).siteNotification,"onUpdate:modelValue":o[4]||(o[4]=u=>l(e).siteNotification=u),"auto-size":{minRows:2,maxRows:5},placeholder:"\u7F51\u7AD9\u516C\u544A\uFF08\u652F\u6301\u8F93\u5165HTML\uFF09"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u63A8\u8350\u6807\u7B7E"},{default:a(()=>[t(m,{modelValue:l(e).recommendTags,"onUpdate:modelValue":o[5]||(o[5]=u=>l(e).recommendTags=u),multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"\u63A8\u8350\u6807\u7B7E"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u9ED8\u8BA4\u8282\u70B9"},{default:a(()=>[t(m,{modelValue:l(e).defaultNodeId,"onUpdate:modelValue":o[6]||(o[6]=u=>l(e).defaultNodeId=u),placeholder:"\u53D1\u5E16\u9ED8\u8BA4\u8282\u70B9"},{default:a(()=>[(f(!0),S(G,null,z(l(c),u=>(f(),A(g,{key:u.id,label:u.name,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"\u529F\u80FD\u6A21\u5757"},{default:a(()=>[t(r,{modelValue:l(e).modules.tweet,"onUpdate:modelValue":o[7]||(o[7]=u=>l(e).modules.tweet=u),border:""},{default:a(()=>[i("\u52A8\u6001")]),_:1},8,["modelValue"]),t(r,{modelValue:l(e).modules.topic,"onUpdate:modelValue":o[8]||(o[8]=u=>l(e).modules.topic=u),border:""},{default:a(()=>[i("\u5E16\u5B50")]),_:1},8,["modelValue"]),t(r,{modelValue:l(e).modules.article,"onUpdate:modelValue":o[9]||(o[9]=u=>l(e).modules.article=u),border:""},{default:a(()=>[i("\u6587\u7AE0")]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"\u7AD9\u5916\u94FE\u63A5\u8DF3\u8F6C\u9875\u9762"},{default:a(()=>[t(_,{content:"\u5728\u8DF3\u8F6C\u524D\u9700\u624B\u52A8\u786E\u8BA4\u662F\u5426\u524D\u5F80\u8BE5\u7AD9\u5916\u94FE\u63A5",placement:"top"},{default:a(()=>[t(b,{modelValue:l(e).urlRedirect,"onUpdate:modelValue":o[10]||(o[10]=u=>l(e).urlRedirect=u)},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{label:"\u542F\u7528\u8BC4\u8BBA\u53EF\u89C1\u5185\u5BB9"},{default:a(()=>[t(_,{content:"\u53D1\u5E16\u65F6\u652F\u6301\u8BBE\u7F6E\u8BC4\u8BBA\u540E\u53EF\u89C1\u5185\u5BB9",placement:"top"},{default:a(()=>[t(b,{modelValue:l(e).enableHideContent,"onUpdate:modelValue":o[11]||(o[11]=u=>l(e).enableHideContent=u)},null,8,["modelValue"])]),_:1})]),_:1}),t(n,null,{default:a(()=>[t(w,{type:"primary",loading:l(s),onClick:B},{default:a(()=>[i("\u63D0\u4EA4")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}});export{le as _};
