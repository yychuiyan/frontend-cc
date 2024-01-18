## VuePress博客搭建

因为`vuepress`本身就是一个文档型的页面，比较简约，这里使用的是大佬[午后南杂](https://www.recoluan.com/)制作的一个主题，个人认为应该是vuepress最好的主题之一
Cancel changes
### 安装

全局安装：`npm install @vuepress-reco/theme-cli -g`

输入指令进行初始化项目：`theme-cli init`

在初始化时，会让你填写一些信息，例如：博客名称、博客标题、博客描述等等，可以按需填写也可以直接回车跳过，后续这些信息都还可以自己填写的

```js
├── blog 
     ├── .vuepress      
     │   ├── public   // 存放静态资源
     │   │     ├── avatar.png  // 头像图片 
     │   │     ├── favicon.ico   // 网站icon图标
     │   │     ├── hero.png    // 我也不知道有啥用，删了也可以
     │   │     └── logo.png    // 网站导航栏左上角的logo图片
     │   │   
     │   └── config.js      // 配置文件，非常重要！！！  
     ├── blogs  // 存放文章，即.md文件
     │   ├── ...
     │   ├── ...
     │   └── ... 
     ├── docs     // 存放一些后续需要配置的文件，暂时不需要了解
     ├── .gitignore       // 提交git仓库时需要忽略的文件
     ├── package.json      // 管理包文件
     └── README.md        // 自动生成的，我们可以先不管
```

### 配置`package.json`文件

```json
{
  "name": "yychuiyan",
  "version": "1.0.0",
  "author": "reco_luan",
  "description": "",
  "scripts": {
    "start": "vuepress dev .",
    "dev": "vuepress dev . --open --host \"localhost\"",
    "build": "vuepress build .",
  },
  "devDependencies": {
    "vuepress": "1.8.2",
    "vuepress-theme-reco": "1.6.14"
  }
}
```

### 启动项目

进入项目根目录->安装依赖包->启动

```js
// 第一步，进到项目根目录中
cd blog
// 第二步，安装依赖包（这个过程很慢，需要等待）
npm install
// 第三步，等依赖包下完了以后再执行该指令启动项目
npm/yarn run dev
```

### 配置信息(`config.js`)

```js
module.exports = {
	// 1. 博客标题 2. 加载动画时的大标题 3.标签栏的title
	// "title": "夜雨炊烟",
	// 1. 加载动画时的副内容 2. 网站描述节点，用于SEO
	// "description": "夜雨炊烟",
	// 部署到github上的配置
	"base": "/",
  // 设置语言：因为 VuePress 默认的 lang 为 en-US，导致文章时间写入的格式为 2021-12-12 ，但是显示的是 12/12/2021
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
	// 文档 head
	"head": [
		[
			"link", // link标签
			{
				"rel": "icon", // rel属性值icon
				"href": "/favicon.ico" // href属性值为 /favicon.ico
			}
		],
		[
			"meta", // 生成meta标签
			{
				"name": "viewport", // name属性值为viewport
				// content属性值为width=device-width,initial-scale=1,user-scalable=no
				"content": "width=device-width,initial-scale=1,user-scalable=no"
			}
		],
		["meta", {
			"name": "keywords",
			"content": "前端,js,css"
		}],
		['meta', {
			name: 'author',
			content: '夜雨炊烟'
		}],
	],
	// 当前使用的主题
	"theme": "reco",
	// 主题的配置信息
	"themeConfig": {
		// 导航栏的配置信息
		"nav": [
			{
				"text": "首页", // 按钮名称
				"link": "/", // 跳转链接路由
				"icon": "reco-home" // 按钮前置图标
			},
			{
				"text": "时间线",
				"link": "/timeline/",
				"icon": "reco-date"
			},
			{
				"text": "Docs",
				"icon": "reco-message",
				"items": [
					{
						"text": "vuepress-reco",
						"link": "/docs/theme-reco/"
					}
				]
			},
			{
				"text": "关于",
				"icon": "reco-message",
				// 子菜单
				"items": [
					{
						// 子菜单中的导航按钮
						"text": "GitHub",
						"link": "https://github.com/recoluan",
						"icon": "reco-github"
					}
				]
			}
		],
		// 侧边栏的导航信息
		"sidebar": {
			"/docs/theme-reco/": [
				{
					title: '一些文件',    // 标题信息
					collapsable: true,   // 是否可折叠
					children: [
						"", // 字符串对应的是README.md
						"theme", // theme.md
						"plugin", // plugin.md
						"api" // api.md
					]
				}
			]
		},
		// 当前项目类型
		"type": "blog",
		// 导航栏的配置信息
		"blogConfig": {
			"category": {
				"location": 2, // 位置
				"text": "前端导航" // 名称
			},
			"tag": {
				"location": 3,
				"text": "Tag"
			}
		},
		// 友链
		"friendLink": [
			{
				"title": "午后南杂",
				"desc": "Enjoy when you can, and endure when you must.",
				"email": "1156743527@qq.com",
				"link": "https://www.recoluan.com"
			},
			{
				"title": "vuepress-theme-reco",
				"desc": "A simple and beautiful vuepress Blog & Doc theme.",
				"avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
				"link": "https://vuepress-theme-reco.recoluan.com"
			}
		],
		// 左侧logo图片
		"logo": "/logo.png",
		// 属性是否有搜索功能
		"search": true,
		//
		"searchMaxSuggestions": 10,
		// 最后一次更新时间文案
		"lastUpdated": "Last Updated",
		// 作者名称
		"author": "夜雨炊烟",
		// 头像
		"authorAvatar": "/avatar.png",
		"record": "xxxx", // ICP备案号
		// "recordLink"： // ICP 备案指向的链接
		// "cyberSecurityRecord"：// 公安部备案文案
		// "cyberSecurityLink"：// 公安部备案指向链接
		// 博客的开始时间
		"startYear": "2022"
	},
	"markdown": {
		// 代码块显示行号
		"lineNumbers": true
	}
}
```

### 编写文章

### 部署上线

#### 推送到GitHub托管

使用 [Github Pages](https://link.segmentfault.com/?enc=9KbMtsJevt93iSpJBlKFAg%3D%3D.tSVmJ4j28vUW3coIkJhViwCER%2B844B%2B%2FJau4pFsCzOg%3D) 。什么是 Github Pages 呢？简单说就是 Github 提供的、用于搭建个人网站的静态站点托管服务。很多人用它搭建个人博客。这种方式的好处是免费、方便，坏处是速度可能会有些慢、不能被国内的搜索引擎收录。

- 新建仓库一： USERNAME.github.io （不用克隆到本地）

​	注意：`USERNAME` 必须是你 Github 的账号名称

- 新建仓库二：取一个仓库名称，例如：yychuiyan，clone到本地，将博客copy到该仓库下

​	用于开发博客

- 在根目录创建一个`deploy.sh` 文件

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:USERNAME/USERNAME.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
```

将部署到的仓库变更成自己的

二者关系：仓库一负责显示网站内容，我们不需要改动它；日常开发和新增内容，都在仓库二中，并通过 `npm run deploy` 命令，将代码发布到仓库一。

- 修改`package.json`文件

```json
"scripts": {
    "start": "vuepress dev .",
    "dev": "vuepress dev . --open --host \"localhost\"",
    "build": "vuepress build .",
    "deploy": "bash deploy.sh" 
  },
```

- 执行发布

​	命令：`npm run deploy`

在GitHubPages下切换对应分支，访问链接`https://zhanghaoju.github.io/`

- 同步代码本地代码到仓库二
