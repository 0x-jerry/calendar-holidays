# Fortran

Fortran 由 IBM 在 1957 年开发，应用于 IBM 704 系统上。它是世界上第一个被正式采用并流传至今的高级编程语言。其名称源自于 Formula Translation（公式翻译）的缩写。

```fortran
PROGRAM hacking_date
  CHARACTER(len=7) :: date
  CALL get_YYYY_MM_DD(date)
  PRINT*, date
CONTAINS
  SUBROUTINE get_YYYY_MM_DD(date)
    CHARACTER(len=10), INTENT(out) :: date
    CHARACTER(len=2) :: dd
    CHARACTER(len=2) :: mm
    CHARACTER(len=4) :: yyyy
    INTEGER :: values(8)
    CALL DATE_AND_TIME(VALUES=values)
    WRITE(  dd, '(12)') values(3)
    WRITE(  mm, '(12)') values(2)
    WRITE(yyyy, '(14)') values(1)
    date = yyyy // '-' // mm // '-' // dd
  END SUBROUTINE get_YYYY_MM-DD
END PROGRAM hacking_date
```
