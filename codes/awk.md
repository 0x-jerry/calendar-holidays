# AWK

AWK 发布于 1977 年，设计者是 Alfred Aho、Peter Weinberger 以及 Brian Kernighan。它是一种优良的文本处理工具，是 Linux 及 Unix 环境中现有的功能最强大的数据处理引擎之一

```awk
BEGIN {
  cmd = "date \"+%Y-%m-%d\""
  cmd | getline var
  print var
  close(cmd)
}
```
