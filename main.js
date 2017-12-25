// 引入vue
import Vue from 'vue';
// 引入vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter); // 安装插件

// 引入Mint-ui
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi); // 安装插件

// 引入mui的css
import './static/vendor/mui/dist/css/mui.css';

// 引入自己的css
import './static/css/style.css';

// 引入axios 
import Axios from 'axios';
Vue.prototype.$ajax = Axios; // 可以使用this.$ajax

// 引入自己的全局组件
import App from './components/app.vue';
import Home from './components/home/home.vue';



// 配置路由对象
let router = new VueRouter();
router.addRoutes([
	{name: 'default',path: '',redirect: {name: 'home'}}, // 默认
	{name: 'home',path: '/home',component: Home}, // 首页
]);

// 引入mock
import './util/mock.js';

// 加入到vue实例中
new Vue({
	el: '#app',
	router: router,
	render: (c) => {
		return c(App);
	},
});