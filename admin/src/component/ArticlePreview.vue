<template>
    <div class="artivcle-preview">
        <div v-for="item in list">
            <div class="atticle-title">{{item.title}}</div>
            <div style="color:#34495e" v-compiledMarkdown>{{item.articleContent}}</div>
        </div>
    </div>
</template>

<script>
import marked from 'marked';
import highlight from 'highlight.js'
import '../assets/atom-one-light.css'
export default{
    data(){
        return{
           list: [],
           id: this.$route.params.id
        }
    },
    mounted: function(){
        console.log('11')
		this.$http.get('/api/articleDetails/'+ this.id)
		.then(
			respone => {
			    this.list.push(respone.body)
			},
			respone => console.log('错误'+respone)
		)
		marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            highlight: function (code) {
                return highlight.highlightAuto(code).value;
            }
        });
    },
    watch: {
        id: function(newId){
            this.$http.get('/api/articleDetails/'+ newId)
            .then(
                respone => {
                    this.list.push(respone.body)
                },
                respone => console.log('错误'+respone)
            )
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
.artivcle-preview {
    padding: 15px;
}
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