<template>
	<div class="shopping">
	    <hello></hello>
	    <div class="cart_title">
	    	<p class='lefeng'>乐蜂</p>
	    	<ul>
	    		<li v-for='item,index in product' class='clear'>
		          <div class='imgs'><img :src='item.goods.image' /></div>
		            <div class='showMessage'>
		             <p class="CgoodsName">{{item.goods.name}}</p>
		             <div class='cPrice'>￥{{item.goods.vipshopPrice}}</div>
		             <div class='operate'>
		                <i class='reduce' @click='reduce(index)'></i>
		                <span>{{item.goods.count}}</span>
		                <i class='add' @click='add(item)'></i>
		                <i class='close' @click='close($event,item)'></i>
		            </div>
		          </div>
				</li>
	    	</ul>
	    </div>
	    <div class="total_wrap clear">
	    	<span class="total_label">商品合计:</span>
	    	<span class="total_num">
	    	    ￥{{this.$store.state.all_price}}
	    	</span>
	    </div>
	    
	</div>
</template>

<script type="text/javascript">
	import Hello from '../components/Hello.vue'
	export default{
		name:'shopping',
		data () {
			return {
			   product:this.$store.state.product
			};
		},
		components:{
			Hello
		},
		methods:{
			reduce (index) {
				console.log("11111");
				console.log(index);
				this.$store.commit('ruduce_product', index);
			},
			add (item) {
				console.log('hehe');
				this.$store.commit('add_product',item);
			},
			close (ev, item) {
				ev.target.parentNode.parentNode.parentNode.style.display = 'none';
				this.$store.state.all_price -= item.goods.count * item.goods.vipshopPrice;
				item.goods.count = 0;
			}
		}
	}
</script>
<style type="text/css">
	.lefeng{
		margin: 0 .125rem;
	    color: #000;
	    line-height: .3rem;
	    border-bottom: 1px solid #dcdcdc;
	    font-weight: 400;	
	}
	.cart_title li{
		padding: .1rem 0;
	    margin: 0 .1rem;
	    position: relative;
	    list-style: none;
	    border-bottom: 1px dotted #dcdcdc;
	    -webkit-transition: background-color .2s ease-in-out;
	    transition: background-color .2s ease-in-out;
	}
	.cart_title .imgs{
		width: 1rem;
		height: 0.95rem;
		float: left;
	}
	.cart_title li img{
		width: 0.9rem;
		height: 0.95rem;
		display: block;
		margin: 0 auto;
	}
	.CgoodsName{
		margin-bottom: .05rem;
	    font-size: .14rem;
	    line-height: .175rem;
	    height: .35rem;
	    overflow: hidden;
	}
	.cPrice{
		margin-bottom: .05rem;
        font-size: .15rem;
        line-height: .2rem;
	}
	.showMessage{
	    margin-left: 1.2rem;
	}
	.operate{
		position: relative;
	}
	.operate .reduce,.operate .add{
		border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        display: inline-block;
	    line-height: .25rem;
	    vertical-align: middle;
	    border: 1px solid #d8d8d8;
	    padding: 0 .075rem;
	    text-align: center;
	}
	.operate .reduce:before{
		content: "-";
	}
	.operate .add:before{
		content: "+";
	}
	.operate .close{
		background: url(../../static/close.png) no-repeat;
		background-size:contain ;
		width: .15rem;
	    height: .15rem;
	    position: absolute;
	    right: 0;
	    top: 50%;
	    -webkit-transform: translate3d(0,-50%,0);
	    transform: translate3d(0,-50%,0);
	}
	.total_wrap{
		background: #fff;
	    border-top: 1px solid rgba(0,0,0,.06);
	    padding: .125rem;
	    line-height: .25rem;
	    margin-top: -1px;
	}
	.total_num{
		display: inline-block;
	    float: right;
	    color: #ff0056;
	}
</style>