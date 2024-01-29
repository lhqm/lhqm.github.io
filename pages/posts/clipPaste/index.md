---
title: 基于spark Java的本地化粘贴控件
date: 2024-01-12
updated: 2024-01-29
categories: 小项目
codeHeightLimit: 300
tags:
- 开源
- Java
- 粘贴控件
---
### 项目地址
[基于spark Java的本地化粘贴控件](https://github.com/lhqm/fox-clipbord-helper)
### 项目灵感来源
> 项目起源于一个实际需求，在线编辑器中，需要实现一个粘贴控件，可以将用户复制的Word文档内容直接插入到编辑器中。
> 但是由于前端读取不了Word文档中的图片，因为RTF格式的图片数据是这样的：`file://C:\xxx\roming\example.jpg`。
> 而且，这些XHTML数据往往dom规模很大，前端承受不住......

于是乎，一个伟大的想法诞生了，它最开始被称为本地化服务器解决方案。
但是问题来了，我并不会cpp，更别提qt了，怎么去实现呢？

### 框架选型与思路
选择一个好的思路开始编写，是最好不过了。
Java原生无疑是极好的。问题就在于，如何把信息传给前端呢。我们很容易想到用mvc框架！
关键是spring mvc，它太大了，还拖家带口的......

于是乎，我选择了这样一款小巧的框架：`spark`
需要注意的是，此spark非彼spark,或许你搜索一下`spark mvc`，浩如烟海的搜索内容中，还残存着它一丝身影。
生态还蛮齐全的，而且不拖家带口，包体小到1M都没有......这简直是求之不得的mvc最优解决方案。

### dom规模优化
接下来，既然我们已经可以和前端通信了，那么我们肯定要送佛送到西，顺带把拿出来的dom规模优化一下。
这一部分可以参照代码的优化逻辑：

```java
    /**
     * 获取剪切板混合数据
     * @return 剪切板数据
     * @throws Exception 剪切板异常
     */
    public static String processClipboard() throws Exception {
        Clipboard sysClip = Toolkit.getDefaultToolkit().getSystemClipboard();
        Transferable clipTf = sysClip.getContents(null);
        StringBuilder resultBuilder = new StringBuilder();

        if (clipTf != null) {
            DataFlavor[] dataFlavors = clipTf.getTransferDataFlavors();
            for (DataFlavor dataFlavor : dataFlavors) {
                if (dataFlavor.isFlavorTextType()) {
                    try {
                        // Handle text data
                        String text = (String) clipTf.getTransferData(dataFlavor);
                        resultBuilder.append("<p>").append(text).append("</p>");
                    } catch (Exception e) {
                        // Handle non-string text data
                        String text = clipTf.getTransferData(dataFlavor).toString();
                        resultBuilder.append("<p>").append(text).append("</p>");
                    }
                }
//                else if (dataFlavor.isMimeTypeEqual("image/png")) { // [!code --]
                    // Handle image data // [!code --]
//                    Image image = (Image) clipTf.getTransferData(dataFlavor); // [!code --]
//                    String imageBase64 = imageToBase64(image); // [!code --]
//                    resultBuilder.append("<img src='data:image/png;base64,").append(imageBase64).append("' />"); // [!code --]
//                } // [!code --]
            }
        }
        return resultBuilder.toString();
    }
```
### 跨域问题解决
> 项目本身是天然基于前后端分离的。所以说跨域问题的解决尤为重要。在`Spark Java`中，框架默认提供了跨域解决方案。

在`main`方法中配置如下：
```Java
//        配置跨域
        Spark.before((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            response.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
            response.header("Access-Control-Allow-Credentials", "true");
        });
```
### 项目启动
项目依旧参考`springboot`的启动结构，在编译器里直接运行`main`方法即可。
### 项目打包
一定要把依赖打进去！没有使用spring以后，最容易犯这个毛病，详细看`pom`文件配置:

这里一共要做两件事：`指定编译入口`、`打包依赖整合包`。springboot在打包的时候默认会自己寻找加了`@SpringApplication`注解的类来当做编译入口，
同时自行配置了springboot重写依赖的插件。
```xml
<build>
        <finalName>clip</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <version>3.2.0</version>
                <configuration>
                    <archive>
                        <manifest>
                            <mainClass>com.ruifox.Application</mainClass>
                        </manifest>
                    </archive>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-assembly-plugin</artifactId>
                <version>3.3.0</version>
                <configuration>
                    <archive>
                        <manifest>
                            <mainClass>com.ruifox.Application</mainClass>
                        </manifest>
                    </archive>
                    <descriptorRefs>
                        <descriptorRef>jar-with-dependencies</descriptorRef>
                    </descriptorRefs>
                </configuration>
                <executions>
                    <execution>
                        <id>make-assembly</id>
                        <phase>package</phase>
                        <goals>
                            <goal>single</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
```
### 项目进一步打包为exe
这一步参考使用exe4j，跟着走就行。需要注意的是，本项目没有界面，那么到选择项目类型的时候一定要注意,
选择`桌面程序`而不是`Java服务`，前者可以巧妙地通过没有窗口输出骗过操作系统，直接窗口显示错误，程序静默报错
但是不会退出，用户根本感知不到。后者会有一个命令行黑框，退出之后服务跟着退出，一定不要选错。

详情可以参考我的另一篇文章：[进一步将本地粘贴控件打包为可执行程序](/posts/clipPaste/toExe)

### 项目打包为可执行程序和加密
这一块自行解决，网上有签名相关解决方案。
我这边使用的是`inno setup`，相关步骤指示如下：
1. 编写iss脚本
2. 配置签名工具（需要先自签名一套pvk，或者去网上买好）
3. 运行脚本进行联合签名
4. 如果是自签名证书，请先安装自签名证书到Windows根证书目录下，并设置可信任，以使得项目可以正常写入注册表和开机自启动
5. 安装程序
6. 随便复制一段RTF文本，访问http://127.0.0.1:10086/clip

### 自写协议配置页面上打开
这一步在上述打包的时候完成，在脚本内写入协议即可。
### 项目迭代
前端在使用时通过判断剪切板文本是否是正常文本，不正常就访问接口就行了，去拿rtf格式文本

**v1.1版本更新**
前端反映如果在JB系列编译器里边复制，会绕过前端校验访问，但是又不是rtf格式文本，我在插件里边修复了这个问题，并且新增了复制控制台数据的能力。

**v1.2版本更新**
更新了word导入能力。现在可以基于`文件头`实现`doc/docx的导入`。其中`docx支持度更高`（基于微软全新的`office 2007`）。对doc文档也有相关支持，但是支持度就比较一般了。
