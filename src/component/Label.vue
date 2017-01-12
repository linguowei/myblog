<template>
	<div>
		<div class="content-panel-header">
			<h4>标签</h4>
		</div>
		<div class="content-panel-content">
			<ul class="label-list-wrap">
				<li v-for="item in articleLabel" @click="labelClassification(item._id)">
                    <img src="../assets/label.png" height="25" width="25">
					<h3 class="articleLabel-title">
                        {{item.tagName}}
                    </h3>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
            articleLabel: [],
		}
	},
	mounted: function(){
        // 请求标签数据列表
        this.$http.get('/api/getArticleLabel').then(
            respone => {
                this.articleLabel =  respone.body
            },
            respone => {
                Message.error('请求数据出错，请重新刷新页面')
            }
        )
    },
    methods: {
        labelClassification: function(tagId){
            this.$router.push({path: 'home', query: {tagId: tagId}})
        }
    }
}
</script>

<style>
.label-list-wrap {
    padding: 0 22px 0 22px;
}
.label-list-wrap > li {
    height: 40px;
    width: 160px;
    float: left;
    line-height: 55px;
    padding: 5px 10px 5px 10px;
}
.label-list-wrap > li > img {
    display: block;
    float: left;
    padding: 13px 5px 15px 15px;
}
.label-list-wrap > li > h3 {
    width: 170px;
    height: 36px;
    line-height: 36px;
    padding: 5px 0 5px 0;
    cursor: pointer;
    color: #7e7e7e;
    background-color: #f3f3f3;
    border-radius: 3px;
    margin: 3px 0;
}
.label-list-wrap > li {
    transition: all 0.5s;
}
.label-list-wrap > li:hover {
    transform: scale(1.1);
    transition: all 0.5s;
}
</style>