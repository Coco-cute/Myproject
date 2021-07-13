<template>
  <div id="gamevideo">
    <span v-for="(item,i) in videolist" :key="i">
      <h1>{{item.name}}</h1>
      <Video :url="item.url"/>
      <h5>{{item.describe}}</h5>
    </span>
    
  </div>
</template>

<script>
import Video from './components/Video.vue'
export default {
 data(){
   return {
    videolist: [
        {name: '复仇焰魂-火男锦集', describe: '辅助火男绝对的干货，开团高爆发，非死即伤', url: require('../static/video/复仇焰魂锦集.mp4')},
        {name: '黑夜黎明专场', describe: '这波啊，是"堕夜"亚索和"圣辉"锐雯的主场，看完不燃算我输！', url: require('../static/video/这波是黑夜黎明.mp4')},
        {name: '锐雯翻墙', describe: '学到就是赚到，用来耍酷逃跑，非常好用。', url: require('../static/video/锐雯翻墙.mp4')},
    ],
   }
 },
 components: {
   Video,
 },
 methods: {
 }
}
</script>

<style scoped>
  #gamevideo{
    display: flex;
    flex-direction: column;
    width: 99%;
    height: 100%;
    justify-items: center;
    align-items: center;
    overflow: auto;
    
  }
  #gamevideo>span{
    width: 430px;
    height: fit-content;
    margin: 10px 0 5px 0;
    text-align: center;
    background-image: radial-gradient(rgb(129, 243, 235),rgb(223, 91, 68));
    border-left: burlywood solid 1px;
    border-right: burlywood solid 1px;
  }
  h1{
    font-size: 26px;
    text-decoration: wavy 1px overline white;
    color: rgb(70, 212, 255);
  }
  h5{
    letter-spacing: 2px;
    font-size: 14px;
    color: wheat;
    text-align: start;
    text-indent: 28px;
    line-height: 20px;
  }
</style>