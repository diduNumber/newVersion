<template>
	<div class="room" :style="{background: id.backgroundColor}">
		<hello></hello>
		<div class="bigImg">
			<img  v-lazy="'../../static/' + id.bigImg">
		</div>
		<!-- <div class="smallImg">
			<img v-lazy="'../../static/' + id.smallImg">
		</div> -->
		<div class="gogogo" :style='{background:"url(" + "../../static/" + id.smallImg + ") no-repeat center center /contain"}' v-scroll4>
			<ul class="clickBar">
				<li v-for="item of 4" @click="clickBarChose(item)"></li>
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
						<span class="buy" @click="buyThis(item)">立即购买</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	import Hello from '../components/Hello'
	export default{
		components:{
			Hello
		},
		methods:{
			/*getJapanData(){
				window.addEventListener('scroll', () => {
					if(document.body.scrollTop >= document.clientHeight){
						console.log("1234");
					}
				})
			},*/
			buyThis(item){
				console.log(item);
			},
			getDate(){
				this.axios.get(this.id.requestUrl).then(res => {
				this.goodsList = res.data.data;
				console.log(res.data.data)
				})
			},
			backRoom(){
				history.back()
			},
           /* toTopFixed(){
            	console.log("111111111111");
            	// console.log(this.$el.children[2]);
                // this.$el.children[2].style.position = 'fixed';
                this.$el.children[2].className='position';
            },
            topTopRelative(){
            	this.$el.children[2].className='gogogo';
            }*/
            // 点击四个海洋馆选择按钮进行数据切换
            clickBarChose(item){
            	switch(item){
            		case 1:{
            			console.log(1);
            			this.id = this.idAll.goRoomMsgJapan;
            			console.log(this);
            			this.getDate();
            			// this.getJapanData();
            		};
            		break;
            		case 2:{
            			console.log(2);
            			this.id = this.idAll.goRoomMsgEuroper;
            			this.getDate();
            		};
            		break;
            		case 3:{
            			console.log(3);
            			this.id = this.idAll.goRoomMsgAmrican;
            			this.getDate();
            		};
            		break;
            		case 4:{
            			console.log(4);
            			this.id = this.idAll.goRoomMsgTaiGang;
            			this.getDate();
            		}
            		break;
            	}
            }
		},
		data(){
			return {
				id: this.$route.query.data,
				idAll:this.$route.query.dataAll,
				goodsList:{}
			}
		},
		created(){
			console.log(this.$route.query)
			this.axios.get(this.id.requestUrl).then(res => {
				this.goodsList = res.data.data;
				console.log(res.data.data)
			})
		},
		/*updated(){
			this.axios.get(this.id.requestUrl).then(res => {
				this.goodsList = res.data.data;
				console.log(res.data.data)
			})
		},*/
		/*directives: {
		    scroll2: {
			    bind: function (el, binding){
			      	window.addEventListener('scroll', ()=> {
				      	// document.body.scrollTop == el.offsetTop
				        if(document.body.scrollTop > el.offsetTop) {
			                //当满足要求时触发函数
			                console.log(el.offsetTop);
			                console.log(document.body.scrollTop);
			                let func = binding.value;
			                func();
			        	}
			      	})
			    }
		    },
		    scroll3: {
			    bind: function (el, binding){
			      	window.addEventListener('scroll', ()=> {
				      	// document.body.scrollTop == el.offsetTop
				        if(document.body.scrollTop < 233) {
			                //当满足要求时触发函数
			                console.log(el.offsetTop);
			                console.log(document.body.scrollTop);
			                let func = binding.value;
			                func();
			        	}
			      	})
			    }
		    }
		}*/
		directives:{
			scroll4(el, binding){
				let scrollTop = el.offsetTop;
				console.log(el);
				// let scrollTop = document.getElementsByClassName("btnRoom")[0].offsetHeight + document.getElementsByClassName('bigImg')[0].offsetHeight;
		      	window.addEventListener('scroll', ()=>{
		      		document.body.scrollTop > scrollTop?el.className = "position":el.className = "gogogo";
		      	})
			},
			// scroll5(el, binding){
			// 	let a = 1;
			// 	window.addEventListener('scroll', (e)=>{
			// 		if(document.body.scrollTop + window.innerHeight  >= document.getElementsByClassName("goodList")[0].clientHeight + document.getElementsByClassName("room")[0].clientHeight){
			// 				if(a == 1){
			// 					a++;
			// 					/*setTimeout(function(){
			// 						console.log("开始请求数据");
			// 						a = 1;
			// 					}, 2000)*/
			// 					console.log("111111");
								
			// 				}
			// 		}
			// 	})
			// }
		}
	}
</script>

<style>
	.room .header{
		background: #fff;
		/* position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index:999; */
	}
	.position{
		position: fixed;
		top: 0rem;
		z-index: 999;
		width: 100%;
		height: .339rem;
	}
	/* .room{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	} */
	.room .gogogo{
		width: 100%;
		height: .339rem;
		position: relative;
		z-index: 123;
	}
	.room .clickBar{
		display: flex;
	}
	.room .clickBar li{
		width: 25%;
		height: .339rem;
	}
	.room img{
		width: 100%;
	}
	.room .bigImg, .room .smallImg{
		font-size: 0;
	}
	.room .goodList{
		position: absolute;
		top: 2.64rem;
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
		padding: 0.1rem;
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