import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import router from './router'
import axios from './http'
import store from '@/vuex/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '@@/skin/css/common.css'
// import $ from 'jquery'

Vue.prototype.$ajax = axios;
Vue.use(VueAwesomeSwiper);
Vue.use(Mint);
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  axios,
  store,
  render: h => h(App)
});
