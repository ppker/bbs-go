import{u as V,_ as $,a as x,b as R,D as U,I as T,c as A}from"./index.57abbbcf.js";/* empty css              */import{d as w,c as G,B as m,C as h,F as s,aH as a,aG as n,aJ as O,aI as Q,b2 as z,aD as L,aM as g,b3 as H,e as S,r as J,u as l,aE as P,aL as j,aU as K,b4 as W,b5 as X,b6 as Y,ad as Z,aV as ee,b7 as oe,b8 as ae,o as se,b9 as te,ba as ne,bb as re}from"./arco.bfc06e8a.js";import{F as le}from"./index.62cf739c.js";/* empty css              *//* empty css               */import{f as F}from"./vue.203b0a99.js";import"./chart.8d130ef7.js";const I="/assets/logo364x364.fc4aff0c.png",ce={class:"banner"},ie={class:"banner-inner"},de={class:"carousel-content"},ue={class:"carousel-content-title"},_e={class:"carousel-content-sub-title"},pe=w({__name:"banner",setup(c){const{t:o}=V(),i=G(()=>[{slogan:o("login.banner.slogan1"),subSlogan:o("login.banner.subSlogan1"),image:I},{slogan:o("login.banner.slogan2"),subSlogan:o("login.banner.subSlogan2"),image:I},{slogan:o("login.banner.slogan3"),subSlogan:o("login.banner.subSlogan3"),image:I}]);return(d,u)=>{const _=H,p=z;return m(),h("div",ce,[s("div",ie,[a(p,{class:"carousel","auto-play":!0,"show-arrow":"hover","animation-name":"slide"},{default:n(()=>[(m(!0),h(O,null,Q(i.value,e=>(m(),L(_,{key:e.slogan},{default:n(()=>[(m(),h("div",{key:e.slogan,class:"carousel-item"},[s("div",de,[s("div",ue,g(e.slogan),1),s("div",_e,g(e.subSlogan),1)])]))]),_:2},1024))),128))]),_:1})])])}}});const me=$(pe,[["__scopeId","data-v-78525eae"]]);function ge(c=!1){const o=S(c);return{loading:o,setLoading:u=>{o.value=u},toggle:()=>{o.value=!o.value}}}const fe={class:"login-form-wrapper"},he={class:"login-form-title"},be={class:"login-form-sub-title"},ve={class:"login-form-error-msg"},ye=["src"],Ie=w({__name:"login-form",setup(c){const o=F(),{t:i}=V(),d=S(""),{loading:u,setLoading:_}=ge(),p=x(),e=J({username:"",password:"",captchaId:"",captchaUrl:"",captchaCode:""}),b=async()=>{const{captchaId:t,captchaUrl:r}=await R.get("/api/captcha/request",{params:{captchaId:e.captchaId}});e.captchaId=t,e.captchaUrl=r,e.captchaCode=""};b();const k=async({errors:t})=>{if(!u.value&&!t){_(!0);try{await p.login(e);const{redirect:r,...v}=o.currentRoute.value.query;o.push({name:r||U,query:{...v}}),K.success(i("login.form.login.success"))}catch(r){b(),d.value=r.message}finally{_(!1)}}};return(t,r)=>{const v=T,C=W,y=X,B=A,q=Y,M=Z,N=ee,E=oe,D=ae;return m(),h("div",fe,[s("div",he,g(t.$t("login.form.title")),1),s("div",be,g(t.$t("login.form.subtitle")),1),s("div",ve,g(l(d)),1),a(D,{ref:"loginForm",model:l(e),class:"login-form",layout:"vertical",onSubmit:k},{default:n(()=>[a(y,{field:"username",rules:[{required:!0,message:t.$t("login.form.userName.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[a(C,{modelValue:l(e).username,"onUpdate:modelValue":r[0]||(r[0]=f=>l(e).username=f),placeholder:t.$t("login.form.userName.placeholder")},{prefix:n(()=>[a(v)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),a(y,{field:"password",rules:[{required:!0,message:t.$t("login.form.password.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[a(q,{modelValue:l(e).password,"onUpdate:modelValue":r[1]||(r[1]=f=>l(e).password=f),placeholder:t.$t("login.form.password.placeholder"),"allow-clear":""},{prefix:n(()=>[a(B)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),l(e).captchaUrl?(m(),L(y,{key:0,field:"captchaCode",rules:[{required:!0,message:t.$t("login.form.captchaCode.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[a(C,{modelValue:l(e).captchaCode,"onUpdate:modelValue":r[2]||(r[2]=f=>l(e).captchaCode=f),placeholder:t.$t("login.form.captchaCode.placeholder"),"allow-clear":"",class:"captcha-code"},{prefix:n(()=>[a(M)]),append:n(()=>[s("img",{src:l(e).captchaUrl,onClick:b},null,8,ye)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"])):P("",!0),a(E,{size:16,direction:"vertical"},{default:n(()=>[a(N,{type:"primary","html-type":"submit",long:"",loading:l(u)},{default:n(()=>[j(g(t.$t("login.form.login")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}});const $e=$(Ie,[["__scopeId","data-v-47373fe4"]]),we=c=>(ne("data-v-0a0b5e30"),c=c(),re(),c),Se={class:"login-container"},Ce=we(()=>s("div",{class:"logo"},[s("img",{alt:"logo",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"}),s("div",{class:"logo-text"},"BBS-GO")],-1)),Ve={class:"content"},xe={class:"content-inner"},Ue={class:"footer"},Le=w({__name:"index",setup(c){const o=x(),i=F(),d=S(!0);return se(async()=>{try{if(await o.info()){const{redirect:_,...p}=i.currentRoute.value.query;i.push({name:_||U,query:{...p}})}}finally{d.value=!1}}),(u,_)=>{const p=te;return m(),h("div",Se,[Ce,a(me),s("div",Ve,[s("div",xe,[a(p,{loading:l(d),tip:"Loading"},{default:n(()=>[a($e)]),_:1},8,["loading"])]),s("div",Ue,[a(le)])])])}}});const Re=$(Le,[["__scopeId","data-v-0a0b5e30"]]);export{Re as default};
