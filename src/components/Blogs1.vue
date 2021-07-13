<template>
    <div id="d1">
      <span>
        <span style="color:red;background-color: rgba(76, 31, 128, 0.596);font-size:26px">你可以在下方白色文字内手动输入要排序的内容，每个数以逗号隔开，列如(1,3,88,57)按“回车键”结束</span>
        <span class="a1">
          <div id="d2" contenteditable="true"></div>
          <div id="d3"></div>
          <div id="d4"></div>
        </span>
      </span>
      <span>
        <img src="../assets/基数排序.png" alt="图片加载中..." title="基数排序" />
      </span>
    </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },


}
</script>
<style scoped>
#d1{
  display: flex;
  padding: 5px 5px 10px 120px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
#d1>span:first-child{
  width: 50%;
  height: 100%;
  overflow: auto;
  color: rgb(159, 245, 188);
  border: 5px solid yellow;
  background-color: rgba(73, 29, 122, 0.411)
}
#d1>span:last-child{
  width: 48%;
  height: 100%;
  overflow: auto;
  border: 5px solid red;
}
#d2{
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: white;
  border: 1px solid wheat;
  white-space: normal;
  
}
.a1{
  display: block;
  margin-top: 3%;
  width:fit-content;
  height:fit-content;
  line-height: 40px;

 
}
#d4{
  display: inline-block;
  margin: 10% 0 0 20px;
}
#d4>span{
    display: inline-block;
  width:80%;
  color:rgb(250, 102, 76);
  background-color: rgb(69, 82, 43);
  margin-top: 5px;
}

img {
  position: relative;
  padding-left: 15px;
  width: 544px;
  height: 740px;
}
</style>