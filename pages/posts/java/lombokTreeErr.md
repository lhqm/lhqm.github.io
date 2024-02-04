---
title: JDK21坑点（lombok编译不通过）
date: 2024-02-04
updated: 2024-02-04
categories: 采坑记录
codeHeightLimit: 400
tags:
  - Java
  - JDK
---
## 问题
JDK 21的报错`NoSuchFieldError: Class com.sun.tools.javac.tree.JCTree$JCImport does not have member field 'com.sun.tools.javac.tree.JCTree qualid'`,发现
这个问题最开始还是我在公司电脑上跑得好好的项目，通过github托管后，回家就运行不起来了...
仔细排查确定了三个方向，最终一一排除：
1. kotlin插件问题
kotlin插件可能因为`版本不同`而影响到整个项目的构建，因此率先排除这个问题，排除方案：`禁用 kotlin`，最终问题仍旧存在，排除。
2. IDEA版本问题
可能因为IDEA的`运行时kotlin插件`影响到项目的构建，同样禁用kotlin和kotlin反射库，问题依旧存在
3. Maven版本问题
可以排除，公司里是`Maven 3.5.7`，自己用的`Maven 3.6.3`，版本差别不大，不太可能有问题。
4. JDK版本问题
基本上破案了，不是包管理器有问题就是JDK有问题，才换的`JDK21`,本来打算遥遥领先一把，现在估计坑了自己。

## 解决方案
出现`NoSuchFieldError: Class com.sun.tools.javac.tree.JCTree$JCImport does not have member field 'com.sun.tools.javac.tree.JCTree qualid'`,

通常涉及到Lombok库版本与Java编译器之间的兼容性问题。最近的Lombok版本通常会修复旧版本中的错误，因此你可以尝试升级Lombok版本来解决这个问题。

需要更新Lombok的依赖项，可以在Maven项目中将Lombok的版本更改为最新版本，比如1.18.30。

可以在pom.xml文件中找到Lombok的依赖项，并将版本号修改为最新版本;

实测在修改版本后项目可以正常运行。具体原因可以参照`lombok`的官方仓库这个issue:[
[BUG] lombok 1.8.26 incompatible with JDK21
#3393](https://github.com/projectlombok/lombok/issues/3393)
