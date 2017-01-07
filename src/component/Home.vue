<template>
	<div>
		<ul>
			<li class="article-wrap" v-for="item in articleList">
				<h3 @click="articleDetails(item._id)">{{item.title}}</h3>
				<p v-compiledMarkdown>{{item.articleContent}}</p>
				<div class="article-date">{{item.date.substring(0,4)}}年{{item.date.substring(5,7)}}月{{item.date.substring(8,10)}}日</div>
				<div class="article-underline"></div>
			</li>
		</ul>
	</div>
</template>

<script>
import marked from 'marked';
import highlight from 'highlight.js'
import '../assets/atom-one-light.css'
export default {
    data () {
    	return {
    		articleList: [],
    		dataId: 'test1'
    	}
    },
    methods: {
    	articleDetails: function(id){
    		this.$router.push('/articleDetails'+id+'')
    		// console.log(title)
    	}
    },
    mounted: function(){
    	this.$http.get('/api/articleList').then(
    		respone => {
    		    this.articleList = respone.body
    		},
    		respone => console.log('erroe'+respone)
    	),
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
.article-wrap {
	padding: 5px 10px 20px 10px;
	height: 190px;
}
.article-wrap > h3 {
	font-size: 24px;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
}
.article-wrap > .article-underline {
	height: 1px;
	background-color: #f6f6f6;
}
.article-wrap > p {
	height: 90px;
	margin-bottom: 10px;
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
}

.article-date {
	color: #a5a5a5;
	font-size: 14px;
}
</style>
