---
title: webstorm插件及配置
date: 2022-09-18
categories:
- ToolClass
tags:
  - webstorm
---

## 安装卸载

> 网上关于卸载ws参差不齐，总结了一下

官网安装：[传送门](https://www.jetbrains.com/webstorm/)

mac下重置webstorm

需要删除四个部分文件，使用终端操作

Preferences

```yaml
# 切换Preferences文件夹
cd ~/Library/Preferences/
# 删除
rm -rf com.jetbrains.WebStorm.plist
```

Caches
```yaml
# 切换Caches
cd ~/Library/Caches/
# 删除JetBrains文件
rm -rf JetBrains
```

Plugins
```yaml
# 切换Application Support文件夹
cd ~/Library/Application\ Support
# 删除JetBrains文件
rm -rf JetBrains
```

Logs
```yaml
# 进入Logs文件夹
cd ~/Library/Logs/
# 删除JetBrains
rm -rf JetBrains
```

## 插件

> 以下插件不分先后顺序，用到了绝对让你工作事半功倍

### One Dark Theme

尝试了很多主题，确实发现，ws相较于vscode的渲染高亮确实不好，这个主题使用起来算是还不错的

### AtomMaterial Icons

侧边栏图标icon渲染显示

### CodeGlance

`sublime` 和 `vscode` 都默认会在编辑器右侧显示代码缩略图，`webstorm` 需要自己装插件实现

### GitToolBox

代码中显示git提交信息

### Wechat mini program support

小程序开发者的福音, 支持微信小程序文件格式的支持等

### .env files support

环境变量文件类型支持，渲染`.env`文件

### Translation

翻译插件, 内置谷歌百度有道3大翻译, 可以翻译代码中的变量, 很适合英文不好的同学

### .ignore

在使用git的时候，经常会碰到一些不想提交的文件，这个时候就需要用到.gitignore文件了。

`.gitignore`不需要完全从头自己写，github提供了一系列配置模板，链接传送门：https://github.com/github/gitignore

### JS GraphQL

如果你使用 `GraphQL` 的话，这是必装的插件，提供 `GraphQL` 文件的语法高亮，`config` 文件支持等等一系列功能。

📢：插件后续会持续更新，有小伙伴觉得有漏掉的欢迎留言补充~

## 配置

### 键盘映射

这里我选择的是 vscode(mac) 可以按照自己习惯选择

### 启动时不打开上次项目

设置-->Appearance & Behavior --> System Settings --> 将Project下Reopen projects on startup选项取消

### 取消代码中的黄色警告线

设置-->Editor --> Color Scheme --> General --> 找到Weak Warning，取消选中的颜色提示



