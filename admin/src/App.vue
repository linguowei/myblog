<template>
    <div id="app">
        <div class="left-sidebar">
            <div class="admin-logo">
                <img src="./assets/logo.png" width="40" height="40">
            </div>
            <div class="article-logo">
                <img src="./assets/article.png" height="50" width="50">
            </div>
            <div class="label-logo">
                <img src="./assets/label.png" height="50" width="50">
            </div>
            <div class="use-logo" @click="open">
                <img src="./assets/use.png" height="50" width="50">
            </div>
            <div class="sidebar-switch">
                <img src="./assets/left.png" height="50" width="50">
            </div>
        </div>
        <div class="article-list">
            <div class="article-instructions">
                <img src="./assets/article-title.png" height="20" width="20">
                <span>文章列表</span>
                <img src="./assets/add.png" height="17" width="17" @click="addArticle">
            </div>
            <ul v-articleListHeight>
                <li v-for="item in articleList">
                    <h3 class="articlePreview-title">{{item.title}}</h3>
                    <p>{{new Date(item.date).format('yyyy-MM-dd hh:mm:ss')}}</p>
                </li>
            </ul>
        </div>
        <div class="router-view">
            <transition name="fade" mode="out-in">
                <h1 v-if="this.$route.path == '/admin'">赶紧来写文章啦，不写就来不及了</h1>
                <router-view @saveArticleInformation="refreshArticleList"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
    name: 'app',
    data () {
        return {
            articleList: []
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
        this.$http.get('/articleList').then(
            respone => this.articleList = respone.body.reverse(),
            respone => console.log(respone)
        )
    },
    methods: {
        addArticle: function(){
            this.$router.push('/articleEdit')
        },
        // 接受ArtcleEdit组件派发的事件去获取最新的文章列表
        refreshArticleList: function(){
            this.$http.get('/articleList').then(
                respone => this.articleList = respone.body.reverse(),
                respone => console.log(respone)
            )
        },
        open: function(){
            console.log(this)
            Message.success('这是一条消息提示');
        }
    },
    directives: {
        articleListHeight: {
            bind: function(el){
                var height = window.innerHeight - 80
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
.admin-logo {
    width: 70px;
    height: 80px;
    margin: 0 auto;
    margin-top: 20px;
    border-bottom: 1px solid #eaeaea;
}
.admin-logo > img {
    overflow: hidden;
    display: block;
    margin: 0 auto;
}
.article-logo {
    height: 100px;
    margin-top: 50px;
}
.article-logo > img {
    display: block;
    margin: 0 auto;
    cursor: pointer;
}
.label-logo {
    height: 100px;
    margin-top: 20px;
}
.label-logo > img {
    display: block;
    margin: 0 auto;
    cursor: pointer;
}
.use-logo {
    height: 100px;
    margin-top: 20px;
}
.use-logo > img {
    display: block;
    margin: 0 auto;
    cursor: pointer;
}
.sidebar-switch {
    height: 100px;
    position: absolute;
    bottom: 30px;
    left: 0;
}
.sidebar-switch > img {
    display: block;
    margin: 0 auto;
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
    height: 65px;
    line-height: 65px;
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
.router-view {
    position: relative;
    height: 100%;
    padding-left: 321px;
}
.articlePreview-title {
    color: #20a0ff;
}
</style>
