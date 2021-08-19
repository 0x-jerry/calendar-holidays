# Vala

Vala 由 Jüirg Billeter 和 Raffaele Sandrini 开发，于 2006 年发行。它是一门基于 GNOME 的 GObject 系统的面向对象编程语言，拥有与 C# 类似的语法。其在编译时先转换成 C 代码，然后再使用标准的 C 编译器生成二进制执行文件。

```vala
void main () {
  var now = new DateTime.now_local ();
  print (now.format ("%F"));
}
```
