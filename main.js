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
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	MintUi.Indicator.open({ // 加载loading
	  text: '加载中...',
	  spinnerType: 'fading-circle'
	});
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});
// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
	MintUi.Indicator.close(); // 去掉loading
	// 对响应数据做点什么
	return response;
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});
Vue.prototype.$ajax = Axios; // 可以使用this.$ajax

// 引入自己的全局组件
import App from './components/app.vue';
import Home from './components/home/home.vue';
import Information from './components/information/information.vue';
import Shopcar from './components/shopcar/shopcar.vue';
import Setting from './components/setting/setting.vue';
import NewsList from './components/news/newsList.vue';
import NewsDetail from './components/news/newsDetail.vue';
import PhotoShare from './components/photoShare/photoShare.vue';

// 配置路由对象
let router = new VueRouter();
router.addRoutes([
	{name: 'default',path: '',redirect: {name: 'home'}}, // 默认
	{name: 'home',path: '/home',component: Home}, // 首页
	{name: 'information',path: '/information',component: Information}, // 消息
	{name: 'shopcar',path: '/shopcar',component: Shopcar}, // 购物车
	{name: 'setting',path: '/setting',component: Setting}, // 设置
	{name: 'newsList',path: '/news/list',component: NewsList}, // 新闻列表
	{name: 'newsDetail',path: '/news/detail/:newsId',component: NewsDetail}, // 新闻详情
	{name: 'photoShare',path: '/photoShare',component: PhotoShare}, // 图片分享
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