---
title: mac配置github和gitlab账号
date: 2022-02-22
categories:
- ToolClass
tags:
  - github
  - gitlab
---

>  前言：网上各种安装教程参差不齐，反复尝试了好几遍，中间耽误了很长时间，所以特意记录一下

## 安装

建议使用 Homebrew安装，macOS 安装 Git 最好用 Homebrew，方便快捷  [Mac必备神器Homebrew](https://zhuanlan.zhihu.com/p/59805070)

```javascript
brew install git
```

安装方式有很多，教程网上一大堆，就不多赘述了

## 配置

安装完成之后下面就是配置了，首先进入.ssh文件夹

```bash
cd ~
cd ~ /.ssh
```

注：初始化的情况下是没有config文件夹的，后面会用到

```bash
touch config
vim config
```

录入下方命令，默认回车，生成GitHub和GitLab对应的公私密钥

```bash
ssh-keygen -t rsa -C  'github账户邮箱'  -f ~/.ssh/id_rsa_gitlab
ssh-keygen -t rsa -C  'gitlab账户邮箱'
```

`-f  ~/.ssh/id_rsa_gitlab`：作为别名用于区分

这个时候再使用ls命令就可以看到生成的密钥了，使用命令 cat  id_rsa_github.pub会显示github对应的公钥，copy下来

```bash
ls
cat id_rsa_github.pub
```

![img](https://vuepres-images.oss-cn-shanghai.aliyuncs.com/vue-blog/deploy_git1.png)

1. 以GitHub为例，settings->SSH keys->new SSH keys 将copy的公钥粘贴进来，nice！！！离成功不远了
2. 接下来就是要配置生成的config文件了，进入.ssh文件夹下，使用命令：

```bash
open config
```

进行配置

```bash
Host ssh.gitlab.com
HostName ssh.gitlab.com
User xxx@inc.com
Port 22
IdentityFile ~/.ssh/id_rsa

Host github.com
HostName github.com
User xxxxx@outlook.com    // 邮箱地址
IdentityFile ~/.ssh/id_rsa_github
```

注：如果公司gitlab端口是22的话需要在gitxx域名前面加上ssh，不然会报错：**ssh: connect to host github.com port 22: Connection timed out**

网上也有一些教程配置说加443端口，不同公司的权限端口配置不一样，所以我试了八百遍，确实不行......

[传送门](https://gist.github.com/Tamal/1cc77f88ef3e900aeae65f0e5e504794)

接下来就是测试是否链接成功了，在测试之前，我们还要完成一个前置步骤

```bash
// 全局配置
git config --global user.name "账户名"                    # 账户名
git config --global user.email "xxxxx@inc.com"    # 公司邮箱

// 本地配置
$ git config --local user.name  '夜雨炊烟'
$ git config --local user.email  'xxxxx@outlook.com'
```

在进行本地配置的时候需要在一个已有的github仓库中才可以，不然会有冲突，设置之后如果git pull的时候出现：You can replace "git config" with "git config --global"相关的提示

可以参考下面链接：[传送门](https://blog.csdn.net/BIG_PEI/article/details/122329816)

好了，离成功只有一步了，进行测试链接是否成功

```bash
ssh -T git@github.com
ssh -t git@gitlab.com  # 视具体公司域名地址而定
```

大功告成！

![img](https://vuepres-images.oss-cn-shanghai.aliyuncs.com/vue-blog/deploy_git2.png)

## 遇到的问题

1. 在进行测试链接的时候报错：

The authenticity of host 'github.com(xxxxxx)' can't be established

这个时候会让你选择确定是否链接，输入 yes 回车，因为ssh为了安全，会从本地文件的known_hosts (.ssh文件夹中，如果没有生成，新建一个文件就好)中查看已知host.输入yes回车,就会往known_hosts里面新增一条记录。下次再访问就OK了

## 其他

查看全局配置

```bash
git config --global --list
```

取消全局配置

```bash
git config --global --unset name
git config --global --unset email
```


