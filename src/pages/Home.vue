<template>
    <div id='home' v-scroll='homeMore'>
      <header>
      <span class="homeLogo">logo</span>
      <a href="">
        <i class="homeSearch"></i>
        静佳
      </a>
      <span class="homeMine"></span>
    </header>
    <div class="main">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in data[478]">
          <img v-lazy="item.imgFullPath">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <section>
        <div v-for='item in data[724]'>
          <img v-lazy="item.imgFullPath">
        </div>
      </section>
      <div class="homeGou">
        <img v-for='item in data[725]' v-lazy="item.imgFullPath">
      </div>
      <div class="homeFeng">
        <p>·&nbsp;{{ gou.pictitle }}·</p>
        <img v-lazy="gou.imgFullPath">
      </div>
      <div class="homeFengList">
        <ul>
          <li >
            <table>
              <tbody>
                <tr>
                  <td rowspan="2">
                    <div class="homeShi">
                      <img v-lazy="nav.imgFullPath">
                    </div>
                  </td>
                  <td>
                    <img v-lazy="nav1.imgFullPath">
                  </td>
                  <td>
                    <img v-lazy="nav2.imgFullPath">
                  </td>
                </tr>
                <tr>
                  <td>
                    <img v-lazy="nav3.imgFullPath">
                  </td>
                  <td>
                    <img v-lazy="nav4.imgFullPath">
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
      <div class="homePin">
        <p>· 品牌专场 ·</p>
        <div v-for='item in list' class="homePai">
          <img v-lazy="item.brandImage">
          <div class="homePinImg" >
            <a href="" v-for='index in item.starProductList'>
                <img v-lazy="index.image">
                <p>￥{{ index.vipshopPrice }}</p>
            </a>
            <img src="../../static/Homeimg/homeMore.png">
          </div>
        </div>
      </div>
      <div class="homeClothes">
        <ul>
          <li v-for="item in pin">
            <div>
              <img v-lazy="item.brandImage">
              <span class="homeTitle">{{ item.pms }}</span>
            </div>
            <p>
              <span>{{ item.agio }}</span>
              {{ item.name }}
            </p>
          </li>
        </ul>
      </div>
      <div class="homeClothesTwo">
        <ul>
          <li v-for="item in abc">
            <div>
              <img v-lazy="item.brandImage">
              <span class="homeTitle">{{ item.pms }}</span>
            </div>
            <p>
              <span>{{ item.agio }}</span>
              {{ item.name }}
            </p>
          </li>
        </ul>
      </div>
      <div class="homeXuan">
        <p>· 每日精选 ·</p>
        <ul>
          <li v-for="item in pages">
            <div>
              <img v-lazy="item.goods.verticalImage"/>
              <div class="show ellipsis">
                <h2>{{ item.goods.brandStoreName }}</h2>
                <h3 class="ellipsis">{{ item.goods.productName }}</h3>
              </div>
              <div class="price">
                <span>￥</span><span class="showPrice">{{ item.goods.vipshopPrice}}</span>
                <span class="realPrice">￥{{ item.goods.marketPrice }}</span>
                <span class="homeCar"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="homeTop">
        <a href="#"></a>
      </div>
      <div class="homeCarImg">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  var load = false;
  export default {
    name:'home',
    components:{swiper,swiperSlide},
    data(){
      return{
        swiperOption:{
          autoplay:1000,
          direction:'horizontal',
          pagination:'.swiper-pagination'
        },
        data:{},
        gou:{},
        nav:{},
        nav1:{},
        nav2:{},
        nav3:{},
        nav4:{},
        list:{},
        pin:{},
        //用于切换每次请求
        start:2,
        abc:[],
        pages:{}
      }
    },
    methods:{
        homeMore(){
          load = true;
          this.start ++;
          if(this.start <= 9){
           this.axios.get('http://w.lefeng.com/api/neptune/special_brands/v3?page='+this.start+'&labelType=1').then(res => {
              var a = this;
              res.data.data.map(function(item,index){
                a.abc.push(item);
              })
              load = false;
              console.log(this.abc);
             })
          }
        }
    },
    created(){
      //获取轮播图，列表等数据
      this.axios.get('http://w.lefeng.com/api/neptune/brand/ad/v3?zoneId=943%2C478%2C496%2C693%2C724%2C725%2C726%2C727%2C728&resolution=375x667&appName=lefeng_android&version=4.1.1').then(res => {
        //console.log(res.data.data);
        //console.log(this);
        this.data = res.data.data;
        this.gou = this.data[727][0];
        this.nav = this.data[728][0];
        this.nav1 = this.data[728][1];
        this.nav2 = this.data[728][2];
        this.nav3 = this.data[728][3];
        this.nav4 = this.data[728][4];
        //console.log(this.data)
      });
      //获取品牌专场数据
      this.axios.get('http://w.lefeng.com/api/neptune/special_brands/v3?page=1&labelType=1').then(res => {
        //截取品牌专场前三个数据
        this.list = res.data.data.splice(0,3);
        this.pin = res.data.data;
        // console.log(this.list);
        // console.log(this.pin);
      });
      this.axios.get('http://w.lefeng.com/api/neptune/handpick_list/v1?start=2').then(res => {
        this.pages = res.data.data;
        console.log(this.pages);
      })
    },
    directives: {
        scroll: {
           bind: (el, binding)=>{
              window.addEventListener('scroll', ()=> {
                if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
                  if(!load){
                      let func = binding.value;
                      func();
                   }
                }
              })
            }
        }
    }
  }
