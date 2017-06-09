<template>
	<div id="mine">
		<div class="header">
			<span @click="mineBack()"></span>
			<p>我的蜂巢</p>
			<span @click="mineBack()"></span>
		</div>
		<div class="mineMain">
			<div>
				<span></span>
				<p>137*****595</p>
				<span></span>
			</div>
		</div>
		<div class="mineMenu">
			<div class="mineDan">
				<p>我的订单</p>
				<span class="mineAll" @click="mineList()">全部订单</span>
			</div>
		</div>
		<div class="mineList">
			<ul>
				<li v-for="item in list">
					<img v-lazy="item.img">
					<p>{{ item.title }}</p>
				</li>
			</ul>
		</div>
		<div class='mineArea'>
			<div>
				<p class='mineP'>收货地区</p>
				<span class="mineSpan">北京</span>
			</div>
		</div>
		<div class='mineQuan'>
			<div>
				<p class="mineP">我的优惠券</p>
				<span class="mineSpan"></span>
			</div>
			<div class="mineFlower">
				<p class="mineP">我的花粉</p>
				<span class="mineSpan"></span>
			</div>
		</div>
		<div class='mineQuan'>
			<div class="mineHide">
				<p class="mineP">我的收藏</p>
				<span class="mineSpan"></span>
			</div>
			<div class="mineHistory">
				<p class="mineP">浏览记录</p>
				<span class="mineSpan"></span>
			</div>
		</div>
		<div class='mineQuan'>
			<div class="mineJian">
				<p class="mineP">意见反馈</p>
				<span class="mineSpan"></span>
			</div>
			<div class="minePhone">
				<p class="mineP">在线客服</p>
				<span class="mineSpan"></span>
			</div>
			<div class="mineAbout">
				<p class="mineP">关于乐蜂</p>
				<span class="mineSpan"></span>
			</div>
		</div>
		<button>退出登录</button>
		<footer>
			<span>联系客服</span>
			<span class="mineNumber">400-000-018</span>
			<p>Copyright © 2008-2017 Lefeng.com All Rights Reserved</p>
		</footer>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'mine',
		data(){
			return{
				list:[
					{img:'../../static/Homeimg/mineDai.png',title:'待支付'},
					{img:'../../static/Homeimg/mineShou.png',title:'待收货'},
					{img:'../../static/Homeimg/minePing.png',title:'待评价'}
				]
			}
		},
		methods:{
			mineBack(){
				history.back(); 
			},
			mineList(){
				this.$router.push({
					path:'/mineList'
				})
			}
		}
	}
