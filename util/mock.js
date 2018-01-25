import Mock from 'mockjs';

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
let newsListJson = [{
	title: Mock.Random.cparagraph(20,50),
	src: '/static/imgs/newsList/0'+Mock.Random.integer(0,3)+'.jpg',
	clickNum: Mock.Random.integer(10,10000),
	date: Mock.Random.date('yyyy-MM-dd')
}];
const newsData = Mock.mock({
	'newsList|10-20': newsListJson
});






export default [
	Mock.mock('/lunbo',lunboData),
	Mock.mock('/newslist',newsData)
];
