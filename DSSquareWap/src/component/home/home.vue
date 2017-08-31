<template>
<div class="home">
  <div class="home-logo"></div>
  <div class="swiperlist homeswiperlist">
    <swiper :options="swiperdetail" ref="mySwiper" >
      <swiper-slide v-for="v in bannerList">
        <!--<div class="banner" style="background-image: url(http://img01.shdsjt.cn/upload/AdBanner/20170727111047_9872.jpg);"></div>-->
        <img class="bannerimgs" :src="v.Pic"/>
      </swiper-slide>
    </swiper>
    <!-- Optional controls -->
    <div class="swiper-pagination"></div>
  </div>
  <ul class="mainmenu">
    <li><router-link to="/tenement" class="clearfix"><i class="work-space"></i><span>办公空间</span></router-link></li>
    <li><router-link to='/employers'><i class="service"></i><span>企业服务</span></router-link></li>
    <li><a href="/"><i class="activity"></i><span>东朔活动</span></a></li>
    <li><router-link to="/owner"><i class="entrust"></i><span>业主委托</span></router-link></li>
    <li><router-link to="/entrust"><i class="enterprise-room"></i><span>企业找房</span></router-link></li>
    <li><a href="/"><i class="news"></i><span>资讯中心</span></a></li>
  </ul>
  <div class="dspower">
    <div class="dshelp">东朔已帮助
      <span>
        <i>6</i>
        <i>0</i>
        <i>0</i>
        <i>0</i>
        <i>+</i>
      </span>
      家企业找到空间
    </div>
    <div class="rollwrap clearfix">
      <ul>
        <li>
          <div><span class="t1" >{{OfficData.ServiceItem}}</span><em class="t2">+</em></div>
          <div>服务项目</div>
        </li>
        <li style="width: 43%;">
          <div><span class="t1 gcolor" >{{OfficData.OperateArea}}</span><em class="t2 gcolor">m²</em></div>
          <div>运营面积</div>
        </li>
        <li>
          <div><span class="t1" >{{OfficData.Enterprises}}</span><em class="t2">+</em></div>
          <div>合作业主</div>
        </li>
      </ul>
    </div>
  </div>
  <dschoice></dschoice>
  <div class="module-activity">
    <h2 class="title">东朔活动<span class="costar-txt">即租即送，豪礼相赠</span><router-link to="/" class="allActivity">全部活动</router-link></h2>
    <router-link to="/" class="activity-list" v-for="v in activityList">
      <img :src="v.ListPic"/>
    </router-link>
  </div>
  <div class="module-activity">
    <h2 class="title">资讯中心<span class="costar-txt">关注市场走向，了解行业动态</span><router-link to="/" class="allActivity">全部资讯</router-link></h2>
    <ul class="infotainment">
      <!--<li>-->
        <!--<a href="#/news/details?id=151" class=""><span class="newsname  img27"><i></i>东朔集团携手漕河泾，打造全产业链高新企业孵化器</span></a>-->
      <!--</li>-->
      <li v-for="(v,vi) in adviceList">
        <router-link to="">
          <span class="newsname " :class="(vi+1) <= 3 ? 'img27' : 'img28'"><i></i>{{v.Title}}</span><span class="newstime">{{v.ShortDate}}</span>
        </router-link>
      </li>

    </ul>
  </div>

  <div class="subscribe ">
    <span class="sub-phone">免费看房</span>
    <span class="sub-phone2">400-189-9996</span>
    <ul class="major">
      <li>一对一专业选址顾问</li>
      <li class="mr0">东朔礼包送不停</li>
      <li>贴心物业服务</li>
      <li class="mr0">完善的配套设施</li>
    </ul>
  </div>

  <div class="footer">
    <p>ICP备案证书号 ： 沪ICP备12345678号</p>
    <p>上海东朔实业集团有限公司      版权所有</p>
    <p>Copyright  @ 2016-2017</p>
    <p>地址 ： 上海闵行区莘松路288号东朔商务中心</p>
  </div>

</div>
</template>
<script>
  import "@@/skin/css/home.css"
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import dschoice from "@/component/home/dschoice"
    export default{
        data () {
            return {
              swiperdetail: {
                notNextTick: true,
                pagination: '.swiper-pagination',
                centeredSlides: true,
                paginationClickable: true,
                observeParents: true,
              },
              bannerList: [],
              OfficData: [],
              activityList: [],
              adviceList: [],

            }
        },
        mounted () {
          this.getHomeBanner();
          this.HomeData();
          this.getHomeAdviceNewsList();
          this.getHomeNewsList();
        },
        methods: {
          getHomeBanner () {
            this.$ajax({
              method: 'post',
              url: '/api/home/bannerlist',
              data: {moduleId: 4}
            })
              .then((response) => {
                this.bannerList = response.data.Data
              })
              .catch((reject) => {
                console.log(reject)
              })
          },
          HomeData () {
            this.$ajax({
              method: 'post',
              url: '/api/Home/Data',
            })
              .then((response) => {
                this.OfficData = response.data.Data
              })
              .catch((reject) => {
                console.log(reject)
              })
          },
          getHomeAdviceNewsList () {
            this.$ajax({
              method: 'post',
              url: '/api/home/getHomeNewsList',
              data: {moduleid: 256, nums: 3}
            })
              .then((response) => {
                this.activityList = response.data.Data
              })
              .catch((reject) => {
                console.log(reject)
              })
          },
          getHomeNewsList () {
            this.$ajax({
              method: 'post',
              url: '/api/home/getHomeNewsList',
              data: {moduleid: 136, nums: 7}
            })
              .then((response) => {
                this.adviceList = response.data.Data
              })
              .catch((reject) => {
                console.log(reject)
              })
          },


        },
        components: {
          swiper,
          swiperSlide,
          dschoice
        }
    }
</script>
<style>
  .homeswiperlist .swiper-wrapper {
    height: 8rem;
  }
</style>
