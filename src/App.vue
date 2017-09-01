<template>
    <div id="app">
        <el-row :gutter="0">
            <el-col :xs="24" :sm="4" :md="4" :lg="4">
                 <div class="nav-bar">
                    <div class="nav-bar-inner">
                        <span>weiwei的日常</span>
                        <div>
                            <i class="el-icon-menu" @click="navBar"></i>
                        </div>
                    </div>
                    <div class="mobile-nav-bar" v-show="isShowMobileNavBar">
                        <ul>
                            <li @click="latestArticles" v-bind:class="{current: $route.path== '/'}">
                                <span>最新文章</span>
                            </li>
                            <li @click="archives" v-bind:class="{current: $route.path== '/archives'}">
                                <span style="border-left: 1px solid #ddd;">文章归档</span>
                            </li>
                            <li @click="tag" v-bind:class="{current: $route.path== '/tag'}">
                                <span>文章标签</span>
                            </li>
                            <li @click="about" v-bind:class="{current: $route.path== '/about'}">
                                <span style="border-left: 1px solid #ddd;">关于我的</span>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-bar-body">
                        <ul>
                            <li @click="latestArticles" v-bind:class="{borderRightActive: $route.path=='/'}">最新文章</li>
                            <li @click="archives" v-bind:class="{borderRightActive: $route.path=='/archives'}">文章归档</li>
                            <li @click="tag" v-bind:class="{borderRightActive: $route.path=='/tag'}">文章标签</li>
                            <li @click="about" v-bind:class="{borderRightActive: $route.path=='/about'}">关于我的</li>
                        </ul>
                    </div>
                    <div class="nav-bar-footer">
                        <span>粤ICP备17022497号</span>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="20" :md="20" :lg="20">
                <div class="main">
                    <transition name="fade" mode="out-in">
                        <!-- <keep-alive> -->
                        <router-view></router-view>
                        <!-- </keep-alive> -->
                        <!--<router-view v-if="$route.meta.keepAlive == false"></router-view>-->
                    </transition>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            isShowMobileNavBar: false
        }
    },
    directives: {

    },
    methods: {
        latestArticles: function(){
            this.$router.push('/')
        },
        archives: function(){
            this.$router.push('archives')
        },
        tag: function(){
            this.$router.push('tag')
        },
        about: function(){
            this.$router.push('about')
        },
        navBar: function(){
            let result = window.matchMedia('(min-width: 768px)')
            if(result.matches)return;
            if(this.isShowMobileNavBar){
                this.isShowMobileNavBar = false
                var navBar = document.querySelector('.nav-bar')
                navBar.style.height = 8 + 'vh'
                navBar.style.transition = '0.5s'
                
            }else{
                this.isShowMobileNavBar = true
                var navBar = document.querySelector('.nav-bar')
                navBar.style.height = 20 + 'vh'
                navBar.style.transition = '0.5s'
            }
        }
    }
}
</script>

<style>
@import './style/common.css';
</style>
