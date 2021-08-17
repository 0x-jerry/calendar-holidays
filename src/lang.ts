interface Lang {
  language: string;
  describe: string;
  code: string;
}

export const langs: Lang[] = [
  {
    language: "Java",
    describe:
      "JamesGosling 任职 Sun 公司期间发明了 Java，于 1995 年 5 月发布。Java 是使用程度最为广泛、也是目前使用人数最多的编程语言，广泛应用于企业级 Web 应用开发和移动应用开发，拥有跨平台、面向对象、泛型编程、函数式编程等特性。",
    code: `import java.time.*;
public class HackingDate {
  public static void main(String[] args) {
    LocalDate currentDate = LocalDate.now();
    System.out.println(currentDate);
  }
}`,
  },
  {
    language: "C",
    describe:
      "1969-1973 年间，为移植与开发 Unix 操作系统，Dennis Ritchie 和 KenThompson 以 B 语言为基础，在贝尔实验室设计与开发了 C 语言。它是一种通用编程语言，广泛用于系统软件与应用软件开发。学习 C 有助于更清晰地理解程序运行原理和其他语言。",
    code: `#include <stdio.h>
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
}`,
  },
  {
    language: "C++",
    describe:
      "1980 年代，Bjarne Stroustrup 在贝尔实验室工作期间发明并实现了 C++。C++ 基于 C 语言开发，增加了很多现代编程语言特性。它是一种通用的静态类型编译式编程语言，支持过程化编程、面向对象编程和泛型编程。",
    code: `#include <iostream>
#include <iomanip>
#include <ctime>

int main()
{
  auto t = std::time(nullptr);
  auto tm = *std::localtime(&t);
  std::cout << std::put_time(&tm, "%Y-%m-%d") << std:endl;
}`,
  },
  {
    language: "Python",
    describe:
      "1991 年，Guidovan Rossum 创造了 Python，设计上强调代码的易读性和简洁的语法，相比其他语言，使用较少的 Python 代码即可实现相似的功能。Python 入门简单，加之完善的基础代码库和大量第三方库，它的受青辣程度不断提高。此外，Python 也是机器学习领域最流行的编程语言。",
    code: `import datetime
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d"))`,
  },
];
