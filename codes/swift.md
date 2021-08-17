# Swift

2014 年 6 月，苹果在开发者年会（WWDC）上发布 Swift，由 LLVM 项目主要发起人、Clang 编译器作者 Chris Lattner 在苹果公司内部主持开发，历时 4 年。它是一种支持多编程范式和编译式的编程语言，是用来开发 macOS/OS X、ioS、watchOS 和 tvOS 的语言之一。

```swift
import Foundation

let date = Date()
let formatter = DateFormatter()

formatter.dateFormat = "yyyy-MM-dd"
print(formatter.string(form: date))
```
