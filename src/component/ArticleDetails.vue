<template>
	<div>
		<div @click="goBack">返回</div>
        <div v-for="item in list">
            <h3>{{item.title}}</h3>
            <div v-compiledMarkdown>{{item.articleContent}}</div>
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
				this.title = respone.body.title,
				this.articleContent = respone.body.articleContent,
				console.log(respone.body)
			},
			respone => console.log('错误'+respone)
		)
		console.log(this.$route.params.id)
	},
	methods: {
		goBack: function(){
			this.$router.go(-1)
		}
	},
	directives: {
        compiledMarkdown: {
            bind: function(el){
                console.log(el.innerText)
                el.innerHTML = marked(el.innerText)
            }
        }
    }
}
</script>

<style></style>
