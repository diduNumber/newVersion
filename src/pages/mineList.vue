<template>
<div id="mineList">
	<div class="header">
			<span @click="goback()"></span>
			<p>我的订单</p>
			<span @click="gohome()"></span>
	</div>
	<div class="mineListRouter">
		<router-link to="/mineList/one">全部订单</router-link>
		<router-link to="/mineList/two">待支付</router-link>
		<router-link to="/mineList/three">待收货</router-link>
		<router-link to="/mineList/fore">待评价</router-link>
		<router-view></router-view>
	</div>
</div>
</template>
<script type="text/javascript">
	export default{
		name:'mineList',

		methods:{
			goback(){
				this.$router.push({
					path:'/mine'
				}) 
			},
			gohome(){
				this.$router.push({
					path:'/home'
				})
			}
		}
	}
</script>
<style type="text/css">
#mineList{
	width: 100%;
	background-color: #f6f6f6;
	height: 7rem;
}
#mineList .header{
	width: 100%;
	height: 0.4rem;
	line-height: 0.4rem;
	background-color: rgb(250, 251, 252);
	border-bottom: 1px solid #afafaf;
    text-align: center;
    font-size: .15rem;
    position: relative;
}
#mineList .header p{
	display: inline-block;
}
#mineList .header span:first-child{
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
#mineList .header span:last-child{
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
#mineList .mineListRouter{
	width: 100%;
    background: #fff;
    height: .5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid rgba(0,0,0,.12)
}
#mineList .mineListRouter a{
	width: 24%;
	text-align: center;
	display: inline-block;
	color: #999;
	font-size: 100%;
}
</style>