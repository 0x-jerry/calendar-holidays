# CoffeeScript

CoffeeScript 由 Jeremy Ashkenas 设计开发，并于 2009 年发布。它是一套 JavaScript 的转译语言，受到 Ruby、Python 与 Haskell 等语言的启发，增强了 JavaScript 的简洁性与可读性。一般来说，Coffeescript 可以在不影响运行性能的情况下，缩短约三分之一的代码长度。

```coffeescript
hackingDate = (date) ->
  now = date.toISOString()
  console.log now.slice 0, 10

hackingDate new Date
```
