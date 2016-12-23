<template>
    <div>
        <div class="article-list">
            <div class="article-instructions">
                <img src="../assets/article-title.png" height="20" width="20">
                <span>文章列表</span>
                <img src="../assets/add.png" height="17" width="17" @click="addArticle">
            </div>
            <ul v-articleListHeight>
                <li v-for="item in articleList">
                    <h3 class="articlePreview-title">{{item.title}}</h3>

                    <!--<p>{{new Date(item.date).format('yyyy-MM-dd hh:mm:ss')}}</p>-->
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
export default{
    data(){
        return{
            articleList: [
                {
                    title : "文章标题1",
                    date : "2016-12-23T06:20:06.000Z",
                    state : "publish",
                    label : "技术分享",
                }
            ]
        }
    },
    mounted: function(){
        Date.prototype.format = function(format) {
            var o = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S": this.getMilliseconds()
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
        this.$http.get('/api/articleList').then(
            respone => this.articleList = respone.body.reverse(),
            respone => console.log(respone)
        )
    },
    methods: {
        // 文章编辑页路由
        addArticle: function(){
            this.$router.push('/articleList/articleEdit')
        },
        // 接受ArtcleEdit组件派发的事件去获取最新的文章列表
        refreshArticleList: function(){
            this.$http.get('/api/articleList').then(
                respone => this.articleList = respone.body.reverse(),
                respone => console.log(respone)
            )
        },
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
    margin-left: 321px;
}
.articlePreview-title {
    color: #20a0ff;
}
</style>
