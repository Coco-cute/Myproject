<template>
<div>
    <table id="bg">
        <thead>
            <tr>
            <th>歌名</th>
            <th>歌手</th>
            <th>大小</th>
            <th>
                <input type="checkbox" v-model="checkAll" :disabled="this.items.length==0" @change="Chekpd">全选
            </th>
            <th>
                编辑
            </th>
            </tr>
        </thead>
        <tbody id="tb">
            <tr v-for="(item,index) in items" :key="index">
                <td >
                    <div class="ellips d1" :title="item.name" @click="Plays(index)">
                      {{ item.name }}
                    </div>
                </td>
                <td>
                    <div class="ellips d2" :title="item.user">
                      {{item.user}}
                    </div>
                </td>
                <td>
                    <div class="ellips d2">
                      {{ item.time}}
                    </div>
                </td>
                <td>
                     <div class="ellips d2" >
                      <input type="checkbox" v-model="item.checkflay" @change="CheckChild">
                    </div>
                    
                </td>
                <td>
                    <div class="ellips d2" s>
                      <input type="button" :class="{'lab':item.checkflay}" @click="DeteChild(index)" value="删除" :disabled="!item.checkflay">
                    </div>
                    
                </td>
            </tr>
           
        </tbody>

        <tfoot align="center" >
            <tr>
                <td colspan="3" style="font-size:20px;width:60%;">{{`${tabfoottxt[items.length?1:0]}${items.length==0?'':items.length}`}}</td>
                <td colspan="2" style="width:30%;">
                    <input type="button" :class="{'lab':alldel}" style="width:80px;margin-right:15px;" value="一键删除" @click="DeleAll"  :disabled="!alldel">

                    <input type="file" id="fil_music" multiple  @change="Getmusics()" style="display:none;">

                     <label for="fil_music" type="file" class="lab" style="border:1px solid white;width:80px;">添加歌曲</label>
                </td>
            </tr>
        </tfoot>
       
    </table>
 </div>
</template>

<script>
export default {
    data() {
        return {
            count:1,
            checkAll: false,//全选
            alldel: false,//一键删除
            items:[
                {'name': '白月光与朱砂痣发士大夫大师傅asdasdsadsa', 'user': '胖虎', 'time': '--', url: require('../../static/music/白月光与朱砂痣-胖虎.mp3'), checkflay: false},
                {'name': '等你下课', 'user': '洛伊dfsdfsgsfgfdgfdgfdgdfgdfgfdgfd', 'time': '--', url: require('../../static/music/等你下课(洛伊).mp3'), checkflay: false},
                {'name': '搁浅-杨丞琳', 'user': '杨丞琳', 'time': '--', url: require('../../static/music/搁浅-杨丞琳.mp3'), checkflay: false},
                {'name': '静静 - 轨迹 (原唱_ 周杰伦)', 'user': '静静', 'time': '--', url:  require('../../static/music/静静 - 轨迹 (原唱_ 周杰伦).mp3'), checkflay: false},
                {'name': ' - 她说', 'user': '柠檬茶', 'time': '--', url:require('../../static/music/柠檬茶 - 她说.mp3'), checkflay: false},
                {'name': '- 心做し (无心)', 'user': '双笙 ', 'time': '--', url: require('../../static/music/双笙 - 心做し (无心).mp3'), checkflay: false},

            ],
            tabfoottxt: ['您还未添加歌曲!','已添加歌曲:'],
        }
    },
    watch:{
        items:{//监听items值并传给父组件
            deep:true,
            handler(newVal, oldVal){
                this.$parent.list1=newVal
           } 
        }
    },
    computed: {
    },
    methods: {
        Init(){
            let j=0;
            this.items.forEach((i)=>{
                if(i.checkflay)j++;
            })
            if(j){
                this.alldel=true;
                if(j==this.items.length)this.checkAll=true;
            }
        },
        Getmusics(){
            let fil=document.getElementById('fil_music'),
                tb=document.getElementById('tb'),
                fils=fil.files,
                arr=[],
                userarr=[],
                urlarr=[],
                count=0,
                _time=[],
                len=fils.length;
            const P=new Promise((resolve,rejiect)=>{
                for(let i=0;i<len;i++){
                let list=fils[i].name,
                    list1=list.split("-"),
                    _blo=new FileReader,
                    url=URL.createObjectURL(fils[i]),
                    aud=new Audio(url);
                aud.onloadedmetadata=(e)=>{//获取时间
                    let q=Math.floor(aud.duration/60),
                        w=Math.floor(aud.duration%60);
                    q=q+':'+w;
                    _time[i]=q;
                    URL.revokeObjectURL(url);
                }
                //获取歌曲和歌手
                if(list1.length==2){
                    arr[i]=list1[0];
                    userarr[i]=list1[1];
                }
                else{
                    arr[i]=list;
                    userarr[i]="未知";
                }
                //获取url
                _blo.readAsDataURL(fils[i]);
                _blo.onload= (e)=>{
                 urlarr[count++]=e.target.result;
                 if (count==len)resolve('1');
                }
                
            }
            });
            P.then(()=>{
             //传给data
            for(let i=0;i<arr.length;i++){
                let item={
                    'name': userarr[i],
                    'user': arr[i],
                    'time': _time[i],
                    'url': urlarr[i],
                    'checkflay': false,
                };
                console.log(item.name+"|||url:"+item.url);
                this.items.unshift(item);
            } 
            })

            //利用v-mode实时刷新数据
            console.log(tb.scrollHeight);
            this.checkAll=!this.checkAll;
            this.checkAll=!this.checkAll;
        },
        Chekpd(){
            this.items.forEach((item)=>{
                item.checkflay=this.checkAll;
            })
            this.alldel=this.checkAll
        },
        CheckChild(){
            let 
                tb=document.getElementById('tb');
                console.log(tb.scrollHeight);
            let sum=this.items.filter((item)=>{
            return item.checkflay
            }).length;
            if(sum){
                this.alldel=true;
                if(sum==this.items.length)
                    this.checkAll=true
                else 
                    this.checkAll=false
            }
            else{
                this.alldel=false
            }
        },
        // GetImgUrl(_url){
        //     return require(""+_url)
        // },
        DeteChild(_index){
            this.items.splice(_index,1);
            this.alldel=!this.items.every(i=>!i.checkflay);
            if(!this.items.length)this.checkAll=false;
        },
        DeleAll(){
            let len=this.items.length;
            for(let i=len-1;i>=0;--i){
                if(this.items[i].checkflay) this.items.splice(i,1);
                console.log(this.items)
            }
            if(!this.items.length)this.checkAll=false;
            this.alldel=false;
        },
        Plays(_id){
            this.$parent.Playl(_id);
        }
    },
    mounted(){
        this.Init();
    }
}
</script>

