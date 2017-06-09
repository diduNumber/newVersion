<template>
	
</template>
<script type="text/javascript">
	export default{
		data () {
			return {product:[]};
		},
		created () {
			this.bus.$on('product',data=>{
				 console.log(data);
			})
		}
	}
</script>
<style type="text/css">
	
</style>