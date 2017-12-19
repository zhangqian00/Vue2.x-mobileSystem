<template>
	<div>
		<!-- 轮播图 -->
		<div class="swipe">
            <mt-swipe :auto="2000">
                <mt-swipe-item v-for="(img,index) in bannerData" :key="index">
                	<a :href="img.url">
                		<img :src="img.src" alt="">
                	</a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 九宫格 -->
        <div>
        	<ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-home"></span>
	                    <div class="mui-media-body">Home</div></a>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
	                    <div class="mui-media-body">Email</div></a>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-chatbubble"></span>
	                    <div class="mui-media-body">Chat</div></a>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-location"></span>
	                    <div class="mui-media-body">location</div></a>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-search"></span>
	                    <div class="mui-media-body">Search</div></a>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-phone"></span>
	                    <div class="mui-media-body">Phone</div></a>
                </li>
	        </ul> 
        </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bannerData: [], // 轮播图数据
			}
		},
		created(){
			this.$ajax.get('/lunbo').then((res)=>{
				console.log(res.data)
				this.bannerData = res.data.bannerSrc;
			});
		}
	}
</script>

<style scoped>
	.swipe {
		height: 190px;
	}
</style>