<template>
    <div class="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a>
                    <img class="mui-media-object mui-pull-left" src="">
                    <div class="mui-media-body">
                        <span>新闻标题</span>
                        <div class="news-desc">
                            <p>点击数:1</p>
                            <p>发表时间:2014-01-01</p>
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