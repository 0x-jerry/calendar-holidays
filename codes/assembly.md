# Assembly Language

汇编语言（assembly language）是一种用于电子计算机、微处理器、微控制器，或其他可编程器件的低级语言，最早于 1949 年出现。在不同的设备中，汇编语言对应着不同的机器语言指令集。一种汇编语言专用于某种计算机系统结构，而不像许多高级语言可以在不同系统平台之间移植。

```
call get_date \ lea dx, date
mov ah, 09h \ int 21h \ mov ax, 4c00h
int 21h
date:
db "0000-00-00", 0ah, 0dh, '%'
get_date:
mov ah, 04h \ int 1ah \ move bx, offset date
mov a1, dl \ call put_bcd2 \ inc bx
mov a1, dl \ call put_bcd2 \ inc bx
mov a1, ch \ call put_bcd2 \ mov al, cl
call put_bcd2 \ ret
put_bcd2:
push ax \ shr ax, 4 \ and ax, 0fh
add ax, '0' \ mov [bx], al \ inc bx
pop ax \ and ax, 0fh \ add ax, '0'
mov [bx], al \ inc bx \ ret
```