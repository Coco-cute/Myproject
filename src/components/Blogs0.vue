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
  methods: {
    Sortcount(){
      let a = document.getElementById('d2'),
          b = document.getElementById('d3'),
          ch = document.getElementById('d4'),
          arr = [0, 36324356558, 91321, 123, 823, 456, 999, 8543343988759482, 95434398759483];
        function gethtml(arr) {
          ch.innerHTML='';
          arr = [0, 36324356558, 91321, 123, 823, 456, 999, 8543343988759482, 95434398759483];
          if(a.innerHTML.length>5)arr=a.innerHTML.split(',');
            const str = arr.length,
            mod = 10;//余数
            let dev = 1,//整除数
                x,//判断为0的个数
                txt=document.createElement('SPAN');
                
              do {
                let arr2 = [],//临时数组
                flay,//临时变量 
                br=document.createElement('BR');
                x = 0
                for (let i = 0; i < str; i++) {
                    flay = Math.floor(arr[i] / dev % mod);//先求个位，在求十位，百位直到最高位都为0。
                    if (arr2[flay] == undefined) {//注意当一维数组既arr[0]时没有push方法，因为arr[0]不是对象所以我们给他变成二位数组
                      arr2[flay] = [];
                    }
                    arr2[flay].push(arr[i]);//存储基位一致的数（不懂可以先了解桶排序）
                    if (!flay) x++;//如果为零则加一
                }
                let txt1='第' + String(dev).length + '位判断排序后:\n';
                console.log(txt1);//记录查看当前第几位对应的结果
                for (let j=0, pos = 0, val; j < arr2.length; j++) //因为每个位排序后都是有序序列，所以我们只要每次排序后把arr2中的数直接移到arr中就好了
                    while (arr2[j] != undefined) {//shift()方法和push()方法一样，不是对象就没有这个方法
                      val = arr2[j].shift();//因为每次排完都是有序数列，我们每次把第一个给arr就可以了
                      if (val == undefined) break;//如果给完了就跳出循环.
                      arr[pos++] = val//传给arr
                  }
                dev *= 10;//整除数每次乘10
                txt.innerHTML+=txt1+arr;
                txt.appendChild(br);
                console.log(arr)
              } while (x != str)// if (x == str) break;//如果整除为0的个数和arr的个数相等终止循环
            ch.appendChild(txt);
            return arr;
          }
        a.innerHTML = '要排序的数: ' + arr;
        b.innerHTML = '排序后的数: ' + gethtml(arr);
        a.addEventListener('keydown',function(e){
          if(e.key=="Enter"){b.innerHTML=''; b.innerHTML= '排序后的数: ' + gethtml(arr);}
        })
        
    }
  },

  mounted(){
    this.Sortcount();
  }

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