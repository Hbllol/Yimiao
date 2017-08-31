<template>
<div class="estateList">
  <mt-header fixed class="bgtransparent">
    <a href="JavaScript:history.back(-1)" slot="left">
      <mt-button icon="back"></mt-button>
    </a>
    <a class="shareBtn" @click="shareFn" slot="right"></a>
  </mt-header>
  <div class="swiperlist">
    <estateBanner></estateBanner>
  </div>
  <div class="layoutCnt">
    <div class="estateTitle">
      <div class="room-price"><strong>{{titleList.UnitPrice}}</strong></div>
      <h1>{{titleList.Name}}</h1>
      <div class="estateAddress">
        <div class="room-region">{{titleList.DistrictName}}-{{titleList.CircleName}}</div><div class="room-address">{{titleList.BuildingAddress}}</div>
      </div>
    </div>
    <div class="bg-list-wrap">
      <mt-navbar v-model="bgSelected">
        <mt-tab-item id="tab1">独立办公</mt-tab-item>
        <mt-tab-item id="tab2">联合办公</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="bgSelected">
        <mt-tab-container-item id="tab1">
          <div class="list-cnt" style="padding:0 1rem;">
            <template v-for="(iv, $iv) in indDetailList">
              <router-link :to="{	path:'/tenement/details',query:{houseId:indv.Id, hPid: $route.params.type,BuildingId: $route.params.id}}" class="roomblock clearfix" v-for="(indv,$indIndex) in iv">

                <div class="roomblock-img"><img :src="indv.Pic"></div>
                <div class="roomblock-cnt">
                  <div class="room-pd">{{indv.Area}}m²</div>
                  <div class="room-pd"><strong>{{indv.UnitPrice}}</strong>元／m²·天</div>
                  <div class="room-pd">可容纳工位{{indv.WorkbayNum}}</div>
                  <div class="room-price">{{indv.TotalPrice}}元／月</div>
                </div>
              </router-link>
            </template>
          </div>
          <div class="pages">
            <a class="nextBtn"  @click="updatePage('ind')" v-show="indOpts.pageIndex < indOpts.totalPage">查看更多</a>
            <!--<router-link to="/tenement" class="nextBtn">查看更多</router-link>-->
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
          <div class="list-cnt lhbg" style="padding:0 1rem;padding-bottom: 2rem;">
            <template v-for="(cv, $ic) in lhList1" >
              <div v-for="(cov,$coIndex) in cv" >
                <router-link :to="{	path:'/tenement/detailsLH',query:{houseId:cov.Id, hPid: $route.params.type,BuildingId: $route.params.id}}" class="roomblock clearfix">
                  <div class="roomblock-img"><img :src="cov.Pic"></div>
                  <div class="roomblock-cnt">
                    <div class="room-pd">{{cov.TotalPrice}}／位／月</div>
                    <div class="room-pd">{{cov.Name}}</div>
                    <div class="room-price">剩余 <em>{{cov.WorkbayNum}}个</em>工位</div>
                  </div>
                </router-link>
              </div>
            </template>
            <template v-for="(cv, $ic) in lhList2" >
              <div v-for="(cov,$coIndex) in cv" >
                <router-link :to="{	path:'/tenement/detailsLH',query:{houseId:cov.Id, hPid: $route.params.type,BuildingId: $route.params.id}}" class="roomblock clearfix">
                <div class="roomblock-img"><img :src="cov.Pic"></div>
                <div class="roomblock-cnt">
                  <div class="room-pd">{{cov.TotalPrice}}元／间／月</div>
                  <div class="room-pd">{{cov.Name}}</div>
                  <div class="room-price">剩余 <em>{{cov.WorkbayNum}}间</em></div>
                </div>
              </router-link>
              </div>
            </template>
            <div class="pages">
              <a class="nextBtn" @click="updatePage('cod')" v-show="coOpts.pageIndex < coOpts.totalPage">查看更多</a>
            </div>
            <!--<router-link to="/tenement/estate/list/190/39" class="roomblock clearfix">-->
              <!--<div class="roomblock-img"><img src="http://106.14.237.102:20178/upload/20170531/7937375545382455.jpg"></div>-->
              <!--<div class="roomblock-cnt">-->
                <!--<div class="room-pd">2500元／间／月</div>-->
                <!--<div class="room-pd">3人间</div>-->
                <!--<div class="room-price">剩余 <em>20个</em>工位</div>-->
              <!--</div>-->
            <!--</router-link>-->
            <!--<router-link to="/tenement/estate/list/190/39" class="roomblock clearfix">-->
              <!--<div class="roomblock-img"><img src="http://106.14.237.102:20178/upload/20170531/7937375545382455.jpg"></div>-->
              <!--<div class="roomblock-cnt">-->
                <!--<div class="room-pd">2500元／间／月</div>-->
                <!--<div class="room-pd">3人间</div>-->
                <!--<div class="room-price">剩余 <em>2间</em></div>-->
              <!--</div>-->
            <!--</router-link>-->
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
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
        <li><span class="lable">车位</span><span class="lable-cnt">{{infoData.ParkingLotNum}}</span></li>
      </ul>
      <p class="info-txt">{{infoData.Description}}</p>
    </div>

    <div class="estate-similar">
      <h2>相似楼盘</h2>
      <div class="similar-list clearfix">
        <div class="dschoiceList "  v-for='s in Similar'>
          <router-link :to="(s.House) ? '':'/tenement/estate/list/'+ buildingType +'/'+s.Id+''" @click.native="flushCom">
            <div class="room-img"><img :src="s.CoverPic"></div>
            <div class="room-pub room-title">{{s.Name}}</div>
            <div class="room-pub room-cnt">{{s.UnitPrice}}</div>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</div>
