---
title: Java迁移J&K混合开发
date: 2023-11-02
updated: 2023-11-02
categories: 笔记
codeHeightLimit: 400
tags:
- Java
- Kotlin
---

# Java&Kotlin混编与API迁移规范文档

[[TOC]]

## 迁移规范

### 通俗约定

目标迁移语言：`kotlin`

目标迁移API范围：`Java线程池`、`大数据集操作`

### Maven编译模式

```xml
<properties>
        <!-- 设置java版本 -->
        <java.version>1.8</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <!-- 设置kotlin版本 -->
        <kotlin.version>1.6.0</kotlin.version>
        <!-- 启用kotlin增量编译 -->
        <kotlin.compiler.incremental>true</kotlin.compiler.incremental>
</properties>
```

### Maven坐标与混合编译支持

```xml
 			<!-- kotlin反射基础库 -->
            <dependency>
                <groupId>org.jetbrains.kotlin</groupId>
                <artifactId>kotlin-reflect</artifactId>
                <version>${kotlin.version}</version>
            </dependency>
            <!--kotlin基础标准语法库-->
            <dependency>
                <groupId>org.jetbrains.kotlin</groupId>
                <artifactId>kotlin-stdlib-jdk8</artifactId>
                <version>${kotlin.version}</version>
            </dependency>
            <!--kotlin协程Jdk标准库-->
            <dependency>
                <groupId>org.jetbrains.kotlinx</groupId>
                <artifactId>kotlinx-coroutines-jdk8</artifactId>
            </dependency>
            <!--kotlin协程核心库-->
            <dependency>
                <groupId>org.jetbrains.kotlinx</groupId>
                <artifactId>kotlinx-coroutines-core</artifactId>
            </dependency>
            <!--kotlin、Java混合编译依赖-->
            <dependency>
                <groupId>com.fasterxml.jackson.module</groupId>
                <artifactId>jackson-module-kotlin</artifactId>
            </dependency>
```

### Maven插件与spring支持

```xml
		<plugin>
                <groupId>org.jetbrains.kotlin</groupId>
                <artifactId>kotlin-maven-plugin</artifactId>
                <version>${kotlin.version}</version>
                <configuration>
                    <jvmTarget>1.8</jvmTarget>
                    <args>
                        <arg>-Xjsr305=strict</arg>
                    </args>
                    <compilerPlugins>
                        <!-- Spring使用动态代理需要所有Bean可继承，该插件为所有Bean添加open关键字 -->
                        <plugin>spring</plugin>
                        <!-- 该插件为jpa实体类解决没有无参构造器的问题 -->
                        <!-- <plugin>jpa</plugin> -->
                        <plugin>no-arg</plugin>
                    </compilerPlugins>
                    <pluginOptions>
 <!-- 有些持久层框架需要实体类需要无参构造器，使用该注解标注解决kotlin data class没有无参构造器的问题 -->
                        <option>no-arg:annotation=com.example.annotations.NoArg</option>
                    </pluginOptions>
                </configuration>
                <dependencies>
                    <dependency>
                        <groupId>org.jetbrains.kotlin</groupId>
                        <artifactId>kotlin-maven-allopen</artifactId>
                        <version>${kotlin.version}</version>
                    </dependency>
                    <dependency>
                        <groupId>org.jetbrains.kotlin</groupId>
                        <artifactId>kotlin-maven-noarg</artifactId>
                        <version>${kotlin.version}</version>
                    </dependency>
                </dependencies>
            </plugin>
```



### 依赖版本
> 需要注意，`springboot`默认定义了kotlin的版本，可以通过<kotlin.version></kotlin.version>来改变。

` kotlin 1.6.0`

## 开发规范QA合集（持续完善）

### Java快速上手kotlin

