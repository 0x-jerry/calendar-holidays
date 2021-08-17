# Lisp

Lisp 起源于 1958 年，由 John McCarthy 在麻省理工学院发明。它具有独特和完全括号的前绕符号表示法，是至今第二悠久而仍广泛使用的高级编程语言。因为是早期的高级编程语言之一，它很快成为当时人工智能研究中最受欢迎的编程语言。

```lisp
(multiple-value-bind
  (second minute hour date month year day-of week dst-p tz)
  (get-decoded-time)
  (format t "~d-~2,'0d-~2,'0d"
    year
    month
    date))
```
