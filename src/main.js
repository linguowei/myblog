import Vue from 'vue'
import {Tooltip} from 'element-ui'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import home from './component/Home.vue'
import archive from './component/Archive.vue'
import search from './component/Search.vue'
import about from './component/About.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Tooltip)

const router = new VueRouter({
	mode: 'history',
	base: '__dirname',
	routes: [
		{path: '/', component: home},
		{path: '/home', component: home},
		{path: '/archive', component: archive},
		{path: '/search', component: search},
		{path: '/about', component: about},
	]
})

new Vue({
  	el: '#app',
  	router: router,
  	render: h => h(App)
})
