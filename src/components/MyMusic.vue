<template>
  <div id="Mymusic">
    <span class="music_list">
      <Tab />
    </span>
    <span class="aud">
      <Mymusic :list="list1" ref="child" />
    </span>
    <span>
    </span>
  </div>
</template>

<script>
import Mymusic from './components/Music.vue'
import Tab from './components/Table.vue'
export default {
 data(){
   return{
     list1: Tab.data().items,
   }
 },
 
 components: {
   Mymusic,
   Tab
 },
 methods: {
   Playl(_url){
     this.$refs.child.Imgplay(_url);
   }
 },
 created(){
   
 }
}
</script>
<style  scoped>
#Mymusic{
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  /* border: white 5px solid; */
  align-items: center;
  margin: 0 10%;
}
.music_list{
  margin-left: 20%;
  width: 80%;
  height: 75%;
  margin-top: 5px;
  /* border: solid 1px red; */
}

</style>
