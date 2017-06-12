<template>
  <div class="header">
      <span @click='kissBack()'></span>
      <h3>{{ title }}</h3>
      <span @click="kissHome()"></span>
  </div>
</template>

<script>
export default {
  name: 'header',
	 data () {
	   return {
	   		msg: true,
	   		title: ''
	   }
	},
	methods: {
		kissBack () {
			this.bus.$emit('data', this.msg);
			history.back();
		},
		kissHome(){
			this.$router.push({
				path:'/home'
			})
		}
	},
	created () {
		//给bus添加事件 接收header的文字
	  	this.bus.$on('text', data => {
			   this.title = data;
	  	});
	}
}
</script>

<style scoped>
.header{
	position: relative;
	height: 0.44rem;
	background-color: rgb(250, 251, 252)
}
.header span:first-child{
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
.header span:last-child{
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
</style>
