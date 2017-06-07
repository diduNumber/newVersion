<template>
  <div class="header">
      <button @click='kissBack()'>hehe</button>
      <h3>{{ title }}</h3>
      <span></span>
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
    	 
    }
    
</style>
