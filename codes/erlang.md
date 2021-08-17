# Erlang

Erlang（/ˈɜːrlæŋ/）由 Joe Armstrong 在瑞典电信设备制造商爱立信所辖的计算机科学研究室开发，并于 1987 年发布正式版本。Erlang 从一开始就致力于解决大规模软件问题，设计用于自下而上地编写并发式、分布式、容错、可扩展和软实时系统的程序。

```erlang
-module('HackingDate').
-export([start/0]).

start() ->
  {{Year, Month, Day}, {Hour, Minute, Second}} = calendar:now_to_datetime(erlang:now()),
  StrTime = lists:flatten(io_lib:format("~4..0w-~2..02-~2..0w", [Year, Month, Day])),
  io:fwrite(StrTime).
```
