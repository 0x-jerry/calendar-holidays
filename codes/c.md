# C

1969-1973 年间，为移植与开发 Unix 操作系统，Dennis Ritchie 和 KenThompson 以 B 语言为基础，在贝尔实验室设计与开发了 C 语言。它是一种通用编程语言，广泛用于系统软件与应用软件开发。学习 C 有助于更清晰地理解程序运行原理和其他语言。

```c
#include <stdio.h>
#include <time.h>

int main()
{
  time_t timer;
  char buffer[11];
  struct tm* tm_info;

  time(&timer);
  tm_info = localtime(&time);

  strftime(buffer, 11, "%Y-%m-%d", tm_info);
  puts(buffer);

  return 0;
}
```
