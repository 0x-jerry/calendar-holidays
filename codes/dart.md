# Dart

Dart（/dɑrt/或/dɑːt/）是一种面向对象的开源编程语言，但它采用基于类的编程，由 Google 主导开发，于 2011 年 10 月公开。它由 Google chrome 浏览器 V8 引擎团队领导者 Lars Bak 主持开发，目标在于成为下一代结构化 Web 开发语言。

```dart
void main() {
  DateTime today = new DateTime.now();
  String dateSlug = "${today.year.toString()}-${today.month.toString().padLeft(2,'0')}-${today.day.toString().padLeft(2, '0')}"
  print(dateSlug);
}
```
