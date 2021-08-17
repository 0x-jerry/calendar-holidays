# TypeScript

2012 年 10 月，微软发布 TypeScript。它是一种开源编程语言，C# 首席架构师、Delphi 和 Turbo Pascal 创始人 Anders Hejlsberg 参与了开发。它是 JavaScript 的严格超集，可编译为纯 JavaScript，并添加了可选的静态类型和基于类的面向对象编程。

```ts
const now: Date = new Date();
const timeString: String = now.toISOString();
const date: String = timeString.slice(0, 10);

console.log(date);
```
