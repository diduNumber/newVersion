<template>
	<div id="goodDetail" v-scroll="loadMore">
		<hello></hello>
		<section id="relDetail">
			<div class="goodCont">
				<div class="goodPic" :style="{'background-image': 'url(' + data.largeImage + ')'}">
				</div>
				<div class="goodInfo">
					<div class="goodIntro">
						<h2>
							<span class="goodGlob">峰购全球</span>
							{{ data.name }}
							<span class="goodCollect" :style="{'background-image': 'url('+ collectUrl +')'}"></span>
						</h2>
						<p class="goodPric">
							￥<span class="priceNow">{{ data.vipshopPrice }}</span>
							<span class="cost">￥{{ data.marketPrice }}</span>
						</p>
					</div>
				</div>
			</div>
			<div class="goodEvaluate">
				<h2 class="clear">
					<p class="evaLeft">
						商品评价  
						<span class="evaNum">(  {{ dataEvaNum.totalCount }}  )</span></p>
					<p class="evaRight">
						<span class="percent">{{ dataEvaNum.greatScale }}%</span>好评
					</p>
				</h2>
				<ul class="evaInfo">
					<li v-for="(item, index) of dataEva">
						<p class="title">
							<span class="evaPic" :style="{'background-image': 'url(' + evaPic + ')'}"></span>
							满意
							<span class="evaRight evaRicont">
								<span>{{ item.authorName }}</span>
								<span>{{ time[index] }}</span>
							</span>
						</p>
						<p>{{ item.content }}</p>
					</li>
				</ul>
			</div>
			<div class="goodHF">
				<span>花粉</span>
				购买最多可获得<i class="hfNum">{{ data.obtainPollen }}</i>个花粉
			</div>
			<div class="goodInfomation">
				<ul class="goodTit clear"  id = 'show'>
					<li v-for='item,index in ["商品信息","购物说明"]' @click='showMessage($event,index)'>{{ item }}</li>
				</ul>
				<div class="goodTab" > 
					<div class="goodIn" >
						<div class="goodInTop">
							<p>该商品均在国外采购</p>
							<p>预计送达时间 : {{ data.expectDeliveryData }}</p>
						</div>
						<!-- <ul class="goodJie">
							<li v-for="item in data.descriptions" class="clear">
								<span class="goodJieLeft">{{ item.name }}</span>
								<span class="goodJieRight">{{ item.value }}</span>
							</li>
						</ul> -->
						<table class="goodJie">
							<tr v-for="item in data.descriptions">
								<td class="goodJieLeft">{{ item.name }}</td>
								<td class="goodJieRight">{{ item.value }}</td>
							</tr>
						</table>
						<p class="goodPicInfo" @click="showPic()" v-if="flag">点击查看图文详情</p>
						<img class="goodDetailPic" v-if="!flag" :src="data.detailImage">
					</div>
					<div>
						<ul class="buySayOut" >
							<li>
								<h2><i></i>关于商品<i></i></h2>
								<p>乐蜂网上所售卖的商品均经过品牌授权，确保正品，并由中国太平洋财产保险股份有限公司为您购买的每一件商品进行承保。</p>
							</li>
							<li>
								<h2><i></i>商品价格说明<i></i></h2>
								<p>乐蜂展示的中间未划横线价格（显示如¥799）为乐蜂销售价，该价格是交易成交价，是您最终决定是否购买商品的依据。</p>
								<p>乐蜂展示的中间划横线价格（显示如￥1399）为参考价，采集自品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价可能会与您购物时展示的不一致。该价格仅供您参考。</p>
								<p>折扣比为乐蜂销售价与参考价的对比（该值四舍五入后采用小数点后1位，如¥799/¥2899=0.2756=2.8折），该对比值仅供您参考，不作为结算基数。</p>
							</li>
							<li>
								<h2><i></i>售后说明<i></i></h2>
								<p>在您签收商品之日起的7天之内，乐蜂为您提供七天无理由放心退服务，但以下情形将不能退货：</p>
								<ol>
								<li>1、非乐蜂销售的商品，或有明显使用痕迹影响二次销售的商品；</li>
								<li>2、法律明确规定不适用七天无理由退货的商品；</li>
								<li>3、基于安全及健康的考虑，已拆封的食品、药品、保健品、化妆品、贴身用品等；</li>
								<li>4、已经激活的手机、电脑、数码产品等；</li>
								<li>5、已在线交付的充值类商品；</li>
								<li>6、未经授权的维修、误用、碰撞、疏忽、滥用、进液、事故、改动、不正确的安装所造成的商品质量问题，或撕毁、涂改标贴、机器序号、防伪标记；</li>
								<li>7、无法提供商品的发票（如已索要发票）、保修卡等三包凭证或者三包凭证信息与商品不符及被涂改的；</li>
								<li>8、礼包或套装中的商品不可以部分退换货。上述退货规则，客户一经购买，视为认可。</li>
								</ol>
							</li>
							<li>
								<h2><i></i>消费者告知书<i></i></h2>
								<p class="custorma">尊敬的客户：</p>
								<p>您好！</p>
								<p>为帮助您更好地选购境外商品，请您在购买前务必认真、详细阅读并完全理解本告知书的全部内容，并对自身风险承担做出客观判断。同意本告知书内容后再下单购买：</p>
								<ul>
									<li>1. 您在本（公司）网站购买的境外商品等同于原产地直接销售商品，因此商品本身可能无中文标签，如果需要您可以通过网站查看相关商品标签中文翻译或联系客服。</li>
									<li>2. 根据相关法律政策，您选购的境外商品仅限于个人自用，不得进行再次销售。</li>
									<li>3.您购买的境外商品符合原产地有关品质、健康、标识的相关标准，与我国产品标准或有所不同，由此可能造成的危害、损失或者其他风险，本（公司）网站不承担责任！</li>
								</ul>
								<p>谢谢！</p>
							</li>
						</ul>
					</div>	
				</div>
			</div>
			<div class="BuySee">
				<h3>浏览本商品的用户还买了</h3>
				<ul class="anotherGoods clear">
					<li v-for="item in dataAnotherSee">
						<div class="anotherGoodsImg">
							<img v-lazy="item.goods.image">
						</div>
						<div class="anotherGoodsInfo ellipsis">
							<h2>{{ item.goods.brandStoreName }}</h2>
							<h3 class="">{{ item.goods.name }}</h3>
						</div>
					</li>
				</ul>
			</div>
			<div class="homeCarImg" @click="goCart()">
				<div>
	            	<span></span>
	            	<button class="CarRight"@click.stop="shopping(id.goods)">加入购物车</button>					
				</div>
            </div>
		</section>
	</div>
