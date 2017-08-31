<template>
<div>
 <div class="titleBack">
    <router-link to='/employers'><i class="back"></i></router-link>
    东朔物业
 </div>
 <div class="titleBanner">
    <img src='../../../static/skin/img/28_02.jpg'> 
</div>
<div class="introduce">
   东朔物业
</div>
<usertmp></usertmp>
<div class="salesman">
  <div class="salesman-write2">
     <img src="../../../static/skin/img/28_04.jpg" alt="">
  </div>
  <ul class='serverList'>
    <li><img src="../../../static/skin/img/28_05.jpg" alt=""></li>
    <li><img src="../../../static/skin/img/28_08.jpg" alt=""></li>
    <li><img src="../../../static/skin/img/28_11.jpg" alt=""></li>
    <li><img src="../../../static/skin/img/28_14.jpg" alt=""></li>
    <li><img src="../../../static/skin/img/28_17.jpg" alt=""></li>
    <li><img src="../../../static/skin/img/28_20.jpg" alt=""></li>
    <li><img src="../../../static/skin/img/28_23.jpg" alt=""></li>
    <li><img src="../../../static/skin/img/28_25.jpg" alt=""></li>
  
    
  </ul>
</div> 
  <write></write>
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