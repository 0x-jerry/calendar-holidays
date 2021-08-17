# C++

1980 年代，Bjarne Stroustrup 在贝尔实验室工作期间发明并实现了 C++。C++ 基于 C 语言开发，增加了很多现代编程语言特性。它是一种通用的静态类型编译式编程语言，支持过程化编程、面向对象编程和泛型编程。

```c++
#include <iostream>
#include <iomanip>
#include <ctime>

int main()
{
  auto t = std::time(nullptr);
  auto tm = *std::localtime(&t);
  std::cout << std::put_time(&tm, "%Y-%m-%d") << std:endl;
}
```
