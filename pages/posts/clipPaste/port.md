---
title: Spark程序自动顺延端口启动
date: 2024-03-19
updated: 2024-03-19
categories: 小项目
codeHeightLimit: 300
tags:
- 开源
- Java
- 粘贴控件
---

## 前言

最近控件项目又遇到了一项难题，本来以为10000以后的端口是没有其他软件会用的了，于是乎我们的本地粘贴控件选择了10086端口进行TCP监听。

但是好像`10086`这个数字比较吉利？今天一家客户单位找上门来，说我们的插件用不了。

## 故障排查

### 错误定位

于是，我去安装目录下给日志刨出来，看到这样一段报错输出：

```java
[Thread-0] INFO org.eclipse.jetty.util.log - Logging initialized @347ms to org.eclipse.jetty.util.log.Slf4jLog
[Thread-0] INFO spark.embeddedserver.jetty.EmbeddedJettyServer - == Spark has ignited ...
[Thread-0] INFO spark.embeddedserver.jetty.EmbeddedJettyServer - >> Listening on 0.0.0.0:10086
[Thread-0] INFO org.eclipse.jetty.server.Server - jetty-9.4.48.v20220622; built: 2022-06-21T20:42:25.880Z; git: 6b67c5719d1f4371b33655ff2d047d24e171e49a; jvm 11.0.18+9-LTS-195
[Thread-0] INFO org.eclipse.jetty.server.session - DefaultSessionIdManager workerName=node0
[Thread-0] INFO org.eclipse.jetty.server.session - No SessionScavenger set, using defaults
[Thread-0] INFO org.eclipse.jetty.server.session - node0 Scavenging every 600000ms
[Thread-0] ERROR spark.Spark - ignite failed
java.io.IOException: Failed to bind to /0.0.0.0:10086
	at org.eclipse.jetty.server.ServerConnector.openAcceptChannel(ServerConnector.java:349)
	at org.eclipse.jetty.server.ServerConnector.open(ServerConnector.java:310)
	at org.eclipse.jetty.server.AbstractNetworkConnector.doStart(AbstractNetworkConnector.java:80)
	at org.eclipse.jetty.server.ServerConnector.doStart(ServerConnector.java:234)
	at org.eclipse.jetty.util.component.AbstractLifeCycle.start(AbstractLifeCycle.java:73)
	at org.eclipse.jetty.server.Server.doStart(Server.java:401)
	at org.eclipse.jetty.util.component.AbstractLifeCycle.start(AbstractLifeCycle.java:73)
	at spark.embeddedserver.jetty.EmbeddedJettyServer.ignite(EmbeddedJettyServer.java:154)
	at spark.Service.lambda$init$2(Service.java:633)
	at java.base/java.lang.Thread.run(Unknown Source)
Caused by: java.net.BindException: Address already in use: bind
	at java.base/sun.nio.ch.Net.bind0(Native Method)
	at java.base/sun.nio.ch.Net.bind(Unknown Source)
	at java.base/sun.nio.ch.Net.bind(Unknown Source)
	at java.base/sun.nio.ch.ServerSocketChannelImpl.bind(Unknown Source)
	at java.base/sun.nio.ch.ServerSocketAdaptor.bind(Unknown Source)
	at org.eclipse.jetty.server.ServerConnector.openAcceptChannel(ServerConnector.java:344)
	... 9 more

```

很明显，这是**端口被占用了！**

那么我们就需要设计一个更智能的东西了，但是前端又需要知道我在哪个端口，这一来二去就成了一个大难题。

### 查看端口占用情况

由于客户的程序跑在`Windows7`中，我首先使用：

```
netstat -ano
```

找到了运行在`10086`端口上的`TCP协议`的进程的`PID`

~~为什么是TCP协议的端口占用，详情请参考操作系统协议栈部分。~~

然后通过**该进程的PID**，打开**资源管理器**，查看到该PID下的软件，结果发现是他们单位的内部系统认证程序...

不能杀这个程序，那就只能再找方案了。

## 解决方案设计

### 核心问题

针对这个故障，最主要的问题就在于，前端如何跟着我一起动态配置端口？目前确定了肯定是要配置端口的，但是核心问题也在这里：怎么能让前端也可以知道端口换掉了？

一种常见的方案就是将端口改为**可配置**，让用户自己去配。

但是我们的客户，懒得出奇，你让他给你配网站和软件的端口？他连安个证书这种傻瓜操作都嫌麻烦...

所以说综合下来，解决方案就是：

> 向后轮询空闲端口并绑定。

这里需要明确两个问题：

1. 我们的软件安没安装不是能不能访问决定的，是通过**自定义控制协议**实现的。在浏览器上输入`foxc://`，有反应就是装了，没有就是没装，前端只需要判断更改地址栏以后有没有**全局失焦**就知道用户有没有安装了。
2. 我们的软件有没有启动，也能在上述步骤完成，所以说根本不需要担心前端向后轮询太多导致页面卡死的问题。

### 改造原有代码

原先启动程序是这样的：

```java
port(10086);
```

一旦10086端口被占用了，就会直接报错退出。

所以说我们需要一个循环尝试绑定。

但是对这行代码try...catch也不行，因为他底层写的绑定不上端口就直接退出Java程序了。

所以说我们需要一个自己写的方法，来规避这种情况。

我们可以搞一个比较有仪式感的，仿照springboot来写：

```java
SparkApplication.run(10086);
```

详细代码如下：

```java
public class SparkApplication {
    static Logger log = LoggerFactory.getLogger(SparkApplication.class);
    public static void run(int startPort){
        int port = startPort; // 起始端口号
        int maxPort = startPort+1000; // 尝试的最大端口号，根据需要进行调整

        // 循环尝试端口，直到找到可用的端口
        while (port <= maxPort) {
            try (ServerSocket serverSocket = new ServerSocket(port)) {
                log.info("端口 " + port + "处于空闲状态，正在尝试从JVM环境启动控件程序");
                // 设置Spark的端口
                port(port);
                break; // 退出循环
            } catch (IOException e) {
                log.error("端口 " + port + "已经被占用，等待一秒后顺移一个端口尝试");
                port++;
                // 这里可以选择是否等待一段时间再尝试下一个端口，以避免过快地尝试
                try {
                    Thread.sleep(1000); // 等待1秒
                } catch (InterruptedException e1) {
                    e1.printStackTrace();
                }
            }
        }
    }
}
```

完美解决上述业务需求。