[kotlin官方文档链接](https://kotlinlang.org/docs/home.html)

#### 基础变量对照

在Kotlin中，变量类型包括可为空和非空类型。与Java中的变量类型有一定的对应关系，但也有一些细微的差异

1. 非空类型：

- `Int`：对应Java的`int`
- `Long`：对应Java的`long`
- `Float`：对应Java的`float`
- `Double`：对应Java的`double`
- `Boolean`：对应Java的`boolean`
- `Char`：对应Java的`char`
- `String`：对应Java的`String`
- `Byte`：对应Java的`byte`
- `Short`：对应Java的`short`

1. 可为空类型（添加了 `?`）：

- `Int?`：对应Java的`Integer`
- `Long?`：对应Java的`Long`
- `Float?`：对应Java的`Float`
- `Double?`：对应Java的`Double`
- `Boolean?`：对应Java的`Boolean`
- `Char?`：对应Java的`Character`
- `String?`：对应Java的`String`
- `Byte?`：对应Java的`Byte`
- `Short?`：对应Java的`Short`

此外，Kotlin引入了可为空类型的概念，这是因为Kotlin在静态类型系统中加入了对 null 安全的支持，以避免 `NullPointerException`的发生。可为空类型在类型声明后面添加了一个问号 `?`，表示该变量可以接受 null 值。

Kotlin还引入了许多其他的变量类型，如集合类型（`List`、`Set`、`Map`等）、数据类型（`data class`）、枚举类型（`enum class`）等。这些类型在Java中没有直接的对应关系(我的理解是因为java只提供了泛型接口，下层的实现与之无关)。

#### 变量声明

kotlin中变量声明格式为

`val value:[type]`（不可变，类似java使用了final修饰符）或者`var value:[type]`（类似Java中Object value;）

以下是主要的区别：

1. 类型推断：

   - Kotlin：Kotlin具有类型推断的功能，可以根据变量的初始值自动推断出其类型，而无需显式指定类型。例如：`val name = "John"`。
   - Java：Java中变量的类型必须显式指定，例如：`String name = "John";`。

2. 可变性：

   - Kotlin：Kotlin的变量默认是不可变的，使用关键字 `val` 声明。如果需要可变的变量，需要使用关键字 `var` 声明。例如：`val age = 25`，`var count = 0`。
   - Java：Java的变量可通过使用关键字 `final` 来声明为不可变，使用关键字 `var` 声明为可变。例如：`final int age = 25;`，`int count = 0;`。

3. 默认值：

   - Kotlin：在Kotlin中，如果一个变量使用 `var` 声明，并且没有被初始化，那么它会被自动赋予一个默认值。例如，`var x: Int` 的默认值是0，`var y: String?` 的默认值是`null`。
   - Java：在Java中，如果一个变量没有被初始化，它没有一个明确的默认值，而是需要手动初始化变量。

4. null 安全：

   - Kotlin：Kotlin在类型系统中引入了对 null 安全的支持。在Kotlin中，默认情况下，变量是不可为 null 的，即非空类型。如果允许变量为 null，则需要使用可为空类型，使用 `?` 后缀进行标记。例如：`val name: String? = null`。
   - Java：在Java中，变量默认是可为 null 的，即可以接受 null 值。如果不希望接受 null 值，可以使用注解 `@NonNull` 或 `@NotNull` 进行标记。

5. 引入包：

   - Kotlin：Kotlin可以自动识别并导入需要的包，无需显式导入。例如，可以直接使用 `java.util.List`，而无需显式导入该包。
   - Java：Java需要显式导入使用的包，例如 `import java.util.List;`。

#### 遍历方法

1. for 循环：

   - Kotlin：在Kotlin中，for 循环被称为“区间遍历”，可以使用 `..` 运算符来定义一个区间。例如：`for (i in 1..5)`

   - Java：在Java中，for 循环主要使用条件判断和递增操作，例如：`for (int i = 1; i <= 5; i++)`

     如果要在kotlin中进行下表遍历，需要借助`indices`:

     ```kotlin
     val str = "Hello"

     for (index in str.indices) {
         val char = str[index]
         println("Character at index $index is $char")
     }
     ```

2. 遍历集合：

   - Kotlin：在Kotlin中，遍历集合可以使用 `for...in` 循环结构。例如：`for (item in list)`
   - Java：在Java中，遍历集合可以使用增强型的 for 循环或迭代器。例如：`for (String item : list)` 或使用 `Iterator` 进行遍历。

3. while 和 do…while 循环：

   - Kotlin：Kotlin中的 while 和 do…while 循环与Java类似，使用关键字 `while` 和 `do...while` 进行定义。
   - Java：Java中的 while 和 do…while 循环的用法与Kotlin类似，使用关键字 `while` 和 `do...while` 进行定义。

#### 方法声明

1. 方法声明和参数列表：
   - Kotlin：Kotlin中方法的声明与Java类似，但有一些差异。在Kotlin中，方法声明使用关键字 `fun`，参数列表的声明方式也略有不同。参数的声明方式是“参数名: 参数类型”，参数之间使用逗号分隔。例如：`fun add(a: Int, b: Int)`
   - Java：在Java中，方法的声明方式使用关键字 `public` 或其他访问修饰符，后跟返回值类型和方法名，参数列表用括号括起来。例如：`public int add(int a, int b)`
2. 返回值类型：
   - Kotlin：在Kotlin中，方法的返回值类型位于方法名之后，使用冒号 `:` 进行标记。例如：`fun add(a: Int, b: Int): Int`
   - Java：在Java中，方法的返回值类型位于方法名之前，使用关键字表示。例如：`public int add(int a, int b)`

需要注意的是，Kotlin与Java之间在方法声明和返回值定义方面的差异不会影响两种语言之间的互操作。

此外，Kotlin引入了一些其他的特性，如默认参数。在Kotlin中，可以为方法参数提供默认值，这样在调用方法时，如果不提供对应的参数值，将使用默认值。例如：

```kotlin
fun greet(name: String, message: String = "Hello") {
    println("$message, $name!")
}

// 调用方法
greet("John") // 输出: Hello, John!
greet("Alice", "Hi") // 输出: Hi, Alice!
```

在上述示例中，`greet()` 方法的 `message` 参数具有默认值 `"Hello"`。如果调用该方法时只提供了 `name` 参数，那么 `message` 参数将使用默认值。

#### 函数式API

1. 函数作为一等公民：Kotlin 将函数视为一等公民，就像其他的值一样。这意味着我们可以将函数分配给变量、作为参数传递给其他函数，以及从函数中返回函数。Java 8 之前的版本中并没有这些能力，而 Java 8 引入了 lambda 表达式作为函数式编程的一部分。（这部分需要自己理解一下）
2. 简洁性和可读性：Kotlin 通过提供简洁的语法和功能来提高函数式编程的可读性和编写效率。Kotlin 中的函数可以使用表达式体语法定义，并且具有更少的样板代码。此外，Kotlin 提供了一些内置的函数和扩展函数，如 `map`、`filter`、`reduce` 等，简化了集合操作（类似Java中的`Stream`操作）。
3. 可空类型处理：Kotlin 的类型系统对可空性进行了更严格的处理。Kotlin 中的函数可以明确指定参数是否可为空，并且在函数签名中使用 `?` 标记可空类型。这可以提供更好的可靠性，并减少空指针异常的发生。
4. 异常处理：Kotlin 中的函数式编程更加倾向于使用表达式式的异常处理方式。Kotlin 的异常被归类为受检异常和非受检异常，非受检异常在函数签名中不需要显式声明。这与 Java 中的受检异常和非受检异常的处理方式有所不同。
5. 集合处理：Kotlin 提供了一个功能丰富的标准库，尤其是在集合操作方面。Kotlin 的集合操作函数旨在提供更直观和简洁的代码，并且经常使用函数参数和 Lambda 表达式进行自定义操作。

Java 8 虽然引入了 lambda 表达式和流式 API，提供了一定程度的函数式编程支持。然而，Kotlin 在语言层面上对函数式编程进行了更深入的整合，提供了更多的语法糖和工具函数，使得函数式编程更加方便和强大。


#### class类声明

Kotlin中可以在代码文件中不使用`class`。这是因为Kotlin引入了顶层函数和属性的概念，使得编写简单的、独立的功能代码变得更加方便。

在Java中，每个代码文件都必须包含一个类，并且类是代码的基本组织单位。而在Kotlin中，代码文件可以包含函数、属性、对象声明等顶层元素，而不一定需要一个类。这意味着Kotlin允许开发者在代码文件中直接编写函数和属性，而无需将它们放在类中。

以下是一个对比示例：

Java代码：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Kotlin代码：

```kotlin
fun main() {
    println("Hello, World!")
}
```

在Kotlin中，我们可以直接使用`fun`关键字来定义一个顶层函数`main()`，而不需要放在类中。这样的代码文件可以直接运行，输出与Java代码相同的结果。

通过允许在代码文件中直接编写函数、属性和其他顶层元素，Kotlin提供了更简洁、更灵活的编码方式。它消除了在某些情况下创建不必要的类的需要，并使得代码更加清晰易读。

#### open class与class

在Kotlin中，`class`关键字用于定义类，而`open class`关键字用于定义可继承的类。以下是关于这两个概念的解释：

普通的类（普通的`class`）：
普通的类是Kotlin中最基本的类形式，它使用`class`关键字进行定义。普通类默认是不可继承的，即不能被其他类继承。这是因为在Kotlin中，默认情况下，类和它的成员（方法、属性）都是`final`的，禁止被子类继承或覆盖。

```
class MyClass {
    // ...
}
```



在上述示例中，`MyClass`是普通的类，不能被其他类继承或覆盖其方法和属性。

可继承的类（`open class`）：
为了允许其他类继承或覆盖方法和属性，我们可以使用`open`关键字来修饰类的声明，创建一个可继承的类。通过将类声明为`open class`，我们明确表明该类是可被继承的。

```
open class MyOpenClass {
    open fun someMethod() {
        println("This method can be overridden.")
    }
}
```



在上述示例中，`MyOpenClass`是一个可继承的类。使用`open`关键字修饰类声明和方法声明，表示它们可以被子类继承和覆盖。

子类可以通过使用`:`符号来扩展可继承的类，并覆盖其中的方法。例如：

```
class MySubClass : MyOpenClass() {
    override fun someMethod() {
        super.someMethod()
        println("This is a overridden method.")
    }
}
```



在上述示例中，`MySubClass`是`MyOpenClass`的子类，覆盖了其 `someMethod()` 方法。

需要注意的是，继承可继承的类使用了`:`符号，而不是Java中常见的`extends`关键字。另外，子类覆盖父类方法时，需要使用`override`关键字修饰方法声明。

> `open class`是否可以等价于java的`public class`

并不，`public`强调的是可访问性，而`open`强调的是可继承性。

在Java中，`public class`是指该类可以被其他包中的类访问。而在Kotlin中，`open class`更多地关注类的继承性质，即该类是否可以被其他类继承。

尽管在某些情况下，可以将`open class`与Java中的`public class`进行类比，但它们并不完全等价。

在Kotlin中，默认情况下，类是公有的（public），即可以被同一模块中的其他类访问。这一点与Java中的`public class`类似。

然而，在Kotlin中，类的访问修饰符是通过关键字`public`、`internal`、`protected`和`private`进行定义的，而不是像在Java中使用`public`关键字。这些修饰符定义了类的可见性范围和访问级别：

- `public`：类对所有其他类可见，类似于Java中的`public`修饰符。
- `internal`：类对同一模块中的其他类可见。（可以类比java的`default`关键字）
- `protected`：在Kotlin中，类本身不能被修饰为`protected`，只能将其成员方法或属性声明为`protected`。
- `private`：类只对同一文件中的其他类可见。在Kotlin中，类不能被声明为`private`。

而`open class`则表示该类是可继承的，即可以被其他类继承和派生出子类。这与Java声明为`public`的类是可以被其他类继承的概念相似，但并不完全一致。



### 类/方法规范

#### Java友好的静态方法

> 如何在java中类似调用某个类的`静态方法`一样调用kotlin方法

使用kotlin的`companion object {}`内联方法块来实例化本类，配合`@JvmStatic标记`以及`提供伴生对象方法`给外部调用。

须知，kotlin并没有`static`关键字，因此，Java程序要在不实例化的情况下调用kotlin代码，请使用伴生对象。（实际上还有`外部方法块`，但是这样`不符合Java开发的惯例`，为了符合Java开发规范，请使用伴生对象）

下方给出一组示例：

```kotlin
open class Demo {
    companion object {
    	@JvmStatic
        fun invokeJavaMethod(num:Int?): List<Any?> {
            val instance=Demo
            return instance.invokeJavaMethod()
        }
    }
    suspend fun invokeJavaMethod():Void{
        println("suspend fun invoked as static method")
    }
}
```

对此给出kotlin社区的**一组解释**：

<div style="background-color:#d6e8da">
    <p><code style="background-color:#d6e8da">@JvmStatic</code>是用于在Kotlin中标记静态方法的注解。在Kotlin中，没有直接的关键字来<code style="background-color:#d6e8da">定义静态方法</code>，因为Kotlin语言设计中<code style="background-color:#d6e8da">鼓励使用包级函数和单例对象来代替静态方法</code>。</p>
<p>然而，在与Java代码互操作或使用某些框架时，有时需要将某些函数声明为静态方法。这时，可以使用<code style="background-color:#d6e8da">@JvmStatic</code>注解来标记函数，并告诉Kotlin编译器将其生成为<code style="background-color:#d6e8da">与Java静态方法对应</code>的代码。</p>
<p>@JvmStatic注解的作用是：</p>
<blockquote style="background-color:#d6e8da">
  <p>告诉Kotlin编译器将带有@JvmStatic注解的函数生成为Java类的静态方法。这样，可以通过类名直接访问该方法，而无需创建类的实例。</p>
  <p>在Kotlin代码中，使用@JvmStatic注解可以使其具有与Java相同的静态方法语义。这意味着，我们可以像在Java中一样直接调用标记为@JvmStatic的函数，而无需使用对象引用。</p>
</blockquote>
</div>

#### 挂起函数与标记挂起

使用`suspend`挂起标记来挂起一个函数，该函数称为`挂起函数`

准确来说，使用挂起函数方便在协程中直接进行轻量并发而不需阻塞主线程。

该标记的主要作用是`通知编译器该函数可能会挂起，并且需要特殊处理`和`在调用该函数时能够适当地处理挂起操作，如协程框架中的挂起恢复机制`

<u>挂起函数</u>的调用范围：

 只有在协程代码块（包括协程构建器如`launch`、`async`等）或其他挂起函数内部才能调用标记为`suspend`的挂起函数。在普通的同步代码中，不能直接调用挂起函数。

如下所示，展示一个`挂起函数`和一个`调用挂起函数`的例子

```kotlin
import kotlin.random.Random
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking

suspend fun randomDelay(): Int {
    delay(500) // 挂起函数，休眠500毫秒
    return Random.nextInt(1, 10) // 返回随机的整数
}

fun main() = runBlocking {
    val result = randomDelay() // 调用挂起函数
    println("随机延迟后返回的随机整数为: $result")
}
```

在上述示例中，我们定义了一个名为`randomDelay`的挂起函数。它使用`delay(500)`来模拟挂起状态并暂停执行500毫秒。随后，该函数使用`Random.nextInt(1, 10)`生成一个1到9之间的随机整数，并将其作为结果返回。

在`main`函数中，我们借助`runBlocking`协程构建器来创建一个顶层协程（Coroutine）。在协程内部，我们调用了`randomDelay`挂起函数，并将其返回值存储在`result`变量中。最后，我们使用`println`函数打印出随机延迟后返回的随机整数。

在`main`函数中，我们使用`runBlocking`来创建一个顶层协程，以便能够在主线程中挂起函数。在实际的应用中，通常会使用协程构建器（如`launch`、`async`等）来调度和执行协程，具体定义见之后的文档。

### 协程使用规范

#### 协程调度器定义与分类

在 Kotlin 中，协程调度器（Coroutine Dispatcher）用于控制协程在哪个线程或线程池上执行。调度器负责协程的调度和线程切换。

Kotlin 协程提供了几种内置的调度器，常用的包括以下几种：

1. `Dispatchers.Default`：默认调度器，会使用一个共享的线程池来执行协程。适合执行 CPU 密集型的任务。
2. `Dispatchers.IO`：针对 I/O 操作（如文件读写、网络请求等）优化的调度器，会使用一个专用的线程池来执行协程。适合执行需要长时间等待的 I/O 操作。
3. `Dispatchers.Main`：适用于 Android 平台的`UI调度器`，用于在主线程上执行协程，主要用于 UI 相关的操作。这个调度器需要在 Android 应用中使用协程扩展库 `kotlinx.coroutines-android` 才能使用。`我们不会用到这个调度器，请忽略该选项`
4. `Dispatchers.Unconfined`：不受限的调度器，会在当前线程中立即执行协程，但在挂起或恢复操作时，会恢复到调用协程的上下文中。适合一些不需要切换线程的场景。

除了这些内置的调度器，Kotlin 协程还支持自定义调度器。可以使用 `CoroutineDispatcher` 接口创建自定义的调度器，以满足特定的调度任务来挂起执行协程。

#### 异步构建

使用协程构建异步函数：使用 `suspend` 关键字来标记函数，使其成为协程函数。协程函数可以执行挂起操作，而无需显式地依赖回调或阻塞线程。

#### 协程作用域

在 Spring Boot 中，可以使用 `CoroutineScope` 来创建协程的作用域，这个作用域可以指定协程的生命周期和执行环境。通常，可以使用 `GlobalScope`、`viewModelScope` 或自定义的作用域来管理协程。

#### 调度器

 使用 `withContext()` 函数切换协程的调度器。例如，在进行 I/O 操作时，可以使用 `Dispatchers.IO` 调度器来确保在单独的线程池中执行耗时的操作。

#### 异常处理

使用 `try-catch` 块或 `coroutineExceptionHandler` 来捕获和处理协程中的异常。在失败时，可以适当地处理异常并采取相应的补救措施。

#### 协程的取消和内存泄漏问题的规避

 使用 `CoroutineScope` 提供的 `cancel()` 方法来取消协程的执行。在 Spring Boot 中，可以利用 Bean 的生命周期或请求处理等机制，在适当的时候取消协程的执行，避免潜在的资源泄漏。以及不使用`global`挂起协程。

## 目前已有的迁移封装

### 多协程执行IO（网络服务请求）任务

> 该方法允许一个Java方法通过发起反射调用方法的方式进行方法调用。其大致过程为`Java->kotlin->Java`

#### kotlin核心封装代码

```kotlin
import kotlinx.coroutines.*
import java.lang.RuntimeException
import java.lang.reflect.Method

/**
 * @author He R'K
 * @date  2023/8/20 9:59
 * @version 1.0
 * kotlin协程作用类。用于使用协程挂起业务
 */
open class CoroutinesUtil {
    /**
     * 通过伴生对象来暴露外界可直接调用的接口
     * 同时通过 @JvmStatic 实现一个类似static关键字的伴生对象扩展方法的静态标记
     * 通过该注解的标记，让Java程序可以以调用静态方法的方式快速挂起协程，而省去创建对象的步骤
     */
    companion object {
        /**
         * 同步方法，阻塞主线程并执行该任务。
         * 请注意，请勿在递归函数内随意调用，不然等待你的不一定是栈帧溢出，而可能先发生服务器卡顿甚至宕机。因为本方法将要调用异步代码块挂起数量庞大的协程。
         * @param maxCoroutineLimit 最大协程数（默认100个）
         * @param params 需要被调用的方法的其他参数列表
         * @param loopIndex 被调用的迭代数据在目标方法的参数列表的位置。
         * @param loopData 需要通过循环挂起协程的数据
         * @param method 被调用方法
         * @param clazz 被调用的对象字节码
         * @param isStatic 方法是否为静态方法。静态方法可以少一次newInstance的开销。为了防止报错，默认开启
         */
        @JvmStatic
        fun invokeJavaMethod(
            maxCoroutineLimit: Int?,
            params: Array<Any?>,
            loopData: List<*>?,
            loopIndex: Int?,
            method: Method,
            clazz: Class<*>,
            isStatic: Boolean
        ): List<Any?> {
            return runBlocking {
                val instance = CoroutinesUtil()
                instance.invokeJavaMethodSuspend(
                    maxCoroutineLimit,
                    params,
                    loopData,
                    loopIndex,
                    method,
                    clazz,
                    isStatic
                )
            }
        }
        @JvmStatic
        fun invokeJavaMethod(
            maxCoroutineLimit: Int?,
            params: Array<Any?>,
            loopData: List<*>?,
            loopIndex: Int?,
            method: Method,
            clazz: Class<*>
        ): List<Any?> {
            return invokeJavaMethod(maxCoroutineLimit, params, loopData, loopIndex, method, clazz, false)
        }

        @JvmStatic
        fun invokeJavaMethod(
            params: Array<Any?>,
            loopData: List<*>?,
            loopIndex: Int?,
            method: Method,
            clazz: Class<*>
        ): List<Any?> {
            return invokeJavaMethod(100, params, loopData, loopIndex, method, clazz)
        }

        @JvmStatic
        fun invokeJavaMethod(params: Array<Any?>, loopData: List<*>?, method: Method, clazz: Class<*>): List<Any?> {
            return invokeJavaMethod(params, loopData, 0, method, clazz)
        }
    }


    /**
     * 使用suspend标记，标记为挂起函数。
     * 应该使用阻塞代码块同步执行该函数，或者在另一个协程里进行调用。同时，主线程应该调用await阻塞
     * 该方法允许Java方法通过kotlin发起对另一个方法的请求，并批量挂起用户协程
     * 协程相关文档请自行查询。本方法已经提供了重载调用方法，该方法已经自动阻塞执行了，所以，在没有提示修改和相关资料辅助的情况下请勿随意修改
     *
     * 关于协程调度器：
     * Default：默认调度器，CPU密集型任务调度器，通常处理一些单纯的计算任务，或者执行时间较短任务。例如数据计算
     * IO：IO调度器，IO密集型任务调度器，适合执行IO相关操作。比如：网络请求，数据库操作，文件操作等
     * Main：UI调度器，只有在UI编程平台上有意义，用于更新UI,例如Android中的主线程(请注意，在服务器程序中千万别选这项，不然会空指针异常)
     * Unconfined：非受限调度器，无所谓调度器，当前协程可以运行在任意线程上
     * 请在适当位置选择变更协程调度器
     */
    @OptIn(DelicateCoroutinesApi::class)
    suspend fun invokeJavaMethodSuspend(
        maxCoroutineLimit: Int?,
        params: Array<Any?>,
        loopData: List<*>?,
        loopIndex: Int?,
        method: Method,
        clazz: Class<*>,
        isStatic: Boolean
    ): List<Any?> = withContext(Dispatchers.IO) {
        // 限制用户挂起数量。如果没传就限制100个
        val coroutineLimit = maxCoroutineLimit ?: 100
        // 确定循环参数在参数列表中的位置。如果没传默认在第一个位置
        val currLoopIndex = loopIndex ?: 0
        // 创建一个协程池并限制协程数量
        val dispatcher = newFixedThreadPoolContext(coroutineLimit, "InvokeJavaMethodPool")
        // 启动协程并挂起
        val result = mutableListOf<Any?>()
        // 创建任务列表等待挂起任务
        val jobs = mutableListOf<Deferred<Any?>>()
        // 按照指定字段挂起轮询。如果没有指定，就直接报错。
        if (loopData == null) throw RuntimeException("空的迭代对象！请确认该对象有数据再进行调用！")
//    开始拼接参数列表，把要迭代的参数位置让出来，让参数依赖于这个数组进行迭代
        val paramsToInvoke = insertAndShift(params, currLoopIndex, null)
        for (param in loopData) {
            jobs.add(
                // 在规定命名的协程池内，挂起协程。该协程池大小由coroutineLimit显式指定。
                async(dispatcher) {
                    paramsToInvoke[currLoopIndex] = param
//                这里本来应该改用kotlin的reflect反射包里的clazz.kotlin.createInstance(),但是这样会导致数据丢更新，所以说目前还是换回了原来的方式。对于静态方法，不做反射实例化
                    val obj = if (isStatic) null else clazz.newInstance()
                    val res: Any? = method.invoke(obj, *paramsToInvoke)
                    res
                }
            )
        }
        // 汇总协程上下文数据
        jobs.joinAll()
        // 获取每个协程结果并添加到result列表中
        for (job in jobs) {
            result.add(job.await())
        }
        // 关闭协程池
        dispatcher.close()
        return@withContext result
    }

    /**
     * 形参列表移位。用于形参列表让出目的循环数据的位置
     */
    open fun insertAndShift(params: Array<Any?>, insertIndex: Int, value: Any?): Array<Any?> {
//    创建一个比它大1的空数组，进行循环填充数据
        val result = arrayOfNulls<Any?>(params.size + 1)
        for (i in params.indices) {
//        比填充索引小，直接对应填入
            if (i < insertIndex) {
                result[i] = params[i]
            } else if (i == insertIndex) {
                result[i] = value
                result[i + 1] = params[i]
            } else {
                result[i + 1] = params[i]
            }
        }
        return result
    }
}
```

#### 使用示例

##### 目标接受调用代码

```java
public class InvokeTarget {
    public String getApiData(Integer sequenceId,String areaCode) throws InterruptedException {
        System.out.println(sequenceId+" of index inherited method");
        Thread.sleep(500);
        return sequenceId+":"+areaCode;
    }
}
```

##### 发起调用代码

```java
import java.lang.reflect.Method;
import java.util.*;

public class Main {
    public static void main(String[] args) throws NoSuchMethodException {
        long l = System.currentTimeMillis();
//        获取class对象
        Class<InvokeTarget> targetClass = InvokeTarget.class;
//        获取到方法或被重载的方法
        Method method = targetClass.getMethod("getApiData", Integer.class, String.class);
//        添加参数
        Object[] objects =new Object[]{"A0"};
//        添加要被循环执行任务的列表
        LinkedList<Integer> linkedList = new LinkedList<>(
//                Arrays.asList(1, 2, 3, 4, 5,6,7,8,9,10,null)
        );
        for (int i = 0; i < 1500; i++) {
            linkedList.add(i);
        }
//        调用封装后的kotlin代码，传入循环列表、形参列表、方法体、class对象（实际上还要指定循环的数据所在参数列表的位置，默认为第一个）
        List<Object> list = CoroutinesUtil.invokeJavaMethod(objects,linkedList,method,targetClass);
//        查看调用结果
//        list.forEach(System.out::println);
        System.out.println(System.currentTimeMillis()-l+"ms");
    }
}
```

