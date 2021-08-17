# Clojure

Clojure（/ˈkloʊʒər/）由 Rich Hickey 开发，并于 2007 年发布。它是一套现代的 Lisp 语言的动态语言版，可以执行于 Java 虚拟机、通用语言执行平台以及 JavaScript 引擎之上。

```clojure
(ns hackingdate.core
  (:require (clj-time [core :as time]
                      [coerce :as tc]
                      [format :as f])))

(f/unparse (f/formatter "yyyy-MM-dd") (time/now))
```
