import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'src/common/element-ui'
import VeeValidate from 'src/common/validator'
import http from 'src/common/http'
import store from 'src/vuex/store'
import '@/assets/css/manage.css'
import '@/assets/css/font.css'
import '@/assets/css/strcture.css'
import '@/assets/css/main.css'
Vue.use(http)
VeeValidate()
elementUi()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