</script>

<style type='text/css'>
#home{
  width: 100%;
  height:3842px;
  background-color: #f6f6f6;
}
#home header{
  width: 100%;
  height: 0.43rem;
  position: fixed;
  line-height: 0.43rem;
  z-index: 10;
  top: 0;
  left: 0; 
  background-color: #fc1158;
}
#home .homeLogo{
  background: url(../../static/Homeimg/logo.png) no-repeat left center;
  background-size: cover;
  width: 0.57rem;
  height: 0.26rem;
  font-size: 0;
  display: inline-block;
  margin: .09rem 0 0 .1rem
}
#home header a{
  height: 0.3rem;
  border-radius: 5px;
  line-height: 0.3rem;
  position: absolute;
  left: 0.8rem;
  right: 0.5rem;
  width: 2.45rem;
  top: 50%;
  transform: translateY(-50%);
  color: hsla(0,0%,100%,.7);
  text-align: center;
  background-color: rgba(0,0,0,.2);
}
#home header i{
  background: url(../../static/Homeimg/search.png) no-repeat 30% center;
  display: inline-block;
  width: 0.2rem;
  height: 0.17rem;
  background-size: contain;
  line-height: 0.17rem;
  margin-bottom: 0.03rem;
    vertical-align: middle;
}
#home header .homeMine{
  background: url(../../static/Homeimg/mine.png) no-repeat center center;
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    background-size: contain;
    line-height: 0.25rem;
    position: absolute;
    top: 22%;
    right: 4%;
}
#home .main{
  width:100%;
  position: absolute;
  top: 0.43rem;
  left: 0;
}
 #home .main .swiper-slide img{
  height: 1.5rem;
} 
#home .main section{
  margin-top: 1rem;
  margin-bottom: .075rem;
    padding: .1rem 0;
    width: 100%;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    white-space: nowrap;
    overflow: auto;
    overflow-x: scroll;
    background-color: #fff;
}
#home .main section div{
  display: inline-block;
    vertical-align: top;
    border-radius: 3px;
    height: 0.93rem;
    margin-right: .1rem;
    width: 1.25rem;
}
#home .main section div img{
  height: 100%;
  width: 100%;
}
#home .main section div:first-child{
  margin-left: 0.1rem;
}
#home .main .homeGou{
  padding: 0.1rem;
  background-color: #fff;
}
#home .main .homeFeng{
  height: 1.42rem;
}
#home .main .homeFeng p,.homePin p,#home .main .homeXuan p{
  padding: 0.12rem 0;
  text-align: center;
  color: #888;
  font-size: 100%;
}
#home .main .homeFengList table{
  border-collapse: collapse;
  background-color: #fff;
}
#home .main .homeFengList td{
  border: 1px solid rgba(0,0,0,.06);
  width: 33.33%;
}
#home .main .homeFengList .homeShi img{
  width: 100%;
  height: 2.25rem;
}
#home .main .homePin .homePai{
    background-color: #fff;
}
#home .main .homePin .homePai div{
  display: inline-block;
  white-space: nowrap;
    overflow: auto;
    overflow-x: scroll;
    width: 100%;
    height: 1.2rem;
}
#home .main .homePin .homePai .homePinImg a{
  width: 0.75rem;
  height: 0.84rem;
  margin:0 0.1rem;
  display: inline-block;
}
#home .main .homePin .homePai .homePinImg a img{
  width: 100%;
  height: 100%;
}
#home .main .homePin .homePai .homePinImg img{
  height: 1.1rem;
  width: 0.7rem;
}
#home .main .homePin .homePai .homePinImg p{
  padding: 0.03rem 0;
}
#home .main .homeClothes ul li p,#home .main .homeClothesTwo ul li p{
  font-size: .125rem;
    color: #4c4c4c;
    line-height: .29rem;
    background-color: #fff;
    padding: 0 .12rem;
}
#home .main .homeClothes ul li p span,#home .main .homeClothesTwo ul li p span{
  margin-right: .06rem;
    color: #fb4f89;
    font-size: .135rem;
}
#home .main .homeClothes ul li div,#home .main .homeClothesTwo ul li div{
  position: relative;
}
#home .main .homeClothes .homeTitle,#home .main .homeClothesTwo .homeTitle{
  display: inline-block;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0,0,0,.6);
  font-size: .12rem;
  color: #fff;
  line-height: .21rem;
  text-indent: .12rem;
}
#home .main .homeXuan ul li{
  background-color: #fff;
  width: 44.5%;
  position: relative;
    padding: 0.1rem;
    display: inline-block;
    border-bottom: 1px solid rgba(0,0,0,.12) ;
}
#home .main .homeXuan ul li:nth-child(odd){
    border-right: 1px solid rgba(0,0,0,.12);
}
#home .main .homeXuan ul li img{
  width: 100%;
  height: 1.86rem;
}
#home .main .homeXuan ul li .show{
    display: flex;
    font-size: 0.1rem;
    line-height: 0.2rem;
}
#home .main .homeXuan li .show h3{
  margin-left: 0.05rem;
  color: #7c7c7c;
}
#home .main .homeXuan li .show h2{
  font-weight: 700;
  font-size: 0.1rem;
  color: #333333;
}
#home .main .homeXuan li .showPrice{
  font-size: 0.25rem;
  margin-right: 0.1rem;
}
#home .main .homeXuan li .realPrice{
  font-size: .13rem;
