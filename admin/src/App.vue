<template>
    <div id="app">
        <div class="left-sidebar">
            
        </div>
        <div class="article-list">
            <div class="article-instructions">
                <img src="./assets/article-title.png" height="20" width="20">
                <span>文章列表</span>
                <img src="./assets/add.png" height="17" width="17" @click="addArticle">
            </div>
            <ul v-articleListHeight>
                <li v-for="item in articleList">
                    <h3>{{item.title}}</h3>
                    <p>{{item.time}}</p>
                </li>
            </ul>
        </div>
        <div>
            <transition name="fade" mode="out-in">
                <router-view @saveDraft="saveDraft"></router-view>
            </transition>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            articleList: []
        }
    },
    mounted: function(){
        this.$on('test', function(value){
            console.log(value)
        })
    },
    methods: {
        addArticle: function(){
            this.$router.push('/articleEdit')
        },
        saveDraft: function(value){
            this.articleList.push(value)
            console.log(value) 
        }
    },
    directives: {
        articleListHeight: {
            bind: function(el){
                var height = window.innerHeight - 60
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
</style>
