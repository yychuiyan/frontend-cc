---
title: 浏览器缓存
date: 2022-08-31 23:50:11
permalink: /document/frontend/browser/
---

## 浏览器缓存

#### 浏览器缓存主要有以下几种：

1、**http缓存**，是基于HTTP协议的浏览器文件级缓存机制。

2、**websql**，这种方式只有较新的chrome浏览器支持，并以一个独立规范形式出现

3、**indexDB**，是一个为了能够在客户端存储可观数量的结构化数据，并且在这些数据上使用索引进行高性能检索的 API

4、**Cookie**，一般网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据（通常经过加密）

5、**Locastorage**，html5的一种新的本地缓存方案，目前用的比较多，一般用来存储ajax返回的数据，加快下次页面打开时的渲染速度

6、**Sessionstorage**，和localstorage类似，但是浏览器关闭则会全部删除，api和localstorage相同，实际项目中使用较少。

7、**application cach**，是将大部分图片资源、js、css等静态资源放在manifest文件配置中

8、**cacheStorage**，是在ServiceWorker的规范中定义的，可以保存每个serverWorker申明的cache对象

9、**flash缓存**，这种方式基本不用，这一方法主要基于flash有读写浏览器端本地目录的功能