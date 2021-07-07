<template>
  <div id="botm">
    <span class="lianxi" title="联系Coco">&#128151;联系我&#128151;</span>
    <span class="mesage" >
      <span  class="phone mesage_init" title="联系方式">
        <label>联系电话: {{ contacts.phone }}</label> 
        <label>企业QQ: {{ contacts.qq }}</label> 
        <label>私人微信: {{ contacts.vx }}</label> 
        <label>
          e-mail:
          <a href="https://email.163.com/" target="_blank">
            {{ contacts['e-mail'] }}
          </a>
        </label>
        
        
      </span>
      <span class="address mesage_init" >
        <label title="地址">
          <b>详细地址:</b>
          <u style="font-size: 24px;" :title="contacts.address">
            {{ contacts.address }}
          </u>
        <label>
          <br>  <b>github:</b>
          <a :href="contacts.github" target="_blank">
            {{ contacts.github }}
          </a>
        </label>
        </label> 
        <label title="反馈">
          <a href="#">bug反馈/忠告建议/内容投诉</a>
        </label>
        
      </span>
      <span id="map" :title="contacts.address">

      </span>
    </span>
  </div>
</template>
<script type="text/javascript" src="https://api.map.baidu.com/api?type=webgl&v=1.0&ak=BHQv3DPkrzRxeNmTkvg6nhX3GRrsuvhG"></script>
<script>
import {Map} from '../map';
  export default {
    props: ['contacts'],
    data() {
      return {
        flay: false,
      }
    },
    methods: {
       Mapinit(){
          // GL版命名空间为BMapGL
          // 按住鼠标右键，修改倾斜角和角度
          var map = new BMapGL.Map("map"); // 创建Map实例
          map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
          //point (114.04305, 22.65005)
          var point = new BMapGL.Point(114.04305, 22.65005);//'深圳市龙华区下油松新村45号楼'
          map.centerAndZoom(point, 20); // 初始化地图,设置中心点坐标和地图级别
          map.setHeading(64.5);
          map.setTilt(43);
          var marker = new BMapGL.Marker(point);// 创建标注
          map.addOverlay(marker); // 将标注添加到地图中
          var opts = {
            width: 20, // 信息窗口宽度
            height: 10, // 信息窗口高度
            title: "深圳市", // 信息窗口标题
            message: "我住的地方"
          }
          var infoWindow = new BMapGL.InfoWindow("地址：深圳市龙华区下油松新村45号楼", opts); // 创建信息窗口对象
          marker.addEventListener("click", function () {
            map.openInfoWindow(infoWindow, point); //开启信息窗口
          });
          // //获取中心
          // function getMapCenter() {
          //   var cen = map.getCenter(); // 获取地图中心点
          //   alert('地图中心点: (' + cen.lng.toFixed(5) + ', ' + cen.lat.toFixed(5) + ')');
          // }
       }
    },
    mounted () {
      Map().then(()=>{
        this.Mapinit();
        }).catch((err)=>{
          console.log('错误:'+err)
        })
      
      
    }
  }
</script>
<style scoped lang="scss">
  #botm{
    display: flex;
    width: 100%;
    height: 25%;
    color: white;
    align-items: center;
    font-family: "楷体";
    font-size: 16px;
    letter-spacing: 2px;
  }
  .lianxi{
    display: inline-block;
    width: 30px;
    margin-left: 9%;
    margin-right: 2%;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
  }
  .mesage{
    padding: 1px 5px;
    width: 80%;
    height: 100%;
    display: flex;
    font-size: 18px;
  }
  .mesage_init{
    display: flex;
    width: 25%;
    height: 100%;
    flex-direction: column;
    left: 10px;
    padding: 1px 0 2px 2px;
    line-height: 24px;
    align-items: center;
    justify-content: center;
    
  }
  .phone{
    width:100%;
    left: 5%;
  }
  .phone>label{
    margin-top: 5px;
    text-indent: 20px;
  }

  
  .address{
    width:100%;
    margin:0 3%;
    
  }
  .address>label{
    align-self: flex-start;
    top: 15%;
    text-indent: 20px;
  }
  .address>label:last-child{
    margin-top:2%;
  }

  #map{
    width: 100%;
    height: 100%;
  }
  a{
    display: inline;
    color: greenyellow;
    cursor: pointer;
  }
  .noa{
    pointer-events: none;
    color: white;

  }
</style>


