<template>
	<div>
        <div class="content-panel-header">
            <h4>最新文章</h4>
        </div>
        <div class="content-panel-content">
            <div class="classify-panel" v-if="this.$route.query.tagId && articleList.length==0">
                <h1>该标签下暂无文章，请返回查看其它标签内容</h1>
            </div>
            <ul>
                <li class="article-wrap" v-for="item in articleList">
                    <div class="atticle-title atticle-title-hover" @click="articleDetails(item._id)">{{item.title}}</div>
                    <p style="color:#34495e;" v-compiledMarkdown>{{item.articleContent}}</p>
                    <div class="article-date">{{new Date(item.date).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="article-underline"></div>
                </li>
            </ul>
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
    		articleList: [],
    	}
    },
    mounted: function(){
        Date.prototype.format = function(format) {
            var o = {
                "M+": this.getMonth() + 1, //month
                "d+": this.getDate(), //day
                "h+": this.getHours(), //hour
                "m+": this.getMinutes(), //minute
                "s+": this.getSeconds(), //second
                "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
                "S": this.getMilliseconds() //millisecond
            }
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1,(this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o){
                if (new RegExp("(" + k + ")").test(format)){
                    format = format.replace(RegExp.$1,RegExp.$1.length == 1 ? o[k] :("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return format;
        }

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
        })

        if(this.$route.query.tagId){
            this.$http.post('/api/articleList', {
                tagId: this.$route.query.tagId
            }).then(
                respone => this.articleList = respone.body.reverse(),
                respone => console.log(respone)
            )
        } else {
            this.fetchData()
        }
    },
    methods: {
    	articleDetails: function(id){
    		this.$router.push('/articleDetails'+id+'')
    	},
    	fetchData: function(){
    	    this.$http.get('/api/articleList').then(
                respone => {
                    this.articleList = respone.body.reverse();
                },
                respone => console.log('erroe'+respone)
            )
    	}
    },
    directives: {
        compiledMarkdown: {
            bind: function(el){
                el.innerHTML = marked(el.innerText)
                if(el.querySelector('pre')){
                    el.querySelector('pre').style.display = "none"
                }
                if(el.querySelector('blockquote')){
                    el.querySelector('blockquote').style.display = "none"
                }
            }
        }
    },
    watch: {
        '$route': 'fetchData'
    },
}
</script>

<style>
.article-wrap {
	padding: 10px;
	height: 170px;
}
.article-wrap > .atticle-title {
	font-size: 22px;
	cursor: pointer;
	border-left: 3px #a0a0a1 solid;
	padding-left: 10px;
	color: #2c3e50;
	font-weight: bold;
}
.atticle-title-hover:hover {
    background-color: #fafafa;
}
.article-wrap > .article-underline {
	height: 1px;
	background-color: #f6f6f6;
}
.article-wrap > p {
	height: 80px;
	line-height: 20px;
	margin-bottom: 10px;
	margin-top: 10px;
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	word-wrap: break-word;
    word-break: break-all
}
.article-date {
	color: #a5a5a5;
	font-size: 14px;
	padding-bottom: 10px;
}
</style>
