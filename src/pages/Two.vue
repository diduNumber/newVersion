<template>
	<div id="mineTwo">
		<i></i>
		<span>暂无支付订单呦~~</span>
		<p @click="twoBack()">随便逛逛</p>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'mineListTwo',
		methods:{
			twoBack(){
				this.$router.push({
					path:'/home'
				})
			}
		}
	}
</script>
<style type="text/css">
#mineTwo{
	padding-top: .5rem;
    text-align: center;
    color: #999;
}
#mineTwo i{
	background: url(../../static/Homeimg/mineText.png) no-repeat center center;
	display: block;
	margin: 0 auto;
	width: .925rem;
	height: 1.005rem;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50%;
}
#mineTwo span{
	margin: .25rem auto .3rem;
    display: block;
    font-size: .13rem;
    color: #999;
}
#mineTwo p{
	color: #fff;
	background-color: #ff0056;
    display: block;
    padding: 0;
    margin: 0 auto;
    font-size: .15rem;
    height: .45rem;
    line-height: .45rem;
    width: 1.4rem;
    text-align: center;
    border-radius: 3px;
    outline: none;
    text-shadow: 0 -1px rgba(0,0,0,.25);
}
</style>