</script>
<style type="text/css">
#mine{
	width: 100%;
	background-color: #f6f6f6;
	height: 8.4rem;
}
#mine .header{
	width: 100%;
	height: 0.4rem;
	line-height: 0.4rem;
	background-color: rgb(250, 251, 252);
	border-bottom: 1px solid #afafaf;
    text-align: center;
    font-size: .15rem;
    position: relative;
}
#mine .header p{
	display: inline-block;
}
#mine .header span:first-child{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 2%;
	display: inline-block;
	background:url(../../static/Homeimg/mineIcon.png) no-repeat center center;
	background-size: contain;
    width: 0.2rem;
    height:0.2rem;
}
#mine .header span:last-child{
	display: inline-block;
	background: url(../../static/Homeimg/mineHome.png) no-repeat center center;
	background-size: contain;
	width: 0.23rem;
	height: 0.2rem;
	position: absolute;
	top: 50%;
	right: 2.5%;
	transform: translateY(-50%);
}
#mine .mineMain{
	height: 0.9rem;
	line-height: 0.9rem;
	text-align: center;
	position: relative;
}
#mine .mineMain div{
	background: url(../../static/Homeimg/mineBei.png) no-repeat left center;
	width: 100%;
	height: 0.9rem;
	line-height: 0.9rem;
	background-size: cover;
}
#mine .mineMain div span:first-child{
	position: absolute;
	left:0.18rem; 
	background: url(../../static/Homeimg/mineTou.png) no-repeat center center;
	display: inline-block;
	background-size: contain;
	width: 0.6rem;
	height: 0.9rem;
}
#mine .mineMain div p{
	position: absolute;
	left: 1rem;
	font-size: 0.15rem;
}
#mine .mineMain div span:last-child{
	display: inline-block;
	background: url(../../static/Homeimg/mineShe.png) no-repeat center center;
	background-size: contain;
	width: 0.25rem;
	height: 0.9rem;
	position: absolute;
	right:0.2rem; 
}
#mine .mineMenu .mineDan{
	width: 100%;
	height: 0.45rem;
	line-height: 0.45rem;
	text-indent: 0.15rem;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,.06);
    border-bottom: 1px solid rgba(0,0,0,.06);
    position: relative;
}
#mine .mineMenu .mineDan p{
	display: inline-block;
}
#mine .mineMenu .mineDan span,#mine .mineArea div span{
	float: right;
	padding-right: 0.35rem;
}
#mine .mineMenu .mineDan .mineAll:after{
	background: url(../../static/Homeimg/mineIcon1.png) no-repeat center center;
	content: '';
	width: 0.15rem;
	height: 0.45rem;
	position: absolute;
	background-size: contain;
	right: 2%;
}
#mine .mineList{
	width: 100%;
	margin-bottom: .075rem;
}
#mine .mineList ul{
	display: flex;
	background-color: #fff;
}
#mine .mineList ul li{
	text-align: center;
	width: 33.33%;
	padding: .075rem 0;
}
#mine .mineList ul li img{
	width: 0.23rem;
}
#mine .mineArea{
	background-color: #fff;
	height: 0.5rem;
	line-height: 0.5rem;
	margin-bottom: 0.075rem;
	text-indent: 0.15rem;
	position: relative;
}
#mine .mineArea p,#mine .mineQuan p{
	display: inline-block;
}
#mine .mineP:before{
    display: inline-block;
    margin-right: 0.075rem;
    vertical-align: middle;
    content: '';
    width: 0.225rem;
    height: 0.225rem;
}
#mine .mineArea p:before{
	background: url(../../static/Homeimg/mineArea.png) no-repeat center center;
	background-size: contain;
}
#mine .mineQuan{
	margin-bottom: 0.075rem;
}
#mine .mineQuan div{
	height: 0.5rem;
	line-height: 0.5rem;
	background-color: #fff;
	text-indent: 0.15rem;
}
#mine .mineQuan p:before{
	background:url(../../static/Homeimg/mineQuan.png) no-repeat center center;
	background-size: contain;
}
#mine .mineQuan .mineFlower p:before{
	background:url(../../static/Homeimg/mineFlower.png) no-repeat center center;
	background-size: contain;
}
#mine .mineQuan .mineHide p:before{
	background:url(../../static/Homeimg/mineHeart.png) no-repeat center center;
	background-size: contain;
}
#mine .mineQuan .mineHistory p:before{
	background:url(../../static/Homeimg/mineHistory.png) no-repeat center center;
	background-size: contain;
}
#mine .mineJian p:before{
	background:url(../../static/Homeimg/mineMsg.png) no-repeat center center;
	background-size: contain;
}
#mine .minePhone p:before{
	background:url(../../static/Homeimg/minePhone.png) no-repeat center center;
	background-size: contain;
}
#mine .mineAbout p:before{
	background:url(../../static/Homeimg/mineAbout.png) no-repeat center center;
	background-size: contain;
}
#mine .mineQuan .mineFlower,#mine .mineHistory,#mine .mineAbout,#mine .minePhone{
	border-top:1px solid rgba(0,0,0,.06);
}
#mine .mineSpan:after{
	position: absolute;
	right: 2%;
	display: inline-block;
	content: '';
	width: 0.15rem;
	height: 0.5rem;
	background: url(../../static/Homeimg/mineIcon1.png) no-repeat center center;
	background-size: contain;
}
#mine button{
	margin:0.2rem auto;
	transform: translateX(35%);
    width: 60%;
    border: none;
    height: 0.45rem;
    line-height: 0.45rem;
    background-color: #ff0056;
    color: #fff;
    font-size: 0.15rem;
    border-radius: 3px;
    text-shadow: 0 -1px rgba(0,0,0,.25);
}
#mine footer{
	text-align: center;
	margin-top: 0.125rem;
	line-height: 0.3rem;
}
#mine footer .mineNumber{
	color: #fc1159;
	display: inline-block;
    margin-left: .075rem;
}

</style>