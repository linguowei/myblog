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
            <div class="detail-footer" v-comment>
                <Comment :ArticlesId="item._id"></Comment>
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
                el.innerHTML = marked(el.innerText);
                var preList = el.querySelectorAll('pre');
                var imgList = el.querySelectorAll('img');
                var strongList = el.querySelectorAll('strong');
                var pList = el.querySelectorAll('p');
                var aList = el.querySelectorAll('a');
                var codeList = el.querySelectorAll('code');
                codeList.forEach(function(item){
                    if(item.parentNode.tagName !== 'PRE'){
                        item.style.padding = '2px 4px';
                        item.style.color = '#c7254e';
                        item.style.backgroundColor = '#f9f2f4';
                        item.style.borderRadius = '3px';
                    }
                })
                for (let i=0; i<aList.length; i++){
                    aList[i].style.color = '#32D3C3'
                    aList[i].style.textDecoration = 'none'
                    aList[i].setAttribute('target', '_blank')
                }
                for (let i=0; i<pList.length; i++){
                    pList[i].style.color = '#3E495E'
                    pList[i].style.margin = '1.5em 0'
                    pList[i].style.lineHeight = '1.6'
                }
                for (let i=0; i<strongList.length; i++){
                    strongList[i].style.color = '#32D3C3'
                }
                for(let i=0; i<imgList.length; i++){
                    imgList[i].style.width = 100 + '%';
                }
                for(let i=0; i<preList.length; i++){
                    preList[i].style.overflowX = 'scroll';
                    preList[i].style.backgroundColor = '#e8e8e8'
                    preList[i].style.padding = '1rem'
                    preList[i].style.lineHeight = '1.45'
                    preList[i].style.backgroundSize = '30px,30px'
                    preList[i].style.background = 'url(../../src/assets/blueprint.png) #F6F6F6'
                    preList[i].style.borderRadius = '3px'
                } 
                var blockquoteList = el.querySelectorAll('blockquote')
                blockquoteList.forEach((item) => {
                    item.style.borderLeft = '3px solid #32d3c3';
                    item.style.backgroundColor = '#F6F6F6';
                    item.style.color = '#555';
                    item.style.fontSize = '1em';
                    item.style.margin = '1.5em 0';
                    item.style.padding = '1px 20px'
                    let p = item.querySelector('p')
                    p.style.color = '#555'
                    p.style.margin = '0.5em 0px';
                })
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
@media screen and (max-width: 768px){
    #articlesDetails > div{
        width: 100%;
    }
}
@media screen and (max-width: 768px){
    .detail-header{
        margin: 0 0rem 0 0rem!important;
    }
    .detail-body{
        margin: 0 0rem 0 0rem!important;
    }
    .detail-footer{
        margin: 0 0rem 0 0rem!important;
    }
}

#articlesDetails {
    height: 100vh;
    overflow: scroll;
    text-align: center;
    padding: 0 1rem;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
}
.detail-header {
    padding: 1.5rem 0;
    border-bottom: 1px dashed #999999;
     margin: 0 7rem 0 4rem; 
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
    margin: 0 7rem 0 4rem; 
}
.detail-footer{
    margin: 0 7rem 0 4rem; 
}
.detail-footer textarea{
    background-color: #fff
}
.detail-footer .gitment-editor-tab .gitment-selected{
    background-color: #fff
}
</style>