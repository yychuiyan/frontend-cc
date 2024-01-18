---
title: react项目中token失效路由跳转处理
date: 2022-10-12
categories:
- React
tags:
  - token
  - hash&history
  - react鉴权
---
## react路由介绍

在react中有两种路由模式，分别是 **hash** 和 **history ，** 为了方便大家理解，我们先来了解下这两个路由

### 两者区别

#### 外观

使用`hash`模式下的URL，网络路径中会有一个`#`号进行拼接，而`history`没有带 `#`

#### 兼容性

`hash`能够兼容到IE8，`history`只能够兼容到IE10

#### 运行原理

`hash`是通过`window.onhashchange`的方式进行监听变化，从而实现无刷新跳转，每次`hash`变化都会触发网页跳转，也就是浏览器的前进和后退，虽然`hash`会改变URL，但是不会触发页面重新加载。简而言之所有页面的跳转都是在客户端进行的，跳转的过程不算是一次http请求，所以这种模式对`SEO`优化是很不友好的。

`history`模式在对当前页面进行刷新时，此时浏览器会重新发起请求。`history`是利用H5的 `history`中新增的两个API `pushState()` 和 `replaceState()` 和一个事件`onpopstate`来监听URL变化，`history`每次刷新都会重新请求服务器，需要服务端来允许地址是否可访问，如果没有设置的话，会导致404页面。




如果对项目没有特殊要求，可以直接使用`hash`模式开发，如果需要SEO优化那么一定要选`history`

## react路由使用

了解了`hash`和`history`基础介绍之后，我们接着引入react项目下token失效之后怎么跳转到登录页面

### hash模式路由跳转处理

首先路由模块是引入`HashRouter`==> `hash`模式的

```
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '@/pages/login';
import BlogMenu from '@/pages/layout';
import Register from '@/pages/register';
import NotFound from '@/pages/404';
  <Router>
  	<Switch>
      <Route path="/api/login" component={Login}></Route>
      <Route path="/api/register" component={Register}></Route>
      <Route
        path="/"
        render={() =>
        	localStorage.getItem('token') ? (
              <BlogMenu />
            ) : (
            	<Redirect to="/api/login"></Redirect>
            )
          }
        ></Route>
        <Route path="*" component={NotFound}></Route>
  	</Switch>
  </Router>
```

在**utils** -> **http.js** 请求文件中进行验证的处理

```
        case 401:
          // token
          console.log('服务器认证失败');
          localStorage.removeItem('token');
          // 退出登录
          window.location.href = '#/api/login';
          break;
```

使用原生的window方法，强制跳转到 **login** 页面，这种方式在`hash`模式下没有问题，在`history`下跳转时会出现白屏的情况

### history模式路由跳转处理

在 **utils** 文件夹中新建一个`history.js`文件，引入`history`并导出

```
import { createBrowserHistory } from 'history';

export default createBrowserHistory();
```

将`hash`模式路由进行修改，找到路由文件，将 `HashRouter as Router`修改为`Router`，然后引入`history`文件，在标签`<Router>`中引入`history`

```
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '@/pages/login';
import BlogMenu from '@/pages/layout';
import Register from '@/pages/register';
import NotFound from '@/pages/404';
import history from '@/utils/history';

  <Router history={history}>
  	<Switch>
      <Route path="/api/login" component={Login}></Route>
      <Route path="/api/register" component={Register}></Route>
      <Route
        path="/"
        render={() =>
        	localStorage.getItem('token') ? (
              <BlogMenu />
            ) : (
            	<Redirect to="/api/login"></Redirect>
            )
          }
        ></Route>
        <Route path="*" component={NotFound}></Route>
  	</Switch>
  </Router>
```

在 **utils** -> **http.js** 请求文件中引入`history`文件，进行路由的跳转

```
import history from './history';
history.push('/api/login')
```




参考链接：

[react 中token失效Router路由跳回login页面的(history出现白屏)解决方案](https://blog.csdn.net/weixin_58206976/article/details/121429626)

[hash和history的区别](https://blog.csdn.net/weixin_50736511/article/details/124548003)
