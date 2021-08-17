# Verilog

Verilog 由 Gateway 设计自动化公司的工程师于 1983 年末创立，并于 1984 年发布。它是一种用于描述、设计电子系统（特别是数字电路）的硬件描述语言，主要用于集成电路设计，特别是超大规模集成电路的计算机辅助设计。Verilog 是电气电子工程师学会（IEEE）的 1364 号标准。

```verilog
module hackingdate;
  reg [23:0] today [0:1];
  initial
    begin
      $system("+%d-%m-%d > date_file");
      $readmemh("date_file", today[0]);
      $display(today);
      $finish;
    end
endmodule
```
