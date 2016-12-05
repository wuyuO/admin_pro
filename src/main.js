import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import routes from './router'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import './assets/css/reset.css'
import './assets/css/common.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

// 创建路由
const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
