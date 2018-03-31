<template>
    <div class="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
                <router-link :to="{name:'newsDetail',params:{newsId:item.newsId}}">
                    <img class="mui-media-object mui-pull-left" :src="item.src">
                    <div class="mui-media-body">
                        <span class="title">{{item.title}}</span>
                        <div class="news-desc clearfix">
                            <p>点击数:{{item.clickNum}}</p>
                            <p>发表时间:{{item.date}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
	data(){
		return {
			newsList: [], // 新闻列表数据
		}
	},
	created() {
		this.$ajax.get('/newslist').then((res)=>{
            this.newsList = res.data; // 拿到数据
        });
	}
}
</script>

<style scoped>
/*scoped作用是css只作用于当前组件，不会影响其他组件样式*/
.mui-media-body p {
    color: #0bb0f5;
}
.mui-table-view {
    margin-bottom: 70px;
}
.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}
.title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 17em;
    display: block;
}
</style>