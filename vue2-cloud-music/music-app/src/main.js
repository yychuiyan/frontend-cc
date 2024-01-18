import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible" // 适配
import "@/styles/reset.css" // 初始化样式
import router from '@/router' // 接收路由对象


// 目标：封装网络请求
// 1. src/utils/request.js 设置基础地址，导出axios函数
// 2. src/api/Home.js 请求方法axios({url:'具体'})
// 3. src/api/index.js 把Home.js里函数引入过来统一导出
// 4. 具体罗页面，引入api/index.js请求方法，async+await等待axios结果回来
// 测试封装的api方法
/*import {recommendMusicAPI} from '@/api'
 
 async function fn() {
 const res = await recommendMusicAPI() // api方法原地会得到axios请求在原地的promise对象(里面有一个ajax请求)
 console.log(res);
 }
 
 fn()*/
import {Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage, Cell, Icon, Search, List} from 'vant';

Vue.use(List);
Vue.use(Search);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false


// 目标：Vant组件库自动适配
// 自动让所有px转成rem(以后我们可以直接写px)-webpack配合postcss和postcss-pxtorem插件就可以翻译css代码，把px转rem使用
// 1. 下载postcss postcss-pxtorem@5.1.1 兼容当前脚手架
// 2. postcss.config.js -填入插件转换的基准值(配置可以复制md)
// 3. 一定要重启服务器
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
