<template>
  <div id="app">
    <!-- 背景颜色 -->
    <div id="bagrd">
    </div>
    <!-- 头部导航栏 -->
    <headnav :github="this.contacts[0].github" />

    <!-- 主体内容 -->
    <div id="content">
      <!-- 左边的窗格 -->
      <leftcontent />

      <!-- 右边的窗格 -->
      <div id="ringht-pane">
        <router-view></router-view>
      </div>

    </div>

    <!-- 尾部 -->
    <bottomnav :contacts="contacts[0]" />

  </div>
</template>

<script>
  import Bottomnav from './views/Bottomnav.vue';
  import leftcontent from './views/LeftContent.vue';
  import headnav from './views/Topnav.vue';

  export default {
    data() {
      return {
        contacts: [
          { phone: '2', qq: '', vx: '', github: '', address: '', 'e-mail': '' }
        ],
        message: ['13857592916', '2936756243', 'CH-sixsixsix', 'https://github.com/Coco-cute/Myproject.git', '深圳市龙华区下油松新村45号楼' ,'cjl13857592916@163.com'],
      }
    },
    methods: {
      //初始化联系方式contacts的信息
      Getcontacts: function (items) {
        Object.keys(this.contacts[0]).forEach((item, index) => {
          this.contacts[0][item] = items[index];
        })
      },
    },

    mounted() {
      //传入后台的值message
      this.Getcontacts(this.message)
    },
    components: {
      leftcontent: leftcontent,
      headnav,
      bottomnav: () => import('./views/Bottomnav.vue'),
      Bottomnav
    }
  }

</script>

<style lang="scss">
  @import "./init.css";
  @import "./icon.css";

  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  #bagrd {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('../public/ruiwen.png');
    opacity: 0.9;
    background-repeat: no-repeat;
    background-size: 100% 100vh;
    z-index: -1;
  }

  //头部分

  //中间内容
  #content {
    width: 100%;
    height: 75%;
    margin: 12px 0;
    display: flex;
    flex-direction: row;
  }

  //右边content

  #ringht-pane {
    width: 100%;
    height: 100%;

  }

  //底部
</style>
