import{d as g,v as D,m as K,o as l,e as f,F as st,j as $t,f as i,g as c,t as h,c as y,q as u,s as V,_ as nt,B as de,C as M,D as ue,E as _e,G as Et,H as Ct,k as b,I as It,J as Lt,K as at,L as fe,r as _,M as pe,N as St,O as At,P as me,Q as ve,R as he,S as ge,w as $,U as be,V as ye,l as j,W as ke,A as Ot,X as xt,Y as we,Z as Tt,$ as $e,a0 as G,a1 as Ee,a2 as Ce,a3 as Ie,a4 as Le,a5 as Se,a6 as Ae,a7 as W,a8 as Oe,x as xe,a9 as Te,a as Ve,u as Ne,aa as Re,n as ze}from"./app-bSrHFPqN.js";import{_ as Me}from"./YunFooter.vue_vue_type_script_setup_true_lang-DnhrUQyh.js";import{_ as Vt}from"./YunCard.vue_vue_type_script_setup_true_lang-CPynrbxK.js";import{_ as Ye}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-Bs409l9f.js";import{s as ht}from"./index-C7yU5XnD.js";const De=["lang"],Be=["href"],He=g({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(t){const{locale:e}=D();return(o,s)=>{const n=K("YunOutlineItem",!0);return l(),f("ul",{class:V(o.root?"root":"nested")},[(l(!0),f(st,null,$t(o.headers,({children:a,link:d,title:v,lang:p})=>(l(),f("li",{key:d,class:"va-toc-item",lang:p||i(e)},[c("a",{class:"outline-link",href:d,onClick:s[0]||(s[0]=(...L)=>o.onClick&&o.onClick(...L))},h(v),9,Be),a!=null&&a.length?(l(),y(n,{key:0,headers:a,"on-click":o.onClick},null,8,["headers","on-click"])):u("v-if",!0)],8,De))),128))],2)}}}),Pe=nt(He,[["__scopeId","data-v-699db71a"]]),Fe=t=>(It("data-v-75b693dc"),t=t(),Lt(),t),Ue={class:"content"},Ge={class:"outline-title"},We={"aria-labelledby":"doc-outline-aria-label"},je=Fe(()=>c("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),qe=g({__name:"YunOutline",setup(t){const e=de(),o=M(),s=M();ue(o,s);const{headers:n,handleClick:a}=_e();return(d,v)=>{const p=Pe;return Et((l(),f("div",{ref_key:"container",ref:o},[c("div",Ue,[c("div",Ge,h(i(e).outlineTitle||"On this page"),1),c("div",{ref_key:"marker",ref:s,class:"outline-marker"},null,512),c("nav",We,[je,b(p,{class:"va-toc relative z-1 css-i18n-toc",headers:i(n),"on-click":i(a),root:""},null,8,["headers","on-click"])])])],512)),[[Ct,i(n).length]])}}}),Ke=nt(qe,[["__scopeId","data-v-75b693dc"]]),Je=c("div",{"i-ri-file-list-line":""},null,-1),Ze=[Je],Qe={class:"aside-container",flex:"~ col"},Xe={key:0,m:"t-6 b-2",font:"serif black"},to=c("div",{class:"flex-grow"},null,-1),eo={key:2,class:"custom-container"},oo=g({__name:"YunAside",setup(t){const e=at(),{t:o}=D(),s=fe();return(n,a)=>{const d=pe,v=Ke;return l(),f(st,null,[c("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:a[0]||(a[0]=p=>i(s).toggleRightSidebar())},Ze),b(d,{show:i(s).isRightSidebarOpen,onClick:a[1]||(a[1]=p=>i(s).toggleRightSidebar())},null,8,["show"]),u("  "),c("aside",{class:V(["va-card yun-aside",i(s).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[c("div",Qe,[i(e).toc!==!1?(l(),f("h2",Xe,h(i(o)("sidebar.toc")),1)):u("v-if",!0),i(e).toc!==!1?(l(),y(v,{key:1})):u("v-if",!0),to,n.$slots.default?(l(),f("div",eo,[_(n.$slots,"default")])):u("v-if",!0)])],2)],64)}}}),so=c("div",{id:"tcomment",w:"full"},null,-1),no=[so],ao=g({__name:"YunTwikoo",setup(t){return St(At)||(void 0)(),(e,o)=>(l(),f("div",null,no))}}),ro=g({__name:"YunWaline",setup(t){if(St(At))throw new Error("Please install valaxy-addon-waline");const e=(void 0)();return(o,s)=>{const n=K("WalineClient");return l(),y(n,{w:"full",options:i(e).options||{serverURL:""}},null,8,["options"])}}}),io=t=>(It("data-v-add4a695"),t=t(),Lt(),t),co={class:"relative h-8 w-30 text-[var(--va-c-text-2)] z-100"},lo=io(()=>c("div",{"inline-flex":"","i-ri-arrow-down-s-line":""},null,-1)),uo={class:"select-options absolute translate-y-1 left-0 top-full w-full bg-[var(--va-c-bg-light)] overflow-hidden rounded-1 border"},_o=["onClick"],fo=g({__name:"YunSelect",props:me({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=ve(t,"modelValue"),o=M(!1);return he("click",()=>{o.value=!1}),(s,n)=>(l(),f("div",co,[c("button",{class:V(["flex h-full w-full px-2 items-center justify-between border rounded-2 transition",o.value?"border-[var(--va-c-primary)] shadow-lg":""]),onClick:n[0]||(n[0]=ge(a=>o.value=!0,["stop"]))},[c("span",null,h(e.value),1),lo],2),b(be,{persisted:""},{default:$(()=>[Et(c("ul",uo,[(l(!0),f(st,null,$t(s.options,a=>(l(),f("li",{key:a,class:"cursor-pointer list-none px-2 hover:bg-[var(--va-c-primary-lighter)] hover:text-white",onClick:d=>e.value=a},h(a),9,_o))),128))],512),[[Ct,o.value]])]),_:1})]))}}),po=nt(fo,[["__scopeId","data-v-add4a695"]]),mo={key:0,class:"flex justify-end w-full mb-2"},vo=g({__name:"YunComment",setup(t){const e=ye(),o=["valaxy-addon-waline","valaxy-addon-twikoo"],s=j(()=>o.filter(a=>e.value.addons[a]).map(a=>a.split("-")[2])),n=M(s.value[0]);return(a,d)=>{const v=po,p=ro,L=ao,r=K("ClientOnly"),S=Vt;return l(),y(S,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:$(()=>[b(r,null,{default:$(()=>[s.value.length>1?(l(),f("div",mo,[b(v,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=z=>n.value=z),options:s.value},null,8,["modelValue","options"])])):u("v-if",!0),n.value==="waline"?(l(),y(p,{key:1})):u("v-if",!0),n.value==="twikoo"?(l(),y(L,{key:2})):u("v-if",!0),_(a.$slots,"default")]),_:3})]),_:3})}}}),ho={class:"post-nav"},go={class:"post-nav-item"},bo=c("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),yo={class:"title truncate",text:"sm"},ko={class:"post-nav-item"},wo={class:"title truncate",text:"sm"},$o=c("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),Eo=g({__name:"YunPostNav",setup(t){const[e,o]=ke();return(s,n)=>{const a=K("RouterLink");return l(),f("div",ho,[c("div",go,[i(e)?(l(),y(a,{key:0,class:"post-nav-prev",to:i(e).path||"",title:i(e).title},{default:$(()=>[bo,c("span",yo,h(i(e).title),1)]),_:1},8,["to","title"])):u("v-if",!0)]),c("div",ko,[i(o)?(l(),y(a,{key:0,to:i(o).path||"",title:i(o).title,class:"post-nav-next"},{default:$(()=>[c("span",wo,h(i(o).title),1),$o]),_:1},8,["to","title"])):u("v-if",!0)])])}}}),C=typeof window<"u",Nt=C&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),Rt=C&&"IntersectionObserver"in window,zt=C&&"classList"in document.createElement("p"),Mt=C&&window.devicePixelRatio>1,Co={elements_selector:".lazy",container:Nt||C?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Yt=t=>Object.assign({},Co,t),gt=function(t,e){let o;const s="LazyLoad::Initialized",n=new t(e);try{o=new CustomEvent(s,{detail:{instance:n}})}catch{o=document.createEvent("CustomEvent"),o.initCustomEvent(s,!1,!1,{instance:n})}window.dispatchEvent(o)},Io=(t,e)=>{if(e)if(!e.length)gt(t,e);else for(let o=0,s;s=e[o];o+=1)gt(t,s)},w="src",rt="srcset",it="sizes",Dt="poster",B="llOriginalAttrs",Bt="data",ct="loading",Ht="loaded",Pt="applied",Lo="entered",lt="error",Ft="native",Ut="data-",Gt="ll-status",m=(t,e)=>t.getAttribute(Ut+e),So=(t,e,o)=>{const s=Ut+e;if(o===null){t.removeAttribute(s);return}t.setAttribute(s,o)},H=t=>m(t,Gt),O=(t,e)=>So(t,Gt,e),J=t=>O(t,null),dt=t=>H(t)===null,Ao=t=>H(t)===ct,Oo=t=>H(t)===lt,ut=t=>H(t)===Ft,xo=[ct,Ht,Pt,lt],To=t=>xo.indexOf(H(t))>=0,I=(t,e,o,s)=>{if(!(!t||typeof t!="function")){if(s!==void 0){t(e,o,s);return}if(o!==void 0){t(e,o);return}t(e)}},R=(t,e)=>{if(e!==""){if(zt){t.classList.add(e);return}t.className+=(t.className?" ":"")+e}},k=(t,e)=>{if(e!==""){if(zt){t.classList.remove(e);return}t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}},Vo=t=>{t.llTempImage=document.createElement("IMG")},No=t=>{delete t.llTempImage},Wt=t=>t.llTempImage,Z=(t,e)=>{if(!e)return;const o=e._observer;o&&o.unobserve(t)},Ro=t=>{t.disconnect()},zo=(t,e,o)=>{e.unobserve_entered&&Z(t,o)},_t=(t,e)=>{t&&(t.loadingCount+=e)},Mo=t=>{t&&(t.toLoadCount-=1)},jt=(t,e)=>{t&&(t.toLoadCount=e)},Yo=t=>t.loadingCount>0,Do=t=>t.toLoadCount>0,qt=t=>{let e=[];for(let o=0,s;s=t.children[o];o+=1)s.tagName==="SOURCE"&&e.push(s);return e},ft=(t,e)=>{const o=t.parentNode;if(!o||o.tagName!=="PICTURE")return;qt(o).forEach(e)},Kt=(t,e)=>{qt(t).forEach(e)},Q=[w],Jt=[w,Dt],Y=[w,rt,it],Zt=[Bt],X=t=>!!t[B],Qt=t=>t[B],Xt=t=>delete t[B],N=(t,e)=>{if(X(t))return;const o={};e.forEach(s=>{o[s]=t.getAttribute(s)}),t[B]=o},Bo=t=>{X(t)||(t[B]={backgroundImage:t.style.backgroundImage})},Ho=(t,e,o)=>{if(!o){t.removeAttribute(e);return}t.setAttribute(e,o)},A=(t,e)=>{if(!X(t))return;const o=Qt(t);e.forEach(s=>{Ho(t,s,o[s])})},Po=t=>{if(!X(t))return;const e=Qt(t);t.style.backgroundImage=e.backgroundImage},te=(t,e,o)=>{R(t,e.class_applied),O(t,Pt),o&&(e.unobserve_completed&&Z(t,e),I(e.callback_applied,t,o))},ee=(t,e,o)=>{R(t,e.class_loading),O(t,ct),o&&(_t(o,1),I(e.callback_loading,t,o))},E=(t,e,o)=>{o&&t.setAttribute(e,o)},bt=(t,e)=>{E(t,it,m(t,e.data_sizes)),E(t,rt,m(t,e.data_srcset)),E(t,w,m(t,e.data_src))},Fo=(t,e)=>{ft(t,o=>{N(o,Y),bt(o,e)}),N(t,Y),bt(t,e)},Uo=(t,e)=>{N(t,Q),E(t,w,m(t,e.data_src))},Go=(t,e)=>{Kt(t,o=>{N(o,Q),E(o,w,m(o,e.data_src))}),N(t,Jt),E(t,Dt,m(t,e.data_poster)),E(t,w,m(t,e.data_src)),t.load()},Wo=(t,e)=>{N(t,Zt),E(t,Bt,m(t,e.data_src))},jo=(t,e,o)=>{const s=m(t,e.data_bg),n=m(t,e.data_bg_hidpi),a=Mt&&n?n:s;a&&(t.style.backgroundImage=`url("${a}")`,Wt(t).setAttribute(w,a),ee(t,e,o))},qo=(t,e,o)=>{const s=m(t,e.data_bg_multi),n=m(t,e.data_bg_multi_hidpi),a=Mt&&n?n:s;a&&(t.style.backgroundImage=a,te(t,e,o))},Ko=(t,e,o)=>{const s=m(t,e.data_bg_set);if(!s)return;const n=s.split("|");let a=n.map(d=>`image-set(${d})`);t.style.backgroundImage=a.join(),t.style.backgroundImage===""&&(a=n.map(d=>`-webkit-image-set(${d})`),t.style.backgroundImage=a.join()),te(t,e,o)},oe={IMG:Fo,IFRAME:Uo,VIDEO:Go,OBJECT:Wo},Jo=(t,e)=>{const o=oe[t.tagName];o&&o(t,e)},Zo=(t,e,o)=>{const s=oe[t.tagName];s&&(s(t,e),ee(t,e,o))},Qo=["IMG","IFRAME","VIDEO","OBJECT"],Xo=t=>Qo.indexOf(t.tagName)>-1,se=(t,e)=>{e&&!Yo(e)&&!Do(e)&&I(t.callback_finish,e)},yt=(t,e,o)=>{t.addEventListener(e,o),t.llEvLisnrs[e]=o},ts=(t,e,o)=>{t.removeEventListener(e,o)},pt=t=>!!t.llEvLisnrs,es=(t,e,o)=>{pt(t)||(t.llEvLisnrs={});const s=t.tagName==="VIDEO"?"loadeddata":"load";yt(t,s,e),yt(t,"error",o)},ot=t=>{if(!pt(t))return;const e=t.llEvLisnrs;for(let o in e){const s=e[o];ts(t,o,s)}delete t.llEvLisnrs},ne=(t,e,o)=>{No(t),_t(o,-1),Mo(o),k(t,e.class_loading),e.unobserve_completed&&Z(t,o)},os=(t,e,o,s)=>{const n=ut(e);ne(e,o,s),R(e,o.class_loaded),O(e,Ht),I(o.callback_loaded,e,s),n||se(o,s)},ss=(t,e,o,s)=>{const n=ut(e);ne(e,o,s),R(e,o.class_error),O(e,lt),I(o.callback_error,e,s),o.restore_on_error&&A(e,Y),n||se(o,s)},mt=(t,e,o)=>{const s=Wt(t)||t;if(pt(s))return;es(s,d=>{os(d,t,e,o),ot(s)},d=>{ss(d,t,e,o),ot(s)})},ns=(t,e,o)=>{Vo(t),mt(t,e,o),Bo(t),jo(t,e,o),qo(t,e,o),Ko(t,e,o)},as=(t,e,o)=>{mt(t,e,o),Zo(t,e,o)},vt=(t,e,o)=>{Xo(t)?as(t,e,o):ns(t,e,o)},rs=(t,e,o)=>{t.setAttribute("loading","lazy"),mt(t,e,o),Jo(t,e),O(t,Ft)},kt=t=>{t.removeAttribute(w),t.removeAttribute(rt),t.removeAttribute(it)},is=t=>{ft(t,e=>{kt(e)}),kt(t)},ae=t=>{ft(t,e=>{A(e,Y)}),A(t,Y)},cs=t=>{Kt(t,e=>{A(e,Q)}),A(t,Jt),t.load()},ls=t=>{A(t,Q)},ds=t=>{A(t,Zt)},us={IMG:ae,IFRAME:ls,VIDEO:cs,OBJECT:ds},_s=t=>{const e=us[t.tagName];if(!e){Po(t);return}e(t)},fs=(t,e)=>{dt(t)||ut(t)||(k(t,e.class_entered),k(t,e.class_exited),k(t,e.class_applied),k(t,e.class_loading),k(t,e.class_loaded),k(t,e.class_error))},ps=(t,e)=>{_s(t),fs(t,e),J(t),Xt(t)},ms=(t,e,o,s)=>{o.cancel_on_exit&&Ao(t)&&t.tagName==="IMG"&&(ot(t),is(t),ae(t),k(t,o.class_loading),_t(s,-1),J(t),I(o.callback_cancel,t,e,s))},vs=(t,e,o,s)=>{const n=To(t);O(t,Lo),R(t,o.class_entered),k(t,o.class_exited),zo(t,o,s),I(o.callback_enter,t,e,s),!n&&vt(t,o,s)},hs=(t,e,o,s)=>{dt(t)||(R(t,o.class_exited),ms(t,e,o,s),I(o.callback_exit,t,e,s))},gs=["IMG","IFRAME","VIDEO"],re=t=>t.use_native&&"loading"in HTMLImageElement.prototype,bs=(t,e,o)=>{t.forEach(s=>{gs.indexOf(s.tagName)!==-1&&rs(s,e,o)}),jt(o,0)},ys=t=>t.isIntersecting||t.intersectionRatio>0,ks=t=>({root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),ws=(t,e,o)=>{t.forEach(s=>ys(s)?vs(s.target,s,e,o):hs(s.target,s,e,o))},$s=(t,e)=>{e.forEach(o=>{t.observe(o)})},Es=(t,e)=>{Ro(t),$s(t,e)},Cs=(t,e)=>{!Rt||re(t)||(e._observer=new IntersectionObserver(o=>{ws(o,t,e)},ks(t)))},ie=t=>Array.prototype.slice.call(t),q=t=>t.container.querySelectorAll(t.elements_selector),Is=t=>ie(t).filter(dt),Ls=t=>Oo(t),Ss=t=>ie(t).filter(Ls),wt=(t,e)=>Is(t||q(e)),As=(t,e)=>{Ss(q(t)).forEach(s=>{k(s,t.class_error),J(s)}),e.update()},Os=(t,e)=>{C&&(e._onlineHandler=()=>{As(t,e)},window.addEventListener("online",e._onlineHandler))},xs=t=>{C&&window.removeEventListener("online",t._onlineHandler)},P=function(t,e){const o=Yt(t);this._settings=o,this.loadingCount=0,Cs(o,this),Os(o,this),this.update(e)};P.prototype={update:function(t){const e=this._settings,o=wt(t,e);if(jt(this,o.length),Nt||!Rt){this.loadAll(o);return}if(re(e)){bs(o,e,this);return}Es(this._observer,o)},destroy:function(){this._observer&&this._observer.disconnect(),xs(this),q(this._settings).forEach(t=>{Xt(t)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){const e=this._settings;wt(t,e).forEach(s=>{Z(s,this),vt(s,e,this)})},restoreAll:function(){const t=this._settings;q(t).forEach(e=>{ps(e,t)})}};P.load=(t,e)=>{const o=Yt(e);vt(t,o)};P.resetStatus=t=>{J(t)};C&&Io(P,window.lazyLoadOptions);function Ts(t={}){return document.querySelectorAll(".lazy").forEach(e=>{const o=e.getAttribute("src");e.removeAttribute("src"),e.setAttribute("data-src",o??"")}),new P({elements_selector:".lazy",...t})}function Vs(){const t=Ot();t.value.vanillaLazyload.enable&&xt(()=>{Ts(t.value.vanillaLazyload)})}function Ns(){we&&window.addEventListener("click",t=>{var o;const e=t.target;if(e.matches(".vp-code-group input")){const s=(o=e.parentElement)==null?void 0:o.parentElement;if(!s)return;const n=Array.from(s.querySelectorAll("input")).indexOf(e);if(n<0)return;const a=s.querySelector(".blocks");if(!a)return;const d=Array.from(a.children).find(L=>L.classList.contains("active"));if(!d)return;const v=a.children[n];if(!v||d===v)return;d.classList.remove("active"),v.classList.add("active");const p=s==null?void 0:s.querySelector(`label[for="${e.id}"]`);p==null||p.scrollIntoView({block:"nearest"})}})}const Rs={key:0,text:"center"},zs=["href"],Ms={m:"y-4",class:"end flex justify-center items-center"},Ys=c("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Ds={p:"x-4",font:"bold",class:"whitespace-nowrap"},Bs=c("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Hs=g({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(t){const e=t,{t:o}=D(),s=M();return Tt(()=>{$e(s.value)}),xt(()=>{G()}),Ee(()=>{G()}),e.frontmatter.aplayer&&Ce(),e.frontmatter.codepen&&Ie(),Le(),Ns(),Se(),(typeof e.frontmatter.medium_zoom>"u"||e.frontmatter.medium_zoom)&&Ae(),Vs(),(n,a)=>n.$slots.default?(l(),f("article",{key:0,class:V(n.frontmatter.markdown!==!1&&"markdown-body")},[_(n.$slots,"default",{ref_key:"contentRef",ref:s,onVnodeUpdated:a[0]||(a[0]=(...d)=>i(G)&&i(G)(...d))}),n.frontmatter.url?(l(),f("div",Rs,[c("a",{href:n.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},h(i(o)("post.view_link")),9,zs)])):u("v-if",!0),n.frontmatter.end!==void 0?_(n.$slots,"end",{key:1},()=>[c("div",Ms,[Ys,c("span",Ds,h(n.frontmatter.end?"Q.E.D.":"To Be Continued."),1),Bs])]):u("v-if",!0)],2)):u("v-if",!0)}}),Ps={key:0,class:"yun-time-warning",op:"80"},Fs=g({__name:"YunMdTimeWarning",setup(t){const e=at();W.extend(Oe);const{t:o}=D(),s=j(()=>{const n=W().valueOf()-W(e.value.updated||e.value.date).valueOf();return typeof e.value.time_warning=="number"?n>e.value.time_warning:e.value.time_warning});return(n,a)=>s.value?(l(),f("blockquote",Ps,h(i(o)("post.time_warning",{ago:i(W)(i(e).updated).fromNow()})),1)):u("v-if",!0)}}),Us={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},Gs={font:"black",flex:"","items-center":""},Ws=c("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1),js={op:"90","mt-1":""},qs=g({__name:"YunAiExcerpt",setup(t){const e=at(),{t:o}=D();return(s,n)=>(l(),f("div",Us,[c("div",Gs,[Ws,c("div",null,h(i(o)("excerpt.ai")),1)]),c("div",js,h(i(e).excerpt),1)]))}}),Ks={class:"yun-main md:pl-$va-sidebar-width lt-md:ml-0",flex:"~"},Js={w:"full",flex:"~"},Zs={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},sn=g({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(t){const e=t,o=Ot(),{styles:s,icon:n,color:a}=xe(e.frontmatter.type),d=Te(j(()=>e.frontmatter)),v=j(()=>e.frontmatter.aside!==!1),p=Ve(),L=Ne();return Re(()=>{p.hash&&setTimeout(()=>{ht(document.body,p.hash,!0)},0)}),Tt(()=>{window.addEventListener("click",async r=>{const S=r.target.closest("a");if(S){const{protocol:z,hostname:tt,pathname:F,hash:x,target:et}=S,T=window.location,U=F.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&et!=="_blank"&&z===T.protocol&&tt===T.hostname&&!(U&&U[0]!==".html")&&F===T.pathname&&(r.preventDefault(),x&&x!==T.hash&&(await L.push({hash:decodeURIComponent(x)}),ht(S,x,S.classList.contains("header-anchor"))))}},{capture:!0})}),(r,S)=>{const z=Ye,tt=qs,F=Fs,x=Hs,et=Vt,T=Eo,U=vo,ce=Me,le=oo;return l(),f("main",Ks,[c("div",Js,[_(r.$slots,"main",{},()=>[c("div",{class:V(["content",!v.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[b(et,{cover:r.frontmatter.cover,m:"0",class:"relative",style:ze(i(s))},{default:$(()=>[_(r.$slots,"main-header",{},()=>[b(z,{class:"mb-2",title:i(d),icon:r.frontmatter.icon||i(n),color:r.frontmatter.color||i(a),cover:r.frontmatter.cover},null,8,["title","icon","color","cover"])]),_(r.$slots,"main-header-after"),c("div",Zs,[_(r.$slots,"main-content",{},()=>[u(" <Transition appear> "),b(x,{frontmatter:r.frontmatter},{default:$(()=>[r.frontmatter.excerpt_type==="ai"&&r.frontmatter.excerpt?(l(),y(tt,{key:0})):u("v-if",!0),b(F),_(r.$slots,"main-content-md"),_(r.$slots,"default")]),_:3},8,["frontmatter"]),u(" </Transition> ")]),_(r.$slots,"main-content-after")])]),_:3},8,["cover","style"]),_(r.$slots,"main-nav-before"),_(r.$slots,"main-nav",{},()=>[r.frontmatter.nav!==!1?(l(),y(T,{key:0})):u("v-if",!0)]),_(r.$slots,"main-nav-after"),i(o).comment.enable&&r.frontmatter.comment!==!1?_(r.$slots,"comment",{key:0},()=>[b(U,{class:V(r.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):u("v-if",!0),_(r.$slots,"main-footer-before"),b(ce),_(r.$slots,"main-footer-after")],2)]),_(r.$slots,"aside",{},()=>[v.value?(l(),y(le,{key:0},{default:$(()=>[_(r.$slots,"aside-custom")]),_:3})):u("v-if",!0)])])])}}});export{sn as _};
