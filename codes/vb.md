# Visual Basic

1991 年 4 月，微软发布 Visual Basic 1.0 for Windows 版本，由 Alan Cooper 设计开发，是第一个可视编程软件。它源于编程语言 Basic，拥有图形用户界面和快速应用程序开发系统，可以轻易使用 DAO、RDO、ADO 连接数据库，或者轻松创建 ActiveX 控件。

```vb
Imports System

Public Module HackingDate
  Public Sub Main(args() As string)
    Console.WriteLine(DateTime.Now.ToString("yyyy-MM-dd"))
  End Sub
End Module
```
