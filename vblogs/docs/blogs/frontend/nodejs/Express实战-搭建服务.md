---
title: Express实战-搭建服务
date: 2022-09-26
categories:
- NodeJS
tags:
  - Express
---

## 什么是express

express是基于Node.js平台，快速、开放、极简的web开发框架

express的本质：一个npm上的第三方包，提供了快速创建Web服务器的快捷方法

## express能做什么？

Web网站服务器：专门对外提供Web网页资源的服务器

API接口服务器：专门对外提供API接口的服务器\
使用express，我们可以方便、快速的创建Web网站的服务器或API接口的服务器

## 安装&配置

安装的前提是本地已经安装了`node.js` 创建目录

-   在创建好的工作目录下进行初始化操作

```yaml
yarn init
```

-   安装依赖

```yaml
yarn add express
```

-   设置托管静态资源：`express.static()`

express提供了一个非常好用的函数，叫做`express.static()`，通过它，我们可以非常方便地创建一个静态资源服务器

```js
app.use(express.static('public'));
```

这样就可以访问public目录下的所有文件了，express在指定的静态目录中查找文件，并对外提供资源的访问路径，因此，存放静态文件的目录名不会出现在url中

可以参考官网的详细解释：[利用 Express 托管静态文件](https://www.expressjs.com.cn/starter/static-files.html)

-   nodemon：在编写调试Node.js项目的时候，如果修改了项目代码，则需要频繁的手动close掉，然后再重新启动，可以使用nodemon进行监听项目文件的变动，当代码变动后，会自动重启项目，极大的方便开发和调试

安装：`npm install -g nodemon`

使用命令`nodemon app.js`来启动项目，当代码修改之后会被nodemon监听到，从而实现自动重启项目的效果

## 启动服务

```js
// 导入express
const express = require('express');
// 创建web服务器
const app = express();
// 托管静态资源 调用express.static()方法，快速的对外提供静态资源
app.use(express.static('public1'));
// 设置端口号
const port = 3000;
// 监听请求
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// 启动服务器
app.listen(port, () => {
  console.log(`服务启动，端口号为：${port}`);
});
```


服务启动成功，访问`http://localhost:8000/`显示页面

下一篇将讲解如何通过Express连接MySQL数据库，模块化搭建项目以及编写接口
