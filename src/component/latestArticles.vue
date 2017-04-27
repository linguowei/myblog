<template>
    <div>
        <el-row :gutter="0">
            <!--<el-col :xs="22" :sm="22" :md="20" :lg="20" :push="1">
                <div class="main-header">
                    <span>最新文章</span>
                    <el-input class="search"
                        icon="search">
                    </el-input>
                </div>
            </el-col>-->
            <el-col :xs="22" :sm="22" :md="20" :lg="20" :push="1">
                <div class="grid-content bg-purple">
                    <el-tabs>
                        <el-tab-pane label="最新文章">
                            <el-row :gutter="20">
                                <el-col :xs="24" :sm="12" :md="12" :lg="12" v-for="item in articleList" :key="item._id">
                                    <el-card class="box-card articles-box">
                                        <div class="post-title" @click="articlesDetailsFn(item._id)">
                                            {{item.title}}
                                        </div>
                                        <div class="post-time">
                                            {{new Date(item.date).format('yyyy-MM-dd hh:mm:ss')}}
                                            <span class="post-label">{{item.label}}</span>
                                        </div>
                                        <div class="post-abstract" v-compiledMarkdown>
                                            {{item.articleContent}}。
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import marked from 'marked';
import highlight from 'highlight.js'
import '../assets/atom-one-light.css'
export default {
    name: 'latestArticles',
    data(){
        return {
            articleList: [],
        }
    },
    mounted(){
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
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            highlight: function (code) {
                return highlight.highlightAuto(code).value;
            }
        })
        this.$http.get('/api/articleList').then(
            res => {
                this.articleList = res.body
                // let a = res.body[2].articleContent.replace(/[^\u4e00-\u9fa5]/gi,'')
            },
            res => {
                console.log(res)
            }
        )
    },
    methods: {
        articlesDetailsFn: function(id){
            this.$router.push({ name: 'articlesDetails', params: { id: id }})
            // this.$router.push('articlesDetails'+id+'')
        }
    },
    directives: {
        compiledMarkdown: {
            bind: function(el){
                el.innerHTML = marked(el.innerText)
                el.innerHTML = el.innerHTML.replace(/[^\u4e00-\u9fa5]/gi,'')

                if(el.querySelector('pre')){
                    el.querySelector('pre').style.display = "none"
                }
                if(el.querySelector('blockquote')){
                    el.querySelector('blockquote').style.display = "none"
                }
            }
        }
    },
}
</script>

<style scoped>
@import '../style/latestArticles.css';
</style>
