---
title: 一份够用的Git命令
date: 2022-09-16
categories:
- ToolClass
tags:
  - Git
---

>  配置教程：[mac配置github和gitlab账号](https://zhanghaoju.gitee.io/vblogs/publish/tools/mac%E9%85%8D%E7%BD%AEgithub%E5%92%8Cgitlab%E8%B4%A6%E5%8F%B7.html#%E5%AE%89%E8%A3%85)
>
> Git单独配置：[MAC上Git安装与GitHub基本使用](https://www.jianshu.com/p/7edb6b838a2e)
>
> homebrew安装：[mac下高效安装 homebrew](]https://www.cnblogs.com/joyce33/p/13376752.html)

新版Git合并了checkout和reset

- 原来的`git checkout` 可以使用 `git restore` 代替
- 原来的`git reset HEAD `可以使用 `git restore --staged`代替
- 最新版的git提示都已经更换成了 `restore`

## 关联远程仓库

1. 初始化本地仓库：  `git init`
2. 将文件添加跟踪列表 ： 跟踪新文件 `git add xxxx`
3. 以精简的方式输出文件的状态 `git status -s`
4. 将文件提交到本地仓库： `git commit -m "提交信息"`
5. 将代码仓库与GitHub关联：`git remote add origin github代码仓库的url地址`，git会自动将远程仓库的名字设置为`origin`，方便我们的后续操作
6. 将代码提交到远程GitHub仓库(第一次)：`git push  -u origin master`，如果想将本地master分支上的内容推送到远程master分支上
7. 删除远程库：使用`git remote rm <name>`命令，可以先使用`git remote -v`查看远程库信息
8. 查看远程库信息：`git remote` 显示详细信息：`git remote -v`

## `.gitignore`配置文件

以 `#` 开头的是注释，以/结尾的是目录，以 `/` 开头防止递归，以 `!` 开头表示取反

- 使用 glob 模式进行文件和文件夹的匹配

- 星号 `*` 匹配零个或多个任意字符

- [abc] 匹配任何一个列在方括号中的字符

- 问号 `?` 只匹配一个任意字符

- 在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配 [0-9]

- 两个星号 `**` 表示匹配任意中间目录(`a/**/z` 可以匹配a/z目录、`a/b/z` 或 `a/b/c/z` 等目录)

## 版本库管理

### 查看文件状态

`git diff` : 查看我们修改了什么内容

`git status `:  查看文件状态

### 版本回退

`git log` ：显示从最近到最远的提交日志

`git log --pretty=oneline `：在一行上展示所有提交历史

`git reset --hard <CommitID> `：使用命令，根据指定的提交ID回退到指定版本

`git reflog --pretty=online `： 在旧版本中使用 `git reflog --pretty=online`命令，查看命令操作的历史

`git reset --hard <CommitID> `：再次根据最新的提交ID，跳转到最新的版本

`git reset --hard HEAD^`：在Git中HEAD就是表示当前版本，上一个版本就是HEAD^ 上上个版本是HEAD^^  上10个版本可以标识 HEAD ~ 10

`git reflog`：记录每一次执行的命令

### 撤销修改

`git diff HEAD -- readme.txt` 查看工作区和版本库里面最新版本的区别

`git checkout –- file` ：丢弃工作区的修改，有两种情况

  一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

  一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

  总之，就是让这个文件回到最近一次git commit或git add时的状态。

`git reset HEAD file` : 将已经add存在暂存区的数据回退到add之前

`git reset --soft HEAD^`：将已经commit之后的数据回退到add之后

git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”

### 删除文件

`rm file`： 删除本地文件信息

`git rm file`： 从提交的版本库删除文件

`git checkout -- file`： 误删时从版本库中恢复到最新版本

### 取消合并

`git merge --abort`  取消合并

## 分支操作

### 更新本地分支
查看远程分支
`git branch -a`

更新分支
`git remote update origin --prune`

切换分支
`git checkout test`

如果这样的方式没起作用的话可以使用下面这种方法 在本地创建一个和远程分支同样名字的分支 并切换到这个分支
`git checkout -b test origin/test`

然后更新下这个分支的代码 ok了
`git pull origin test`

### 分支命令系分

`git branch` ：查看所有分支列表

`git remote show 远程仓库名称` ：查看远程仓库中的所有分支列表

`git branch 分支名称` ：创建新分支

`git checkout 分支名称 `： 切换分支

`git checkout -b 分支名称` ：分支的快速创建和切换

  -b 表示创建一个新分支 checkout 表示切换到刚才新建的分支上

`git merge 分支` ：合并分支

例如： `git merge login `首先切换到主分支上，在master分支上运行git merge命令，将login子分支的代码合并到master分支上

`git branch -d 分支名称`：删除分支

`git branch -D 分支名称`：强制删除本地分支

`git push 远程仓库名称 --delete 远程分支名称` ：删除远程仓库中的分支

`git push -u origin payment:pay `： 本地分支推送到远程分支并重命名（本地分支）

`git checkout -b 要修改的本地分支名称`：下载远程仓库到本地并重新命名分支

注意：新版本提供了`switch`来进行切换分支的操作

`git switch -c 分支名称` ：分支的快速创建和切换

## bug修复

- 开发分支暂存工作现场 stash
- 切换主分支，新增一个临时修复分支
- 修复完成后，提交代码，删除临时分支
- 开发分支恢复工作现场，并将修复的问题同步到开发分支上，使用`cherry-pick`命令，复制一个特定的提交到当前分支

可以参考：[git commit 代码提交规范](https://segmentfault.com/a/1190000017205604)

## `git revert` 的用法

`git revert` 的作用是通过创建一个新的版本，这个版本的内容与我们要回退到的目标版本一样，但是`HEAD`指针是指向这个新生成的版本，而不是目标版本。
如果我们想恢复之前的某一版本（该版本不是`merge`类型），但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，就可以用这种方法。
我们使用`git revert HEAD`命令就可以创建一个新的版本，此版本与上一个版本相同。
此时`cat  abc.md`就可以发现输出回到了'hello world'。

![img](https://vuepres-images.oss-cn-shanghai.aliyuncs.com/vue-blog/git.png)

以下是 `git revert` 的三种用法

- `git revert HEAD` ：撤销前一次 commit
- `git revert HEAD^` ：撤销前前一次 commit
- `git revert commit + (commit id)`： 撤销指定的版本，撤销也会作为一次提交进行保存。

## rebase操作

作用：把分叉的提交历史"整理"成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了

目的：使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比

输入`git rebase`在输入`git log`

## 标签操作

`git tag v1.0`：打标签

`git tag`：查看标签

```yaml
git log --pretty=oneline --abbrev-commit`：查找历史提交的commit id 然后打标签：`git tag v0.9 commitId
```

标签不是按时间顺序列出而是按照字母排序的，可以使用`git show <tagname>`查看标签信息

`git tag -a v0.1 -m "version 0.1 released" 1094adb`：创建带有说明的标签

`git tag -d v0.1`：删除标签

`git push origin <tagname>`：推送某个标签到远程

`git push origin --tags`：一次性推送全部尚未推送到远程的本地标签

删除远程标签：

- 首先先从本地删除：`git tag -d <tagname>`
- 从远程删除：`git push origin :<tagname>`
