import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-J-klaX4f.js";import{a as d,p as k,o,c,w as t,f as g,r as e,g as i,h as s}from"./app-bSrHFPqN.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-DnhrUQyh.js";import"./YunCard.vue_vue_type_script_setup_true_lang-CPynrbxK.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-Bs409l9f.js";import"./index-C7yU5XnD.js";const y="/assets/1711074696969-CPEzUeQ5.png",F="/assets/1711075621150-igZgTZAm.png",u="/assets/1711075656610-D1qqIpyj.png",m=i("p",null,"昨天遇到一个棘手的问题，晚上回家躺床上想通了，今天来实践了一下，果然可行，先看思路分析：",-1),_=i("h2",{id:"runtimeservice和processruntime的区别",tabindex:"-1"},[s("runtimeService和processRuntime的区别 "),i("a",{class:"header-anchor",href:"#runtimeservice和processruntime的区别","aria-label":'Permalink to "runtimeService和processRuntime的区别"'},"​")],-1),C=i("p",null,[i("code",null,"runtimeService"),s("最开始出现在"),i("strong",null,"activiti 5"),s("，是用来执行挂起任务的一系列操作的，而多租户这个概念刚好也在"),i("code",null,"activiti 5"),s("出现")],-1),v=i("p",null,[i("code",null,"processRuntime"),s("最开始出现在"),i("strong",null,"activiti 7"),s("，是为了支持"),i("strong",null,"流程的启动、挂起、延迟执行、动态更新"),s("等一系列操作。")],-1),B=i("p",null,[i("code",null,"processRuntime"),s("是"),i("code",null,"runtimeService"),s("的进一步封装，是"),i("code",null,"runtimeService"),s("、"),i("code",null,"repositoryService"),s("和其他一些接口的整合。")],-1),P=i("h2",{id:"问题描述",tabindex:"-1"},[s("问题描述 "),i("a",{class:"header-anchor",href:"#问题描述","aria-label":'Permalink to "问题描述"'},"​")],-1),f=i("h3",{id:"通过processruntime启动",tabindex:"-1"},[s("通过processRuntime启动 "),i("a",{class:"header-anchor",href:"#通过processruntime启动","aria-label":'Permalink to "通过processRuntime启动"'},"​")],-1),b=i("p",null,"已知processRuntime启动流程的代码如下：",-1),D=i("div",{style:{"max-height":"400px"},class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ProcessInstance processInstance "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," processRuntime."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"start"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ProcessPayloadBuilder")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"start"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withProcessDefinitionKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(processTaskParams."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(processTaskParams."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withVariable"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(userTask."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"_byStarter"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",username)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withBusinessKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(businessKey)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"build"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")])])]),i("button",{class:"collapse"})],-1),A=i("p",null,[s("在这里很容易发现一个问题："),i("strong",null,"无法指定租户！")],-1),I=i("p",null,"是的，这个API无法指定租户，甚至他底层在执行的时候，可以通过SQL执行日志发现，他的SQL执行条件里边有一条：",-1),S=i("div",{style:{"max-height":"400px"},class:"language-sql vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"sql"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"where"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," tenant_id "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," or"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," tenant_id"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=null")])])]),i("button",{class:"collapse"})],-1),K=i("p",null,"啊？",-1),T=i("p",null,"activiti官方搞什么飞机？",-1),x=i("p",null,"这什么玩意？",-1),R=i("p",null,"下层接口都可以指定租户，到顶层了不行了？",-1),w=i("p",null,"那我只能顺从了，换接口！",-1),$=i("h3",{id:"通过runtimeservice启动",tabindex:"-1"},[s("通过runtimeService启动 "),i("a",{class:"header-anchor",href:"#通过runtimeservice启动","aria-label":'Permalink to "通过runtimeService启动"'},"​")],-1),j=i("blockquote",null,[i("p",null,[s("根据最开始的解释我们可以知道，"),i("code",null,"processRuntime本质上只是runtimeService和repositoryService的一个整合"),s("而已，那么解决方案就已经是呼之欲出了。")]),i("p",null,[i("strong",null,"使用runtimeService启动流程")])],-1),N=i("p",null,"好吧，来写代码！",-1),q=i("div",{style:{"max-height":"400px"},class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"org.activiti.engine.runtime.ProcessInstance processInstance "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," runtimeService.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    startProcessInstanceByKeyAndTenantId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(processTaskParams."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      			businessKey,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                vars,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                processTaskParams."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getTenantId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"null"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"main"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"processTaskParams."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getTenantId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")])])]),i("button",{class:"collapse"})],-1),z=i("p",null,"问题又来了…",-1),V=i("p",null,"我原本以为tenantId能进去就解决了这个问题，但是当我运行测试以后我发现：",-1),Z=i("figure",null,[i("img",{src:y,alt:"1711074696969",loading:"lazy",decoding:"async",class:"lazy"})],-1),L=i("p",null,"啊？",-1),Q=i("p",null,"我靠，传不进去流程名称，他也不给我手动加？",-1),M=i("p",null,"什么鬼？",-1),O=i("p",null,"这个api总共就四个参量，就没一个可以设置名字的…",-1),H=i("h4",{id:"失败的解决案例",tabindex:"-1"},[s("失败的解决案例 "),i("a",{class:"header-anchor",href:"#失败的解决案例","aria-label":'Permalink to "失败的解决案例"'},"​")],-1),U=i("p",null,[s("挣扎一下，activiti是通过MySQL进行流程上下文查询的，那么我们"),i("strong",null,"直接去改数据库表不就行了么！")],-1),J=i("p",null,[s("最后debug到，是在一张叫"),i("code",null,"act_his_procinst"),s("的表里，这张表里有个name字段，刚刚加进去的数据是空的！")],-1),W=i("p",null,"测试一下给这行数据加名字，同时再起一个流程对照。",-1),G=i("p",null,"有效果…个毛线。",-1),X=i("p",null,"流程实例依旧没有赋值。",-1),Y=i("p",null,[s("好吧，两种办法都不行，那我只能…"),i("s",null,"下班！六点了！")],-1),ii=i("h2",{id:"解决方案",tabindex:"-1"},[s("解决方案 "),i("a",{class:"header-anchor",href:"#解决方案","aria-label":'Permalink to "解决方案"'},"​")],-1),si=i("p",null,"这个方案是我晚上躺床上想起来白天这个问题突然灵光一现想起来的：",-1),ti=i("p",null,[i("strong",null,"看activiti源码怎么写的啊！")],-1),ai=i("h3",{id:"源码分析",tabindex:"-1"},[s("源码分析 "),i("a",{class:"header-anchor",href:"#源码分析","aria-label":'Permalink to "源码分析"'},"​")],-1),ei=i("div",{style:{"max-height":"400px"},class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ProcessInstance "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"start"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(StartProcessPayload startProcessPayload) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ProcessDefinition processDefinition "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessDefinitionId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            processDefinition "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"processDefinition"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessDefinitionId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (processDefinition "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &&"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessDefinitionKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            processDefinition "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"processDefinition"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessDefinitionKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (processDefinition "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            throw"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," IllegalStateException"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"At least Process Definition Id or Key needs to be provided to start a process"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".securityPoliciesManager."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"canWrite"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(processDefinition."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            throw"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ActivitiForbiddenException"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Operation not permitted for "'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," +"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," processDefinition."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' " due security policy violation"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            return"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".processInstanceConverter."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"from"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".runtimeService."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"createProcessInstanceBuilder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"processDefinitionId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessDefinitionId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"processDefinitionKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessDefinitionKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"businessKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getBusinessKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"variables"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getVariables"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"start"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")])])]),i("button",{class:"collapse"})],-1),li=i("p",null,"这个看着太费劲了，抽丝剥茧一下！",-1),hi=i("div",{style:{"max-height":"400px"},class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".processInstanceConverter."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"from"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".runtimeService."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"createProcessInstanceBuilder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"processDefinitionId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessDefinitionId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"processDefinitionKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessDefinitionKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"businessKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getBusinessKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"variables"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getVariables"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(startProcessPayload."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"start"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")])])]),i("button",{class:"collapse"})],-1),ni=i("p",null,"这下看懂了！",-1),ki=i("p",null,[s("所以说总的思路就是，还是"),i("code",null,"runtimeService"),s("，只是要换一种启动的包装方式，就是通过"),i("code",null,"processRuntime"),s("的"),i("code",null,"processInstanceConverter"),s("，借鸡下蛋！")],-1),ri=i("h3",{id:"代码编写",tabindex:"-1"},[s("代码编写 "),i("a",{class:"header-anchor",href:"#代码编写","aria-label":'Permalink to "代码编写"'},"​")],-1),Ei=i("p",null,"现在就可以开始写代码了。因为processRuntime封装的这个start方法就两个判断，一个判空一个安全性判断，但是我们不一定都用得上，所以说我们选择直接舍弃掉这些判断，因为有相关拦截。",-1),pi=i("p",null,"代码总体如下：",-1),di=i("div",{style:{"max-height":"400px"},class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ProcessInstance processInstance "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," processInstanceConverter."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"from"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(runtimeService."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"createProcessInstanceBuilder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"tenantId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(processTaskParams."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getTenantId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ?"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "main"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," :"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," processTaskParams."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getTenantId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"businessKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(businessKey)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"processDefinitionKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(processTaskParams."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessKey"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"variables"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(vars)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(processTaskParams."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getProcessName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"start"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")])])]),i("button",{class:"collapse"})],-1),oi=i("p",null,"其实就是一个依葫芦画瓢的过程。",-1),ci=i("p",null,"现在看看效果！",-1),gi=i("h3",{id:"测试",tabindex:"-1"},[s("测试 "),i("a",{class:"header-anchor",href:"#测试","aria-label":'Permalink to "测试"'},"​")],-1),yi=i("figure",null,[i("img",{src:F,alt:"1711075621150",loading:"lazy",decoding:"async",class:"lazy"})],-1),Fi=i("p",null,"可以看到，有流程名称了！",-1),ui=i("p",null,"再去看看流转消息",-1),mi=i("figure",null,[i("img",{src:u,alt:"1711075656610",loading:"lazy",decoding:"async",class:"lazy"})],-1),_i=i("p",null,[i("strong",null,"也可以正常工作了！")],-1),Ci=i("h2",{id:"写在最后",tabindex:"-1"},[s("写在最后 "),i("a",{class:"header-anchor",href:"#写在最后","aria-label":'Permalink to "写在最后"'},"​")],-1),vi=i("p",null,"这件事给我的启发就是，有事没事瞄两眼源码，总会有发现。虽然我也不知道activiti官方咋想的，这么个重要接口不给租户方案…",-1),Ti={__name:"tenantProcess",setup(Bi,{expose:r}){const l=JSON.parse('{"title":"Activiti 7绕过processRuntime发起多租户流程","description":"","frontmatter":{"title":"Activiti 7绕过processRuntime发起多租户流程","date":"2024-03-22T00:00:00.000Z","updated":"2024-03-22T00:00:00.000Z","categories":"工作流","codeHeightLimit":400,"tags":["activiti","java"]},"headers":[{"level":2,"title":"runtimeService和processRuntime的区别","slug":"runtimeservice和processruntime的区别","link":"#runtimeservice和processruntime的区别","children":[]},{"level":2,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[{"level":3,"title":"通过processRuntime启动","slug":"通过processruntime启动","link":"#通过processruntime启动","children":[]},{"level":3,"title":"通过runtimeService启动","slug":"通过runtimeservice启动","link":"#通过runtimeservice启动","children":[]}]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[{"level":3,"title":"源码分析","slug":"源码分析","link":"#源码分析","children":[]},{"level":3,"title":"代码编写","slug":"代码编写","link":"#代码编写","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}]},{"level":2,"title":"写在最后","slug":"写在最后","link":"#写在最后","children":[]}],"relativePath":"pages/posts/workflow/tenantProcess.md","path":"/home/runner/work/lhqm.github.io/lhqm.github.io/pages/posts/workflow/tenantProcess.md","lastUpdated":1715585358000}'),n=d(),h=l.frontmatter||{};return n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},l.frontmatter||{}),k("pageData",l),k("valaxy:frontmatter",h),globalThis.$frontmatter=h,r({frontmatter:{title:"Activiti 7绕过processRuntime发起多租户流程",date:"2024-03-22T00:00:00.000Z",updated:"2024-03-22T00:00:00.000Z",categories:"工作流",codeHeightLimit:400,tags:["activiti","java"]}}),(a,fi)=>{const E=p;return o(),c(E,{frontmatter:g(h)},{"main-content-md":t(()=>[m,_,C,v,B,P,f,b,D,A,I,S,K,T,x,R,w,$,j,N,q,z,V,Z,L,Q,M,O,H,U,J,W,G,X,Y,ii,si,ti,ai,ei,li,hi,ni,ki,ri,Ei,pi,di,oi,ci,gi,yi,Fi,ui,mi,_i,Ci,vi]),"main-header":t(()=>[e(a.$slots,"main-header")]),"main-header-after":t(()=>[e(a.$slots,"main-header-after")]),"main-nav":t(()=>[e(a.$slots,"main-nav")]),"main-content":t(()=>[e(a.$slots,"main-content")]),"main-content-after":t(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[e(a.$slots,"main-nav-after")]),comment:t(()=>[e(a.$slots,"comment")]),footer:t(()=>[e(a.$slots,"footer")]),aside:t(()=>[e(a.$slots,"aside")]),"aside-custom":t(()=>[e(a.$slots,"aside-custom")]),default:t(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{Ti as default};
