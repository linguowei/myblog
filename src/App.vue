<template>
    <div id="app">
        <div class="left-nav">
            <div class="head-portrait">
                <img src="./assets/head-portrait.jpg" height="210" width="210" @click="headPortrait">
            </div>
            <div class="name">
                <h3>weiwei</h3>
            </div>
            <div class="underline"></div>
            <div class="introduce">
                <p>this is a blog</p>
            </div>
            <div class="archive">
                <div class="archive-left">
                    <el-tooltip class="item" effect="dark" content="文章" placement="bottom">
                        <p>46</p>
                        <img src="./assets/file.png" height="20" width="20">
                    </el-tooltip>
                </div>
                <div class="divider"></div>
                <div class="archive-center">
                    <el-tooltip class="item" effect="dark" content="分类" placement="bottom">
                        <p>25</p>
                        <img src="./assets/folder.png" height="20" width="20">
                    </el-tooltip>
                </div>
                <div class="divider"></div>
                <div class="archive-right">
                    <el-tooltip class="item" effect="dark" content="标签" placement="bottom">
                        <p>31</p>
                        <img src="./assets/bookmark.png" height="20" width="20">
                    </el-tooltip>
                </div>
            </div>
            <div class="nav-router">
                <ul>
                    <router-link to="/home"><li>首页</li></router-link>
                    <router-link to="/archive"><li>归档</li></router-link>
                    <router-link to="/search"><li>搜索</li></router-link>
                    <router-link to="/about"><li class="about">关于我</li></router-link>
                </ul>
            </div>
        </div>
        <div class="content-panel">
            <div class="content-panel-header">
                <h4 v-if="this.$route.path === '/' || this.$route.path === '/home'">首页</h4>
                <h4 v-if="this.$route.path === '/archive'">归档</h4>
                <h4 v-if="this.$route.path === '/search'">搜索</h4>
                <h4 v-if="this.$route.path === '/about'">关于我</h4>
            </div>
            <div class="content-panel-content">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: ''
        }
    },
    mounted: function(){
        // this.$http.get('/img').then(
        //     respone=> {
        //         console.log(respone)
        //         this.msg = respone.body.msg
        //     },
        //     respone=> console.log('错误')
        // )
    },
    methods: {
        headPortrait: function(){
            this.$router.push('/about')
        }
    },
    directives: {
        contentHight: {
            bind: function(el){
                var aa = window.innerHeight - 100
                el.style.height = aa + 'px'
            }
        }
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
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
a:visited, a:link, a:active {
    color: #545455;
    cursor: pointer;
}
body {
    background-color: #f5f5f5;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    margin: 20px 50px 0 50px;
}
.left-nav {
    width: 250px;
    height: 493px;
    background-color: #fff;
    border-radius: 5px;
    float: left;
    box-shadow: 0 0px 5px 0px #dadada;
    text-align: center;
}
.left-nav:hover .underline{
    width: 0px;
    transition: all 0.5s; 
}
.head-portrait {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
}
.name {
    color: #545455;
    margin: 0 auto;
    width: 40%;
}
.underline {
    width: 100px;
    height: 1px;
    background-color: #bababa;
    margin: 0 auto;
    margin-bottom: 10px;
    transition: all 0.5s; 
}
.introduce {
    color: #545455;
    margin-bottom: 20px;
}
.archive {
    width: 70%;
    margin: 0 auto;
    color: #666666;
    margin-bottom: 20px;
    cursor:pointer;
    position: relative;
}
.divider {
    width: 1px;
    float: left;
    height: 45px;
    background-color: #f4f4f4;
}
.archive-left {
    width: 32%;
    float: left;
    transition: all 0.5s; 
}
.archive-left:hover{
    transform: scale(1.2);
    transition: all 0.5s;
}
.archive-left:hover .tooltip{
    display: block;
}
.archive-center {
    width: 32%;
    float: left;
    transition: all 0.5s; 
}
.archive-center:hover {
    transform: scale(1.2);
    transition: all 0.5s;  
}
.archive-right {
    width: 32%;
    float: left;
    transition: all 0.5s; 
}
.archive-right:hover {
    transform: scale(1.2);
    transition: all 0.5s;  
}
.nav-router {
    clear: both;
    width: 100%;
    height: 200px;
    color: #545455;
    cursor:pointer;
    margin-top: 90px;
}
.nav-router > ul li {
    height: 50px;
    line-height: 50px;
    transition: all 0.5s;
    border-top: 1px #f3f3f3 solid; 
}
.about {
    border-radius: 0 0 5px 5px;
}
.nav-router > ul li:hover {
    background-color: #d4d4d4;
    color: #fff;
    transition: all 0.5s;
}
.content-panel {
    width: 65%;
    background-color: #fff;
    border-radius: 5px;
    margin-left: 20px;
    float: left;
    box-shadow: 0 0px 5px 0px #dadada;
}
.content-panel-header {
    height: 40px;
    line-height: 40px;
    background-color: #fafafa;
    border-radius: 5px 5px 0 0;
    padding-left: 25px;
    text-align: center;
    box-shadow: 0 0 1px 0px #ccc;
    color: #545455;
    font-size: 20px;
}
.content-panel-content {
    min-height: 600px;
    padding: 10px 20px 10px 20px;
}
</style>






