<template>
    <div id="app">
        <div class="left-sidebar">
            
        </div>
        <div class="article-list">
            <div class="article-instructions">
                <img src="./assets/article-title.png" height="20" width="20">
                <span>文章列表</span>
                <img src="./assets/add.png" height="17" width="17">
            </div>
            <ul v-articleListHeight>
                <li v-for="item in list">
                    <h3>文章标题哈哈哈文章标题哈哈哈</h3>
                    <p>2016-09-07</p>
                </li>
            </ul>
        </div>
        <div class="article-edit">
            <div class="article-title">
                <input type="text" value="请输入文章标题">
            </div>
            <div class="article-toolbar">
                <div class="label">
                    
                </div>
                <div class="action-button">
                    <el-button class="delect-draft" size="small">保存草稿</el-button>
                    <el-button class="publish-article" type="primary" size="small">发布文章</el-button>
                </div>
            </div>
            <textarea  
                id="editor">
            </textarea>
        </div>
    </div>
</template>

<script>
import SimpleMDE from 'simplemde'
import './assets/simplemde.min.css'
export default {
    name: 'app',
    data () {
        return {
            content:{
                type:String,
                required: true,
                twoWay: true
            },
            list: [
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
            ]
        }
    },
    mounted: function(){
        var smde = new SimpleMDE({
            element: document.getElementById('editor'),
        });
    },
    directives: {
        articleListHeight: {
            bind: function(el){
                var height = window.innerHeight - 90
                el.style.maxHeight = height + 'px'
            }
        }
    }
}
</script>

<style>
* {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
body {
    position: relative;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    overflow: hidden;
}
.left-sidebar {
    width: 90px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-right: 1px solid #f1f1f1;
    background-color: #f8f8f8;
}
.article-list {
    width: 230px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 90px;
    border-right: 1px solid #f1f1f1;
    z-index: 1;
    background-color: #fff;
}
.article-list > ul {
    overflow: auto;
    padding-left: 22px;
    padding-right: 22px;
}
.article-list > ul > li {
    border-bottom: 1px solid #f1f1f1;
    padding: 5px 10px 5px 10px;
}
.article-list > ul > li > h3 {
    width: 170px;
    padding: 5px 0 5px 0;
    display: block;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    cursor: pointer;
}
.article-list > ul > li > p {
    font-size: 12px;
}
.article-instructions {
    height: 45px;
    line-height: 45px;
    padding-left: 20px;
    border-bottom: 1px solid #f1f1f1;
    color: #666;
}
.article-instructions > span {
    width: 150px;
    display: inline-block;
}
.article-instructions > img {
    vertical-align:middle;
    cursor: pointer;
}
.article-edit {
    position: relative;
    height: 100%;
    padding-left: 321px;
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
