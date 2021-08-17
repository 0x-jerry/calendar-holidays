# Ada

Ada 语言源于美国军方的一个计划，由 Pascal 及其他语言扩展而成，比较接近自然语言和数学表达式，编程语言的命名是为了纪念第一位程序员 Ada Lovelace。Ada95 由 INTERMETRICS 公司的 Tucker Taft 于 1992 到 1995 年间设计。Ada 的重要特征就是其嵌入式风格、模块化设计、编译检查、平行处理、异常处理及泛型编程。

```ada
with ada.calendar;
with gnat.calendar.time_io;

procedure HackingDate is
begin
  gnat.calendar.time_io.put_time(ada.calendar.clock, "%Y-%m-%d");
end HackingDate;
```
