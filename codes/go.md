# Go

Go 语言的设计者是 Robert Griesemer、Rob Pike 及 Kenneth Thompson，Google 于 2009 年 11 月正式宣布推出。它是一种静态强类型、编译型、并发型，并具有垃玻回收功能的编程语言。作为新生代编程语言，Go 近年来发展迅猛，被不少开发人员所追捧。

```go
package main

import (
  "fmt"
  "time"
)

func main() {
  t := time.Now()
  fmt.Println(t.Format("2006-10-02"))
}
```