<style lang="scss" scoped>
[v-cloak]{
display: none;
}
#bg{
    display: block;
    table-layout: fixed;
    position: relative;
    width: 600px;
    height: 370px;
    
}
.ba{
    width: 600px;
    height: 270px;
    overflow-x: hidden;
}
thead{
    width: 600px;
    height: 50px;
    background-color: rgb(139, 167, 147);
    font-size: 18px;
}
tbody{
    display: block;
    overflow-x: hidden;
    width: 100%;
    height: 270px;
}
tbody>tr>td:first-child{
    text-align: left;
    
}
tbody>tr>td:first-child:hover{
    font-size: 18px;
    text-decoration: 2px underline solid rgb(96, 238, 219);
    cursor: default;
}
tbody>tr>td:first-child:active{
    font-size: 16px;
    color: rgba(245, 99, 208, 0.952);
}
th,td{
    width: 100px;
    height: 40px;;
    padding:2px 1px;
    color: white;
    box-sizing: border-box;
    border: none;
    text-align: center;
    text-indent: 2px;
    border-top: 1px solid rgb(233, 132, 132);
}
thead>tr>th:first-child{
    width: 200px;
    text-align: left;
    line-height: 35px;
    
}
tbody>tr{
    border-left: 2px solid rgb(233, 132, 132);
    border-right: 3px solid rgb(233, 132, 132);
}
tfoot{
    border-top:2px solid yellowgreen ;
}
.ellips{
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap:break-word;//英文换行
    word-break:break-all;//空白换行
    white-space:nowrap; //中文，日文，韩文换行
}

.d1{
     width:194px;
     height:40px;
     line-height: 40px;
}
.d2{
     width:96px;
     height:40px;
     line-height: 40px;
}
.lab{/* 美化按钮 */
  display: inline-block;/*因为行内元素没有宽高这一概念*/
  color: rgba(255, 255, 255, 0.9);
  background-color: rgb(3, 40, 143);
  background-image:  linear-gradient(to top left,rgba(255, 255, 255, 0.644),rgb(88, 124, 192),rgba(245, 99, 208, 0.952),rgba(255, 255, 255, 0.719));
  cursor: pointer;
  width: 60px;
  height: 30px;
  line-height: 25px;
  border: 1px rgb(30, 230, 12) solid;
  border-radius: 10px;
}
.lab:hover{
  color: white;
  text-decoration:overline wavy rgb(75, 212, 253);
  font-size: 18px;
  font-weight: bolder;
}
.lab:active{
  font-size: 15px;
}
</style>