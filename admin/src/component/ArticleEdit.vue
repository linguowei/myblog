<template>
	<div class="articel-edit-wrap">
        <div class="article-title">
            <input type="text" v-model="articleTitle">
        </div>
        <div class="article-toolbar">
            <div class="label">
                <el-popover ref="tag" placement="top-start" width="150" trigger="click">
                    <ul class="tag-list-wrap">
                        <li v-for="item in tags" @click="selectTag(item)">{{item.tagName}}</li>
                    </ul>
                </el-popover>
                <img src="../assets/tag.png" height="30" width="30" v-popover:tag>
                <el-tag style="margin: 0 3px 0 3px;" v-for="item in list" :closable="true" :type="primary" :key="tag" :close-transition="false" @close="handleClose(tag)">
                    {{item.tagName}}
                </el-tag>
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
import { Message } from 'element-ui';
export default {
	data () {
        return {
            articleTitle: '请输入文章标题',
            content: '',
            tags: [],
            list: []
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
            self.content = value
        });
        smde.value("快来开始写博客吧");
        // 请求标签数据列表
        this.$http.get('/api/getArticleLabel').then(
            respone => {
                this.tags =  respone.body
            },
            respone => {
                Message.error('数据出错，请重新刷新页面')
            }

        )
    },
    methods: {
    	// 保存草稿
    	saveDraft: function(){
            var self = this
            if(this.list.length>0){
                var labelName = this.list[0].tagName;
            } else {
                var labelName = '未分类'
            }
            var obj = {
                title: self.articleTitle,
                articleContent: self.content,
                date: new Date().format('yyyy-MM-dd hh:mm:ss'),
                state: 'draft',
                label: labelName
            }
            this.$http.post('/api/saveArticle', {
            	articleInformation: obj
            }).then(
            	respone => {
            		Message.success('文章保存成功')
            		// 如果文章信息保存成功就给父组件派发一个事件通知它刷新文章列表
            		self.$emit('saveArticleInformation')
            		console.log(respone)
            	},
            	respone => {
            		Message.error('文章保存失败')
            		console.log(respone)
            	}
            )
        },
        // 发布文章
        publishedArticles: function(){
        	var self = this
        	if(this.list.length>0){
                var labelName = this.list[0].tagName
            } else {
                var labelName = '未分类'
            }
            var obj = {
                title: self.articleTitle,
                articleContent: self.content,
                date: new Date().format('yyyy-MM-dd hh:mm:ss'),
                state: 'publish',
                label: labelName
            }
            this.$http.post('/api/saveArticle', {
            	articleInformation: obj
            }).then(
            	respone => {
            		Message.success('文章发布成功')
            		// 如果文章信息保存成功就给父组件派发一个事件通知它刷新文章列表
            		self.$emit('saveArticleInformation')
            	},
            	respone => Message.error('文章发布失败')
            )
        },
        selectTag: function(data){
            this.list.push(data)
            console.log(this.list,data)
        },
        handleClose: function(tag) {
            this.list.splice(this.tags.indexOf(tag), 1);
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
.articel-edit-wrap {
    width: 100%;
    height: 100%;
}
.article-title {
    height: 45px;
    border-bottom: 1px solid #f1f1f1;
}
.article-title > input {
    border: none;
    outline-style: none;
    width: 97%;
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
    height: 60px;
    line-height: 60px;
    padding-left: 10px;
    float: left;
    display: table-cell;
    vertical-align: middle;
}
.label > img {
    vertical-align: middle;
    cursor: pointer;
}
.label > img:hover {
    border-bottom: 2px solid #20a0ff;
}
.tag-list-wrap {
    border: 1px solid #e0e6ed;
    padding: 5px;
    max-height: 150px;
    overflow: auto;
}
.tag-list-wrap > li {
    margin: 2px;
    padding: 3px;
    cursor: pointer;
    height: 30px;
    line-height: 36px;
}
.tag-list-wrap > li:hover {
    background-color: #e0e6ed;
}
.action-button {
    min-width: 120px;
    float: right;
    padding-right: 20px;
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
