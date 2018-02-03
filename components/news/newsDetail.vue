<template>
	<div class="tmpl">
		<div class="news-title">
			<p>{{newsInfo.title}}</p>
			<div class="detail clearfix">
				<span>分类：{{newsInfo.fenlei}}</span>
				<span>点击数：{{newsInfo.clickNum}}</span>
				<span>添加时间：{{newsInfo.date}}</span>
			</div>
		</div>
		<div class="news-content">{{newsInfo.content}}</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				newsInfo: {}, // 新闻详情数据
			}
		},
		created(){
			//let id = this.$route.params.newsId; // 获取newsId参数,此处并没有用到，写一下获取参数的方式
			// 发送请求
			this.$ajax.get('/newsDetail').then((res)=>{
				console.log(res)
				this.newsInfo = res.data;
			});
		}
	}
</script>

<style scoped>
	.news-title p {
		padding-left: 5px;
		font-size: 20px;
		font-weight: 700;
		color: #0a87f8;
	}
	.news-title span {
		width: 45%;
		margin: 2px 3px 2px 0;
		float: left;
	}
	.news-title span:last-child {
		width: 100%;
	}
	.news-title {
		margin-top: 5px;
		border-bottom: 1px solid rgba(0,0,0,.2);
	}
	.detail {
		padding: 4px 5px;
	}
	.news-content {
		padding: 10px 5px;
		text-indent: 2em;
	}
</style>