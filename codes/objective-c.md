# Objective-C

1980 年代，Stepstone 公司的 Brad Cox 和 Tom Love 发明了 Objective-c。它是一种通用、高级、面向对象的编程语言。Objective-C 扩展了标准的 ANSI C 编程语言，将 Smalltalk 式的消息传递机制加入 ANSI C 中。目前，Objective-C 与 Swift 是 macos/osX 和 iOS 操作系统及与其相关的 API、Cocoa 和 CocoaTouch 的主要编程语言。

```objective-c
#import <Foundation/Foundation.h>
int main (int argc, const char * argv[])
{
  NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

  NSDateFormatter *dateFormatter=[[NSDateFormatter allow] init];
  [dateFormatter setDateFormat:@"yyyy-MM-dd"];
  NSLog(@"%@",[dateFormatter stringFormDate:[NSDate date]]);
  [pool drain];
  return 0;
}
```
