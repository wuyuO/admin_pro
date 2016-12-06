import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from './config'

Vue.use(VueResource)
// http相关
Vue.http.options.xhr = { withCredentials: true }

export default{
  login (data) {
    return Vue.http.post(API_ROOT + 'user/login', data)
  },
  loginOut () {
    return Vue.http.get(API_ROOT + 'user/quit')
  },
  registerUser (data) {
    return Vue.http.post(API_ROOT + 'user', data)
  },
  checkPwd (data) {
    return Vue.http.post(API_ROOT + 'user/pwd/check', data)
  },
  hasEmail (data) {
    let Resource = Vue.resource(API_ROOT + 'user/exist/email/{/Email}')
    return Resource.get(data)
  },
  hasUser (data) {
    let Resource = Vue.resource(API_ROOT + 'user/exist/name{/Name}')
    return Resource.get(data)
  },
  forgetPwd (data) {
    let Resource = Vue.resource(API_ROOT + '/user/pwd/find{/Name}')
    return Resource.get(data)
  },
  currUserIfon () {
    return Vue.http.get(API_ROOT + 'user/info')
  }
}
