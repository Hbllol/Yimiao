<template>
  <div class="dschoice">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">东朔精选</mt-tab-item>
      <mt-tab-item id="2">办公租金</mt-tab-item>
      <mt-tab-item id="3">办公面积</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <swiper :options="swiper1" ref="mySwiper" >
          <swiper-slide v-for="v in recommendData">
            <div class="dschoiceList">
              <router-link :to="(v.HouseCateId==192) ? {path:'/tenement/details',query:{houseId:v.Id,hPid:v.HouseCateId ,BuildingId:v.BuildingId}}:{path:'/tenement/detailsLH',query:{houseId:v.Id,hPid:v.HouseCateId ,BuildingId:v.BuildingId}}">
                <div class="room-img"><img :src='v.Pic'></div>
                <div class="room-pub room-title">{{v.Name}}</div>
                <!--<div class="room-pub room-cnt"><em class="bold">5.70</em> 元 /m². 天 </div>-->
                <div class="room-pub room-cnt">{{v.UnitPrice}}</div>
              </router-link>
            </div>
          </swiper-slide>
        </swiper>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <swiper :options="swiper2" ref="mySwiper" >
          <swiper-slide v-for="v in recommendData2">
            <div class="dschoiceList ">
              <router-link :to="(v.HouseCateId==192) ? {path:'/tenement/details',query:{houseId:v.Id,hPid:v.HouseCateId ,BuildingId:v.BuildingId}}:{path:'/tenement/detailsLH',query:{houseId:v.Id,hPid:v.HouseCateId ,BuildingId:v.BuildingId}}">
                <div class="room-img"><div class="minMax">{{v.MinVal}}元-{{v.MaxVal}}元</div><img :src="v.Pic"></div>
                <div class="room-pub room-title">{{v.Name}}</div>
                <div class="room-pub room-cnt">{{v.UnitPrice}}</div>
              </router-link>
            </div>
          </swiper-slide>
        </swiper>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <swiper :options="swiper3" ref="mySwiper" >
          <swiper-slide v-for="v in recommendData3">
            <div class="dschoiceList ">
              <router-link :to="(v.HouseCateId==192) ? {path:'/tenement/details',query:{houseId:v.Id,hPid:v.HouseCateId ,BuildingId:v.BuildingId}}:{path:'/tenement/detailsLH',query:{houseId:v.Id,hPid:v.HouseCateId ,BuildingId:v.BuildingId}}">
                <div class="room-img">
                  <!--<div class="minMax">{{v.MinVal}}元-{{v.MaxVal}}元</div>-->
                  <!--<img :src="v.Pic">-->
                  <div class="minMax" v-if="v.MinVal != 0 && v.MaxVal < 9999">{{v.MinVal}}m²-{{v.MaxVal}}m²</div>
                  <div class="minMax" v-else-if="v.MinVal == 0">{{v.MaxVal}}m²以下</div>
                  <div class="minMax" v-else-if="v.MaxVal == 9999">{{v.MinVal}}m²以上</div>
                  <img :src='v.Pic'>
                </div>
                <!--<div class="room-pub room-title">港泰广场901室港泰广场901室港泰广场901室港泰广场901室</div>-->
                <!--<div class="room-pub room-cnt"><em class="bold">5.70</em> 元 /m². 天 </div>-->
                <div class="room-pub room-title">{{v.Name}}</div>
                <div class="room-pub room-cnt">{{v.UnitPrice}}</div>
              </router-link>
            </div>
          </swiper-slide>
        </swiper>

      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
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
                slidesPerView: 2.1,
                slidesPerColumn: 2,
                spaceBetween: 10
              },
              swiper2: {
                notNextTick: true,
                observeParents: true,
                paginationClickable: true,
                freeMode: true,
                slidesPerView: 2,
                slidesPerColumn: 2,
                spaceBetween: 15
              },
              swiper3: {
                notNextTick: true,
                observeParents: true,
                paginationClickable: true,
                freeMode: true,
                slidesPerView: 2,
                slidesPerColumn: 2,
                spaceBetween: 15
              },
              recommendData: [],
              recommendData2: [],
              recommendData3: [],
            }
        },
        mounted () {
          this.getHomeRecommend();
          this.getHomeCateByUnitPrice();
          this.getHomeCateByArea();
        },
        methods: {
          getHomeRecommend () {
            this.$ajax({
              method: 'post',
              url: '/api/home/recommend',
              data: {pageIndex: '1', pageSize: '8', cityName: '上海'}
            })
              .then((response) => {
//                this.recommendData = this.shuffle(response.data.Data.Data)
                this.recommendData = response.data.Data.Data;
              })
              .catch((reject) => {
                console.log(reject)
              })
          },
          getHomeCateByUnitPrice () {
            this.$ajax({
              method: 'post',
              url: '/api/House/CateByUnitPrice',
              data: {cityName: '上海'}
            })
              .then((response) => {
                this.recommendData2 = response.data.Data
              })
              .catch((reject) => {
                console.log(reject)
              })
          },
          getHomeCateByArea () {
            this.$ajax({
              method: 'post',
              url: '/api/House/CateByArea',
              data: {cityName: '上海'}
            })
              .then((response) => {
                this.recommendData3 = response.data.Data
//          console.log(this.recommendData3)
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
<style>

</style>
