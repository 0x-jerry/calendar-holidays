# Prolog

最早由 Aix-Marseille 大学的 Alain Colmerauer 与 Phillipe Roussel 等人于 1960 年代末研究开发，一般认为正式诞生于 1972 年。Prolog 是一种创建在逻辑学理论基础之上的逻辑编程语言，最初被运用于自然语言等研究领域，现在已广泛应用在人工智能的研究中，包括建造专家系统、自然语言理解和智能知识库等。

```prolog
hacking_date :-
  get_time(TS),
  format_time(Date, "%F", TS),
  write(Date),
  fail.

hacking_date().
```
