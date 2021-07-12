<template>
  <div class="hello">
    <div id="can">
      <canvas class="canvas" tabindex="0" width="400px" height="400px"></canvas>
      <div>
        <span>>游戏介绍:</span>
        <br>
        <span>&emsp;&emsp;莫格哪星人复制了英雄的DNA并成功变异产生了该英雄,赶快抓住操控英雄抓住他吧！</span>
        <br>
        <br>
        <span>>操作方法：</span>
        <p style="color: rgb(253, 249, 249);background-color: black;fontSize:22px;">&emsp;&emsp;按下'空格键'暂停/开始游戏</p>
        <p class="introduction">
          <span>W向上移动</span>
          <br>
          <label>A向左移动</label>
          
          <label>D向右移动</label>
          <br>
          <span>S向下移动</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
 data (){
   return {

   }
 },
 methods: {
   GetInit(){
     let $=Xname=>document.querySelector(Xname),
          Getstyle=(Oname,Opropet)=>window.getComputedStyle(Oname,null)[Opropet],
          canvas=$('.canvas'),
          ctx=canvas.getContext('2d'),
          img1=new Image(),
          img2=new Image(),
          img3=new Image(),
          img_x=parseInt(Getstyle(canvas,'width')),
          img_y=parseInt(Getstyle(canvas,'height')),
          score_count=0,
          score_gradient=ctx.createLinearGradient(0,0,120,0),
          hero={
            w:30,
            h:30,
            x:(img_x-30)/2,
            y:(img_y-30)/2,
         
          },
          monster={
            x:Math.random()*370+1,
            y:Math.random()*370+1,
            w:30,
            h:30
            
          },
          flay=false;
      
      img1.src=require('../static/games/map.png');
      img2.src=require('../static/games/val.png');
      img3.src=require('../static/games/monster.png');
      Init();
      function Init(){
        Play();
        canvas.onkeydown=(e)=>{
          let key=e.keyCode;
          if(flay){
            if(key==87){
              hero.y-=10;
            } else if(key==83){
              hero.y+=10;
            } else if(key==65){
              hero.x-=10;
            } else if(key==68){
              hero.x+=10;
            } 
            if(hero.x<=img_x-hero.w && hero.x>=0);
            else {
              hero.x=hero.x<0?0:img_x-hero.w;
            }
            if(hero.y<=img_y-hero.h && hero.y>=0);
            else {
              hero.y=hero.y<0?0:img_y-hero.h;
            }

          }
          if(key==32){
            Over();
          }
        };
        if(flay)requestAnimationFrame(Init);
      }

      function Play(){
        ctx.drawImage(img1,0,0,400,400);
        ctx.drawImage(img2,hero.x,hero.y,hero.w,hero.h);
        PlayMonster();
        ctx.font='30px 楷体';
        score_gradient.addColorStop(0,'blue');
        score_gradient.addColorStop(0.5,'white');
        score_gradient.addColorStop(1,'red');
        ctx.globalAlpha=0.8;
        ctx.fillStyle=score_gradient;
        ctx.fillText('当前得分:'+score_count,10,30);

      }
      function PlayMonster(){
        let flay_x=Math.abs(monster.x-hero.x),
            flay_y=Math.abs(monster.y-hero.y);
        if(flay_x<=hero.w && flay_y<=hero.h-5){
          monster.x=Math.random()*370;
          monster.y=Math.random()*370;
          score_count++;
          PlayMonster();
        }
       else{
          ctx.drawImage(img3,monster.x,monster.y,monster.w,monster.h);
       }
       
        
      }
      function Over(){
        flay=!flay;
        if(flay)requestAnimationFrame(Init);
      }
      
   }
 },
 mounted() {
   this.GetInit();
 }
}
</script>

    <style scoped>
     body{
       display:flex;
       justify-content: center;
     }
      #can{
       display: flex;
       align-items: flex-start;
       width: 800px;
       height: fit-content;
       margin: 5px 0 0 30%;
       color:rgb(252, 229, 53);

       
      }
      .canvas{
        width: 400px;
        height: 400px;
        border:1em double rgb(151, 237, 164);
      }
      .introduction{
        margin-left: 40px;
      }
      .introduction>span{
        padding:100px;
      }
      .introduction>label{
        padding-left:40px;
      }
    </style>
