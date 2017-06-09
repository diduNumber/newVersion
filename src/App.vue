<template>
  <div id="app">
 <!-- <div class='tabbar' @click='tabbarHidden($event)' v-if='flag'>
     <router-link to="/kiss">
         <img v-lazy="nav0.imgFullPath">
     </router-link>
     <router-link to="/global">
        <img v-lazy="nav1.imgFullPath">
     </router-link>
     <router-link to="/mother">
        <img v-lazy="nav2.imgFullPath"></router-link>
     <router-link to="/gift">
        <img v-lazy="nav3.imgFullPath">
     </router-link>
  </div> -->
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      flag:true,
      text:'',
      data:{},
      nav:{},
      nav0:{},
      nav1:{},
      nav2:{},
      nav3:{}
    }
  },
  methods:{
     //点击是flag为false
     tabbarHidden (e) {
        this.flag = false;
        this.text = e.target.innerHTML;
        //点击触发公共头部的$on事件，同时将参数传过去
        this.bus.$emit('text', this.text);
     }
  },
  created () {
    //给bus添加事件
    this.bus.$on('data', data => {
      this.flag = data;
    });
    this.axios.get('http://w.lefeng.com/api/neptune/brand/ad/v3?zoneId=943%2C478%2C496%2C693%2C724%2C725%2C726%2C727%2C728&resolution=375x667&appName=lefeng_android&version=4.1.1').then(res => {
        //console.log(res.data.data);
        //console.log(this);
        this.data = res.data.data;
        this.nav = this.data[496];
        this.nav0 = this.nav[0];
        this.nav1 = this.nav[1];
        this.nav2 = this.nav[2];
        this.nav3 = this.nav[3];
        //console.log(this.nav[0]);
      })
  }
}
</script>

<style>
#app .tabbar{
   position: absolute;
   left: 0;
   right: 0;
   top:1.94rem;
   height: 1.0rem;
   display: flex;
   align-items: center;
   justify-content: space-around;
   background-color: #fff;
   z-index: 99;
}
.tabbar a{
   text-decoration: none;
   color: #fff;
}
img{
  width: 100%;
}
</style>
