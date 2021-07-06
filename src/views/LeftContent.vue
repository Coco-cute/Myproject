<template>
 <div id="left-pane">
  <ul>
    <li  v-for=" ( item, index ) in listitems" :key="index" >  
      <span class="left-pane" @click="Leftchild(item,listitems)" :class="{leftpitch:item.clik}">
        <span :class="item.icon"></span>
        {{ item.name }}
        <b v-show="item.items.length" :class="{left_b_rotate:item.clik}">></b>
      </span>
      <ul>
        <li class="leftpanechid" v-for="(v,i) in item.items" :key="i" 
          v-show="item.clik" :class="v.clik?'leftpitch':''" v-on:click="Leftchild(v,item.items)">
          <router-link :to="item.url">{{v.name}}</router-link>
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
       {name:'个人信息',url:'/myifmx',icon:'icon-delect', clik: false, items:[
         {name:"简介",clik:true},{name:"简历",clik:false}]},
       {name:'我的文档',url:'/docum',icon:'icon-document', clik: false,items:[
         {name:"Java",clik:true},{name:"Java Script",clik:false},{name:"css",clik:false}]},
       {name:'音乐列表',url:'/musicbox',icon:'icon-music', clik: false,items:[]},
       {name:'精彩视频',url:'/videobox',icon:'icon-video', clik: false,items:[]},
       {name:'休闲游戏',url:'/games',icon:'icon-game', clik: true,items:[
        {name:"黑白块",clik:true},{name:"英雄打怪兽",clik:false}]},
     ]
   }
  },
  methods:{
   Leftchild(flag,flags){
     flags.forEach((item)=>{
       item.clik=false;
     })
     flag.clik=true;
     console.log(flag.clik)
   }
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
  background-image: linear-gradient(to right,white,rgba(255,255,255,0.8),rgb(195, 255, 252),rgb(227, 253, 227),rgb(195, 255, 252),rgba(255,255,255,0.8),white);
  border:1px solid red;
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
  color: rgba(241, 57, 44, 0.5);
  
}

.left-pane:hover,.leftpanechid:hover{
  cursor: pointer;
  color: rgb(10, 86, 226);
  background-color: rgba(170, 249, 255,0.5);
  border-bottom: 2px solid rgb(10, 86, 226);

} 
//选中时的样式
.leftpitch{
  color:rgb(10, 86, 226);
  border-bottom: 2px solid rgb(10, 86, 226);
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