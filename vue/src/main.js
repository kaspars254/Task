import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
