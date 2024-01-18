---
title: 什么是BFC和IFC？
date: 2022-09-06
categories:
- CSS
tags:
  - BFC&IFC
---

## BFC布局规则

内部的Box会在垂直方向，一个接一个地放置

Box垂直方向上的距离由 `margin` 决定，同属一个BFC的两个相邻Box的 `margin` 会发生重叠

每个元素的左外边缘(margin-left)，与包含块的左边(contain box left)相接触(对于从左到右的格式化)。

即使存在浮动也是如此，除非这个元素自己形成一个新的BFC

BFC的区域不会与float box重叠

**BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素**

计算BFC的高度时，浮动元素也参与计算

### BFC触发条件

1、`float`的值不为`none`

2、`overflow`的值不为`visible`

3、`display`的值为`table-cell`、`table-caption`和`inline-block`之一

4、`position`的值不为`static`或则`releative`中的任何一个

### BFC举例

#### 解决`maring`重叠

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
  .p {
      width: 200px;
      height: 50px;
      margin: 50px 0;
      background-color: red;
  }

  .wrap {
      overflow: hidden;
      background: #00b48f;
  }
  </style>
</head>
<body>
<div class="p"></div>
<div class="p"></div>
<div class="wrap">
  <div class="p"></div>
</div>
</body>
</html>
```

#### 两栏自适应布局

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
  div {
      width: 300px;
  }

  .aside {
      width: 100px;
      height: 150px;
      float: left;
      background: #00a4ff;
  }

  .main {
      height: 200px;
      background-color: #7FFFD4;
      overflow: hidden;
  }
  </style>
</head>
<body>
<div class="aside"></div>
<div class="main"></div>
</body>
</html>
```

#### 清除内部浮动

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
      .child {
        border: 1px solid red;
        height: 100px;
        width: 100px;
        float: left;
      }

      .parent {
        border: 1px solid black;
        width: 300px;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="child"></div>
    </div>
  </body>
</html>
```

## IFC布局规则

1. 内部的盒子会在水平方向，一个个地放置，起点是包含块的顶部；
2. IFC的高度，由里面最高盒子的高度决定；
3. 当一行不够放置的时候会自动切换到下一行；
4. 水平方向上的margin border padding在框之间得到保留
5. 在垂直方向上可以以不同的方式对齐：顶部或底部对齐，或者根据文字的基线对齐

### IFC触发条件

`font-size`、`line-height`、`height`、`vertical-align`

### IFC举例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
  .box {
      width: 150px;
      height: 150px;
      display: inline-block;
      word-wrap: break-word;
      background: green
  }

  #inlineBox {
      vertical-align: top;
  }
  </style>
</head>
<body>
<div class="box">34u324039284903840932jo43k2jlk4khjvhfkdjv897897897fd</div>
<div class="box" id="inlineBox">adsdjjdjjdks</div>
</body>
</html>
```
