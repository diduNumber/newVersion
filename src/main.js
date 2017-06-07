// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//将路由引入到router变量中，为了挂载到vue实例上
import router from './router'
//引入axios 网络请求的组件
import axios from 'axios'
//为了让其他模块使用
Vue.prototype.axios = axios
//懒加载引入vue-lazyload
import VueLazyload from 'vue-lazyload'
//全局引入VueLazyload 
Vue.use(VueLazyload, {
  preLoad: 4,
  error: '../static/nav0.png',
  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
});

Vue.config.productionTip = false


//创建一个bus用来传值
const bus = new Vue();
Vue.prototype.bus = bus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router  
})
