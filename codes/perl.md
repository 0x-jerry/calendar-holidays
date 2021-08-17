# Perl

1987 年 12 月，Larry Wall 开发了通用脚本语言 Perl，以方便在 Unix 上进行报表处理工作。Perl 借用了 c、sed、awk、shelt 脚本以及很多其他编程语言的特性，且内部集成了正则表达式功能，它是通用的解释型动态语言。

```perl
($sec, $min, $hour, $mday, $mon, $year, $wday, $yday, $isdst) = localtime();

printf("%d-%02d-%02d", $year + 1900, $mon, $mday);
```
