import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from '@/route/index.js'
import axios from 'axios'
import {store} from './store/index'
require('@/mock/index.js')
Vue.prototype.axios = axios
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