</template>

<script type="text/javascript">
	let scrollDisable = false;
	import Hello from '../components/Hello'
	export default{
		name: 'goodDetail',
		data () {
			return {
				collectUrl: '../static/goodDetails/collect.png',
				evaPic: '../static/goodDetails/good.png',
				Num: 0,
				data: {},
				dataEva: {},
				dataEvaNum: {},
				dataAnotherSee: [],
				flag: true,
				// 接收商品的信息
				id:this.$route.query

			}
		},
		methods:{
			showMessage (ev,index) {
				 const oUl = document.getElementById('show');
			    const aLi = oUl.getElementsByTagName('li');
				const oDiv = document.getElementsByClassName('goodTab')[0];
                const aDiv = oDiv.getElementsByTagName('div');
				if(index == 0){
                    ev.target.className = 'goodActive';
                    aLi[1].className = ' ';
                    aDiv[index].style.display = 'block';
                    aDiv[2].style.display = 'none';
				}else{
                    ev.target.className = 'goodActive';
                    aLi[0].className = ' ';
                    aDiv[2].style.display = 'block';
                    aDiv[0].style.display = 'none';
				}
			},
			showPic () {
				this.flag = !this.flag
			},
			loadMore () {
				scrollDisable = true;
				this.Num++;
				if(this.Num < 10){
					this.axios.get('http://w.lefeng.com/api/neptune/handpick_list/v1?stochastic=1&start=' + this.Num ).then(res => {
						let that = this;
						res.data.data.map(function(item, index){
							that.dataAnotherSee.push(item)
						})
						scrollDisable = false;
						console.log(that.dataAnotherSee)
					})
				}
			},
			// 跳转到购物车页面
            goCart () {
	            this.$router.push({
	                path:"/shopping"
	            })
        	},
        	//添加购物车
        	shopping (item){
        		this.$store.commit('add_product',item);
        		console.log(item);
        		console.log(this.$store.state.product);
        	},
		},
		created () {
			console.log(this.id.goods.goods.gid);
			// console.log(this.data)
			// 商品的基本信息
			this.axios.get('http://w.lefeng.com/api/neptune/goods/detail_with_stock/v1?needBrandInfo=true&gid=' + this.id.goods.goods.gid).then(res => {
				this.data = res.data.data.goods
			});
			// 商品评价的具体内容
			this.axios.get('http://w.lefeng.com/api/neptune/appraise/get_appraise_list/v1?page=1&pageSize=3&scoreLevel=0&spuId=1036467142779895835')
				.then(res => {
				this.dataEva = res.data.data
				// console.log(res.data.data)
			});
			// 商品评价的信息
			this.axios.get('http://w.lefeng.com/api/neptune/appraise/count/v1?spuId=1036467142779895835').then(res => {
				this.dataEvaNum = res.data.data
				// console.log(res.data)
			});
			
		},
		mounted () {
           const oUl = document.getElementById('show');
		   const aLi = oUl.getElementsByTagName('li');
		   const oDiv = document.getElementsByClassName('goodTab')[0];
           const aDiv = oDiv.getElementsByTagName('div');
		   // console.log(aDiv);
		   aDiv[2].style.display = 'none';
		   aLi[0].className = 'goodActive';
		},
		components: {
			Hello
		},
		computed: {
			time () {
				var times = [];
				for(let i in this.dataEva){
					let date = new Date(this.dataEva[i].postAt);
					// console.log(this.dataEva[i].postAt)
					times.push((date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()))
				}
				// console.log(times)
				return times;
			}
		},
		directives: {
			scroll: {
				bind: (el, bingding) => {
					window.addEventListener('scroll', () => {
						if(document.body.scrollTop + window.innerHeight >= el.clientHeight){
							if(!scrollDisable){
								let func = bingding.value;
								func();
							}
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	#relDetail{
		color: #333;
		position: absolute;
		left: 0;
		right: 0;
		top: 0.4rem;
		background: #f6f6f6;
	}
	/*----  goodCont ------*/
	.goodCont, .goodEvaluate, .goodHF, .goodInfomation{
		border-top: 1px solid rgba(0,0,0,.12);
		border-bottom: 1px  solid rgba(0,0,0,.12);
		margin: 0 0 0.075rem 0;
		background: #fff;
	}
	.goodPic{
		width: 100%;
		height: 2.25rem;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: left center;
	}
	.goodInfo{
		width: initial;
		padding: 0.1rem;
	}
	.goodGlob{
		padding: 0.01rem 0.05rem;
		color: #fff;
		background: #ff9000;
		font-size: 0.13rem;
		border-radius: 3px;
	}
	.goodIntro h2{
		line-height: .225rem;
		font-size: 0.14rem;
		margin: 0 0 0.25rem 0;
		padding: 0 0.45rem 0 0;
		font-weight: normal;
		position: relative;
	}
	.goodCollect{
		display: inline-block;
		width: 0.25rem;
		height: 0.25rem;
		background-size: contain;
		position: absolute;
		right: 0;
		top: 20%;
	}
	.goodPric{
		color: #fc1159;
	}
	.priceNow{
		font-size: 0.25rem;
	}
	.cost{
		color: #999;
		font-size: 0.12rem;
		text-decoration: line-through;
	}

	/*-------- goodEvaluate  ----------*/
	.goodEvaluate{
		border-bottom: none;
	} 
	.goodEvaluate h2{
		font-weight: normal;
		font-size: 0.14rem;
		padding: 0.1rem;
		border-bottom: 1px  solid rgba(0,0,0,.12);
	}
	.evaLeft{
		float: left;
	}
	.evaNum{
		font-size: 0.11rem;
	}
	.evaRight{
		float: right;
	}
	.percent{
		color: #fc1159;
		margin: 0 0.05rem 0 0;
	}
	.evaInfo li{
		padding: 0.1rem;
		border-bottom: 1px  solid rgba(0,0,0,.12);
	}
	.evaInfo p{
		line-height: 0.165rem;
	}
	.title{
		margin: 0 0 0.075rem 0;
		color: #f91a5b;
	}
	.evaPic{
		display: inline-block;
		width: 0.13rem;
		height: 0.13rem;
		vertical-align: top;
		margin: 0.03rem 0 0 0;
		background-size: contain;
		background-repeat: no-repeat; 
	}
	.evaRicont span{
		color: #777;
		margin: 0 0 0 0.125rem;
	}

	/*-------  huafen  --------*/
	.goodHF{
		padding: 0.1rem;
	}
	.goodHF span{
		display: inline-block;
		width: 0.4rem;
		text-align: center;
		color: #fff;
		background: #ff5890;
		border-radius: 3px;
		padding: 0.01rem 0;
		margin: 0 0.06rem 0 0;
	}
	.hfNum{
		color: #ff5890;
		font-style: normal;
	}

	/*---- 商品信息  ----*/
	.goodInfomation{
		margin: 0;
	}
	.goodTit li{
		float: left;
		width: 50%;
		height: 0.38rem;
		text-align: center;
		line-height: 0.38rem;
		box-sizing: border-box;
		border-bottom: 1px  solid rgba(0,0,0,.12)
	}
	.goodTit .goodActive{
		color: #ff0056;
    	box-sizing: border-box;
    	border-bottom: 2px solid #ff0056;
	}
	.goodTab{
		width: initial;
		padding: 0.1rem;
	}
	.goodInTop{
		padding: 0.1rem 0;
	}
	.goodInTop p{
		line-height: 0.21rem;
		border-left: 5px solid #ff0056;
		color: #ff0056;
		padding: 0 0 0 0.075rem;
	}
	.goodJie{
		border: 1px solid #ccc;
		border-collapse: collapse;
	}
	.goodJie td{
		border: 1px solid #ccc;
		padding: 0 0.1rem;
		line-height: 0.37rem;
	}
	.goodJieLeft{
		width: 1.1rem;
		background: #f7f7f7;
	}
	.goodJie .goodJieRight{
		width: 2.43rem;
		line-height: 0.25rem;
		padding: 0 0.075rem;
	}
	.goodDetailPic{
		width: 100%;
		margin: 0.05rem 0 0 0;
	}
	.goodPicInfo{
		margin: 0.075rem 0 0 0;
		text-align: center;
		padding: 0.1rem;
	}

	.buySayOut{
		padding: 0.1rem 0.2rem;
		color: #666;
		font-size: 0.13rem;
	}
	.buySayOut>li{
		margin: 0 0 0.22rem 0;
	}
	.buySayOut h2{
		color: #333;
	    font-size: .15rem;
	    font-weight: 700;
	    margin: .1rem 0;
	    text-align: center;
	}
	.buySayOut i{
		display: inline-block;
	    width: .06rem;
	    height: .06rem;
	    border-radius: .03rem;
	    background-color: #d5d5d5;
	    vertical-align: middle;
	    margin: 0 .12rem .015rem;	
	}
	.buySayOut p{
		text-indent: 2em;
	}
	.buySayOut .custorma{
		text-indent: 0;
	}

	.BuySee{
		width: initial;
		margin: 0.075rem 0 0 0;
	}
	.BuySee h3{
		padding: 0.1rem;
		line-height: 0.32rem;
		font-weight: 700;
	}
	/*浏览其他*/
	.anotherGoods{
		width: 100%;
		background: #fff;
		border-top: 1px solid rgba(0,0,0,.12);
	}
	.anotherGoods li{
		width: 50%;
		box-sizing: border-box;
		border-bottom: 1px solid rgba(0,0,0,.12);
		border-right: 1px solid rgba(0,0,0,.12);
		float: left;
		padding: 0.1rem;
	}
	.anotherGoodsImg{
		margin: 0 0.06rem;
	}
	.anotherGoodsImg img{
		width: 100%;
		height: 1.86rem;
	}
	.anotherGoodsInfo{
		height: 0.23rem;
		line-height: 0.23rem;
	}
	.anotherGoodsInfo h2, .anotherGoodsInfo h3{
		display: inline;
		/*float: left;*/
	}
	.anotherGoodsInfo h2{
		font-weight: 700;
		font-size: 0.11rem;
	}
	.anotherGoodsInfo h3{
		font-weight: 500;
		color: #4d4d4d;
		font-size: 0.12rem;
	}

	/*----- 跳转购物车页面 -----*/
	.homeCarImg{
      	position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        padding: .1rem;
        background: rgba(0,0,0,.7);
    }
    .homeCarImg div{
    	height: 0.3rem;
    }
    .homeCarImg span{
      background: url(../../static/Homeimg/homrCar.png) no-repeat left center;
      background-size: contain;
      display: inline-block;
      vertical-align: top;
      width: 0.275rem;
      height: 0.31rem;
    }
    .CarRight{
    	border: none;
    	width: 1.0rem;
    	height: 0.5rem;
    	position: absolute;
    	right: 0;
    	top: 0;
        color: #fff;
    	line-height: 0.5rem;
    	background: #ff0056;
    	font-size: 0.13rem;
    	text-align: center;
    }
</style>