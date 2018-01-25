<template>
    <div class="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
                <a>
                    <img class="mui-media-object mui-pull-left" :src="item.src">
                    <div class="mui-media-body">
                        <span>{{item.title}}</span>
                        <div class="news-desc">
                            <p>点击数:{{item.clickNum}}</p>
                            <p>发表时间:{{item.date}}</p>
                        </div>
                    </div>
                </a>
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
            console.log(res.data);
            this.newsList = res.data.newsList;
        });
	}
}
</script>

<style scoped>
.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}
</style>