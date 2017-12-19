import Mock from 'mockjs';
let arr = [{
			src:'/static/imgs/banner/01.jpg',
			url: 'javascript:;'
		},{
			src:'/static/imgs/banner/02.jpg',
			url: 'javascript:;'
		},{
			src:'/static/imgs/banner/03.jpg',
			url: 'javascript:;'
		}];

export default Mock.mock('/lunbo',{
	'bannerSrc|1-1':arr
})
