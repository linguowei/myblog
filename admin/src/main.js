import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {Button} from 'element-ui'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Button)

const router = new VueRouter({
	mode: 'history',
	base: '__dirname',
	routes: [
		// {path: '/', component: home},
		// {path: '/home', component: home},
		// {path: '/archive', component: archive},
		// {path: '/search', component: search},
		// {path: '/about', component: about},
		// {path: '/articleDetails:id', component: articleDetails},
		// {path: '/classify', component: classify},
		// {path: '/label', component: label},
	]
})

new Vue({
  	el: '#app',
  	router: router,
  	render: h => h(App)
})
