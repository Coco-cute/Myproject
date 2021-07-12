<template>
  <div class="hello">

    <div id="grd" >
      <h1 id='context'>开始你的表演！</h1>
      <div class="grid"></div>
      <button class="btn">
        &#9829;PLay&#9829;
      </button>
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
  
  GetData(){
    let grid=document.getElementsByClassName('grid')[0],
    btn=document.getElementsByClassName('btn')[0],
    txt=document.getElementById('context'),
    trim=null,
    count=0;
    btn.addEventListener('click',Init);
    grid.addEventListener('click',RemoveGrid);
    function Init(){
      if(!trim){
            count=0;
            Play();
            txt.innerHTML='得分：';
            grid.innerHTML=null;
              document.styleSheets[0].addRule('.grid>div>span', 'pointer-events: auto');
            grid.click=RemoveGrid();
      }     
    }

    function Play(){
    trim=setInterval(AutoGrid,1000);  
    }

    function Stop(){
      clearInterval(trim);
    trim=null;
    }

    function AutoGrid(){
            let div=document.createElement('div'),
                len=grid.childNodes.length,
                rad=Math.floor(Math.random()*4);
            for(let i=0,spn;i<4;++i){
              spn=document.createElement('span');
              if(i==rad){
                spn.style.backgroundColor='black';
              }
              div.appendChild(spn);
            }
          grid.insertBefore(div,grid.firstChild);

            if(len >3) {
              let i=grid.getElementsByTagName('div')[len].getElementsByTagName('span');
              for(let j of i)
                if(j.style.backgroundColor=='black'){
                grid.appendChild(grid.firstChild);
                ErrGrid(j);
                  i=null;
                  break;
                }
              if(i)grid.removeChild(grid.lastChild);
            }
    }

    function RemoveGrid(event){
            if(!event || event.target.tagName!='SPAN')  return;
            let targ=event.srcElement,
                target_color=targ.style;
            if(target_color.backgroundColor=='black'){
            count++;
            txt.innerHTML='得分：'+count;
              target_color.backgroundColor='#fff';
            }
            else ErrGrid(targ);
    }

    function ErrGrid(Oerr){
          Stop();
            /*styleSheets[0]本页所有style合集,addRule(样式,要增加或改变的属性及值)*/
            document.styleSheets[0].addRule('.grid>div>span', 'pointer-events: none');
          txt.innerHTML='最终得分:&nbsp;<b><I>'+count+'分!</i></b>';
          
            let Oerr_style=Oerr.style,
                Oerrcolor=Oerr_style.backgroundColor,
                errtime=3;
            Oerr_style.border='1px soid red';
            AnimoGird();
            

            function AnimoGird(){
              Oerr_style.backgroundColor='red'
              setTimeout(function(){ Oerr_style.backgroundColor=Oerrcolor;},500)
              if(errtime--)setTimeout(AnimoGird,800);
            }
    };
    },
 },

 mounted (){
  this.GetData();
 }
}
</script>

  <style>
      #grd{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        margin-top: 20px;
        
      }
      #context{
        font-size: 28px;
        font-family: "楷体";
        color:red;
      }
      .grid{
        /* display: flex;
        flex-direction:column-reverse; */
        width:400px;
        height: 400px;
        border:1em  rgb(195, 218, 233) ;
        border-style:double;
        box-sizing:content-box;
        overflow: hidden;
        
      }
      .btn{
        width: 80px;
        margin-top: 10px;
        justify-content: center;
        background-color: cadetblue;
        border-radius: 20px;
      }
      .grid>div{
        pointer-events: none;
        /*pointer-events的风格更像JavaScript，它能够：
          阻止用户的点击动作产生任何效果
          阻止缺省鼠标指针的显示
          阻止CSS里的hover和active状态的变化触发事件
          阻止JavaScript点击动作触发的事件
        一个CSS属性能做所有的这么多事情！*/
      }
      .grid>div>span{
        cursor: pointer;
        float: left;
        width: 100px;
        height: 100px;
        background-color: white;
        border:1px solid black;
        box-sizing:border-box;
      }
    </style>