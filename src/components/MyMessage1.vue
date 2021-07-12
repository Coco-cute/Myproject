<template>
    <div id="d1">
      <span>
        <ul class="imgs">
          <li><img src="../static/imgs/1.jpg"  alt="加载中"></li>
          <li><img src="../static/imgs/2.jpg"  alt="加载中"></li>
          <li><img src="../static/imgs/3.jpg"  alt="加载中"></li>
          <li><img src="../static/imgs/4.jpg"  alt="加载中"></li>
          <li><img src="../static/imgs/5.jpg"  alt="加载中"></li>
        </ul>
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

#d1>span:last-child{
  width: 90%;
  height: 100%;
  overflow: auto;
}
img {
  position: relative;
  display: inline-block;
  margin: 10% 0 0 30%;
  width: 400px;
  height: 270px;
  padding: 5px;
  margin-top: 85px;
  border: 1px solid greenyellow;
  background-size: 100% 100%;
}
img:hover{
  transform: scale(2);
}


</style>