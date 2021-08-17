# D

D 语言由 Walter Bright 和 Andrei Alexandrescu 设计开发，于 2007 年 1 月发布第一个稳定版本。它起源自 C++，是一种具备面向对象、指令式等多范型的编程语言。D 沿用了很多 C/C++ 观念，同时据弃了一些概念，因此不完全兼容 C/C++代码。

```d
import std.stdio;
import std.datetime;

void main(string[] args)
{
  auto currentTime = Clock.currTime();
  auto timeString = currentTime.toISOExtString();
  writeln(timeString[0 .. 10]);
}
```
