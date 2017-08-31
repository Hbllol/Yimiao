<template>
  <div class="rommList clearfix">
    <mt-header fixed>
      <a href="JavaScript:history.back(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="seachIpt">
      <!--<input type="text" placeholder=""/>-->
      <form action=""><input type="text" placeholder="搜索办公楼、区域或价格" class="seachLabel"/></form>
      <!--<label class="seachLabel">搜索办公楼、区域或价格</label>-->
    </div>
<!--    <div class="screening">
      <ul>
        <li class="regional">区域</li>
        <li class="acreage">面积</li>
        <li class="sort">价格</li>
        <li class="more">更多</li>
      </ul>
    </div>
    <div class="grade-eject radeDialog">
      <div class="listbox">
        <ul class="list">
          <li class="active"><span>区域</span></li>
          <li><span>地铁</span></li>
        </ul>
      </div>
      <div class="cntbox">
        <div class="condition-list clearfix">
          <div class="defaultBr">
            <a class="condition-filter-item">全部区域</a>
          </div>
          <a class="condition-filter-item">浦东</a>
          <a class="condition-filter-item">徐汇</a>
          <a class="condition-filter-item">闵行</a>
          <a class="condition-filter-item">长宁</a>
          <a class="condition-filter-item">普陀</a>
          <a class="condition-filter-item">黄埔</a>
          <a class="condition-filter-item">静安</a>
        </div>
      </div>
    </div>
    <div class="grade-eject acreageDialog">
      <div class="cntbox" style="width:100%;left: 0;">
        <div class="condition-list">
          <div class="defaultBr">
            <a class="condition-filter-item">不限面积</a>
          </div>
          <a class="condition-filter-item">浦东</a>
          <a class="condition-filter-item">徐汇</a>
          <a class="condition-filter-item">闵行</a>
          <a class="condition-filter-item">长宁</a>
          <a class="condition-filter-item">普陀</a>
          <a class="condition-filter-item">黄埔</a>
          <a class="condition-filter-item">静安</a>
        </div>
      </div>
    </div>
    <div class="grade-eject sortDialog">
      <div class="listbox">
        <ul class="list">
          <li class="active"><span>单价</span></li>
          <li><span>总价</span></li>
        </ul>
      </div>
      <div class="cntbox">
        <div class="condition-list">
          <div class="defaultBr">
            <a class="condition-filter-item">不限单价</a>
          </div>
          <a class="condition-filter-item">3元一下</a>
          <a class="condition-filter-item">3-4元</a>
          <a class="condition-filter-item">4-5元</a>
          <a class="condition-filter-item">5-7元</a>
          <a class="condition-filter-item">7-9元</a>
          <a class="condition-filter-item">9-12元</a>
          <a class="condition-filter-item">12元以上</a>
        </div>
      </div>
    </div>
    <div class="grade-eject moreDialog">
      <div class="cntbox">
        <div class="condition-list clearfix">
          <span class="condition-filter-name">装修</span>
          <a class="condition-filter-item">不限</a>
          <a class="condition-filter-item">精装</a>
          <a class="condition-filter-item">简装</a>
          <a class="condition-filter-item">毛胚</a>
        </div>
        <div class="condition-list clearfix">
          <span class="condition-filter-name">类型</span>
          <a class="condition-filter-item">不限</a>
          <a class="condition-filter-item">普通办公</a>
          <a class="condition-filter-item">联合办公</a>
        </div>
      </div>
    </div>-->
    <!--<div class="grade-mark"></div>-->

    <div class="list-cnt">
      <router-link :to="(v.HouseCatePid==190) ? '/tenement/estate/list/'+ v.HouseCatePid +'/'+v.Id+'':'/tenement/estate/listLH/'+ v.HouseCatePid +'/'+v.Id+''" class="roomblock clearfix" v-for="v in listData">
        <div class="roomblock-img"><img :src="v.CoverPic"></div>
        <div class="roomblock-cnt">
          <div class="room-title">{{v.Name}}</div>
          <div class="room-m2">{{v.Area}}</div>
          <div class="room-region">徐汇-漕河泾</div>
          <div class="room-address">闵行区莲花路1555号</div>
          <div class="room-price">{{v.UnitPrice}}</div>
        </div>
      </router-link>
