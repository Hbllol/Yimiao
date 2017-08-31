<template>
<div>
 <div class="titleBack">
    <router-link to='/employers'><i class="back"></i></router-link>
    东朔律所
 </div>
 <div class="titleBanner">
    <img src='../../../static/skin/img/32_02.jpg'> 
</div>
<div class="introduce">
   东朔律所
</div>
<usertmp></usertmp>
<div class="salesman">
  <div class="salesman-write2">
     <img src="../../../static/skin/img/32_04.jpg" alt="">
  </div>
  <ul class='mediaList'>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>
    <li><div class="mediaListimg"><img src="../../../static/skin/img/29_06.jpg" alt=""></div><p>内容营销</p></li>   
  </ul>
  
  
</div> 
<write></write>
</div>
</div>

</template>
<script>
  import "@@/skin/css/emiao.css"
  import "@@/skin/css/propety.css"  
   import Write from '../emp/Write'
   import Usertmp from '../emp/Usertmp'
   
   export default{
        data () {
           
        },
        mounted () {
          
        },
        methods: {},
        components: {        
          write:Write,
          usertmp:Usertmp
        }
    }
</script>