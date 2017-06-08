<template>
	<div class="room" :style="{background: id.backgroundColor}">
		<button @click="backRoom()">返回</button>
		<div class="bigImg">
			<img  v-lazy="'../../static/' + id.bigImg">
		</div>
		<!-- <div class="smallImg">
			<img v-lazy="'../../static/' + id.smallImg">
		</div> -->
		<div class="gogogo" :style='{background:"url(" + "../../static/" + id.smallImg + ") no-repeat center center", backgroundSize:"contain"}' v-scroll2='toTopFixed'>
			<ul>
				<li v-for="item of 4"></li>
			</ul>
		</div>
		<div class="goodList" :style="{background: id.backgroundColor}">
			<ul>
				<li v-for="item of goodsList">
					<div class="divImg">
						<img v-lazy="item.goods.image">
					</div>
					<div class="goodsName">
						<h2>{{ item.goods.name }}</h2>
					</div>
					<div class="price">
						<span class="spanPrice"><i>￥</i>{{ item.goods.vipshopPrice }}</span>
						<span class="buy">立即购买</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	export default{
		methods:{
			backRoom(){
				history.back()
			},
            toTopFixed(){
            	console.log(this.$el.children[2]);
                this.$el.children[2].style.position = 'fixed';
            }
		},
		data(){
			return {
				id: this.$route.query,
				goodsList:{}
			}
		},
		created(){
			this.axios.get(this.id.requestUrl).then(res => {
				this.goodsList = res.data.data;
				console.log(res.data.data)
			})
		},
		directives: {
		  scroll2: {
		    bind: function (el, binding){
		      window.addEventListener('scroll', ()=> {
		        if(document.body.scrollTop == el.offsetTop) {
		                 //当满足要求时触发函数
		                 let func = binding.value;
		                 func();
		        }
		      })
		    }
		  }
		}
	}
</script>

<style>
	.room .gogogo{
		width: 100%;
		height: .3381rem;
		position: relative;
		z-index: 123;
	}
	.room img{
		width: 100%;
	}
	.room .bigImg, .room .smallImg{
		font-size: 0;
	}
	.room .goodList{
		position: absolute;
		top: 2.6681rem;
	}
	.room .goodList ul{
		margin-top: 0.1rem;
		display: flex; 
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.room .goodList li {
		width: 45%;
		padding: 1%;
		background-color: #fff;
		margin-bottom: 0.1rem;
	}
	.room .goodList li:nth-of-type(odd) {
		margin: 0 2% 0.1rem;
	}
	.room .goodList li .divImg{
		font-size: 0;
	}
	.room .goodList li .goodsName h2{
		font-size: .13rem;
		font-weight: normal;
		height: 36px;
		line-height: 18px;
		word-break: break-all;
		overflow: hidden;
		margin-bottom: 8px;
	}
	.room .goodList li .price .spanPrice{
		color: #ff0155;
		font-size: 20px;
		line-height: 25px;
	}
	.room .goodList li .price .spanPrice i{
		font-style: normal;
		font-size: 12px;
		color: #FF0155;
	}
	.room .goodList li .price .buy{
		color: #fff;
		background-color: #FF0155;
		float: right;
		padding: 3px;
		border-radius: 3px;
	}

</style>