<!--
      <div>
      <router-link to="/tenement/estate/listLH/190/39" class="roomblock clearfix">
        <div class="roomblock-img"><img src="http://106.14.237.102:20178/upload/20170531/7937375545382455.jpg"></div>
        <div class="roomblock-cnt">
          <div class="room-title">昭化商务中心 </div>
          <div class="room-m2">16-800m²</div>
          <div class="room-region">徐汇-漕河泾</div>
          <div class="room-address">闵行区莲花路1555号</div>
          <div class="room-price">2.2元／m²·天</div>
        </div>
      </router-link>

      <a class="roomblock clearfix">
        <div class="roomblock-img"><img src="http://106.14.237.102:20178/upload/20170531/7937375545382455.jpg"></div>
        <div class="roomblock-cnt">
          <div class="room-title">昭化商务中心 </div>
          <div class="room-m2">16-800m²</div>
          <div class="room-region">徐汇-漕河泾</div>
          <div class="room-address">闵行区莲花路1555号</div>
          <div class="room-price">2.2元／m²·天</div>
        </div>
      </a>
      <a class="roomblock clearfix">
        <div class="roomblock-img"><img src="http://106.14.237.102:20178/upload/20170531/7937375545382455.jpg"></div>
        <div class="roomblock-cnt">
          <div class="room-title">昭化商务中心 </div>
          <div class="room-m2">16-800m²</div>
          <div class="room-region">徐汇-漕河泾</div>
          <div class="room-address">闵行区莲花路1555号</div>
          <div class="room-price">2.2元／m²·天</div>
        </div>
      </a>
      <a class="roomblock clearfix">
        <div class="roomblock-img"><img src="http://106.14.237.102:20178/upload/20170531/7937375545382455.jpg"></div>
        <div class="roomblock-cnt">
          <div class="room-title">昭化商务中心 </div>
          <div class="room-m2">16-800m²</div>
          <div class="room-region">徐汇-漕河泾</div>
          <div class="room-address">闵行区莲花路1555号</div>
          <div class="room-price">2.2元／m²·天</div>
        </div>
      </a>
      <a class="roomblock clearfix">
        <div class="roomblock-img"><img src="http://106.14.237.102:20178/upload/20170531/7937375545382455.jpg"></div>
        <div class="roomblock-cnt">
          <div class="room-title">昭化东朔联合办公空间 </div>
          <div class="room-lease">5类房源在租</div>
          <div class="room-region">徐汇-漕河泾</div>
          <div class="room-address">闵行区莲花路1555号</div>
          <div class="room-price">2000元/月起</div>
        </div>
      </a>
      <a class="roomblock clearfix">
        <div class="roomblock-img"><img src="http://106.14.237.102:20178/upload/20170531/7937375545382455.jpg"></div>
        <div class="roomblock-cnt">
          <div class="room-title">昭化东朔联合办公空间 </div>
          <div class="room-lease">5类房源在租</div>
          <div class="room-region">徐汇-漕河泾</div>
          <div class="room-address">闵行区莲花路1555号</div>
          <div class="room-price">2000元/月起</div>
        </div>
      </a>
      <a class="roomblock clearfix">
        <div class="roomblock-img"><img src="http://106.14.237.102:20178/upload/20170531/7937375545382455.jpg"></div>
        <div class="roomblock-cnt">
          <div class="room-title">昭化东朔联合办公空间 </div>
          <div class="room-lease">5类房源在租</div>
          <div class="room-region">徐汇-漕河泾</div>
          <div class="room-address">闵行区莲花路1555号</div>
          <div class="room-price">2000元/月起</div>
        </div>
      </a>
      </div>
-->

    </div>
    <div class="pages">
      <a class="nextBtn" @click="roomListclick" v-if="">下一页</a>
    </div>
  </div>
</template>
<script>
  import '@@/skin/css/list.css'
  import $ from 'jquery'
  export default{
    data () {
      return {
        popupVisible: true,
          cityName: '上海',
          pageIndex: 0,
          Index: 0,
          pageSize:10,
          listData: [],
      }
    },
    mounted () {
//      $('.screening ul').on('click', function (e) {
//        let $this = $(this)
//        if (e.target.className === 'regional') {
//          $('.grade-eject:not(.radeDialog)').removeClass('grade-mark')
//          $('.radeDialog').toggleClass('grade-mark')
//        } else if (e.target.className === 'acreage') {
//          $('.grade-eject:not(.acreageDialog)').removeClass('grade-mark')
//          $('.acreageDialog').toggleClass('grade-mark')
//        } else if (e.target.className === 'sort') {
//          $('.grade-eject:not(.sortDialog)').removeClass('grade-mark')
//          $('.sortDialog').toggleClass('grade-mark')
//        } else if (e.target.className === 'more') {
//          $('.grade-eject:not(.moreDialog)').removeClass('grade-mark')
//          $('.moreDialog').toggleClass('grade-mark')
//        }
//      });
//          $('.grade-mark :before').on('click', function(){
//              alert(1)
//          });
      let oForm =  document.getElementsByTagName("form")[0];
      let _this=this;
      oForm.onsubmit = function(){
        let keyWords=$('.seachLabel').val();
        if (keyWords==''){
          this.roomList();
        }else (
          _this.seachList(keyWords)
        )
      };

      this.roomList();
    },
    methods: {
      roomListclick(){
        this.roomList()
      },
      roomList () {
        let Indexs=this.Index;
        Indexs++;
        this.Index=Indexs;
        this.$ajax({
          method: 'post',
          url: '/api/house/list',
          data:{cityName:this.cityName,pageIndex:Indexs,pageSize:this.pageSize}

        })
          .then((response) => {
            this.$nextTick(function () {
              this.listData = response.data.Data.Building;
              this.pageTotal = response.data.Data.TotalRecord;
              this.pageIndex=0;
            });
            this.$store.dispatch('addLoading', false)
          })
          .catch((reject) => {
            console.log(reject)
          })
      },
      seachList (keyWords) {
        let pageIndexs=this.pageIndex;
        pageIndexs++;
        this.pageIndex=pageIndexs;
        this.$ajax({
          method: 'post',
          url: '/api/house/search',
          data:{cityName:this.cityName,pageIndex:pageIndexs,pageSize:this.pageSize,keyWords:keyWords}
        })
          .then((response) => {
            this.$nextTick(function () {
              this.listData = response.data.Data.Building;
              this.pageTotal = response.data.Data.TotalRecord;
              this.$store.dispatch('addLoading', false);
              this.Index=0;
            })
          })
          .catch((reject) => {
            console.log(reject)
          })
      },
    },
    components: {}
  }
</script>
<style>

</style>
