<template>
	<div>
        <div class="content-panel-header">
            <h4 @click="goBack">返回</h4>
        </div>
        <div class="content-panel-content">
            <div v-for="item in list">
                <div class="atticle-title">{{item.title}}</div>
                <div v-compiledMarkdown>{{item.articleContent}}</div>
            </div>
        </div>
	</div>
</template>

<script>
import marked from 'marked';
import highlight from 'highlight.js'
import '../assets/atom-one-light.css'
export default {
	data () {
		return {
			title: '',
			articleContent: '',
			list: []
		}
	},
	mounted: function(){
		var id = this.$route.params.id
		this.$http.get('/api/articleDetails/'+ id)
		.then(
			respone => {
			    this.list.push(respone.body)
			},
			respone => console.log('错误'+respone)
		)
		console.log(this.$route.path)
	},
	methods: {
		goBack: function(){
			this.$router.go(-1)
		}
	},
	directives: {
        compiledMarkdown: {
            bind: function(el){
                el.innerHTML = marked(el.innerText)
            }
        }
    }
}
</script>

<style>
.atticle-title {
    font-size: 22px;
	cursor: pointer;
	border-left: 3px #a0a0a1 solid;
	padding-left: 10px;
	color: #2c3e50;
	font-weight: bold;
	margin-bottom: 10px;
}
</style>
