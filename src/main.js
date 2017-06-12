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
  error: '../static/loding.png',
  // loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  loading:'../static/loding.png',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
});
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//全局都可以使用
Vue.use(VueAwesomeSwiper)
//引入museui
import MuseUI from 'muse-ui'

//全局都可以使用
Vue.use(MuseUI)
//使用light主题
Vue.config.productionTip = false
//引入vuex
import Vuex from 'vuex'
//全局使用vuex
Vue.use(Vuex)
//创建store
const store = new Vuex.Store({
	 state: {
	 	    //共享的数据//所有产品的数组
	 	    product:[],
	 	    all_price: 0
	 },
	 mutations: {//添加商品的方法
	 	    add_product (state, goods){
	 	    	/*if(state.product.length == 0){
	 	    		   goods.goods.count = 1;
	 	    		 	 state.product.push(goods);
	 	    		 	 return false;
	 	    	}else{
			 	    	state.product.map(function(item, index){
			 	    		//为每一个item.goods添加count
			 	    		  if(item.goods.gid == goods.goods.gid){
			 	    		  	  item.goods.count++;
			 	    		  	  return true;
			 	    		  }else{
			 	    		  	   goods.goods.count = 1;
			 	    		  	   state.product.push(goods);
			 	    		  	   return true;
			 	    		  }
			 	    	})
			 	    }*/
			 	   let flagGoods = false;
			 	   state.product.map(function(item, index){
			 	    		//为每一个item.goods添加count
	 	    		  if(item.goods.gid == goods.goods.gid){
	 	    		  	  item.goods.count++;
	 	    		  	  flagGoods = true;
	 	    		  	  state.all_price += item.goods.vipshopPrice;
	 	    		  };
	 	    	 })
					 	   if(flagGoods == false){
					 	   	goods.goods.count = 1;
					 	   	state.product.push(goods);
					 	   	state.all_price += goods.goods.vipshopPrice;
					 	   }
	 	    	},
			 	    ruduce_product (state, index){
			 	    			console.log(state.product[index]);
			 	    	   state.product[index].goods.count --;
			 	    	   state.all_price -= state.product[index].goods.vipshopPrice;
			 	    	   if(state.product[index].goods.count == 0){
			 	    	   	   console.log(index);
			 	    	      state.product.splice(index,1);
			 	    	   }
			 	    }
	 	           
	 }
})
//创建一个bus用来传值
const bus = new Vue();
Vue.prototype.bus = bus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router  
})
