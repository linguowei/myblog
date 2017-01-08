import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {Button} from 'element-ui'
import articleList from './component/ArticleList.vue'
import articleEdit from './component/ArticleEdit.vue'
import atricleLabel from './component/ArticleLabel.vue'
import personalCenter from './component/PersonalCenter.vue'
import articlePreview from './component/ArticlePreview.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Button)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{path: '/articleList', component: articleList,
		    children: [
                {path: 'articleEdit', component: articleEdit},
                {path: 'articlePreview:id', component: articlePreview},
            ]
		},
		{path: '/atricleLabel', component: atricleLabel},
		{path: '/personalCenter', component: personalCenter},
		// {path: '/about', component: about},
		// {path: '/articleDetails:id', component: articleDetails},
		// {path: '/classify', component: classify},
		// {path: '/label', component: label},
	]
})

// window.a = Vue

new Vue({
  	el: '#app',
  	router: router,
  	render: h => h(App)
})
