# Kotlin

Kotlin 由 JetBrains 于 2011 年 7 月推出，它是一种在 Java 虚拟机上运行的静态类型编程语言，也可以被编译成为 JavaScript 源代码。虽然与 Java 语法并不兼容，但 Kotlin 被设计成可以和 Java 代码相互运作，并可以重复使用现有 Java 类库。在 Google I/O 2017 中，Google 宣布在 Android 上为 Kotlin 提供最佳支持。

```kotlin
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

fun main(args: Array<String>) {

  val current = LocalDateTime.now()

  val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
  val formatted = current.format(formatter)

  println(formatted)
}
```
