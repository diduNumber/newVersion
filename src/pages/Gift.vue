<template>
    <div id='gift'>
      <div class="header">
    	  <hello></hello>
      </div>
      <div class="giftFlower">
        <img src="../../static/GiftImg/giftImg.jpg">
      </div>
      <div class="giftPlugin">
        <div class="giftText">
          <h2>签到送花粉</h2>
          <p>再连续签到5天，当日花粉即可翻倍</p>
        </div>
        <div class="giftQian">
          <ul>
            <li>
              <p class="giftFen">5个花粉</p>
              <div class="nodes"></div>
              <p class="giftDay">Day1</p>
            </li>
            <li>
              <p class="giftFen">5个花粉</p>
              <div class="nodes"></div>
              <p class="giftDay">Day2</p>
            </li>
            <li>
              <p class="giftFen">5个花粉</p>
              <div class="nodes"></div>
              <p class="giftDay">Day3</p>
            </li>
            <li>
              <p class="giftFen">5个花粉</p>
              <div class="nodes"></div>
              <p class="giftDay">Day4</p>
            </li>
            <li>
              <p class="giftFen">10个花粉</p>
              <div class="nodes"></div>
              <p class="giftDay">Day5</p>
            </li>
          </ul>
        </div>
        <a class="giftDao">立即签到</a>
        <a class="giftGui">活动规则</a>
      </div>
      <div style="height:300px">
        <img src="../../static/GiftImg/giftGo.jpg">
      </div>
      <div class="giftList">
        <ul>
          <li v-for="item in data">
            <img v-lazy="item.goods.image" @click='goDetail(item)'>
            <div>
              <p class="ellipsis">{{ item.goods.name }}</p>
              <span class="giftMoney">￥{{ item.goods.vipshopPrice }}</span>
              <span class="giftShop">立即购买</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
	import Hello from '../components/Hello'
   	export default{
      name: 'gift',
      data(){
        return{
          data:[]
        }
      },
      methods:{
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
      components:{
      	Hello
      },
      created(){
        this.axios.get('https://w-ssl.lefeng.com/wap/goods/listWithStock?brandId=800025873&start=1&limit=10&warehouse=VIP_BJ&isDisplay=false&_=1496975684143').then(res => {
          this.data = res.data.data;
          //console.log(this.data);
        })
      } 
   	}
</script>

<style>
#gift{
	width: 100%;	
}
#gift .header{
  width:100%;
  height: 0.43rem;
  line-height: 0.43rem;
  background-color: rgb(250, 251, 252);
  border-bottom: 1px solid #afafaf;
  font-size: .15rem;
}
#gift .header p{
  position: absolute;
}
#gift .giftFlower{
  height: 1.61rem;
}
#gift .giftFlower img{
  width: 100%;
}
#gift .giftPlugin{
  background-color: rgb(118, 4, 30);
  text-align: center;
  padding:0.2rem 0;
  color: #fff;
  position: relative;
}
#gift .giftPlugin p{
  margin:0.14rem 0;
}
#gift .giftPlugin .giftQian ul{
  display: flex;
  color: #ff9bb4;
}
#gift .giftPlugin .giftQian ul li{
  font-size: 0.14rem;
  line-height: 0.28rem;
  text-align: center;
  width: 20%;
  position: relative;
}
#gift .giftPlugin .giftQian ul li .nodes{
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  border-radius: 50%;
  border: 0.04rem solid #FF9BB4;
  height: 0.05rem;
  width: 0.05rem;
  transform: translate(-50%, -50%);
  background-color: #76041E;
}
#gift .giftPlugin .giftDao{
  display: block;
  width: 48%;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #FFF;
  font-size: 0.2rem;
  background-color: #FB2E33;
  margin: 0 auto;
  text-align: center;
  border-radius: 0.15rem;
  text-shadow: 2px 2px 4px #333;
  box-shadow: 0px 5px 5px #000;
}
#gift .giftPlugin .giftGui{
    position: absolute;
    bottom: 0.25rem;
    right: 0.2rem;
    color: #000;
    font-size: 0.12rem;
    text-decoration: underline;;
}
#gift .giftPlugin .giftGui:before{
  content: '?';
  display: inline-block;
  width: 0.17rem;
  height: 0.17rem;
  border: 1px solid #000;
  border-radius: 50%;
  margin-right: 0.02rem;
  text-align: center;
  vertical-align: text-top;
}
#gift img{
  width: 100%;
}
#gift .giftList{
  background-color: #e52d2b;
  position: relative;
}
#gift .giftList ul {
  padding:0.05rem 1%;
}
#gift .giftList ul li{
  margin: 0.05rem 1%;
  width: 48%;
  display: inline-block;
  background-color: #fff;
}
#gift .giftList ul li img{
  width: 100%;
}
#gift .giftList div{
  padding: 0.05rem 0.09rem;
}
#gift .giftList .giftMoney{
  color: #FF0155;
  font-size: 0.2rem;
  line-height: 0.25rem;
}
#gift .giftList p{
  margin-bottom: 0.08rem;
  line-height: 0.18rem;
}
#gift .giftList .giftShop{
  float: right;
  height:0.25rem;
  line-height: 0.25rem;
  font-size: 0.12rem;
  text-align: center;
  background: #FF0155;
  color: #fff;
  border-radius: 4px;
  padding: 0 5px;
}
</style>