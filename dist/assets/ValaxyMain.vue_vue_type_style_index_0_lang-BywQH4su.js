import{d as g,x as P,q as K,o as l,e as _,F as wt,k as re,l as c,f as i,t as w,c as b,s as f,v as z,_ as $t,B as ce,C as A,D as ie,E as le,G as Ct,H as de,h as y,I as ue,J as _e,K as j,L as fe,r as u,M as pe,N as Et,O as It,P as me,w as E,Q as ve,R as he,S as nt,U as ge,V as be,g as ye,W as R,X as ke,A as Lt,Y as we,Z as St,$ as $e,a0 as Ce,a1 as Ee,a2 as Ie,a3 as Le,a4 as Se,a5 as Ae,a6 as G,a7 as xe,m as ot,y as Oe,a8 as Te,a as Ve,u as Ne,a9 as Re,aa as ze,n as De}from"./index-E387Nd6j.js";import{_ as Ye}from"./YunFooter.vue_vue_type_script_setup_true_lang-IdOfAldt.js";import{_ as At}from"./YunCard.vue_vue_type_script_setup_true_lang-eW1YvDXK.js";import{_ as Me}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-LTujyILk.js";import{s as vt}from"./index-nlSmcLJj.js";const Pe=["lang"],He=["href"],Be=g({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(t){const{locale:e}=P();return(o,s)=>{const n=K("YunOutlineItem",!0);return l(),_("ul",{class:z(o.root?"root":"nested")},[(l(!0),_(wt,null,re(o.headers,({children:a,link:d,title:p,lang:m})=>(l(),_("li",{key:d,class:"va-toc-item",lang:m||c(e)},[i("a",{class:"outline-link",href:d,onClick:s[0]||(s[0]=(...C)=>o.onClick&&o.onClick(...C))},w(p),9,He),a!=null&&a.length?(l(),b(n,{key:0,headers:a,"on-click":o.onClick},null,8,["headers","on-click"])):f("v-if",!0)],8,Pe))),128))],2)}}}),Fe=$t(Be,[["__scopeId","data-v-ad7dc3ac"]]),Ue=t=>(ue("data-v-5ed15f72"),t=t(),_e(),t),We={class:"content"},Ge={class:"outline-title"},qe={"aria-labelledby":"doc-outline-aria-label"},Ke=Ue(()=>i("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),je=g({__name:"YunOutline",setup(t){const e=ce(),o=A(),s=A();ie(o,s);const{headers:n,handleClick:a}=le();return(d,p)=>{const m=Fe;return Ct((l(),_("div",{ref_key:"container",ref:o},[i("div",We,[i("div",Ge,w(c(e).outlineTitle||"On this page"),1),i("div",{ref_key:"marker",ref:s,class:"outline-marker"},null,512),i("nav",qe,[Ke,y(m,{class:"va-toc relative z-1 css-i18n-toc",headers:c(n),"on-click":c(a),root:""},null,8,["headers","on-click"])])])],512)),[[de,c(n).length]])}}}),Je=$t(je,[["__scopeId","data-v-5ed15f72"]]),Ze=i("div",{"i-ri-file-list-line":""},null,-1),Qe=[Ze],Xe={class:"aside-container",flex:"~ col"},to={key:0,m:"t-6 b-2",font:"serif black"},eo=i("div",{class:"flex-grow"},null,-1),oo={key:2,class:"custom-container"},so=g({__name:"YunAside",setup(t){const e=j(),{t:o}=P(),s=fe();return(n,a)=>{const d=pe,p=Je;return l(),_(wt,null,[i("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:a[0]||(a[0]=m=>c(s).toggleRightSidebar())},Qe),y(d,{show:c(s).isRightSidebarOpen,onClick:a[1]||(a[1]=m=>c(s).toggleRightSidebar())},null,8,["show"]),f("  "),i("aside",{class:z(["va-card yun-aside",c(s).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[i("div",Xe,[c(e).toc!==!1?(l(),_("h2",to,w(c(o)("sidebar.toc")),1)):f("v-if",!0),c(e).toc!==!1?(l(),b(p,{key:1})):f("v-if",!0),eo,n.$slots.default?(l(),_("div",oo,[u(n.$slots,"default")])):f("v-if",!0)])],2)],64)}}}),no={id:"tcomment",w:"full"},ao=g({__name:"YunTwikoo",setup(t){return Et(It)||(void 0)(),(e,o)=>(l(),_("div",no))}}),ro=g({__name:"YunWaline",setup(t){if(Et(It))throw new Error("Please install valaxy-addon-waline");const e=(void 0)();return(o,s)=>{const n=K("WalineClient");return l(),b(n,{w:"full",options:c(e).options||{serverURL:""}},null,8,["options"])}}}),co=g({__name:"YunComment",setup(t){const e=me();return(o,s)=>{const n=ro,a=ao,d=K("ClientOnly"),p=At;return l(),b(p,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:E(()=>[y(d,null,{default:E(()=>[c(e).addons["valaxy-addon-waline"]?(l(),b(n,{key:0})):f("v-if",!0),c(e).addons["valaxy-addon-twikoo"]?(l(),b(a,{key:1})):f("v-if",!0),u(o.$slots,"default")]),_:3})]),_:3})}}}),io={class:"post-nav"},lo={class:"post-nav-item"},uo=i("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),_o={class:"title truncate",text:"sm"},fo={class:"post-nav-item"},po={class:"title truncate",text:"sm"},mo=i("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),vo=g({__name:"YunPostNav",setup(t){const[e,o]=ve();return(s,n)=>{const a=K("RouterLink");return l(),_("div",io,[i("div",lo,[c(e)?(l(),b(a,{key:0,class:"post-nav-prev",to:c(e).path||"",title:c(e).title},{default:E(()=>[uo,i("span",_o,w(c(e).title),1)]),_:1},8,["to","title"])):f("v-if",!0)]),i("div",fo,[c(o)?(l(),b(a,{key:0,to:c(o).path||"",title:c(o).title,class:"post-nav-next"},{default:E(()=>[i("span",po,w(c(o).title),1),mo]),_:1},8,["to","title"])):f("v-if",!0)])])}}}),ho={key:0,"w-full":"","pt-14":"","pb-10":""},go={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},bo={key:0,class:"-bottom-6",absolute:"","text-xs":"",op:"50"},yo=i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_blank"},[i("span",null,"Web Crypto API")],-1),ko={key:1},wo=g({__name:"ValaxyDecrypt",props:{encryptedContent:{}},setup(t){const e=t,o=A(""),s=A(""),n=A(!1),{decrypt:a}=he();async function d(){const r=e.encryptedContent;if(r)try{const v=await a(o.value,r);s.value=v||"",setTimeout(()=>{R()},16)}catch{n.value=!0}}function p(){s.value="",o.value="",setTimeout(()=>{R()},16)}const m=g({name:"ValaxyDeprecatedContent",props:{html:String},render(){const r=`<div>${this.html}</div>`;return ke({setup:()=>({frontmatter:j()}),template:r})}}),C=A(!1);return nt(()=>{location.protocol!=="https:"&&(C.value=!0)}),(r,v)=>(l(),_("div",null,[s.value?(l(),_("div",ko,[y(c(m),{html:s.value},null,8,["html"]),i("div",{"w-full":"","text-center":"","mt-8":""},[i("button",{"m-auto":"",class:"btn","font-bold":"",onClick:p}," Encrypt Again ")])])):(l(),_("div",ho,[i("div",go,[Ct(i("input",{"onUpdate:modelValue":v[0]||(v[0]=T=>o.value=T),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:z(n.value&&"border-red"),onInput:v[1]||(v[1]=T=>n.value=!1),onKeyup:be(d,["enter"])},null,34),[[ge,o.value]]),i("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:d}),C.value?(l(),_("div",bo,[yo,ye(" Only works in HTTPS ")])):f("v-if",!0)])]))]))}}),L=typeof window<"u",xt=L&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),Ot=L&&"IntersectionObserver"in window,Tt=L&&"classList"in document.createElement("p"),Vt=L&&window.devicePixelRatio>1,$o={elements_selector:".lazy",container:xt||L?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Nt=t=>Object.assign({},$o,t),ht=function(t,e){let o;const s="LazyLoad::Initialized",n=new t(e);try{o=new CustomEvent(s,{detail:{instance:n}})}catch{o=document.createEvent("CustomEvent"),o.initCustomEvent(s,!1,!1,{instance:n})}window.dispatchEvent(o)},Co=(t,e)=>{if(e)if(!e.length)ht(t,e);else for(let o=0,s;s=e[o];o+=1)ht(t,s)},$="src",at="srcset",rt="sizes",Rt="poster",H="llOriginalAttrs",zt="data",ct="loading",Dt="loaded",Yt="applied",Eo="entered",it="error",Mt="native",Pt="data-",Ht="ll-status",h=(t,e)=>t.getAttribute(Pt+e),Io=(t,e,o)=>{const s=Pt+e;if(o===null){t.removeAttribute(s);return}t.setAttribute(s,o)},B=t=>h(t,Ht),O=(t,e)=>Io(t,Ht,e),J=t=>O(t,null),lt=t=>B(t)===null,Lo=t=>B(t)===ct,So=t=>B(t)===it,dt=t=>B(t)===Mt,Ao=[ct,Dt,Yt,it],xo=t=>Ao.indexOf(B(t))>=0,S=(t,e,o,s)=>{if(!(!t||typeof t!="function")){if(s!==void 0){t(e,o,s);return}if(o!==void 0){t(e,o);return}t(e)}},Y=(t,e)=>{if(Tt){t.classList.add(e);return}t.className+=(t.className?" ":"")+e},k=(t,e)=>{if(Tt){t.classList.remove(e);return}t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},Oo=t=>{t.llTempImage=document.createElement("IMG")},To=t=>{delete t.llTempImage},Bt=t=>t.llTempImage,Z=(t,e)=>{if(!e)return;const o=e._observer;o&&o.unobserve(t)},Vo=t=>{t.disconnect()},No=(t,e,o)=>{e.unobserve_entered&&Z(t,o)},ut=(t,e)=>{t&&(t.loadingCount+=e)},Ro=t=>{t&&(t.toLoadCount-=1)},Ft=(t,e)=>{t&&(t.toLoadCount=e)},zo=t=>t.loadingCount>0,Do=t=>t.toLoadCount>0,Ut=t=>{let e=[];for(let o=0,s;s=t.children[o];o+=1)s.tagName==="SOURCE"&&e.push(s);return e},_t=(t,e)=>{const o=t.parentNode;if(!o||o.tagName!=="PICTURE")return;Ut(o).forEach(e)},Wt=(t,e)=>{Ut(t).forEach(e)},Q=[$],Gt=[$,Rt],M=[$,at,rt],qt=[zt],X=t=>!!t[H],Kt=t=>t[H],jt=t=>delete t[H],D=(t,e)=>{if(X(t))return;const o={};e.forEach(s=>{o[s]=t.getAttribute(s)}),t[H]=o},Yo=t=>{X(t)||(t[H]={backgroundImage:t.style.backgroundImage})},Mo=(t,e,o)=>{if(!o){t.removeAttribute(e);return}t.setAttribute(e,o)},x=(t,e)=>{if(!X(t))return;const o=Kt(t);e.forEach(s=>{Mo(t,s,o[s])})},Po=t=>{if(!X(t))return;const e=Kt(t);t.style.backgroundImage=e.backgroundImage},Jt=(t,e,o)=>{Y(t,e.class_applied),O(t,Yt),o&&(e.unobserve_completed&&Z(t,e),S(e.callback_applied,t,o))},Zt=(t,e,o)=>{Y(t,e.class_loading),O(t,ct),o&&(ut(o,1),S(e.callback_loading,t,o))},I=(t,e,o)=>{o&&t.setAttribute(e,o)},gt=(t,e)=>{I(t,rt,h(t,e.data_sizes)),I(t,at,h(t,e.data_srcset)),I(t,$,h(t,e.data_src))},Ho=(t,e)=>{_t(t,o=>{D(o,M),gt(o,e)}),D(t,M),gt(t,e)},Bo=(t,e)=>{D(t,Q),I(t,$,h(t,e.data_src))},Fo=(t,e)=>{Wt(t,o=>{D(o,Q),I(o,$,h(o,e.data_src))}),D(t,Gt),I(t,Rt,h(t,e.data_poster)),I(t,$,h(t,e.data_src)),t.load()},Uo=(t,e)=>{D(t,qt),I(t,zt,h(t,e.data_src))},Wo=(t,e,o)=>{const s=h(t,e.data_bg),n=h(t,e.data_bg_hidpi),a=Vt&&n?n:s;a&&(t.style.backgroundImage=`url("${a}")`,Bt(t).setAttribute($,a),Zt(t,e,o))},Go=(t,e,o)=>{const s=h(t,e.data_bg_multi),n=h(t,e.data_bg_multi_hidpi),a=Vt&&n?n:s;a&&(t.style.backgroundImage=a,Jt(t,e,o))},qo=(t,e,o)=>{const s=h(t,e.data_bg_set);if(!s)return;const n=s.split("|");let a=n.map(d=>`image-set(${d})`);t.style.backgroundImage=a.join(),t.style.backgroundImage===""&&(a=n.map(d=>`-webkit-image-set(${d})`),t.style.backgroundImage=a.join()),Jt(t,e,o)},Qt={IMG:Ho,IFRAME:Bo,VIDEO:Fo,OBJECT:Uo},Ko=(t,e)=>{const o=Qt[t.tagName];o&&o(t,e)},jo=(t,e,o)=>{const s=Qt[t.tagName];s&&(s(t,e),Zt(t,e,o))},Jo=["IMG","IFRAME","VIDEO","OBJECT"],Zo=t=>Jo.indexOf(t.tagName)>-1,Xt=(t,e)=>{e&&!zo(e)&&!Do(e)&&S(t.callback_finish,e)},bt=(t,e,o)=>{t.addEventListener(e,o),t.llEvLisnrs[e]=o},Qo=(t,e,o)=>{t.removeEventListener(e,o)},ft=t=>!!t.llEvLisnrs,Xo=(t,e,o)=>{ft(t)||(t.llEvLisnrs={});const s=t.tagName==="VIDEO"?"loadeddata":"load";bt(t,s,e),bt(t,"error",o)},st=t=>{if(!ft(t))return;const e=t.llEvLisnrs;for(let o in e){const s=e[o];Qo(t,o,s)}delete t.llEvLisnrs},te=(t,e,o)=>{To(t),ut(o,-1),Ro(o),k(t,e.class_loading),e.unobserve_completed&&Z(t,o)},ts=(t,e,o,s)=>{const n=dt(e);te(e,o,s),Y(e,o.class_loaded),O(e,Dt),S(o.callback_loaded,e,s),n||Xt(o,s)},es=(t,e,o,s)=>{const n=dt(e);te(e,o,s),Y(e,o.class_error),O(e,it),S(o.callback_error,e,s),o.restore_on_error&&x(e,M),n||Xt(o,s)},pt=(t,e,o)=>{const s=Bt(t)||t;if(ft(s))return;Xo(s,d=>{ts(d,t,e,o),st(s)},d=>{es(d,t,e,o),st(s)})},os=(t,e,o)=>{Oo(t),pt(t,e,o),Yo(t),Wo(t,e,o),Go(t,e,o),qo(t,e,o)},ss=(t,e,o)=>{pt(t,e,o),jo(t,e,o)},mt=(t,e,o)=>{Zo(t)?ss(t,e,o):os(t,e,o)},ns=(t,e,o)=>{t.setAttribute("loading","lazy"),pt(t,e,o),Ko(t,e),O(t,Mt)},yt=t=>{t.removeAttribute($),t.removeAttribute(at),t.removeAttribute(rt)},as=t=>{_t(t,e=>{yt(e)}),yt(t)},ee=t=>{_t(t,e=>{x(e,M)}),x(t,M)},rs=t=>{Wt(t,e=>{x(e,Q)}),x(t,Gt),t.load()},cs=t=>{x(t,Q)},is=t=>{x(t,qt)},ls={IMG:ee,IFRAME:cs,VIDEO:rs,OBJECT:is},ds=t=>{const e=ls[t.tagName];if(!e){Po(t);return}e(t)},us=(t,e)=>{lt(t)||dt(t)||(k(t,e.class_entered),k(t,e.class_exited),k(t,e.class_applied),k(t,e.class_loading),k(t,e.class_loaded),k(t,e.class_error))},_s=(t,e)=>{ds(t),us(t,e),J(t),jt(t)},fs=(t,e,o,s)=>{o.cancel_on_exit&&Lo(t)&&t.tagName==="IMG"&&(st(t),as(t),ee(t),k(t,o.class_loading),ut(s,-1),J(t),S(o.callback_cancel,t,e,s))},ps=(t,e,o,s)=>{const n=xo(t);O(t,Eo),Y(t,o.class_entered),k(t,o.class_exited),No(t,o,s),S(o.callback_enter,t,e,s),!n&&mt(t,o,s)},ms=(t,e,o,s)=>{lt(t)||(Y(t,o.class_exited),fs(t,e,o,s),S(o.callback_exit,t,e,s))},vs=["IMG","IFRAME","VIDEO"],oe=t=>t.use_native&&"loading"in HTMLImageElement.prototype,hs=(t,e,o)=>{t.forEach(s=>{vs.indexOf(s.tagName)!==-1&&ns(s,e,o)}),Ft(o,0)},gs=t=>t.isIntersecting||t.intersectionRatio>0,bs=t=>({root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),ys=(t,e,o)=>{t.forEach(s=>gs(s)?ps(s.target,s,e,o):ms(s.target,s,e,o))},ks=(t,e)=>{e.forEach(o=>{t.observe(o)})},ws=(t,e)=>{Vo(t),ks(t,e)},$s=(t,e)=>{!Ot||oe(t)||(e._observer=new IntersectionObserver(o=>{ys(o,t,e)},bs(t)))},se=t=>Array.prototype.slice.call(t),q=t=>t.container.querySelectorAll(t.elements_selector),Cs=t=>se(t).filter(lt),Es=t=>So(t),Is=t=>se(t).filter(Es),kt=(t,e)=>Cs(t||q(e)),Ls=(t,e)=>{Is(q(t)).forEach(s=>{k(s,t.class_error),J(s)}),e.update()},Ss=(t,e)=>{L&&(e._onlineHandler=()=>{Ls(t,e)},window.addEventListener("online",e._onlineHandler))},As=t=>{L&&window.removeEventListener("online",t._onlineHandler)},F=function(t,e){const o=Nt(t);this._settings=o,this.loadingCount=0,$s(o,this),Ss(o,this),this.update(e)};F.prototype={update:function(t){const e=this._settings,o=kt(t,e);if(Ft(this,o.length),xt||!Ot){this.loadAll(o);return}if(oe(e)){hs(o,e,this);return}ws(this._observer,o)},destroy:function(){this._observer&&this._observer.disconnect(),As(this),q(this._settings).forEach(t=>{jt(t)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){const e=this._settings;kt(t,e).forEach(s=>{Z(s,this),mt(s,e,this)})},restoreAll:function(){const t=this._settings;q(t).forEach(e=>{_s(e,t)})}};F.load=(t,e)=>{const o=Nt(e);mt(t,o)};F.resetStatus=t=>{J(t)};L&&Co(F,window.lazyLoadOptions);function xs(t={}){return document.querySelectorAll(".lazy").forEach(e=>{const o=e.getAttribute("src");e.removeAttribute("src"),e.setAttribute("data-src",o??"")}),new F({elements_selector:".lazy",...t})}function Os(){const t=Lt();t.value.vanillaLazyload.enable&&nt(()=>{xs(t.value.vanillaLazyload)})}function Ts(){we&&window.addEventListener("click",t=>{var o;const e=t.target;if(e.matches(".vp-code-group input")){const s=(o=e.parentElement)==null?void 0:o.parentElement;if(!s)return;const n=Array.from(s.querySelectorAll("input")).indexOf(e);if(n<0)return;const a=s.querySelector(".blocks");if(!a)return;const d=Array.from(a.children).find(C=>C.classList.contains("active"));if(!d)return;const p=a.children[n];if(!p||d===p)return;d.classList.remove("active"),p.classList.add("active");const m=s==null?void 0:s.querySelector(`label[for="${e.id}"]`);m==null||m.scrollIntoView({block:"nearest"})}})}const Vs={key:2,text:"center"},Ns=["href"],Rs={m:"y-4",class:"end flex justify-center items-center"},zs=i("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Ds={p:"x-4",font:"bold",class:"whitespace-nowrap"},Ys=i("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Ms=g({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(t){const e=t,{t:o}=P(),s=A();return St(()=>{$e(s.value)}),nt(()=>{R()}),Ce(()=>{R()}),e.frontmatter.aplayer&&Ee(),e.frontmatter.codepen&&Ie(),Le(),Ts(),Se(),(typeof e.frontmatter.medium_zoom>"u"||e.frontmatter.medium_zoom)&&Ae(),Os(),(n,a)=>{const d=wo;return n.$slots.default?(l(),_("article",{key:0,class:z(n.frontmatter.markdown!==!1&&"markdown-body")},[n.frontmatter.encryptedContent?(l(),b(d,{key:0,"encrypted-content":n.frontmatter.encryptedContent},null,8,["encrypted-content"])):u(n.$slots,"default",{key:1,ref_key:"contentRef",ref:s,onVnodeUpdated:a[0]||(a[0]=(...p)=>c(R)&&c(R)(...p))}),n.frontmatter.url?(l(),_("div",Vs,[i("a",{href:n.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},w(c(o)("post.view_link")),9,Ns)])):f("v-if",!0),n.frontmatter.end!==void 0?u(n.$slots,"end",{key:3},()=>[i("div",Rs,[zs,i("span",Ds,w(n.frontmatter.end?"Q.E.D.":"To Be Continued."),1),Ys])]):f("v-if",!0)],2)):f("v-if",!0)}}}),Ps={key:0,class:"yun-time-warning",op:"80"},Hs=g({__name:"YunMdTimeWarning",setup(t){const e=j();G.extend(xe);const{t:o}=P(),s=ot(()=>{const n=G().valueOf()-G(e.value.updated||e.value.date).valueOf();return typeof e.value.time_warning=="number"?n>e.value.time_warning:e.value.time_warning});return(n,a)=>s.value?(l(),_("blockquote",Ps,w(c(o)("post.time_warning",{ago:c(G)(c(e).updated).fromNow()})),1)):f("v-if",!0)}}),Bs={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},Fs={font:"black",flex:"","items-center":""},Us=i("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1),Ws={op:"90","mt-1":""},Gs=g({__name:"YunAiExcerpt",setup(t){const e=j(),{t:o}=P();return(s,n)=>(l(),_("div",Bs,[i("div",Fs,[Us,i("div",null,w(c(o)("excerpt.ai")),1)]),i("div",Ws,w(c(e).excerpt),1)]))}}),qs={class:"yun-main md:pl-$va-sidebar-width lt-md:ml-0",flex:"~"},Ks={w:"full",flex:"~"},js={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},en=g({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(t){const e=t,o=Lt(),{styles:s,icon:n,color:a}=Oe(e.frontmatter.type),d=Te(ot(()=>e.frontmatter)),p=ot(()=>e.frontmatter.aside!==!1),m=Ve(),C=Ne();return Re(()=>{m.hash&&setTimeout(()=>{vt(document.body,m.hash,!0)},0)}),St(()=>{window.addEventListener("click",async r=>{const v=r.target.closest("a");if(v){const{protocol:T,hostname:tt,pathname:U,hash:V,target:et}=v,N=window.location,W=U.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&et!=="_blank"&&T===N.protocol&&tt===N.hostname&&!(W&&W[0]!==".html")&&U===N.pathname&&(r.preventDefault(),V&&V!==N.hash&&(await C.push({hash:decodeURIComponent(V)}),vt(v,V,v.classList.contains("header-anchor"))))}},{capture:!0})}),(r,v)=>{const T=Me,tt=Gs,U=Hs,V=Ms,et=At,N=vo,W=co,ne=Ye,ae=so;return l(),_("main",qs,[i("div",Ks,[u(r.$slots,"main",{},()=>[i("div",{class:z(["content",!p.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[y(et,{cover:r.frontmatter.cover,m:"0",class:"relative",style:De(c(s))},{default:E(()=>[u(r.$slots,"main-header",{},()=>[y(T,{class:"mb-2",title:c(d),icon:r.frontmatter.icon||c(n),color:r.frontmatter.color||c(a),cover:r.frontmatter.cover},null,8,["title","icon","color","cover"])]),u(r.$slots,"main-header-after"),i("div",js,[u(r.$slots,"main-content",{},()=>[y(ze,{appear:""},{default:E(()=>[y(V,{frontmatter:r.frontmatter},{default:E(()=>[r.frontmatter.excerpt_type==="ai"&&r.frontmatter.excerpt?(l(),b(tt,{key:0})):f("v-if",!0),y(U),u(r.$slots,"main-content-md"),u(r.$slots,"default")]),_:3},8,["frontmatter"])]),_:3})]),u(r.$slots,"main-content-after")])]),_:3},8,["cover","style"]),u(r.$slots,"main-nav-before"),u(r.$slots,"main-nav",{},()=>[r.frontmatter.nav!==!1?(l(),b(N,{key:0})):f("v-if",!0)]),u(r.$slots,"main-nav-after"),c(o).comment.enable&&r.frontmatter.comment!==!1?u(r.$slots,"comment",{key:0},()=>[y(W,{class:z(r.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):f("v-if",!0),u(r.$slots,"main-footer-before"),y(ne),u(r.$slots,"main-footer-after")],2)]),u(r.$slots,"aside",{},()=>[p.value?(l(),b(ae,{key:0},{default:E(()=>[u(r.$slots,"aside-custom")]),_:3})):f("v-if",!0)])])])}}});export{en as _};
