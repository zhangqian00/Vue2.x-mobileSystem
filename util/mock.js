import Mock from 'mockjs';
// mockjs会拦截对应的请求地址，返回你配置的数据

// 首页轮播图数据
let lunboJson = [{
			src:'/static/imgs/banner/01.jpg',
			url: 'javascript:;'
		},{
			src:'/static/imgs/banner/02.jpg',
			url: 'javascript:;'
		},{
			src:'/static/imgs/banner/03.jpg',
			url: 'javascript:;'
		}];
const lunboData = Mock.mock({
	'bannerSrc|1-1': lunboJson
});

// 新闻列表数据
let newsListJson = [];
for(let i=0;i<20;i++){
	newsListJson.push({
		title: Mock.Random.cparagraph(20,50),
		src: '/static/imgs/newsList/0'+Mock.Random.integer(1,3)+'.jpg',
		clickNum: Mock.Random.integer(10,10000),
		date: Mock.Random.date('yyyy-MM-dd'),
		newsId: Mock.Random.natural(10000,99999)
	})
}

// 新闻详情
let fenleiArr = ['民生经济','体育新闻','娱乐新闻','军事新闻','国际新闻'];
let newsDetailJson = {
	title: Mock.Random.cparagraph(1),
	fenlei: Mock.mock({'name|1': fenleiArr}).name,
	clickNum: Mock.Random.integer(10,10000),
	date: Mock.Random.date('yyyy-MM-dd'),
	content: Mock.Random.cparagraph(10,20),
};

// 图文分享
let photoShare = [{
		category: '全部',
		items: [{
			src:'/static/imgs/banner/01.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/02.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/03.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		}]
	},{
		category: '家居生活',
		items: [{
			src:'/static/imgs/banner/02.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/01.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/03.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		}]
	},{
		category: '摄影设计',
		items: [{
			src:'/static/imgs/banner/03.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/02.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/01.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		}]
	},{
		category: '明星美女',
		items: [{
			src:'/static/imgs/banner/02.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/03.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/01.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		}]
	},{
		category: '空间设计',
		items: [{
			src:'/static/imgs/banner/01.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/03.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/02.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		}]
	},{
		category: '美食分享',
		items: [{
			src:'/static/imgs/banner/02.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/01.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		},{
			src:'/static/imgs/banner/03.jpg',
			title: Mock.Random.cparagraph(1),
			detail: Mock.Random.cparagraph(3)
		}]
	}];
//
export default [
	Mock.mock('/lunbo',lunboData), // 轮播图数据
	Mock.mock('/newslist',newsListJson), // 新闻列表数据
	Mock.mock('/newsDetail',newsDetailJson), // 新闻详情数据
	Mock.mock('/photoShare',photoShare), // 图文分享
];
