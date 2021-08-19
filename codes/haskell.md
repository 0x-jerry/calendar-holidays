# Haskell

1990 年，Haskell（/ˈhæskəl/）发布首个版本，是在编程语言 Miranda 的基础上标准化，并以 λ 演算为基础发展而来的。Haskell 是一种标准化的通用纯函数式编程语言，支持情性求值、模式匹配、列表解析、类型类和类型多态。

```haskell
import Date.Time
import System.Locale

main = do
  let dateFormat = "%F"

  timeZone <- getZonedTime
  putStrLn $ formatTime defaultTimeLocale dateFormat timeZone
```
