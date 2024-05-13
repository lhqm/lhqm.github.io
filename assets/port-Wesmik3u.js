import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-J-klaX4f.js";import{a as d,p as n,o as g,c as y,w as t,f as o,r as h,g as i,h as s}from"./app-bSrHFPqN.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-DnhrUQyh.js";import"./YunCard.vue_vue_type_script_setup_true_lang-CPynrbxK.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-Bs409l9f.js";import"./index-C7yU5XnD.js";const c=i("h2",{id:"前言",tabindex:"-1"},[s("前言 "),i("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),F=i("p",null,"最近控件项目又遇到了一项难题，本来以为10000以后的端口是没有其他软件会用的了，于是乎我们的本地粘贴控件选择了10086端口进行TCP监听。",-1),C=i("p",null,[s("但是好像"),i("code",null,"10086"),s("这个数字比较吉利？今天一家客户单位找上门来，说我们的插件用不了。")],-1),u=i("h2",{id:"故障排查",tabindex:"-1"},[s("故障排查 "),i("a",{class:"header-anchor",href:"#故障排查","aria-label":'Permalink to "故障排查"'},"​")],-1),A=i("h3",{id:"错误定位",tabindex:"-1"},[s("错误定位 "),i("a",{class:"header-anchor",href:"#错误定位","aria-label":'Permalink to "错误定位"'},"​")],-1),D=i("p",null,"于是，我去安装目录下给日志刨出来，看到这样一段报错输出：",-1),v=i("div",{style:{"max-height":"300px"},class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[Thread"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] INFO org.eclipse.jetty.util.log "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Logging initialized @"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"347ms"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," to org.eclipse.jetty.util.log.Slf4jLog")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[Thread"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] INFO spark.embeddedserver.jetty.EmbeddedJettyServer "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Spark has ignited ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[Thread"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] INFO spark.embeddedserver.jetty.EmbeddedJettyServer "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," >>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Listening on "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0.0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"0"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10086")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[Thread"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] INFO org.eclipse.jetty.server.Server "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," jetty"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"9.4"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"48"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".v20220622; built"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 2022"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"06"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"21T20"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"42"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"25."),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"880Z"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; git"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 6b67c5719d1f4371b33655ff2d047d24e171e49a; jvm "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"11.0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"18"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"9"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"LTS"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"195")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[Thread"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] INFO org.eclipse.jetty.server.session "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," DefaultSessionIdManager workerName"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"node0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[Thread"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] INFO org.eclipse.jetty.server.session "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," No SessionScavenger set, using defaults")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[Thread"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] INFO org.eclipse.jetty.server.session "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," node0 Scavenging every 600000ms")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[Thread"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] ERROR spark.Spark "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ignite failed")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"java.io.IOException"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Failed to bind to "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0.0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"0"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10086")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at org.eclipse.jetty.server.ServerConnector."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"openAcceptChannel"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ServerConnector.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"349"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at org.eclipse.jetty.server.ServerConnector."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"open"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ServerConnector.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"310"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at org.eclipse.jetty.server.AbstractNetworkConnector."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"doStart"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(AbstractNetworkConnector.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"80"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at org.eclipse.jetty.server.ServerConnector."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"doStart"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ServerConnector.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"234"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at org.eclipse.jetty.util.component.AbstractLifeCycle."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"start"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(AbstractLifeCycle.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"73"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at org.eclipse.jetty.server.Server."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"doStart"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Server.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"401"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at org.eclipse.jetty.util.component.AbstractLifeCycle."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"start"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(AbstractLifeCycle.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"73"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at spark.embeddedserver.jetty.EmbeddedJettyServer."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ignite"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(EmbeddedJettyServer.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"154"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at spark.Service."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"lambda$init$2"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Service.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"633"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at java.base"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"java.lang.Thread."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"run"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Unknown Source)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Caused by"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," java.net.BindException"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Address already in use"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," bind")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at java.base"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"sun.nio.ch.Net."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"bind0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Native Method)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at java.base"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"sun.nio.ch.Net."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"bind"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Unknown Source)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at java.base"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"sun.nio.ch.Net."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"bind"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Unknown Source)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at java.base"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"sun.nio.ch.ServerSocketChannelImpl."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"bind"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Unknown Source)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at java.base"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"sun.nio.ch.ServerSocketAdaptor."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"bind"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(Unknown Source)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	at org.eclipse.jetty.server.ServerConnector."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"openAcceptChannel"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ServerConnector.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"344"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	... "),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"9"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," more")])])]),i("button",{class:"collapse"})],-1),m=i("p",null,[s("很明显，这是"),i("strong",null,"端口被占用了！")],-1),B=i("p",null,"那么我们就需要设计一个更智能的东西了，但是前端又需要知道我在哪个端口，这一来二去就成了一个大难题。",-1),b=i("h3",{id:"查看端口占用情况",tabindex:"-1"},[s("查看端口占用情况 "),i("a",{class:"header-anchor",href:"#查看端口占用情况","aria-label":'Permalink to "查看端口占用情况"'},"​")],-1),_=i("p",null,[s("由于客户的程序跑在"),i("code",null,"Windows7"),s("中，我首先使用：")],-1),f=i("div",{style:{"max-height":"300px"},class:"language- vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"}),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",null,"netstat -ano")])])]),i("button",{class:"collapse"})],-1),S=i("p",null,[s("找到了运行在"),i("code",null,"10086"),s("端口上的"),i("code",null,"TCP协议"),s("的进程的"),i("code",null,"PID")],-1),j=i("p",null,[i("s",null,"为什么是TCP协议的端口占用，详情请参考操作系统协议栈部分。")],-1),T=i("p",null,[s("然后通过"),i("strong",null,"该进程的PID"),s("，打开"),i("strong",null,"资源管理器"),s("，查看到该PID下的软件，结果发现是他们单位的内部系统认证程序…")],-1),P=i("p",null,"不能杀这个程序，那就只能再找方案了。",-1),x=i("h2",{id:"解决方案设计",tabindex:"-1"},[s("解决方案设计 "),i("a",{class:"header-anchor",href:"#解决方案设计","aria-label":'Permalink to "解决方案设计"'},"​")],-1),N=i("h3",{id:"核心问题",tabindex:"-1"},[s("核心问题 "),i("a",{class:"header-anchor",href:"#核心问题","aria-label":'Permalink to "核心问题"'},"​")],-1),$=i("p",null,"针对这个故障，最主要的问题就在于，前端如何跟着我一起动态配置端口？目前确定了肯定是要配置端口的，但是核心问题也在这里：怎么能让前端也可以知道端口换掉了？",-1),I=i("p",null,[s("一种常见的方案就是将端口改为"),i("strong",null,"可配置"),s("，让用户自己去配。")],-1),w=i("p",null,"但是我们的客户，懒得出奇，你让他给你配网站和软件的端口？他连安个证书这种傻瓜操作都嫌麻烦…",-1),L=i("p",null,"所以说综合下来，解决方案就是：",-1),O=i("blockquote",null,[i("p",null,"向后轮询空闲端口并绑定。")],-1),J=i("p",null,"这里需要明确两个问题：",-1),U=i("ol",null,[i("li",null,[s("我们的软件安没安装不是能不能访问决定的，是通过"),i("strong",null,"自定义控制协议"),s("实现的。在浏览器上输入"),i("code",null,"foxc://"),s("，有反应就是装了，没有就是没装，前端只需要判断更改地址栏以后有没有"),i("strong",null,"全局失焦"),s("就知道用户有没有安装了。")]),i("li",null,"我们的软件有没有启动，也能在上述步骤完成，所以说根本不需要担心前端向后轮询太多导致页面卡死的问题。")],-1),Z=i("h3",{id:"改造原有代码",tabindex:"-1"},[s("改造原有代码 "),i("a",{class:"header-anchor",href:"#改造原有代码","aria-label":'Permalink to "改造原有代码"'},"​")],-1),M=i("p",null,"原先启动程序是这样的：",-1),R=i("div",{style:{"max-height":"300px"},class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"port"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10086"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")])])]),i("button",{class:"collapse"})],-1),V=i("p",null,"一旦10086端口被占用了，就会直接报错退出。",-1),q=i("p",null,"所以说我们需要一个循环尝试绑定。",-1),H=i("p",null,"但是对这行代码try…catch也不行，因为他底层写的绑定不上端口就直接退出Java程序了。",-1),z=i("p",null,"所以说我们需要一个自己写的方法，来规避这种情况。",-1),W=i("p",null,"我们可以搞一个比较有仪式感的，仿照springboot来写：",-1),G=i("div",{style:{"max-height":"300px"},class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"SparkApplication."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"run"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10086"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")])])]),i("button",{class:"collapse"})],-1),K=i("p",null,"详细代码如下：",-1),Q=i("div",{style:{"max-height":"300px"},class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," SparkApplication"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    static"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Logger log "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," LoggerFactory."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getLogger"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(SparkApplication.class);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," static"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," run"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"int"),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}}," startPort"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," port "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," startPort; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 起始端口号")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," maxPort "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," startPort"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1000"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 尝试的最大端口号，根据需要进行调整")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        // 循环尝试端口，直到找到可用的端口")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        while"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (port "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," maxPort) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"            try"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (ServerSocket serverSocket "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ServerSocket"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(port)) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                log."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"info"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"端口 "'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," +"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," port "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "处于空闲状态，正在尝试从JVM环境启动控件程序"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"                // 设置Spark的端口")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"                port"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(port);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"                break"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 退出循环")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"catch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (IOException "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"e"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                log."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"端口 "'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," +"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," port "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "已经被占用，等待一秒后顺移一个端口尝试"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                port"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"++"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"                // 这里可以选择是否等待一段时间再尝试下一个端口，以避免过快地尝试")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"                try"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                    Thread."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sleep"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1000"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"); "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 等待1秒")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"catch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (InterruptedException "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"e1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                    e1."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"printStackTrace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),i("button",{class:"collapse"})],-1),X=i("p",null,"完美解决上述业务需求。",-1),ni={__name:"port",setup(Y,{expose:r}){const l=JSON.parse('{"title":"Spark程序自动顺延端口启动","description":"","frontmatter":{"title":"Spark程序自动顺延端口启动","date":"2024-03-19T00:00:00.000Z","updated":"2024-03-19T00:00:00.000Z","categories":"小项目","codeHeightLimit":300,"tags":["开源","Java","粘贴控件"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"故障排查","slug":"故障排查","link":"#故障排查","children":[{"level":3,"title":"错误定位","slug":"错误定位","link":"#错误定位","children":[]},{"level":3,"title":"查看端口占用情况","slug":"查看端口占用情况","link":"#查看端口占用情况","children":[]}]},{"level":2,"title":"解决方案设计","slug":"解决方案设计","link":"#解决方案设计","children":[{"level":3,"title":"核心问题","slug":"核心问题","link":"#核心问题","children":[]},{"level":3,"title":"改造原有代码","slug":"改造原有代码","link":"#改造原有代码","children":[]}]}],"relativePath":"pages/posts/clipPaste/port.md","path":"/home/runner/work/lhqm.github.io/lhqm.github.io/pages/posts/clipPaste/port.md","lastUpdated":1715585358000}'),e=d(),k=l.frontmatter||{};return e.meta.frontmatter=Object.assign(e.meta.frontmatter||{},l.frontmatter||{}),n("pageData",l),n("valaxy:frontmatter",k),globalThis.$frontmatter=k,r({frontmatter:{title:"Spark程序自动顺延端口启动",date:"2024-03-19T00:00:00.000Z",updated:"2024-03-19T00:00:00.000Z",categories:"小项目",codeHeightLimit:300,tags:["开源","Java","粘贴控件"]}}),(a,si)=>{const E=p;return g(),y(E,{frontmatter:o(k)},{"main-content-md":t(()=>[c,F,C,u,A,D,v,m,B,b,_,f,S,j,T,P,x,N,$,I,w,L,O,J,U,Z,M,R,V,q,H,z,W,G,K,Q,X]),"main-header":t(()=>[h(a.$slots,"main-header")]),"main-header-after":t(()=>[h(a.$slots,"main-header-after")]),"main-nav":t(()=>[h(a.$slots,"main-nav")]),"main-content":t(()=>[h(a.$slots,"main-content")]),"main-content-after":t(()=>[h(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[h(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[h(a.$slots,"main-nav-after")]),comment:t(()=>[h(a.$slots,"comment")]),footer:t(()=>[h(a.$slots,"footer")]),aside:t(()=>[h(a.$slots,"aside")]),"aside-custom":t(()=>[h(a.$slots,"aside-custom")]),default:t(()=>[h(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{ni as default};
