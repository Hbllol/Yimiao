<template>
<div class="room-details">
  <mt-header fixed  :title="HouseCoDetail.Name">
    <a href="JavaScript:history.back(-1)" slot="left">
      <mt-button icon="back"></mt-button>
    </a>
    <a class="shareBtn" @click="shareFn" slot="right"></a>
  </mt-header>
  <div class="layoutCnt pdHeader" style="padding-bottom: 7rem;">
    <div class="detail-info-wrap">
      <div class="detail-info">
        <div class="swiperlist">
          <swiper :options="swiperOption5" ref="mySwiper">
            <swiper-slide v-for="v in urls" :style="{backgroundImage:'url('+v+')'}"></swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
        <div class="infolist" v-if="HouseCoDetail.WorkbayTypeId==33">
          <h2 class="title"><span class="price_1"><strong>{{HouseCoDetail.TotalPrice}}</strong>元／工位／月</span></h2>
          <ul class="info2">
            <li>
              <p class="itxt">{{HouseCoDetail.HeightCateDesc}}</p>
              <p>楼层</p>
            </li>
            <li>
              <p class="itxt">{{HouseCoDetail.Area}}</p>
              <p>面积</p>
            </li>
            <li>
              <p class="itxt">{{HouseCoDetail.DecorateTypeDesc}}</p>
              <p>装修</p>
            </li>
            <li>
              <p class="itxt">{{HouseCoDetail.WorkbayNum}}</p>
              <p>可容纳工位</p>
            </li>
            <li>
              <p class="itxt">1个</p>
              <p>最少起租</p>
            </li>
          </ul>
          <div style="overflow: hidden">
            <p class="itxt2" style="float: none;width: auto"><span>最短租期：</span><span>没找到字段</span></p>
            <p class="itxt2"  style="float: none;width: auto"><span>免租期：</span><span>{{HouseCoDetail.RentFreePeriod}}</span></p>
          </div>
          <div class="detail-logo"></div>
        </div>
        <div class="infolist" v-if="HouseCoDetail.WorkbayTypeId==34">
          <h2 class="title"><span class="price_1"><strong>{{HouseCoDetail.TotalPrice}}</strong>元／间／月</span></h2>
          <ul class="info2">
            <li>
              <p class="itxt">{{HouseCoDetail.HeightCateDesc}}</p>
              <p>楼层</p>
            </li>
            <li>
              <p class="itxt">{{HouseCoDetail.OrientationDesc}}</p>
              <p>朝向</p>
            </li>
            <li>
              <p class="itxt">{{HouseCoDetail.Efficiency}}%</p>
              <p>使用率</p>
            </li>
            <li>
              <p class="itxt">{{HouseCoDetail.RestNum}}</p>
              <p>剩余房间数</p>
            </li>
            <li>
              <p class="itxt">{{HouseCoDetail.WorkbayNum}}</p>
              <p>房间工位</p>
            </li>
            <li>
              <p class="itxt">{{HouseCoDetail.UnitPrice}}</p>
              <p>工位单价</p>
            </li>
          </ul>
          <div class="clear" style="overflow: hidden">
            <p class="itxt2" style="width: 50%;float: left;"><span>面积：</span><span>{{HouseCoDetail.Area}}</span></p>
            <p class="itxt2" style="width: 50%;float: left;"><span>装修：</span><span>{{HouseCoDetail.DecorateTypeDesc}}</span></p>
            <p class="itxt2" style="width: 50%;float: left;"><span>最短租期：</span><span>没找到字段</span></p>
            <p class="itxt2" style="width: 50%;float: left;"><span>免租期：</span><span>{{HouseCoDetail.RentFreePeriod}}</span></p>
          </div>
          <div class="detail-logo"></div>
        </div>
      </div>
    </div>
    <div class="estate-detail">
      <h2>楼盘简介</h2>
      <ul class="room-info">
        <li><span class="lable">竣工时间</span><span class="lable-cnt">{{infoData.DeveloperYear}}</span></li>
        <li><span class="lable">地理位置</span><span class="lable-cnt">{{infoData.Address}}</span></li>
        <li><span class="lable">层高</span><span class="lable-cnt">{{infoData.FloorHeight}}</span></li>
        <li><span class="lable">层数</span><span class="lable-cnt">{{infoData.FloorNum}}</span></li>
        <li><span class="lable">物业</span><span class="lable-cnt">{{infoData.PropertyCompany}}</span></li>
        <li><span class="lable">物业费</span><span class="lable-cnt">{{infoData.PropertyFee}}</span></li>
        <li><span class="lable">电梯</span><span class="lable-cnt">{{infoData.LiftNum}}</span></li>
        <li><span class="lable">开发商</span><span class="lable-cnt">{{infoData.Developer}}</span></li>
        <li><span class="lable">车位</span><span class="lable-cnt">共{{infoData.ParkingLotNum}}个</span></li>
      </ul>
      <p class="info-txt">{{infoData.Description}}</p>
    </div>
  </div>
  <div class="bottom-fixed">
    <a  href="tel:400-189-9996" class="consult">咨询客服</a>
    <a class="showings" @click="showings()">预约看房</a>
  </div>

  <mt-popup class="popup-dialog" v-model="popupVisible" popup-transition="popup-fade">
    <div class="consult-wrap">
      <h2 class="dialog-title">预约信息</h2>
      <div class="dialog-cnt">
        <div class="dialog-call">
          <input type="text" class="dialogIpt" placeholder="请输入您的姓氏" v-model="name">
        </div>
        <div class="dialog-call mg3">
          <a class="radiolist" v-on:click="addClassa1()" :class="{'ac1':ac1}">男士</a>
          <a class="radiolist"  v-on:click="addClassa2()" :class="{'ac2':ac2}">女士</a>
        </div>
        <div class="dialog-call">
          <input type="text" class="dialogIpt" placeholder="请输入您的手机号码" v-model="mobile">
        </div>
      </div>
      <a class="popupBtn" @click="submitLogin()">提交</a>
    </div>
    <a class="popup-close" @click="Aclose()"></a>
  </mt-popup>
