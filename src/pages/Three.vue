<template>
	<div id="mineThree">
		<i></i>
		<span>暂无待收货订单哦～</span>
		<p @click='threeBack()'>随便逛逛</p>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'mineListThree',
		methods:{
			threeBack(){
				this.$router.push({
					path:'/home'
				})
			}
		}
	}
</script>
<style type="text/css">
#mineThree{
	padding-top: .5rem;
    text-align: center;
    color: #999;
}
#mineThree i{
	background: url(../../static/Homeimg/mineText.png) no-repeat center center;
	display: block;
	margin: 0 auto;
	width: .925rem;
	height: 1.005rem;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50%;
}
#mineThree span{
	margin: .25rem auto .3rem;
    display: block;
    font-size: .13rem;
    color: #999;
}
#mineThree p{
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