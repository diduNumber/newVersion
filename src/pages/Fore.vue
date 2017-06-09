<template>
	<div id="mineFore">
		<i></i>
		<span>暂无待评价订单哦～</span>
		<p @click="foreBack()">随便逛逛</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'mineListFore',
		methods:{
			foreBack(){
				this.$router.push({
					path:'/home'
				})
			}
		}
	}
</script>
<style type="text/css">
#mineFore{
	padding-top: .5rem;
    text-align: center;
    color: #999;
}
#mineFore i{
	background: url(../../static/Homeimg/mineText.png) no-repeat center center;
	display: block;
	margin: 0 auto;
	width: .925rem;
	height: 1.005rem;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50%;
}
#mineFore span{
	margin: .25rem auto .3rem;
    display: block;
    font-size: .13rem;
    color: #999;
}
#mineFore p{
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