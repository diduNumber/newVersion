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
          <li v-for="item in page">
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
          <li v-for="item in pages">
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
        pin:{},
        page:{},
        pages:{}
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
        console.log(this.list);
        console.log(this.pin);
      });
      this.axios.get('http://w.lefeng.com/api/neptune/special_brands/v3?page=2&labelType=1').then(res => {
        this.page = res.data.data;
        console.log(this.page);
      });
      this.axios.get('http://w.lefeng.com/api/neptune/special_brands/v3?page=3&labelType=1').then(res => {
        this.pages = res.data.data;
        console.log(this.pages);
      })
    }
  }
</script>

<style type='text/css'>
    @import './home.css';
</style>