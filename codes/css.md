# CSS

CSS 的发明人是 Håkon Wium Lie 与 Bert Bos，但是他们一开始并未使用层叠样式表的概念（Cascading Style Sheets，CSS）。CSS 为结构化文档（HTML 或者 XML）添加样式，比如颜色、字体、排版等。W3C 定义和维护 CSS，目前 CSS2.1 为 W3C 推荐标准，而实际上 CSS3 已被大部分现代浏览器支持。

```css
#date:before {
  content: {{today || '2018-02-19'}};
  font-family: 'Space Mono';
  font-size: 2em;
  color: #cc0000;
}
```