color: #999;
text-decoration: line-through;
margin-bottom: .05rem;
}
#home .main .homeXuan li .price span:first-child{
  font-size: 0.16rem;
}
#home .main .homeXuan li .homeCar{
  background: url(../../static/kissCar.png) no-repeat right center;
  display: inline-block;
  position: absolute;
    right: 0.1rem;
    bottom: 0.1rem;
    z-index: 1;
    width: 0.3rem;
    height: 0.3rem;
    background-size: contain;
}
#home .main .homeXuan p{
  background-color: #f6f6f6;
}
#home .homeTop{
  position: fixed;
  right: .11rem;
    bottom: .65rem;
    z-index: 10;
}
#home .homeTop a{
  background: url(../../static/Homeimg/homeTop.png) no-repeat left center;
  display: inline-block;
  width: 0.45rem;
  height: 0.45rem;
  background-size: contain;
}
#home .homeCarImg{
  position: fixed;
    left: .11rem;
    bottom: .65rem;
    color: #fff;
    padding: .05rem .1rem;
    background: rgba(0,0,0,.9);
    border-radius: 3px;
}
#home .homeCarImg span{
  background: url(../../static/Homeimg/homrCar.png) no-repeat left center;
  background-size: contain;
  display: inline-block;
  width: 0.27rem;
  height: 0.31rem;
}
</style>