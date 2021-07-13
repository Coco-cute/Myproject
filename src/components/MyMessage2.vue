<template>
    <div id="d1">
      <span>
        <img src="../assets/结构图.png" alt="">
      </span>
      <span>
        <img src="../assets/er.png" alt="">
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
  width: 30%;
  height: 100%;
  overflow: auto;
  color: rgb(159, 245, 188);
  background-color: rgba(73, 29, 122, 0.411)
}
#d1>span:last-child{
  width: 70%;
  height: 100%;
  overflow: auto;
  border: 5px solid red;
}

img {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>