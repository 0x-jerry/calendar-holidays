# AppleScript

AppleScript 是苹果公司在 1993 年 10 月推出的一种脚本语言，它的前身是 Hypercard 所使用的脚本语言 Hypertalk。AppleScript 可以用来控制运行于 macOS 上的程序，也可以写成独立运行的 Applet。

```AppleScript
set now  to current date
set y to text -4 thru -1 of ("0000" & (year of now))
set m to text -2 thru -1 of ("00" & ((month of now) as integer))
set d to text -2 thru -1 of ("00" & (day of now))
y & "-" & m & "-" & d
```
