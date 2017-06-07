<template>
    <div id='home'>
      <header>
      <span class="homeLogo">logo</span>
      <a href="">
        <i class="homeSearch"></i>
        静佳
      </a>
      <span class="homeMine"></span>
    </header>
    <div class="main">
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
            </div>
          </div>
      </div>
      <div class="homeClothes">
        <ul>
          <li v-for="item in pin">
            <img v-lazy="item.brandImage">
            <p>
              <span>{{ item.agio }}</span>
              {{ item.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name:'home',
    data(){
      return{
        data:{},
        gou:{},
        nav:{},
        nav1:{},
        nav2:{},
        nav3:{},
        nav4:{},
        list:{},
        pin:{}
      }
    },
    created(){
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
      this.axios.get('http://w.lefeng.com/api/neptune/special_brands/v3?page=1&labelType=1').then(res => {
        this.list = res.data.data.splice(0,3);
        this.pin = res.data.data;
        console.log(this.list);
        console.log(this.pin);
      })
    }
  }
</script>

<style type='text/css'>
 #home{
  width: 100%;
  height:2000px;
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
  top: 3rem;
  left: 0;
}
#home .main section{
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
#home .main .homeFeng p,.homePin p{
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
    height: 1.1rem;
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
#home .main .homePin .homePai .homePinImg p{
  padding: 0.03rem 0;
}
#home .main .homeClothes ul li p{
  font-size: .125rem;
    color: #4c4c4c;
    line-height: .29rem;
    background-color: #fff;
    padding: 0 .12rem;
}
#home .main .homeClothes ul li p span{
  margin-right: .06rem;
    color: #fb4f89;
    font-size: .135rem;
}
</style>