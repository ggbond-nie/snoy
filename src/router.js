import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import Meta from 'vue-meta'
//Vue.use(Meta)
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{title:"Snoy-index"},
   
    }
  ]
})
