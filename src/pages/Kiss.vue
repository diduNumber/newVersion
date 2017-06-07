<template>
    <div id='kiss' v-scroll='loadMore' >
    	<hello></hello>
    	<ban :image='data.brandHeadImg'></ban>
    	<ul class="kiss_option">
    		<li v-for='item,index in ["价格","销量","筛选"]' @click='changeItem($event)'>{{ item }}</li>
    	</ul>
    	<div class="goodDetail">
    		<ul>
    			<li v-for='item in goods'>  
    			    <img v-lazy="item.goods.verticalImage"/>
    			    <p>蜂购全球</p>
    			    <div class="show ellipsis">
    			    	<h2>{{ item.goods.brandStoreName }}</h2>
    			    	<h3 class="ellipsis">{{ item.goods.productName }}</h3>
    			    </div>
    			    <div class="price">
    			    	<span>￥</span><span class="showPrice">{{ item.goods.vipshopPrice }}</span>
    			    	<span class="realPrice">￥{{ item.goods.marketPrice }}</span>
    			    	<span class="kissCar"></span>
    			    </div>
    			</li>
    		</ul>
    	</div>
    </div>
</template>

<script>
   var scrollDisable = false;
   	import Hello from '../components/Hello'
   	//声明一个banner组件用于放广告
   	const Child = {
   		props:['image'],
   		template: '<div class="kiss_banner"> <img :src="image"> </div>',
   	}
   	//物品显示信息
   	const goodDetail = {
   		template: '<div class="goodDetail"></div>'
   	}
   	export default{
        name: 'kiss',
        data () {
        	return {
        		data:{},
        		goods:[],
        		//start用于切换每一次请求
        		start:1,
        		flag: false,
        		//切换class
        		index: 0
        	}
        },
        components:{
        	Hello,
        	ban: Child,
        	goodDetail
        },
        methods:{
        	//请求更多数据
        	loadMore() {
        		scrollDisable = true;
        		this.start++;
                if(this.start <= 16){
	        		this.axios.get('http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start='+this.start+'&sort=%7B%22vipshopPrice%22%3A%22desc%22%7D').then(res => {
		        		var that = this;
		                res.data.data.map(function(item,index){
		                	that.goods.push(item);
		                })
		        		scrollDisable = false;
		        		console.log(this.goods);
		        	}, err => {
		        		console.log(err);
		        	})
        		}
        	},
        	//点击一次获取数据
        	changeItem (ev) {
        		//改变背景图
        		console.log(ev);
        		this.axios.get('http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start=1&sort=%7B%22vipshopPrice%22%3A%22desc%22%7D').then(res => {
	        		var that = this;
	        		this.goods = [];
	                res.data.data.map(function(item,index){
	                	that.goods.push(item);
	                })
	        	}, err => {
	        		console.log(err);
	        	})
        	}
        },
        created () {
        	this.axios.get('http://w.lefeng.com/api/neptune/brand/details/v1?brandId=755041475').then(res => {
        		this.data = res.data.data;
        		//console.log(this.data);
        	}, err => {
        		console.log(err);
        	}),
        	//默认请求一次数据
        	this.axios.get('http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start=1').then(res => {
        		var that = this;
                res.data.data.map(function(item,index){
                	that.goods.push(item);
                })
	        	}, err => {
	        		console.log(err);
	        	})
        },
        //自定义一个scroll指令
        directives: {
			  scroll: {
			     bind: (el, binding)=>{
				      window.addEventListener('scroll', ()=> {
				        if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
				        	if(!scrollDisable){
					            let func = binding.value;
					            func();
				           }
				       }
	              })
				}
			  }
		}
}
</script>

<style>
   #kiss{
   		color:#333;
   }
   .kiss_banner{
   	width: 100%;
   }
   .kiss_banner img{
   	    height: 1.6584rem;
   	    display: block;
   	    width: 100%;
   }
   .kiss_option{
   	   display: flex;
   	   height: 0.4rem;
   	   line-height: 0.4rem;
   	   border: 1px solid #ccc;
   	   text-align: center;
   	   justify-content: space-around;
   	   text-align: center;
   }
   .kiss_option li{
   	flex: 1;
   	border-right: 1px solid #ccc;
   }
   .kiss_option li:last-child{
   	  border: none;
   }
   .kiss_option li:before{
   	  content: '';
   	  display: inline-block;
   	  background: url(../../static/background.png) no-repeat -.14rem 0;
   	  background-size: .42rem .23rem;
   	  margin-right: 0.04rem;
   	  width: 0.14rem;
   	  height: 0.11rem;
   }
   .kiss_option li:nth-of-type(1):before{
   	  content: '';
   	  display: inline-block;
   	  background: url(../../static/background.png) no-repeat -.14rem 0;
   	  background-size: .42rem .23rem;
   	  margin-right: 0.04rem;
   	  width: 0.14rem;
   	  height: 0.11rem;
   }
   .kiss_option li:last-of-type:before{
   	  content: '';
   	  display: inline-block;
   	  background: url(../../static/background.png) no-repeat -.145rem -.11rem;
   	  background-size: .42rem .23rem;
   	  margin-right: 0.04rem;
   	  width: 0.14rem;
   	  height: 0.11rem;
   }
   .goodDetail{
   	height: 100%;
   }
   .kissCar{
   	background: url(../../static/kissCar.png) no-repeat right center;
   	display: inline-block;
   	width: 0.3rem;
    height:0.3rem;
    background-size: contain;
   }
   .goodDetail ul{
   	display: block;
   }
   .goodDetail li{
   	width: 44.5%;
   	position: relative;
   	padding: 0.1rem;
   	display: inline-block;
   	border-bottom: 1px solid rgba(0,0,0,.12) ;
   }
   .goodDetail li:nth-child(odd){
   	border-right: 1px solid rgba(0,0,0,.12);
   }
   .goodDetail li img{
   	width: 100%;
   }
   .goodDetail .show{
   	display: flex;
   	font-size: 0.1rem;
   	line-height: 0.2rem;
   }
   .goodDetail .show h3{
   	margin-left: 0.05rem;
   	color: #7c7c7c;
   }
   .goodDetail .show h2{
   	font-size: 0.13rem;
   	color: #333333;
   }
   .goodDetail .showPrice{
   	font-size: 0.25rem;
   	margin-right: 0.1rem;
   }
   .goodDetail .realPrice{
   	font-size: .13rem;
    color: #999;
    text-decoration: line-through;
    margin-bottom: .05rem;
   }
   .goodDetail .price span:first-child{
   	font-size: 0.16rem;
   }
   .goodDetail p{
   	color: #fff;
    padding: .01rem .05rem;
    margin-right: .05rem;
    background-color: #f93;
    width: 32%;
    height: .15rem;
    line-height: .15rem;
   }
   .goodDetail .kissCar{
   	position: absolute;
    right: 0.1rem;
    bottom: 0.1rem;
    z-index: 1;
   }
    #kiss .kiss_option .kissActive:before{
   	  content: '';
   	  display: inline-block;
   	  background: url(../../static/background.png) no-repeat -.28rem 0;
   	  background-size: .42rem .23rem;
   	  margin-right: 0.04rem;
   	  width: 0.14rem;
   	  height: 0.11rem;
   }
   #kiss .kiss_option .kissActive1:before{
   	  content: '';
   	  display: inline-block;
   	  background: url(../../static/background.png) no-repeat;
   	  background-size: .42rem .23rem;
   	  margin-right: 0.04rem;
   	  width: 0.14rem;
   	  height: 0.11rem;
   }
</style>