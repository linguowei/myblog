<template>
    <div class="article-label-wrap">
        <div class="article-label-nav">
            <div class="article-instructions">
                <img src="../assets/article-title.png" height="20" width="20">
                <span>标签管理</span>
                <img src="../assets/add.png" height="17" width="17">
            </div>
            <ul v-articleListHeight>
                <li v-for="item in articleLabel" @click="labelClassification(item.titel)">
                    <img src="../assets/labels.png" height="17" width="17">
                    <h3 class="articleLabel-title">{{item.titel}} <span style="color:#7e7e7e;">({{item.number}})</span></h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            articleLabel: [
                {titel: 'node', number: '8'},
                {titel: '前端',number: '3'},
                {titel: 'http',number: '1'},
                {titel: 'vue',number: '6'},
                {titel: 'Angular',number: '9'},
            ]
        }
    },
    methods: {
        labelClassification: function(title){
            this.$router.push({path: 'articleList', query: {lebelTitle: title}})
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
.article-label-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    margin-left: 90px;
}
.article-label-nav {
    width: 230px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 90px;
    border-right: 1px solid #f1f1f1;
    z-index: 1;
    background-color: #fff;
}
.article-label-nav > ul {
    overflow: auto;
    padding-left: 22px;
    padding-right: 22px;
}
.article-label-nav > ul > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f1f1f1;
    padding: 5px 10px 5px 10px;
}
.article-label-nav > ul > li > img {
    display: block;
    float: left;
    padding-top: 13px;
    padding-right: 5px;
}
.article-label-nav > ul > li > h3 {
    width: 170px;
    padding: 5px 0 5px 0;
    display: inline;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    color: #20a0ff;
}
</style>
