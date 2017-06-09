<template>
    <div id='mother'>
      <hello></hello>
        <div class="main-select">
        <img src="../../static/assets/mami.gif">
        <div class="main--select-img1">
          <img src="../../static/assets/未标题-1.png">
          <a href="#/mother#aa"><img src="../../static/assets/未标题-2.png"></a>
        </div>
          <img src="../../static/assets/未标题-3.png">
          <img src="../../static/assets/未标题-4.png">
          <img src="../../static/assets/未标题-5.png">
          <img src="../../static/assets/未标题-6.png" id="aa">
          <ul class='main-select-ul1'>


            <li v-for='item in data' @click = "goDetail(item)">
                <img :src='item.goods.image'>
                <h2 class="main-bottom-p1">
                  {{item.goods.name}}
                </h2>
                <div class="main-bottom-div1">
                  <span class="bottom-div1-span1">{{"￥"+item.goods.vipshopPrice}}</span>
                  <button class="bottom-div1-button1">立即抢购</button>
                </div>
               
            </li>
          </ul>


        </div>
     
    </div>
</template>

<script>
       import Hello from '../components/Hello'
       export default{
            name: 'mother',
            components:{
              Hello
            },
            data(){
              return{
                data:[],
                gitId: ''
              }
            },
            methods: {
              // skipUrl (brandId) {
              //     this.$router.push({
              //         path:'brand',
              //         query:{
              //             data:brandId
              //         }
              // })
              //   this.gitId=brandId
              //   // this.bus.$emit('data',this.gitId)
              // }
              // 跳转到详情页面
              goDetail(item){
                console.log(item);
                this.$router.push({
                  path:'/goodDetail',
                  query:{
                    goods:item
                  }
                })
              }
            },
            created(){
                let url = 'https://w-ssl.lefeng.com/wap/goods/listWithStock?brandId=800028319&start=1&limit=76&warehouse=VIP_BJ&isDisplay=false&_=1496732392410'
                //组件创建完成即可发起请求
                this.axios.get(url).then(res=>{
                
                //将获取的数据放在data中
                this.data = res.data.data
                },err=>{
                console.log(err)
                })
            }
       }
</script>

<style>
   #mother{
      color: hotpink;
   }
   .main-select{
    width: 3.75rem;
    background: #c3dcf8;
    overflow: hidden;
   }
   .main-select-ul1 li{
    margin-bottom: 0.16rem;
    width: 1.72rem;
    height:2.92rem;
    background: #fff;
    float: left;
   }
   .main-select-ul1 li img{
    width: 1.58rem;
    margin-left: 0.08rem;
    height:2rem;
  
   }
   .main-select-ul1 li:nth-of-type(2n+1){
    margin-left: 0.11rem;
   }
    .main-select-ul1 li:nth-of-type(2n){
    margin-left: 0.12rem;
   }
   .main-bottom-p1{
    font-size: 0.14rem;
    height: 0.38rem;
    overflow: hidden;
    padding:0 0.1rem;
    color:#7d7d7d;
  

   }
  .main-bottom-div1{
    height: 0.43rem;
    padding:0 0.1rem;
    line-height: 0.43rem;
    padding-top: 0.1rem;


   }
    .bottom-div1-span1{
    font-size: 0.16rem;
    color:#ff3075;
    float: left;
   }
  .bottom-div1-button1{
    background:#ff0155;
    color: white;
    font-size: 0.12rem;
    border-radius: 0.03rem;
    border:none;
    height: 0.25rem;
    line-height: 0.20rem;
    margin-top: 0.1rem;
    float: right;
   }
   /*标题切换*/
   .main--select-img1{
    overflow: hidden;
    height: 0.4rem;
    background: #ed97c8;
   }
   .main--select-img1 img{
    float: left;
    width: 50%;
   }
   .main-select-other img{
    display: block;
   }
  #mother img{
    display: block;
   }
</style>