</div>
</template>
<script>
  import '@@/skin/css/list.css'
   import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    data () {
      return {
        popupVisible: false,
        swiperOption5: {
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
        HouseCoDetail: [],
        coworkId: 0,
        urls: [],
        infoData: [],
        hPid:this.$route.query.hPid,
        ac1:true,
        ac2:false,
        type:"男士",
        mobile: this.$store.getters.getcustomerName,
        name: '',
        mobile: '',

      }
    },
    mounted () {
      this.detailInfo();
      this.houseCoDetail();
    },
    methods: {
      Aclose () {
        this.popupVisible=false
      },
      shareFn () {
        alert('暂未实现分享功能');
      },
      showings () {
        this.popupVisible=true;
      },
      addClassa1: function() {
        this.ac1=true;
        this.ac2=false;
        this.type="男士";
      },
      addClassa2: function() {
        this.ac1=false;
        this.ac2=true;
        this.type="女士";
      },
      houseCoDetail () {
        let Id = this.$route.query.houseId,
          BuildingId = this.$route.query.BuildingId;
        this.$ajax({
          method: 'post',
          url: '/api/House/CoDetail',
          data: {houseId: Id,BuildingId: BuildingId}
        })
          .then((response) => {
            this.HouseCoDetail = response.data.Data
            this.coworkId = response.data.Data.CoworkId
            this.Pic = response.data.Data.Pic;
            let urls = new Array()
            this.urls = this.Pic.split(',')
          })
          .catch((reject) => {
          })
      },

      detailInfo () {
        let buildingId=this.$route.query.BuildingId;
        this.$ajax({
          method: 'post',
          url: '/api/building/detailInfo',
          data: {buildingId: buildingId}
        })
          .then((response) => {
            this.infoData = response.data.Data
          })
      },
      submitLogin () {
        let mobile = this.mobile,
          customerName = this.name;
        if (customerName === '') {
          this.$message.error('请填写姓名！');
          return false
        }
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))) {
          this.$message.error('请输入正确的手机号码！');
          return false
        }
        this.$ajax({
          method: 'post',
          url: '/api/account/visitHouse',
          data: {Phone: this.mobile, HouseId: this.$route.query.houseId,SurName:this.name,Sex:this.type}
        })
          .then((response) => {
            if (response.data.Code === 2000) {
              this.name = '';
              this.mobile = '';
              this.popupVisible=false;
              this.$message.success('提交成功，稍后客服会与你联系！');
            } else {
              this.$message({
                message: response.data.Msg,
                type: 'error'
              })
            }
          })
          .catch((reject) => {
            console.log(reject)
          })
      },
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style>
  .swiper-wrapper{height: 18rem;}
</style>
