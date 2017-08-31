<template>
<div>
 <div class="titleBack">
    <router-link to='/employers'><i class="back"></i></router-link>
    玉朔建筑
 </div>
 <div class="titleBanner">
    <img src='../../../static/skin/img/31_03.jpg'> 
</div>
<div class="introduce">
    玉朔建筑
</div>
<usertmp></usertmp>
<div class="salesman">
  <div class="salesman-write2">
     <img src="../../../static/skin/img/31_05.jpg" alt="">
  </div>
  <ul class='buildList'>
    <li><img src="../../../static/skin/img/31_06.jpg" alt=""><p>个性化定制装修，贴合企业文化</p></li>
    <li><img src="../../../static/skin/img/31_06.jpg" alt=""><p>个性化定制装修，贴合企业文化</p></li>
    <li><img src="../../../static/skin/img/31_06.jpg" alt=""><p>个性化定制装修，贴合企业文化</p></li>
    <li><img src="../../../static/skin/img/31_06.jpg" alt=""><p>个性化定制装修，贴合企业文化</p></li>
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