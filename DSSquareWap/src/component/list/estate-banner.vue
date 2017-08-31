<template>
  <div class="estate-banner">
    <div class="content">
      <swiper :options="swiperOption" ref="mySwiper">
        <!--<swiper-slide class="stop-swiping"></swiper-slide>-->
        <swiper-slide v-for="v in picList">
          <img class="bannerimgs" :src="v"/>
          <!--<div class="room-price"><strong>2.2</strong> 元／m²·天起</div>-->
        </swiper-slide>
<!--        <swiper-slide>
          <img class="bannerimgs" src="http://106.14.237.102:20178/upload/20170531/7937383560430489.jpg"/>
          <div class="room-price"><strong>2.2</strong> 元／m²·天起</div>
        </swiper-slide>-->
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    name: 'estateBanner',
    data () {
      return {
        pindex: '1',
        slidesPerView: '1',
        slidesPerGroup: '3',
        swiperOption: {
          notNextTick: true,
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          prevButton: '.estate-arrow-left',
          nextButton: '.estate-arrow-right',
          centeredSlides: true,
          paginationClickable: true,
          observeParents: true,
//          noSwipingClass: 'stop-swiping',
          slidesPerView: this.slidesPerView,
          slidesPerGroup: this.slidesPerGroup,
          onSlideChangeEnd: swiper => {
//          这个位置放swiper的回调方法
//          this.pindex = swiper.realIndex+1;
//            console.log(swiper.realIndex)
          }
        },
        picList: [],
        buildingId: this.$route.params.id
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted () {
      this.getEstatePics(this.buildingId)
    },
    methods: {
      getEstatePics (buildingId) {
        this.$ajax({
          method: 'post',
          url: '/api/building/getBuildingPicture',
          data: {buildingId: buildingId}
        })
          .then((response) => {
            this.picList = response.data.Data
          })
      }
    }
  }
</script>
<style>
  .swiper-wrapper{height:18rem}
</style>
