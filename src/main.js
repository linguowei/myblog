import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import LatestArticles from './component/latestArticles.vue'
import Archiver from './component/archives.vue'
import Tag from './component/tag.vue'
import About from './component/about.vue'
import ArticlesDetails from './component/articlesDetails.vue'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: LatestArticles, mate: { keepAlive: true }},
        {path: '/archives', component: Archiver},
        {path: '/tag', component: Tag},
        {path: '/about', component: About},
        {path: '/articlesDetails:id', name: 'articlesDetails', component: ArticlesDetails}
    ]
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
