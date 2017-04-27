<template>
    <div id="articlesDetails">
        <div v-for="item in list">
            <div class="detail-header">
                <h2 style="font-weight: bold">{{item.title}}</h2>
                <div class="time">
                    {{new Date(item.date).format('yyyy-MM-dd hh:mm:ss')}}
                    <span class="tag">{{item.label}}</span>
                </div>
            </div>
            <div class="detail-body" v-compiledMarkdown>{{item.articleContent}}</div>
            <!--<div id="cloud-tie-wrapper" class="cloud-tie-wrapper" v-comment:id="item._id"></div>-->
            <div class="detail-footer" v-comment>
                <Comment :ArticlesId="item._id"></Comment>
                <!--<div id="container" v-comment:id="item._id"></div>-->
            </div>
        </div>
    </div>
</template>

<script>
import marked from 'marked';
import highlight from 'highlight.js'
import '../assets/atom-one-light.css'
import Comment from './comment.vue'
import {dateFormat} from '../utils/utils.js'
export default {
    data () {
        return {
            list: [],
        }
    },
    mounted () {
        dateFormat()
        this.fetchData()
    },
    methods: {
        fetchData (){
            let id = this.$route.params.id
            this.$http.get('/api/articleDetails/'+ id).then(
                res => {
                    this.list = []
                    this.list.push(res.body)
                },
                res => console.log('错误'+res)
            )
        }
    },
    components: {
        Comment
    },
    directives: {
        compiledMarkdown: {
            bind: function(el){
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
                el.innerHTML = marked(el.innerText)
                var preList = el.querySelectorAll('pre')
                var imgList = el.querySelectorAll('img')
                for(let i=0; i<imgList.length; i++){
                    imgList[i].style.width = 100 + '%';
                }
                for(let i=0; i<preList.length; i++){
                    preList[i].style.overflowX = 'scroll';
                    preList[i].style.backgroundColor = '#e8e8e8'
                    preList[i].style.padding = 0.5 + 'rem'
                } 
            }
        },
        comment: {
            update: function(el, binding){
                // 自定义Gitment
                console.log(el.querySelector('.gitment-comments-empty'))

            }
        }
    }
}
</script>

<style scoped>
#articlesDetails {
    height: 100vh;
    overflow: scroll;
    text-align: center;
    padding: 0 1rem;
    background-color: #fff;
}
.detail-header {
    height: 4rem;
    padding: 1.5rem 0;
    border-bottom: 1px dashed #999999;
}
.detail-header .time {
    margin-top: 0.5rem;
    color: #999999;
    font-size: 0.9rem;
    height: 1.4rem;
    line-height: 1.4rem;
}
.detail-header .time .tag{
    border-radius: 1.15rem;
    border: 1px solid #32D3C3;
    padding: 0.1rem 0.4rem;
    color: #32D3C3;
    font-size: 0.4rem;
}
    
.detail-body{
    padding: 1rem 0;
    text-align: left;
    border-bottom: 1px dashed #999999;
    color: #666;
}
</style>