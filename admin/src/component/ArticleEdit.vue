<template>
	<div>
        <div class="article-title">
            <input type="text" v-model="articleTitle">
        </div>
        <div class="article-toolbar">
            <div class="label">
                
            </div>
            <div class="action-button">
                <el-button size="small" @click="saveDraft">保存草稿</el-button>
                <el-button type="primary" size="small" @click="publishedArticles">发布文章</el-button>
            </div>
        </div>
        <textarea id="editor"></textarea>
	</div>
</template>

<script>
import SimpleMDE from 'simplemde'
import '../assets/simplemde.css'
import marked from 'marked';
import highlight from 'highlight.js'
import '../assets/atom-one-light.css'
export default {
	data () {
        return {
            articleTitle: '请输入文章标题',
            content: '',
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
        var self = this
        var smde = new SimpleMDE({
            element: document.getElementById('editor'),
            autofocus: true,
            autosave: true,
            previewRender: function(plainText) {
                return marked(plainText,{
                    renderer: new marked.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return highlight.highlightAuto(code).value;
                    }
                }); 
            },
        });
        smde.codemirror.on("change", function(){
            var value = smde.value();
            console.log(value)
            self.content = value
        })
    },
    methods: {
    	// 保存草稿
    	saveDraft: function(){
            var self = this
            var obj = {
                title: self.articleTitle,
                articleContent: self.content,
                date: new Date().format('yyyy-MM-dd hh:mm:ss'),
                state: 'draft',
                label: '技术分享',
            }
            this.$http.post('/saveArticle', {
            	articleInformation: obj
            }).then(
            	respone => {
            		console.log('文章保存成功')
            		// 如果文章信息保存成功就给父组件派发一个事件通知它刷新文章列表
            		self.$emit('saveArticleInformation')
            	},
            	respone => console.log('文章保存失败')
            )
        },
        // 发布文章
        publishedArticles: function(){
        	var self = this
            var obj = {
                title: self.articleTitle,
                articleContent: self.content,
                date: new Date().format('yyyy-MM-dd hh:mm:ss'),
                state: 'publish',
                label: '技术分享',
            }
            this.$http.post('/saveArticle', {
            	articleInformation: obj
            }).then(
            	respone => {
            		console.log('文章保存成功')
            		// 如果文章信息保存成功就给父组件派发一个事件通知它刷新文章列表
            		self.$emit('saveArticleInformation')
            	},
            	respone => console.log('文章保存失败')
            )
        }
    },
    directives: {
        
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.article-title {
    height: 45px;
    border-bottom: 1px solid #f1f1f1;
}
.article-title > input {
    border: none;
    outline-style: none;
    width: 100%;
    height: 43px;
    padding-left: 10px;
    font-size: 20px;
}
.article-toolbar {
    height: 60px;
    line-height: 60px;
}
.label {
    width: 50%;
    padding-left: 10px;
    float: left;
}
.action-button {
    min-width: 60px;
    float: right;
    margin-right: 15px; 
}
.CodeMirror {
    border-bottom: none!important;
    border-left: none!important;
    border-right: none!important;
    border-top: 1px solid #f1f1f1!important;
}
.editor-toolbar {
    border-top-left-radius: 0!important;
    border-top-right-radius: 0!important;
    border-left: none!important;
    border-right: none!important;
    border-top: 1px solid #f1f1f1!important;
}
.editor-statusbar {
    display: none;
}
</style>