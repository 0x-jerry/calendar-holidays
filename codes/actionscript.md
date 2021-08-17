# ActionScript

ActionScript 的设计者是 Gary Grossman，于 1998 年发布。它是原 Macromedia 公司（后并入 Adobe）为其 Flash 产品开发的一种基于 ECMAScript 的面向对象编程语言。ActionScript 可用于网页制作、Adobe Flash 动画和 RIA 应用程序的开发。

```actionscript
import flash.globalization.DateTimeFormatter;

var d:Date = new Date();
var dtf:DateTimeFormatter = new DateTimeFormatter("en-US");
dtf.setDateTimePattern("yyyy-MM-dd");
trace(dtf.format(d));
```
