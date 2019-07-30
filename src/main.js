import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/reset.css'
import MyHeader from "./components/myHeader"
Vue.component("my-header",MyHeader);
Vue.use(require("vue-wechat-title"))

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.prototype.axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
 

  render: h => h(App)
}).$mount('#app')
