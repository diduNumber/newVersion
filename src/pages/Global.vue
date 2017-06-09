<template>
    <div id='global'>
        <hello></hello>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in data[951]">
                <img :src="item.filename">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="nav" @click="goRoom($event)">
            <!-- <ul>
                <li v-for="item of data[954]">
                    <img v-lazy="item.filename">
                </li>
            </ul> -->
            <div  v-for="item of data[954]" class="li">
                <img v-lazy="item.filename">
            </div>
        </div>
        <div class="hotBrand">
            <div class="hotBrandHeader">
                <!-- 取数据的时候打印出的data[957]和平常的不一样数组 -->
                <img v-lazy="item.filename" v-for="item of data[957]">
            </div>
            <div class="hotBrandList">
                <ul>
                    <li v-for = "item of data[980]">
                        <img v-lazy="item.filename" >
                    </li>
                </ul>
            </div>
        </div>
        <div class="seaBrand">
            <div class="seaBrandHeader">
                <img v-lazy="item.filename" v-for="item of data[983]">
            </div>
            <div class="seaBranList">
                <ul>
                    <li v-for="item of dataList">
                        <img v-lazy="item.brandImage">
                    </li>
                </ul>
            </div>
        </div>
        <div class="singleBrand">
            <div class="singleBrandHeader">
                <img v-lazy="item.filename" v-for="item of data[976]">
            </div>
            <div class="singleBrandList">
                <ul>
                    <li v-for="item of goodsList">
                        <div class="divImg">
                            <img v-lazy="item.goods.image">
                        </div>
                        <div class="tagWrap">
                            <span>蜂购全球</span>
                        </div>
                        <div class="nameWrap">
                            <h2>{{ item.goods.brandStoreName }}</h2>
                            <h3>{{ item.goods.productName }}</h3>
                        </div>
                        <div class="priceWrap">
                            <span class="price"><i>￥</i>{{ item.goods.vipshopPrice }}</span>
                            <span class="marketPrice">￥{{ item.goods.marketPrice}}</span>
                            <span class="priceCart"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="homeCarImg">
        <span></span>
      </div>
    </div>
</template>

<script>
  import Hello from '../components/Hello'
    let goRoomMsgs = {
        goRoomMsgJapan:{backgroundColor:"#007584", requestUrl:"https://w-ssl.lefeng.com/wap/goods/listWithStock?brandId=1930255309&start=1&limit=10&warehouse=VIP_NH&isDisplay=false&_=1496820222117", smallImg:"01small.jpg", bigImg:"01big.png"},
        goRoomMsgAmrican:{backgroundColor:"#f59c01", requestUrl:"https://w-ssl.lefeng.com/wap/goods/listWithStock?brandId=1930255304&start=1&limit=10&warehouse=VIP_NH&isDisplay=false&_=1496825249236", smallImg:"03small.jpg", bigImg:"03big.png"},
        goRoomMsgEuroper:{backgroundColor:"#809c00", requestUrl:"https://w-ssl.lefeng.com/wap/goods/listWithStock?brandId=1930255299&start=1&limit=10&warehouse=VIP_NH&isDisplay=false&_=1496823387033", smallImg:"02small.jpg", bigImg:"02big.png"},
        goRoomMsgTaiGang:{backgroundColor:"#4f3a64", requestUrl:"https://w-ssl.lefeng.com/wap/goods/listWithStock?brandId=1930255314&start=1&limit=10&warehouse=VIP_NH&isDisplay=false&_=1496823595241", smallImg:"04small.jpg", bigImg:"04big.png"}
    }
    // 引入轮播图组件
    import {swiper, swiperSlider} from 'vue-awesome-swiper'
    export default{
        name: 'global',
        components:{
          Hello, swiper, swiperSlider
        },
        data(){
            return{
                data:{},
                dataList:{},
                goodsList:{},
                goRoomMsg:{},
                swiperOption:{
                    autoplay:3000,
                    direction: 'horizontal',
                    pagination : '.swiper-pagination',
                    autoplayDisableOnInteraction:false
                }
            }
        },
        methods:{
            // 页面进行路由传参
            goRoom(e){
                console.log(e.target.src);
                console.log(this.goRoomMsg);
                console.log(this.data[954][0].filename == e.target.src);
                // 如果点击的是日韩馆
                if(this.data[954][0].filename == e.target.src){
                    // this.goRoomMsg = JSON.stringify(goRoomMsgs.goRoomMsgJapan);
                    console.log(this.goRoomMsg);
                    this.goRoomMsg = goRoomMsgs.goRoomMsgJapan
                }
                // 如果点击的是美洲馆
                if(this.data[954][1].filename == e.target.src){
                    this.goRoomMsg = goRoomMsgs.goRoomMsgAmrican
                }
                // 如果点击的是澳洲馆
                if(this.data[954][2].filename == e.target.src){
                    this.goRoomMsg = goRoomMsgs.goRoomMsgEuroper
                }
                // 如果点击的是港台馆
                if(this.data[954][3].filename == e.target.src){
                    this.goRoomMsg = goRoomMsgs.goRoomMsgTaiGang
                }

                console.log(this.goRoomMsg)
                // '/room/' + this.goRoomMsg
                this.$router.push({
                    path: '/room/abc',
                    query:{
                      data:this.goRoomMsg,
                      dataAll: goRoomMsgs 
                    } 
                });
                
            }
        },
        created(){
            this.axios.get("http://w.lefeng.com/api/neptune/brand/ad/v3?zoneId=951%2C954%2C957%2C980%2C964%2C983%2C976&resolution=375x667&appName=lefeng_android&version=4.1.1").then(res => {
                this.data = res.data.data;
                console.log(this.data);
            });
            this.axios.get("http://w.lefeng.com/api/neptune/special_brands/v3?page=1&labelType=3").then(res => {
                this.dataList = res.data.data;
            });
            this.axios.get("http://w.lefeng.com/api/neptune/goods/haitao_handpick_list/v1?start=1&hitao=true").then(res => {
                this.goodsList = res.data.data;
            });
            this.axios.get("http://w.lefeng.com/api/neptune/goods/haitao_handpick_list/v1?start=1&hitao=true").then(function(res){
                // console.log(res.data.data)
            })
        }
    }
