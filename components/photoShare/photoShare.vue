<template>
	<div class="tmpl">
        <!-- 引入返回导航 -->
        <div class="photo-header">
            <ul>
                <li>
                    <a href="javascript:;">标题1</a>
                </li>
                <li>
                    <a href="javascript:;">标题2</a>
                </li>
                <li>
                    <a href="javascript:;">标题3</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li>
                    <a>
                        <img src="../../static/imgs/banner/02.jpg">
                        <p>
                            <span>图片标题</span>
                            <br>
                            <span>图片摘要</span>
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		data(){
			return {
				category: [], // 分类
			}
		}
	}
</script>

<style scoped>
	.photo-header li {
	    list-style: none;
	    display: inline-block;
	    margin-left: 10px;
	    height: 30px;
	}

	.photo-header ul {
	    /*强制不换行*/
	    white-space: nowrap;
	    overflow-x: auto;
	    padding-left: 0px;
	    margin: 5px;
	}


	/*下面的图片*/

	.photo-list li {
	    list-style: none;
	    position: relative;
	}

	.photo-list li img {
	    width: 100%;
	    height: 230px;
	    vertical-align: top;
	}

	.photo-list ul {
	    padding-left: 0;
	    margin: 0;
	}

	.photo-list p {
	    position: absolute;
	    bottom: 0;
	    color: white;
	    background-color: rgba(0, 0, 0, 0.3);
	    margin-bottom: 0;
	}

	.photo-list p span:nth-child(1) {
	    font-weight: bold;
	    font-size: 16px;
	}

</style>