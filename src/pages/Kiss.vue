<template>
    <div id='kiss' v-scroll='loadMore' >
    	<hello></hello>
    	<ban :image='data.brandHeadImg'></ban>
    	<ul class="kiss_option">
    		<li v-for='item,index in ["价格","销量"]' @click='changeItem(index)' :class='{"kissActive": (index == indexItem) && rot,"kissActive1": (index == indexItem) && !rot }'>{{ item }}</li>
    	    <li @click='slide($event)'>筛选</li>
    	</ul>
    	<div class="goodDetail">
    		<ul>
    			<li v-for='item,index in goods'>  
    			    <img v-lazy="item.goods.verticalImage"/>
    			    <p>蜂购全球</p>
    			    <div class="show ellipsis">
    			    	<h2>{{ item.goods.brandStoreName }}</h2>
    			    	<h3 class="ellipsis">{{ item.goods.productName }}</h3>
    			    </div>
    			    <div class="price">
    			    	<span>￥</span><span class="showPrice">{{ item.goods.vipshopPrice}}</span>
    			    	<span class="realPrice">￥{{ item.goods.marketPrice }}</span>
    			    	<span class="kissCar" @click='shopping(item)'></span>
    			    </div>
    			</li>
    		</ul>
    	</div>
    	<box-hidden :sx='sx' :show='show'></box-hidden>
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
   	//定义一个遮罩图层
   	const boxHidden = {
   		props:['sx','show'],
   		template: `
   		<div class="kiss_hidden" v-show='show.yy'>
   		    <div class='kiss_hidden_content'>
   		      <div class="hiddentitle clear">
   		          <span class="kiss_cancel" @click='out($event)'>取消</span>
   		          <p class="kiss_filter">筛选</p>
   		      </div>
   		      <div class='kiss_sort'>
   		          <h4>分类</h4>
   		          <ul>
   		              <li class='slideActive'>全部</li>
   		              <li v-for='item in sx' class='ellipsis'>{{item.thirdCatName}}</li>
   		          </ul>
   		      </div>
   		      <div class='kissButton'>
   		         确认
   		      </div>
   		    </div>  
   		</div>`,
   		methods:{
   			out (ev) {
   				const oR = ev.target.parentNode.parentNode.parentNode;
   				let t = setInterval(()=>{
   					oR.style.left = oR.offsetLeft +'px';
   			        oR.style.left = parseInt(oR.style.left)+ 10 + 'px';
   			        if(parseInt(oR.style.left) == 300){
   			    	clearInterval(t);
   			    	this.show.yy = false;
   			    	oR.style.left = 0+'px';
   			    }
   				},1);
   			}
   		}
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
        		indexItem:4,
        		//用于排序使用
        		rot: false,
        		str: 'desc',
        		//用于切换销量和排序
        		change: '',
        		//用于存储筛选的项目
        		choice: {},
        		//用于筛选
        		sx:[],
        		show: {},
        		product:[]
        	}
        },
        components:{
        	Hello,
        	ban: Child,
        	goodDetail,
        	boxHidden
        },
        methods:{
        	//请求更多数据
        	loadMore() {
        		scrollDisable = true;
        		this.start++;
                if(this.start <= 16){
	        		this.axios.get('http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start='+this.start+'&sort=%7B%22'+this.change+'%22%3A%22'+this.str+'%22%7D').then(res => {
		        		var that = this;
		                res.data.data.map(function(item,index){
		                	that.goods.push(item);
		                })
		        		scrollDisable = false;
		        	}, err => {
		        		console.log(err);
		        	})
        		}
        	},
        	//点击一次获取数据
        	changeItem (index) {
        		//改变相应的indexItem
        		this.indexItem = index;
        		if(index == 0){
        			this.change = 'vipshopPrice';
        		}else if(index == 1){
        			this.change = 'sale'
        		}else{
        			this.change = '';
        		}
        		this.rot = !this.rot;
        		if(this.rot){
	        		this.str = 'desc';
	        		this.axios.get('http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start=1&sort=%7B%22'+this.change+'%22%3A%22desc%22%7D').then(res => {
		        		var that = this;
		        		this.goods = [];
		                res.data.data.map(function(item,index){
		                	that.goods.push(item);
		                })
		        	}, err => {
		        		console.log(err);
		        	})
        	  }else{
	        	  	this.str = 'asc';
	        	  	this.axios.get('http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start=1&sort=%7B%22'+this.change+'%22%3A%22asc%22%7D').then(res => {
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
        	//点击筛选按钮出现slide
        	slide(ev){
        		ev.target.className = 'kissSlideActive';
        		this.show = { yy: true };
        	},
        	//添加购物车
        	shopping (item) {
        		this.product.push(item);
        		this.bus.$emit('product',this.product);
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
        	//请求数据
        	this.axios.get('../static/sx.json').then(res => {
	        	this.sx	= res.data.data;
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
   	width: 50%;
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
    #kiss .kiss_option .kissSlideActive:before{
   	  content: '';
   	  display: inline-block;
   	  background: url(../../static/background.png) no-repeat 0 -.11rem;
   	  background-size: .42rem .23rem;
   	  margin-right: 0.04rem;
   	  width: 0.14rem;
   	  height: 0.11rem;
   }
   .kiss_hidden{
   	 position: absolute;
   	 top: 0;
   	 bottom: 0;
   	 right: 0;
   	 left: 0;
   	 background: rgba(0, 0, 0, .1);
   	 z-index: 999;
   }
   .kiss_hidden_content{
   	  position: absolute;
   	  top: 0;
   	  bottom: 0;
   	  right: 0;
   	  left: 0.375rem;
   	  background: #fff;
   }
   .hiddentitle{
   	  width: 100%;
   	  height: 0.7rem;
   	  line-height: 0.6rem;
   	  border-bottom: 0.1rem solid #eee;
   }
   .kiss_cancel{
   	    float: left;
		display: inline-block;
		width: .6rem;
		text-align: left;
		height: .6rem;
		line-height: .6rem;
		margin-left: 5%;
		font-size: .12rem;
   }
   .kiss_filter{
   	  float: left;
   	  position: relative;
	  left: 45%;
	  margin-left: -.74rem;
	  font-size: .17rem;
   }
   .kiss_sort{
   	 padding: 0.1rem 0.10125rem;
   	 width: 100%;
   	 height: 1.52rem;
   	  border-bottom: 0.1rem solid #eee;
   }
   .kiss_sort h4{
   	 margin: 0 0 0 0.06344rem; 
   	 height: 0.4rem;
   	 line-height: 0.4rem;
   	 width: 0.4rem;
   	 font-size: 0.13rem;
   	 font-weight: normal;
   }
   .kiss_sort ul{
	   	text-align: center;
   }
   .kiss_sort li{
   	    float: left;
	   	width: 0.8861rem;
	   	height: 0.27rem;
	   	line-height: 0.27rem;
	   	border: 0.01rem solid #ccc;
	   	font-size: 0.12rem;
	   	padding: 0 0.1rem;
	   	margin: 0.06rem 0.07922rem;
   }
   .kissButton{
	   	display: block;
	    text-align: center;
	    line-height: 40px;
	    color: #fff;
	    background-color: #ff0056;
	    border-radius: 20px;
	    margin: 20px 4%;
   }
   .kiss_sort .slideActive{
   	   border: 1px solid #FC1158;
   	   background: url(../../static/right.png) no-repeat 100% 100%;
   	   background-size: .175rem;
   }
</style>