</template>
<script>
  import estateBanner from './estate-banner'
  import '@@/skin/css/list.css'
  import $ from 'jquery'
  export default{
    data () {
      return {
        bgSelected: 'tab1',
        buildingType: this.$route.params.type,
        buildingId: this.$route.params.id,
        titleList: [],
        lhList1: [],
        lhList2: [],
        Similar: [],
        indOpts: {
          buildingId: this.$route.params.id,
          pageIndex: 1,
          pageSize: 5,
          totalPage: 1
        },
        coOpts: {
          buildingId: this.$route.params.id,
          pageIndex: 1,
          pageSize: 5,
          totalPage: 1
        },
        indDetailList: [],
        coDetailList: [],
        infoData: [],

      }
    },
    mounted () {
      let _this = this;
      window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let stop = (scrollTop / 80).toFixed(2) > 1 ? 1 : (scrollTop / 80).toFixed(2)
        $('.bgtransparent').css({'background-color': 'rgba(38,162,255,' + stop + ')'})
      });
      this.getEstateTitle(this.buildingId, this.buildingType);
      this.indDetail(this.indOpts);
      this.coDetail(this.coOpts);
      this.detailInfo();
      this.SimilarAjax(this.buildingId)
    },
    methods: {
      shareFn () {
        alert('分享')
      },
      flushCom () {
//      this.$router.go(0)
        location.reload()
      },
      updatePage (type) {
        if (type === 'ind') {
          let index = this.indOpts.pageIndex,
            total = this.indOpts.totalPage
          if (index < total) {
            this.indOpts.pageIndex++
            this.indDetail(this.indOpts)
          } else {
            this.indOpts.pageIndex = total
          }
        } else if (type === 'cod') {
          let index = this.coOpts.pageIndex,
            total = this.coOpts.totalPage
          if (index < total) {
            this.coOpts.pageIndex++
            this.coDetail(this.coOpts)
          } else {
            this.coOpts.pageIndex = total
          }
        }
      },
      getEstateTitle (buildingId, buildingType) {
        this.$ajax({
          method: 'post',
          url: '/api/building/getBuildingtitle',
          data: {buildingId: buildingId, buildingType: buildingType}
        })
          .then((response) => {
            this.titleList = response.data.Data
          })
      },
      indDetail (opts) {
        this.$ajax({
          method: 'post',
          url: '/api/building/inddetail',
          data: opts
        })
          .then((response) => {
            this.indOpts.totalPage = parseInt(response.data.Data.TotalRecord / this.indOpts.pageSize) + 1
            this.indDetailList.push(response.data.Data.Detail)
            this.indTotalRecord = response.data.Data.TotalRecord
          })
      },
      coDetail (opts) {
        this.$ajax({
          method: 'post',
          url: '/api/building/coDetail',
          data: opts
        })
          .then((response) => {
            let l1 = [];
            let l2 = [];
            let ctotalList = []
            this.coOpts.totalPage = parseInt(response.data.Data.TotalRecord / this.indOpts.pageSize) + 1
            this.coTotalRecord = response.data.Data.TotalRecord
//        this.coDetailList.push(response.data.Data.Detail)
            ctotalList = response.data.Data.Detail;
            for (let i = 0; i < ctotalList.length; i++) {
              if (ctotalList[i].WorkbayTypeId === 33) {
                l1.push(ctotalList[i])
              } else {
                l2.push(ctotalList[i])
              }
            }
            if (l1.length > 0) {
              this.lhList1.push(l1)
            }
            if (l2.length > 0) {
              this.lhList2.push(l2)
            }
//        console.log(this.lhList1)
//        console.log(this.lhList2)
//          console.log(response.data.Data.Detail)
          })
      },
      detailInfo () {
        this.$ajax({
          method: 'post',
          url: '/api/building/detailInfo',
          data: {buildingId: this.buildingId}
        })
          .then((response) => {
            this.infoData = response.data.Data
          })
      },
      SimilarAjax (buildingId) {
        this.$ajax({
          method: 'post',
          url: '/api/Building/Similar',
          data: {buildingId: buildingId}
        })
          .then((response) => {
            this.Similar = response.data.Data
//        console.log(response.data.Data)
          })
          .catch((reject) => {
            console.log(reject)
          })
      },

    },
    components: {
      estateBanner
    }
  }
</script>
<style>
.estateTitle .room-price {
  width: 12rem;
  border-radius: 0;
  height: 3rem;
  line-height: 3rem;
  color: #ffffff;
  background: rgba(0, 0, 0, .6);
  position: absolute;
  font-size: 1.3rem;
  left: 0;
  top: 11rem;
  text-align: center;
  z-index: 998;
}
.similar-list .dschoiceList:nth-child(even){
  margin-right: 0;
}
</style>
