<template>
    <div class="article-label-wrap">
        <div class="article-list">
            <div class="article-instructions">
                <img src="../assets/article-title.png" height="20" width="20">
                <span>标签列表</span>
                <img src="../assets/add.png" height="17" width="17" @click="addArticle">
            </div>
            <ul v-articleListHeight>
                <li v-for="item in articleList">
                    <h3 class="articlePreview-title">{{item.title}}</h3>

                    <!--<p>{{new Date(item.date).format('yyyy-MM-dd hh:mm:ss')}}</p>-->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{

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
</style>
