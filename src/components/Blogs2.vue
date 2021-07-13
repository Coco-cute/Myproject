<template>
  <div class="hello">
    <div id="div_a" style="border-top:1px solid black;overflow: auto; width: 100%;height: 400px;">
      <div style="border:1px solid blue;width: 100%;height:140px">
            <div style="font-weight: bold;font-size: 20px;width: 10%;height:140px; border-right:1px solid red;">
                dswertwtrw
            </div>
            <div style="width:88%;height: 115px;border:1px solid black
            ;position: relative;margin:-135px 1px 0 145px;">dwa</div>
            <div style="height: 20px;width: 80%;border: 1px solid red ;position:relative ;margin: -2px 0 1px 245px">
                <div style="float: left">时间</div>
                <div style="float: right;">adshiuqw</div>
            </div>
        </div>
    </div>

    <div id="div_a" style="width: 100%;height:255px;">
        <div  style="margin-top:10px">
            <label >网名：</label>
            <input type="text" id="txt_a" maxlength="8"   name="txt_a" /><br>
            <input  type="button" id="btn_a" class="bt1" value="发表(前端)" />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input  type="button" id="btn_b" class="bt1"   value="发表(后端)" />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input  type="button" id="btn_c" class="bt1"   value="返回主页" />
            <!-- <div id="txt_b" name="txt_b" contenteditable="true" style="margin-top:2px;padding: 5px 4px 2px 4px;width: 100%;height: 160px;border: 1px dashed saddlebrown;">
            </div> -->
        </div>
        <!-- <div style="margin-left: 20px;width: 340px;margin-top: 1px; height: 70px;">
            <img v-for="(index,i) in imgs.type" :key="i" @load="Req(this,imgs.url+(i+1)+png)" :alt="imgs.url+(i+1)+index" :title="imgs.title[index]"> 
        </div> -->
    </div>
  </div>
</template>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
<script>
export default {
  data() {
    return {
      imgs: {
        url: '../static/',
        type: ['.png','.png','.png','.gif','.png'],
        title: ["学霸","不听","委屈","哭","偷笑"],
      },
    }

  },
  methods: {
    Req(tar,_src){
      alert(tar)
      let img=new Image(),
          _base64,
          fil=new FileReader;
          img.src=_src;
        fil.readAsDataURL(img);
        fil.onload=(e)=>{
          _base64=e.target.result;
          tar.src=_base64
        }
      
    }
  }
}
</script>
    <style scoped >
    .hello{
      color:white;
    }
    img{
        border:1px solid black ;
        margin: 0 1px 0 1px;}
    .zan{
            width: 30px;
            height: 10px;
            color: red;
            background-color: white;
            cursor: pointer;
            position: relative;
        }
     .bt1{
        margin: -24px 0 0 260px;
        position: absolute;
     }
    </style>