<template>
 <div id="left-pane">
  <ul>
    <li  v-for=" ( item, index ) in listitems" :key="index" >  
      <span class="left-pane" @click="Leftchild(item,listitems)" >
        <span :class="item.icon"></span>
        <router-link :to="item.url" :class="{leftpitch:item.clik}">
          {{ item.name }}
        </router-link>
        
        <b v-show="item.items.length" :class="{left_b_rotate:item.clik}">></b>
      </span>
      <ul>
        <li class="leftpanechid" v-for="(v,i) in item.items" :key="i" 
          v-show="item.clik"  v-on:click="Leftchild(v,item.items)">
          <router-link :to="v.url" :class="v.clik?'leftpitch':''">{{v.name}}</router-link>
         </li>
      </ul>
    </li>
  </ul>
 </div>
</template>

<script>
export default {
  data() {
   return {
     listitems: [
       {name:'个人信息',url:'/my_message/jj',icon:'icon-delect', clik: false, items:[
         {name:"个人简介",url:'/my_message/jj',clik:true},{name:"获奖记录",url:'/my_message/hj',clik:false},{name:"工作经历",url:'/my_message/jl',clik:false}]},
       {name:'我的博客',url:'/docum/jd',icon:'icon-document', clik: false,items:[
         {name:"前端",url:'/docum/jd',clik:true},{name:"c/c++",url:'/docum/c',clik:false},{name:"后端",url:'/docum/hd',clik:false}]},
       {name:'我的音乐',url:'/musics',icon:'icon-music', clik: false,items:[]},
       {name:'游戏视频',url:'/videos',icon:'icon-video', clik: false,items:[]},
       {name:'小游戏',url:'/games/bw',icon:'icon-game', clik: true,items:[
        {name:"黑白块",url:'/games/bw',clik:true},{name:"英雄抓怪兽",url:'/games/yx',clik:false}]},
     ]
   }
  },
  methods:{
   //Leftchild设置点击及相关二级导航的样式
   Leftchild(flag,flags){
     let len=Object.keys(flag).length;
     //判断是否是一级导航点击，还是二级导航点击，若为一级，则重置二级导航click属性
     if(len==5 && flag.items.length){
       Flay(flag.items);
       flag.items[0].clik=true;
     }
     function Flay(_flags){
      _flags.forEach((item)=>{
       item.clik=false;
       })
     }
     Flay(flags);
     flag.clik=true;
   },
 }
}
</script>

<style scoped lang="scss">
// 左边内容
#left-pane {
  position: relative;
  padding: 0 10px;
  width: 150px;
  height: 100%;
  background-color: rgba(255,255,255,0.8);
  background-image: linear-gradient(to right,rgb(195, 255, 252),rgba(255,255,255,0.8),white,rgb(243, 243, 196),white,rgba(255,255,255,0.8),rgb(195, 255, 252));
}

#left-pane>ul:first-child>li{
  margin:10px 0;
}

.left-pane{
  position: relative;
  font-size: 16px;
  padding: 0 5px;
}

//左窗格的箭头符号
.left-pane:nth-child(1) b{
  margin-left: 3px;
  color: rgba(255, 110, 100, 0.904);
  
}

.left-pane:hover,.leftpanechid:hover{
  cursor: pointer;
  color: rgb(10, 86, 226);
  background-color: rgba(170, 249, 255,0.5);
  border-bottom: 2px solid rgb(10, 86, 226);

} 
//选中时的样式
.leftpitch{
  color:rgb(252, 115, 24);
  border-bottom: 2px solid rgb(93, 148, 21);
}
.show{
  display: inline-block;
}

.left_b_rotate{
  // 在网上看到这句话：因为transform只能转换由盒子模型定位的元素。
  // 经过测试发现：display值为block/inline-block/grid/table/inline-table.......都可以，
  // 总的来说就是常用的几个display属性值中，除了inline/contents/table-*不行，其他都可以。
  display: inline-block;
  transform: rotate(90deg);
  animation:rotate 2s;
}
//二级导航栏
.leftpanechid{
  // 自适应根据文本长度设置宽度
  width: fit-content;
  font-size: 14px;
  margin-top: 5px;
  margin-left:28px;
  // display: none;
}
//旋转动作
@keyframes rotate{
  from {transform: rotate(0deg);}
  to {transform:rotate(90deg);}
}
</style>