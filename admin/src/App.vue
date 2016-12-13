<template>
    <div id="app">
        <div class="left-sidebar">
            侧边导航栏
        </div>
        <div class="article-list">
            文章列表
        </div>
        <div class="article-edit">
            <div class="article-title">
                <input type="text" value="请输入文章标题">
            </div>
            <div class="article-toolbar">
                <div class="label">
                    bjbkj
                </div>
                <div class="action-button">
                    <el-button class="delect-draft">删除草稿</el-button>
                    <el-button class="publish-article" type="primary">发布文章</el-button>
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
            }
        }
    },
    mounted: function(){
        var smde = new SimpleMDE({
            element: document.getElementById('editor'),
        });
    },
    directives: {
    }
}
</script>

<style>
body {
    margin: 0 10px 0 0;
    padding: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*color: #2c3e50;*/
}
.left-sidebar {
    width: 100px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-right: 1px solid #ccc;
    background-color: #ccc;
}
.article-list {
    width: 220px;
    height: 100%;
    position: fixed;
    top: 0;
    margin-left: 100px;
    border-right: 1px solid #ccc;
    z-index: 1;
    background-color: #fff;
}
.article-edit {
    width: 100%;
    height: 100%;
    padding-left: 321px;
    position: relative;
}
.article-title {
    height: 45px;
    border-bottom: 1px solid #ccc;
}
.article-title > input {
    border: none;
    outline-style: none;
    width: 100%;
    height: 43px;
    padding-left: 10px;
}
.article-toolbar {
    height: 60px;
    line-height: 60px;
}
.label {
    width: 47%;
    padding-left: 10px;
    float: left;
}
.action-button {
    width: 50%;
    padding-right: 10px;
    float: left;
}
.CodeMirror {
    border-bottom: none!important;
    border-left: none!important;
}
.editor-toolbar {
    border-top-left-radius: 0!important;
    border-left: none!important;
}
</style>
