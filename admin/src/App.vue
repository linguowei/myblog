<template>
    <div id="app">
        <div class="left-sidebar">
            <div class="admin-logo">
                <img src="./assets/logo.png" width="40" height="40">
            </div>
            <div class="article-logo" @click="articleList">
                <img src="./assets/article.png" height="50" width="50">
            </div>
            <div class="label-logo" @click="articleLabel">
                <img src="./assets/label.png" height="50" width="50">
            </div>
            <div class="use-logo" @click="personalCenter">
                <img src="./assets/use.png" height="50" width="50">
            </div>
        </div>
        <div class="article-list-wrap">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {

        }
    },
    mounted: function(){

    },
    methods: {
        // 文章列表路由
        articleList: function(){
            this.$router.push('/articleList')
        },
        // 文章标签路由
        articleLabel: function(){
            this.$router.push('/atricleLabel')
        },
        // 个人中心
        personalCenter: function(){
            this.$router.push('/personalCenter')
        }
    },
    directives: {

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
pre {
    background-color: #f5f5f5;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    margin: 10px 0 10px 0;
}
blockquote {
    border-left: 10px #e4e9eb solid;
    background-color: #f5f5f5;
    padding: 15px 20px;
    margin: 10px 0 10px 0;
}
strong {
    color: #579eff;
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
    z-index: 9;
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
.article-list-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
