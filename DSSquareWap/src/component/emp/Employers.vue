<template>
<div>
  <router-link to='/index'><div class='title-img'>
    <div class="titleWrite">
    <i class="back"></i>
    <span>企业服务</span>
    </div>
    <img src='../../../static/skin/img/23_03.jpg'> 
         <!--<img :src='CompanyList[0].Picture'>    -->
  </div>
  </router-link>
  <ul class="mainmenu">
    <li><router-link to="/tenement" class="clearfix"><i class="low-1"><div class="writeApp">移动端</div></i><span>东朔企服</span></router-link></li>
    <li><router-link to="/emiao"><i class="low-2"></i><span>东朔易淼</span></router-link></li>
    <li><router-link to="/propety"><i class="low-3"></i><span>东朔物业</span></router-link></li>
    <li><router-link to="/media"><i class="low-4"></i><span>东朔传媒</span></router-link></li>
    <li><router-link to="/build"><i class="low-5"></i><span>玉朔建筑</span></router-link></li>
    <li><router-link to="/law"><i class="low-6"></i><span>东朔律所</span></router-link></li>
  </ul>
  <div class='host-ser'>
    <div class="host-title">
      <img src="'../../../static/skin/img/23_03-1_16.jpg" alt="">
    </div>
    <div class="host-list">
      <swiper :options="swiper1" ref="mySwiper" >
        <swiper-slide>
        <div class="hostList ">
        <router-link to='/ysb'>
            <img src="'../../../static/skin/img/23_03-1_17.jpg" alt="">
        </router-link>            
        </div>
        </swiper-slide>
        <swiper-slide>
        <div class="hostList ">
            <img src="'../../../static/skin/img/23_03-1_19.jpg" alt="">
            
        </div>
        </swiper-slide>
        <swiper-slide>
        <div class="hostList ">
            <img src="'../../../static/skin/img/23_03-1_21.jpg" alt="">
            
        </div>
        </swiper-slide>
        <swiper-slide>
        <div class="hostList ">
            <img src="'../../../static/skin/img/23_03-1_17.jpg" alt="">
            
        </div>
        </swiper-slide>
     </swiper>
    </div>
  </div>
  <div class="serve-list">
    <div class="host-title">
        <img src="'../../../static/skin/img/23_03-1_26.jpg" alt="">
    </div>
    <div class="serverList">
        <div class="listTop">
        <div class="top-left">
            <img src="'../../../static/skin/img/23_02.jpg" alt=""> 
        </div>
        <div class="top-right">
            <div class="right-top-1">
            <img src="'../../../static/skin/img/23_04.jpg" alt=""> 
            
            </div>
            <div class="right-top-2">
            <img src="'../../../static/skin/img/23_07.jpg" alt=""> 
            
            </div>       
        </div>
        
        </div>
        <div class="listBottom">
        <div class="top-left">
            <img src="'../../../static/skin/img/23_10.jpg" alt=""> 
        </div>
        <div class="top-right">
            <div class="right-top-1">
            <img src="'../../../static/skin/img/23_09.jpg" alt=""> 
            
            </div>
            <div class="right-top-2">
            <img src="'../../../static/skin/img/23_12.jpg" alt=""> 
            
            </div>       
        </div>
        </div>
        
    </div>
        <swiper :options="swiper2" ref="mySwiper" >
            <swiper-slide>
            <div class="hostList ">
              <img src="'../../../static/skin/img/23_16_16.jpg" alt=""> 
                 
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="hostList ">
                2
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="hostList ">
                3
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="hostList ">
                4
            </div>
            </swiper-slide>
        </swiper>
    </div>
    <div class="partner">
        <div class="host-title">
            <img src="'../../../static/skin/img/25_02.jpg" alt="">
        </div>
        <ul class='partner-list'>
            <li class='partnerList-1'><img src="../../../static/skin/img/26_03.jpg" alt=""></li>
            <li class='partnerList-2'><img src="../../../static/skin/img/26_05.jpg" alt=""></li>
            <li class='partnerList-3'><img src="../../../static/skin/img/26_07.jpg" alt=""></li>
            <li class='partnerList-4'><img src="../../../static/skin/img/26_13.jpg" alt=""></li>
            <li class='partnerList-5'><img src="../../../static/skin/img/26_15.jpg" alt=""></li>
            <li class='partnerList-6'><img src="../../../static/skin/img/26_17.jpg" alt=""></li>
            <li class='partnerList-7'><img src="../../../static/skin/img/26_22.jpg" alt=""></li>
            <li class='partnerList-8'><img src="../../../static/skin/img/26_23.jpg" alt=""></li>
            <li class='partnerList-9'><img src="../../../static/skin/img/26_24.jpg" alt=""></li>
            <p class="clearOver"></p>
        </ul>
    </div>
     <div class="host-title partnerBt">
            <img src="'../../../static/skin/img/25_04.jpg" alt="">
    </div>
    <div class="footers">
        <div class="footers-low1">
           <div class="low1-imgs">
              <i class="low1-tell"></i>
              <span>免费咨询</span>
           </div>
        </div>
         <div class="host-title">
              <img src="'../../../static/skin/img/25_02_t.jpg" alt="">
        </div>
        <div class="footers-low2">
           <ul>
              <li class='low2-1'>一对一专业选址顾问</li>
              <li class='low2-2'>东朔礼包送不停</li>
              <li class='low2-3'>贴心物业服务</li>
              <li class='low2-4'>完善的配套设施</li>              
           </ul>
        </div>
        <div class="footers-low3">
           <p> 东朔平方 &nbsp;  &nbsp; |  &nbsp; &nbsp;  <a @click='scroll'>返回顶部</a></p>
           <p class='low3-p'> @copyright东朔集团所有</p>
           
        </div>
    </div>
</div>
</template>
<script>
  import "@@/skin/css/emp.css"
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { Navbar, TabItem } from 'mint-ui'
  
    export default{
        data () {
            return {
              selected: '1',
              swiper1: {
                notNextTick: true,
                observeParents: true,
                paginationClickable: true,
                freeMode: true,
                slidesPerView: 3,
                slidesPerColumn: 1,
                spaceBetween: 10
              },
              swiper2: {
                notNextTick: true,
                observeParents: true,
                paginationClickable: true,
                freeMode: true,
                slidesPerView: 1,
                slidesPerColumn: 1,
              },
               CompanyList: [],
              
            }
        },
        mounted () {
          this.getHomeRecommend()          
        },
        methods: {
          scroll: function() {
              document.body.scrollTop = 0;              
          },
          getHomeRecommend () {
            this.$ajax({
              method: 'post',
              url: '/api/DssquareWap/CompanyList',
            })
              .then((response) => {     
//                this.recommendData = this.shuffle(response.data.Data.Data)
                this.CompanyList = response.data.Data;
                console.log(this.CompanyList)
              })
              .catch((reject) => {
                console.log(reject)
              })
          },
        },    
        components: {
          Navbar,
          TabItem,
          swiper,
          swiperSlide
        }
    }
</script>