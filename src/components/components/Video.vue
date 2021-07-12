<template>
  <video id="vid" controls :src="url"></video>
</template>

<script scoped>
export default {
 props: ['url'],
}
</script>

<style scoped>
  #vid{
    width: 400px;
    height: 230px;
    border: 8px dashed rgb(255, 21, 21);
  }
</style>