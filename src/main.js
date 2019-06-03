import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import './style/style.scss'
import 'material-icons'


/***
 * 初始化axios
 * https://www.kancloud.cn/yunye/axios/234845
 */
import axios from 'axios'
// axios.defaults.baseURL = 'http://111.85.91.160:8087/LPSTQYJXT/';
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/' : '/api';
axios.defaults.headers.withCredentials = true;
Vue.prototype.$axios = axios;


/**
 * element
 * */
import Element from 'element-ui'
import './style/element-variables.scss'
Vue.use(Element);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