</script>

<style>
    #global .swiper-pagination-bullet{
        width: 6px;
        height: 6px;
        display: inline-block;
        background: rgb(51, 51, 51);
        border-radius: 0;
        opacity: 1;
    }
    #global .swiper-pagination-bullet-active{
        background: rgb(252, 17, 88);
    }
    #global .swiper-container-horizontal > .swiper-pagination-bullets{
        left: 1.5rem;
    }
    #global .header{
        font-size: 0.13rem;
    }
    #global{
        font-size: 0;
    }
    #global img{
        width: 100%;
    }
    #global .nav {
      display: flex;
        border-bottom: 1px solid #dcdcdc;
    }
    #global .nav .li{
        width: 25%;
    }
    #global .hotBrandHeader{
        padding-top: 0.1rem;
    }
    #global .hotBrandList ul{
        display: flex;
        flex-wrap: wrap;
    }
    #global .hotBrandList li{
        width:33.33%;
    }
    #global .seaBrandHeader{
        padding-top: 0.1rem;
    }
    #global .seaBranList li{
        padding-bottom: 0.1rem;
    }
    #global .singleBrandList ul{
        display: flex;
        flex-wrap: wrap;
    }
    #global .singleBrandList li:nth-of-type(odd){
        width: 1.66rem;
        padding: 0.1rem;
        border-right: 0.01rem solid #dcdcdc;
        border-top: 0.01rem solid #dcdcdc;
    }
     #global .singleBrandList li:nth-of-type(even){
        width: 1.67rem;
        padding: 0.1rem;
        border-top: 0.01rem solid #dcdcdc;
    }
    #global .singleBrandList .tagWrap span{
        font-size: 0.12rem;
        background-color: #f93;
        color: #fff;
        padding: 0 0.02rem;
    }
    #global .singleBrandList .nameWrap{
        display: flex;
    }
    #global .singleBrandList .nameWrap h2{
        white-space: nowrap;
        font-size: .15rem;
        font-weight: 700;
        color: #333;
        border-bottom: 0.01rem solid #dcdcdc;
    }
    #global .singleBrandList .nameWrap h3{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #4d4d4d;
        font-size: 0.12rem;
        font-weight: normal;
        margin: 0.02rem 0 0 0.02rem;
    }
    #global .singleBrandList .priceWrap .price{
        font-size: 0.25rem;
        margin-right: .1rem;
    }
    #global .singleBrandList .priceWrap .price i{
        font-style: normal;
        font-size: .16rem;
    }
    #global .singleBrandList .priceWrap .marketPrice{
        font-size: .13rem;
        color: #999;
        text-decoration: line-through;
    }
    #global .singleBrandList .priceWrap .priceCart{
        float: right;
        width: 0.3rem;
        height: 0.3rem;
        background: url("../../static/globalCart.png") no-repeat center center;
        background-size: contain;
    }
    #global .homeCarImg{
      position: fixed;
        left: .11rem;
        bottom: .65rem;
        color: #fff;
        padding: .05rem .1rem;
        background: rgba(0,0,0,.9);
        border-radius: 3px;
    }
    #global .homeCarImg span{
      background: url(../../static/Homeimg/homrCar.png) no-repeat left center;
      background-size: contain;
      display: inline-block;
      width: 0.27rem;
      height: 0.31rem;
    }
    #global .divImg{
        padding: 0.1rem;
    }
</style>