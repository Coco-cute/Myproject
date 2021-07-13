<template>
  <div class="headnav">
    <!-- 左边标题栏 -->
    <div class="head_left" title="CRMS">
      <span class="icon-myself"></span>
      <span class="head_left_text">
        <span>Coco专属</span>
        <span class="blackcolor"><b>|</b></span>
        <span class="blackcolor">信息管理系统</span>
        <span :title="this.$route.path">
          当前位置:&ensp;
          <b style="color:red;">
            {{this.$route.path}}
          </b>
        </span>
      </span>
    </div>

    <!-- 右边标题栏 -->
    <div class="head_ringht">
      <span>
        <span class="icon-github" @click="Github(github)" title="github"></span>
        <span class="setting" title="设置" @click="Getflay()">设置</span>
      </span>
      <div v-show="!this.flay" style=" pointer-events: none;">&nbsp;</div>
      <ul v-show="this.flay" class="setchid">
        <li value="">更改密码</li>
        <li value="">更改手机号</li>
        <li value="">切换账号</li>
        <li value="">退出</li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    props: ['github'],
    data() {
      return {
        flay: false,
      }
    },
    methods: {
      //获取github地址
      Github: function (_link) {
        window.open(_link, '_blank');
      },
      //监听flay的值来展示"设置"中的二级导航栏
      Getflay() {
        this.flay = !this.flay;
      }
    }
  }
</script>
<style scoped lang="scss">
  // 顶部
  .headnav {
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: space-between;
    letter-spacing: 1px;
    background-color: rgba(255, 255, 255, 0.6);
    background-image: linear-gradient(to bottom left, rgb(91, 248, 214), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6), rgb(91, 248, 214))
  }

  // 顶部左边部分
  .head_left {
    width: 50%;
    height: 100%;
    padding-left: 1%;
  }

  //  左边文字样式
  .head_left_text {
    width: fit-content;
    height: 100%;
    font-size: 24px;
    font-family: "楷体";
    text-align: left;
  }

  .blackcolor {
    color: black;
  }

  .head_left_text>span:first-child {
    color: brown;
    padding-left: 3px;
    ;
  }

  .head_left_text>span:nth-child(3) {
    font-size: 16px;
    letter-spacing: 2px;
  }

  .head_left_text>span:last-child {
    display: inline-block;
    position: relative;
    font-family: "黑体";
    color: rgb(82, 145, 82);
    transform: scale(0.4);
    letter-spacing: 3px;
    top: 10px;
  }

  // 右边
  .head_ringht {
    position: relative;
    width: 30%;
    height: fit-content;
    font-size: 24px;
    font-family: "楷体";
    text-align: right;
    padding: 1% 3% 0 0;
  }

  //设置
  .setting {
    font-size: 20px;
    top: -10px;
    cursor: pointer;
  }

  //设置下拉列表
  .setchid {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: fit-content;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-left: 50%;
    margin-top: 5px;
    white-space: nowrap; //不换行
  }

  .setchid>li {
    // overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    // text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    position: relative;
    width: fit-content;
    height: 20px;
    color: white;
    background-color: rgb(59, 58, 58);
    margin-left: 50%;
    font-size: 16px;
    border-bottom: 1px solid wheat;
    cursor: pointer;
    box-sizing: border-box;
    z-index: 5;
  }

  .setchid>li:hover {
    color: red;
  }

  .setchid>li:active {
    font-size: 14px;
  }

  .setting:active {
    color: red;
  }
</style>


