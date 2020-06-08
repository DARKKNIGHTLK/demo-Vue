// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import httpRequest from '@/utils/httpRequest';
import Vue from 'vue';
import App from './App';
import router from './router';
// import VueResource from 'vue-resource';
import axios from 'axios';

Vue.prototype.$http = httpRequest // ajax请求方法
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;
axios.defaults.timeout = 50000;

// axios.defaults.baseURL = 'http://localhost:8989';

// Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
