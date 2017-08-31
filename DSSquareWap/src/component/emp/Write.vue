<template>
<div>
<div class="usertmp usertmpComp" v-show='temp'>
    <div class="submitWin submitWinComp" v-show='sumb'>        
        <img src='../../../static/skin/img/27_04.jpg'>  
        <p class='win'>发送成功</P>
        <p class='lose' @click='news'>重新提交</P> 
    </div>
    <div class='close' @click='close' ></div>
    <div v-show='sumb2'>
    <div class="userTable">
       <p>联系我们</P>
       <div class="userTable-name">
          <i></i>
          <input id='name' v-model='name' type="text" value=''placeholder='联系人姓名'>
       </div>
       <div class="userTable-mobile">  
          <i></i>
            
          <input v-model='mobile' type="text" value=''placeholder='输入手机号'>
       </div>       
       <div class="userTable-code">      
          <i></i>       
          <input type="text" v-model="verifyCode" value=''placeholder='输入验证码'>
          <span id='huquCodew' @click='timer()'>获取验证码</span>
          <span id='huquTimew'>{{time}}秒后再获取</span>
          
       </div>      
       <div class="userTable-comp">      
          <i></i>       
         <input type="text" v-model="compname" value=''placeholder='贵公司名称'>
       </div>
       
    </div>
    <div class="usertmp-cont">
        <textarea name="" v-model="requirements" id="" class='userContent' placeholder='您的需求'></textarea>
        <p class='usertmp-win'>提交成功后，工作人员会尽快与您确认需求或拨打客服电话:<a> 400-189-9996</a></P>
        <input type="submit" value='提交'class='usertmp-submit' @click='sumbit'>
    </div>
    </div>
</div> 
 <div class="writeUser" @click='block'></div>
</div>
</div>

</template>
<script>
  import "@@/skin/css/propety.css" 
  import $ from 'jquery' 
  export default {
      name: 'Write',
      data () {
        return{
          temp: false,
          sumb: false,
          sumb2: true,
          time: 30,
          requirements: '',
          name: '',
          mobile: this.$store.getters.getUserName,
          verifyCode: '',
          compname: ''
        }
      },
      beforeMount() {
        
      },
      methods: {
        block: function() {
          this.temp=true
        },
        close: function() {
          this.temp=false
          this.sumb=false
          this.sumb2=true
        },
        sumbit: function() {
            
              let mobile = this.mobile,
          code = this.verifyCode,
          requirements = this.requirements,
          userName = this.name,
          compname = this.compname

          
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))) {
          this.$message.error('请输入正确的手机号码！')
          return false
        }
        if (code === '') {
          this.$message.error('请输入短信验证码！')
          return false
        }
        if (compname === '') {
          this.$message.error('请填写公司名称！')
          return false
        }
        if (userName === '') {
          this.$message.error('请填写姓名！')
          return false
        }
         this.sumb=true
             this.sumb2=false
        },
        news: function() {
          this.sumb=false
          this.sumb2= true        
        },
        timer: function() {
           let mobile = this.mobile
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))) {
          this.$message.error('请输入正确的手机号码')
          return false
        }
          $('#huquCodew').hide()
          $('#huquTimew').show()
          var self = this;
          var times = setInterval(codeTime,1000)          
          function codeTime() {
            self.time--;
            if(self.time <= -1){
               $('#huquCodew').show()
               $('#huquTimew').hide()
               self.time=30;
               clearInterval(times)                        
               
            }
          }
          // 发送请求
            this.$ajax({
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
       
      }
  }
</script>
<style lang="">
  .usertmpComp{
   position:fixed;
   top:0;
   z-index:99;
   height:100%;
 }
 .close{
    width: 30px;
    height: 30px;
    position:absolute;
    top:27px;
    right:27px;
    background: url('../../../static/skin/img/取消-6.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
 }
 .submitWinComp{
   display:block;
 }
 #huquTimew{
   display:none;
   color:#ccc;
 }
</style>