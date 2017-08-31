<template>
	<div class="main" >
    <mt-header fixed class="bgtransparent" title="企业找房">
      <a href="JavaScript:history.back(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="content">
			<h1>企业找房</h1>
			<p>一键提需求，东朔平方帮你找到最合适的办公室</p>
      <div class="formcont">
        <label>写字楼信息+联系人信息</label>
        <textarea v-model="requirements" placeholder="您的需求：如外滩soho，300平米写字楼，附近有地铁，租金6.5元／㎡／天"></textarea>
        <input type="text" name="" v-model="name" value="" placeholder="姓名"/>
        <input type="text" name="" v-model="mobile" value="" placeholder="手机号码"/>
        <input type="text" name="" v-model="verifyCode" value="" placeholder="验证码"/>
        <input type="button" name="" value="确定"  @click="submitLogin()"/>
        <a @click="countdown"  :disabled="smsDis">{{smsBtnText}}</a>
      </div>
		</div>
    <div class="contentbuttom">
      <img src="../../../static/skin/images/entrust.png" />
    </div>
	</div>
</template>
<script>
  import $ from 'jquery'

  export default{
    data () {
      return {
        requirements: '',
        name: '',
        mobile: this.$store.getters.getUserName,
        verifyCode: '',
        smsDis: false,
        smsBtnText: '获取验证码',
        count: 30,  // 间隔函数，1秒执行
        curCount: 0, // 当前剩余秒数
        interValObj: null
      }
    },
    mounted () {
      let _this = this;
      window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let stop = (scrollTop / 80).toFixed(2) > 1 ? 1 : (scrollTop / 80).toFixed(2);
        $('.bgtransparent').css({'background-color': 'rgba(38,162,255,' + stop + ')'})
      });
    },
    methods: {
      submitLogin () {
        let mobile = this.mobile,
          code = this.verifyCode,
          requirements = this.requirements,
          userName = this.name

        if (!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))) {
          this.$message.error('请输入正确的手机号码！')
          return false
        }
        if (code === '') {
          this.$message.error('请输入短信验证码！')
          return false
        }
        if (requirements === '') {
          this.$message.error('请填写字楼信息！')
          return false
        }
        if (userName === '') {
          this.$message.error('请填写姓名！')
          return false
        }
        this.$ajax({
          method: 'post',
          url: '/api/account/findHouse',
          data: {requirements: this.requirements, userName: userName, mobile: mobile, verifyCode: code}
        })
        .then((response) => {
          if (response.data.Code === 2000) {
            if (response.data.Data !== '') {
              this.$store.dispatch('addToken', {'mobile': mobile, 'token': response.data.Data})
            }
            this.$message({
              message: '提交成功！稍后会有客服联系您',
              type: 'success'
            })
            this.mobile = ''
            this.verifyCode = ''
            this.requirements = ''
            this.name = ''
          } else if (response.data.Code === 4000) {
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
      countdown () {
        let _this = this
        let mobile = this.mobile
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))) {
          this.$message.error('请输入正确的手机号码！')
          return false
        }
        if (this.smsDis) {
          return false
        }
        this.smsDis = true
//      this.smsBtnText = this.count + '秒再获取';
        _this.interValObj = window.setInterval(function () {
          if (_this.count === 0) {
            window.clearInterval(_this.interValObj) // 停止计时器
            _this.smsDis = false
            _this.count = 30
            _this.smsBtnText = '获取验证码'
            return false
          }
          _this.smsBtnText = `${_this.count--}秒再获取`
        }, 1000)
        // 发送请求
        _this.$ajax({
          method: 'post',
          url: '/api/system/valCode',
          data: {Phone: mobile}
        })
        .then((response) => {
          if (response.data.Code === 2000) {
            this.$message({
              message: '短信发送成功！',
              type: 'success'
            })
          }
        })
        .catch((reject) => {
          console.log(reject)
        })
      }
    },
    components: {
    }
  }
</script>

<style>
  .main{background: #FFFFFF;}
  .content{padding: 0.6rem 2.5rem;}
  .content h1{color: #969696;font-size: 1.8rem;text-align: right}
  .content p{color: #979797;font-size: 1.1rem;text-align: right;margin-bottom: 1.8rem;}
  .formcont{box-shadow: 0 4px 15px 3px #b7afaf; background: #FFFFFF;position: relative;padding-bottom: 50px;}
  .formcont label{font-size: 1.5rem;color: #000000;text-align: center;display: block;height: 4.25rem;line-height: 4.25rem;margin-bottom:1.4rem;}
  .formcont textarea{width: 90%; font-size: 1.5rem;color: #646464;height:8rem;margin: 0 auto ;outline: none; border: 0;  background: #f8f8f8;  display: block;padding:1rem;}
  .formcont input{
    width: 90%;
    height: 4rem;
    padding: 0 1rem;
    font-size: 1.4rem;
    color: #787878;
    outline: none;
    border: 0;
    background: #f8f8f8;
    display: block;
    margin: 0.8rem auto;
  }
  .formcont a {
    height:5.1rem;
    line-height:5.1rem;
    position: absolute;
    right: 1.5rem;
    top:23.5rem;
    display: block;
    padding: 0 1rem;
    font-size: 1.6rem;
    color: #3abde5;
  }
  .formcont input[type=button] {
    margin-top: 2.2rem;
    width:90%;
    background: #3abde5;
    color: #fff;
    cursor: pointer;
  }
  .contentbuttom{padding:5rem 0; }
  .contentbuttom img{width: 100%}
</style>
