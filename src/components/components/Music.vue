<template>
<div class="aud1">
 <div class="rightimag" title="右边背景图片"></div>
    <div class="aud1_left" title="左边" >
        <div class="backaud" title="左边背景图片" ></div>
        
        <span class="aud1_kj left_kj dis">
            <span class="aud1kj aud1_kj1" title="上一首"></span>
            <span class="aud1kj " :class="this.objstaus.play?'aud1_kj2_1':'aud1_kj2'" title="播放"></span>
            <span class="aud1kj aud1_kj3" title="下一首"></span>
        </span>
        
        <span class="aud1_jindu" title="进度条" >
            <span class="aud1_jindu_bottom jindu_farmery" title="已读进度"></span>
            <div class="aud1_jindu_bottom" title="进度条"></div>
            <span class="aud1_jindu_pai" title="圆点"></span>
        </span>
    </div>

    <div class="aud1_right" title="右边">
    
        <span class="right_head">
            <span class="leftop">
                <span id="txt1" class="txt_t1" title="歌名">歌名555555555555555</span>
                <span id="txt2" class="txt_t2" title="歌手">歌手55555555555555</span>
            </span>
            <span class="rightop">
            歌词功能暂时还未上线
            </span>
        </span>

        <span class="right_bottom">
            <span id="txt3" class="txt_t3" title="时间">
            00:00/00:00
            </span>
            <span class="aud1_kj">
                <span class="aud1kj aud1_kj1"  title="上一首"></span>
                <span class="aud1kj" :class="this.objstaus.play?'aud1_kj2_1':'aud1_kj2'" title="播放"></span>
                <span class="aud1kj aud1_kj3" title="下一首"></span>
                <span class="aud1kj" :class="Getkj4" :title="objstaus.sictitle[objstaus.sincycle-1]"></span>
                <span class="aud1kj aud1_kj5" title="停止"></span>
                <span class="aud1kj" :class="objstaus.volumee?'aud1_kj6':'aud1_kj6_1'" :title="objstaus.volumetit[objstaus.volumee?0:1]"></span>
            </span>
            <span class="yinliang">
                <div class="aud1_size" :title="objstaus.volumee?objstaus.volumes:'0'"></div>
                <div class="aud1_size aud1_size1" :title="objstaus.volumee?objstaus.volumes:'0'"></div>
            </span>
        </span>
    </div> 
    <audio id="aud1" type="audio/*"></audio> 
</div>

</template>

<script>
export default {
    props: ['list'],
    data () {
        return {
            objstaus:{
                play: false,
                palytitle:['播放','暂停'],
                sictitle:['单曲循环','随机播放','列表循环'],
                sincycle: 1,
                volumee: true,
                volumetit:['音量','静音'],
                volumes: 0,
            },

            temps:{//临时变量
                cuurent:0,//统计歌曲Index
                isclick: true,//防止按钮点击过快或连续点击
                trim: null,//计时器
                pai_flay: 0//判断
            }
        }
    },
    watch:{
        list:{
            deep:true,
            handler(newVal){
                console.log('监听')
                console.log(newVal);
            },
        },
    },
    computed:{
        Getkj4(){ //控件4状态
            return 'aud1_kj4_'+this.objstaus.sincycle;
        },
        labels(){
            // 全局函数
            return {
                aud1: document.getElementById('aud1'),//audio播放控件
                musname: document.getElementById('txt1'),//歌名
                mususer: document.getElementById('txt2'),//歌手
                mustime: document.getElementById('txt3'),//时间
                _rotate: document.getElementsByClassName('backaud')[0],//旋转图片
                audsize0: document.getElementsByClassName('aud1_size')[0],//音量0
                audsize: document.getElementsByClassName('aud1_size')[1],//音量1
                topmusic: document.getElementsByClassName('aud1_kj1')[0],//上一首
                topmusic1: document.getElementsByClassName('aud1_kj1')[1],//上一首
                pl: document.getElementsByClassName('aud1kj')[1],//播放
                plt: document.getElementsByClassName('aud1kj')[4],//播放
                nextmusic: document.getElementsByClassName('aud1_kj3')[0],//下一首
                nextmusic1: document.getElementsByClassName('aud1_kj3')[1],//下一首
                farmer: document.getElementsByClassName('jindu_farmery')[0],//有效进度条
                unfarmer: document.getElementsByClassName('aud1_jindu')[0],//无效进度条
                pai: document.getElementsByClassName('aud1_jindu_pai')[0],//圆点位置
                sp: document.getElementsByClassName('aud1kj')[6],//播放顺序
                stp: document.getElementsByClassName('aud1_kj5')[0],//停止
                volumec: document.getElementsByClassName('aud1kj')[8],//静音
            }
        },
    },
    methods: {
        InitClick(){
            // 按钮单机事件
            this.labels.audsize0.addEventListener('click',this.Setyl);//音量
            this.labels.audsize.addEventListener('click',this.Setyl);
            this.labels.topmusic.addEventListener('click',()=>{//上一首
                this.SwitchSong(-1);
            });
            this.labels.topmusic1.addEventListener('click',()=>{
                this.SwitchSong(-1);
            });
            this.labels.nextmusic.addEventListener('click',()=>{//下一首
                this.SwitchSong(1);
            });
            this.labels.nextmusic1.addEventListener('click',()=>{
                this.SwitchSong(1);
            });
            this.labels.pl.addEventListener('click',this.Play);//播放
            this.labels.plt.addEventListener('click',this.Play);
            this.labels.sp.addEventListener('click',this.Kj4status);//播放顺序
            this.labels.stp.addEventListener('click',this.Stop);//静止
            this.labels.volumec.addEventListener('click',this.VolumeC);//静音
            this.labels.pai.addEventListener('mousedown',()=>{
                
                this.temps.pai_flay++;
                this.labels.unfarmer.addEventListener('mousemove',(e)=>{
                    if(!this.temps.pai_flay)return;
                    let x=e.offsetX;
                    if(x<0)x=0;
                    else if(x>95)x=95;
                    this.labels.pai.style.left=x+'px';
                })

                window.addEventListener('mouseup',()=>{
                    if(!this.temps.pai_flay)return;
                    this.temps.pai_flay=0;
                    let x= this.labels.pai.style.left;
                    this.labels.farmer.style.width=x;
                    
                    let y=Math.floor(parseInt(x)*this.labels.aud1.duration);
                    this.labels.aud1.currentTime=y/100;
                    this.Gettime();
                })

            })
            this.labels.aud1.addEventListener('ended',()=>{
                this.temps.isclick=true;
                this.SwitchSong(0)
            });
            this.Init();
        },

        //没有歌时
        Oerro(){
            let flay=false;
            if(!this.list || !this.list.length){
                alert('请先添加歌曲!')
            }
            else flay=true
            return flay
        },
        // 停止
        Stop(){
            this.objstaus.play=false;
            this.labels._rotate.style.animationPlayState='paused';
            this.labels.aud1.pause();

            this.labels.aud1.currentTime=0;
            this.Gettime();
            clearInterval(this.temps.trim);
        },
        
        Init(){
            if(!this.Oerro())return;
            let url=this.list[0].url;
            this.labels.aud1.src=url;
            this.objstaus.play=false;
        },
        
        //切歌
        SwitchSong(_flay){
            if(!this.temps.isclick || !this.Oerro())return;
            this.temps.isclick=false;
            let _url=this.temps.cuurent,
                rd=Math.floor(Math.random()*this.list.length);
            this.labels._rotate.style.animationPlayState='paused';
            
            if(_flay<0){//上一首
                _url--;
                if(_url<0)_url=0
            }
            else if(_flay>0){//下一首
                _url++;
                if(_url>=this.list.length)_url=this.list.length-1
            } else { //其它
                if(this.objstaus.sincycle==2){
                   _url=rd;
                } else if(this.objstaus.sincycle==3) {
                    _url=_flay+1;
                }
            }
            this.temps.cuurent=_url;
            this.labels.aud1.src=this.list[_url].url;
            this.objstaus.play=!this.objstaus.play;
            setTimeout(()=>{this.temps.isclick=true},1000);//切歌一秒只准一次；
            this.Play();
        },
        //获取时间
        Gettime(){
            let _end=Math.max(1,this.labels.aud1.duration),
                _sta=this.labels.aud1.currentTime,
                _sor=Math.floor(_sta/_end*100);
            this.labels.mustime.innerHTML=this.TimeSM(_sta)+'/'+this.TimeSM(_end);
            this.Timejd(_sor);
        },

        //音乐播放
        Play(){
            if(!this.Oerro()) return;
            if( !this.objstaus.play){
                this.labels.musname.innerHTML=this.list[this.temps.cuurent].name;
                this.labels.mususer.innerHTML=this.list[this.temps.cuurent].user;                
                this.labels.aud1.play();
                clearInterval(this.temps.trim);
                this.temps.trim=setInterval(this.Gettime,900);
                this.labels._rotate.style.animationPlayState='running';
                this.objstaus.play=true;
            } else {
                this.labels.aud1.pause();
                clearInterval(this.temps.trim);
                this.labels._rotate.style.animationPlayState='paused';
                this.objstaus.play=false;
            }

        },

        // 指定播放顺序
        Kj4status(){
            this.objstaus.sincycle=this.objstaus.sincycle%3+1;
        },

        // 音量是否静音
        VolumeC(){
            if(this.objstaus.volumee){
                this.objstaus.volumes=this.labels.aud1.volume*100;
                this.objstaus.volumee=false;
                this.labels.aud1.volume=0;
                
            } else {
                this.labels.aud1.volume=this.objstaus.volumes/100;
                this.objstaus.volumee=true;
            }
            this.labels.audsize.style.width=this.labels.aud1.volume*100+'px';
            console.log('上一次音量为:' +this.objstaus.volumes);
        },

        // 设置音量
        Setyl(e){
            let w=e.offsetX;
            this.objstaus.volumee=w>1;
            this.labels.audsize.style.width=w+'px';
            this.labels.aud1.volume=w/100;
            this.objstaus.volumes=w;
        },

        TimeSM(otm){//时间秒转换为分
            let x=Math.floor(otm/60),
                y=Math.floor(otm%60);
            if(x<10)x='0'+x;
            if(y<10)y='0'+y;
            return x+':'+y;
        },
        //进度条
        Timejd(flay){
            this.labels.farmer.style.width=flay+'px';
            this.labels.pai.style.left=flay>90?'90':flay+'px';
        },

        Imgplay(_src){
            this.labels.aud1.src=this.list[_src].url;
            this.temps.cuurent=_src;
            this.objstaus.play=false;
            this.Play();
        }
        
    },
    mounted(){
        // this.Musiclist();
        this.InitClick()
        
    }
}
</script>

<style type="scss" scoped>
 *{
position: relative;
box-sizing: border-box;
 }

.aud1{ /* 音乐1 */
display: flex;
flex-direction: row;
width: 500px;
height: 100px;
box-shadow: -3px -3px 3px #0ce6b6;
border-radius: 20px 20px 0 0;
}
.aud1_left{/* 音乐左边框架 */
width:100px;
height: 100px;
overflow: hidden;
display: inline-block;
}
/*旋转背景图 */
.backaud{
    position: absolute;
    width: 90%;
    height: 90%;
    left:5%;
    background-image: url("../../assets/music.png");
    background-repeat: no-repeat;
    background-size: 90px 90px;
    background-position: 55% 35%;
    animation: tra 8s linear infinite;
    animation-play-state: paused;
}
@keyframes tra{
from {transform: rotate(0deg);}
to {transform: rotate(360deg);}
}
.aud1_jindu{/*音乐进度*/
display: inline-block;
position: relative;
width: 100px;
height: 20;
top: 75px;
}
.aud1_jindu_bottom{
width: 100px;
height: 20px;
border-bottom: 4px rgb(143, 140, 140) solid;
z-index: 1;
}
.jindu_farmery{
position: absolute;
width: 30px;
border-bottom: 4px rgba(0,255,255,0.8) solid;
z-index: 2;
}
.aud1_jindu_pai{/*圆点*/
position: absolute;
width: 10px;
height: 10px;
border-radius: 50%;
top: 13px;
background-color: rgba(55, 235, 235, 0.8);
border: 2px solid rgb(255, 150, 150);
z-index: 3;
}
.audio_size{/*音乐当前时间/总时间*/
color: red;
z-index: 4;
}
.aud1_right{/*音乐右边部分*/

display: flex;
flex-direction:column;
flex-shrink: 0;
width: 400px;
height: 100px;
border-left: wheat 2px dotted;
}
.right_head{
display: flex;
flex-direction: row;
flex-shrink: 0;
top: -5px;
width: 100%;
height: 70%;
}
.rightimag{/* 音乐背景图片*/
position: absolute;
width: 100%;
height: 100%;
background-image: url("../../assets/阿狸.jpg");
background-repeat: no-repeat;
background-size: 100%,100%;
background-position-y: -50px;
border-radius: 20px 20px 0 0;
opacity: 0.8;
}
.aud1_right>span{
margin-top: 5px;
}
.leftop{/*右边左上部分既歌名歌手*/
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
}
.rightop{ /*歌词*/
width: 70%;
height: 100%;
padding: 5px;
}
.txt_t1{/* 歌名 */
width: 100%;
height: 50%;
overflow: hidden;
text-overflow: ellipsis;
white-space:nowrap; 
color: white;
font-size: 16px;
font-weight: bolder;
text-decoration: underline rgba(0,255,255,0.5) wavy;
}
.txt_t2{/* 歌手 */
width: 100%;
height: 40%;
top: 5px;
overflow: hidden;
white-space:nowrap; 
text-overflow: ellipsis;
font-size: 14px;
font-weight: normal; 
font-style: italic;
text-decoration:underline solid rgb(73, 84, 231);
color: rgb(231, 202, 202);
}
.right_bottom{/* 右边最下面即音量所在栏*/
display: flex;
flex-direction: row;
padding-left:5px;
width: 100%;
height: 40%;
top: -10px;;
}
.txt_t3{/* 时间 */
display:inline-block;/* 因为行高没有宽高i概念*/
font-size: 18px;
font-size: none;
color: rgb(88, 21, 0);
font-weight: bolder;
left: -30px;
letter-spacing: 2px;
transform: scale(0.5);/*字体缩放原来得0.5倍即10px，因为浏览器最小设置得字体只有12px */
z-index: 1;
}

.aud1_kj{/* 音乐控件 */
display: flex;
width: fit-content;
height: 30px;
left: -50px;
z-index: 1;
}
/*左边播放按钮控件 */
.left_kj{
    left: 0;
    top: 35px;
    position: absolute;
    display: none;
}
.aud1_left:hover .left_kj{
    display: flex;
    animation: dis 2s;
    
}
@keyframes dis {
    from {opacity: 0}
    to {opacity: 100%}
}
.aud1kj{
flex-shrink: 0;
width: 20px;
height: 20px;
top: 5px;
background-color: wheat;
border-radius: 30%;
background-size: 100% 100%;
cursor: pointer;
}
.aud1_kj1{ /*控件1*/
background-image: url("../../assets/上一首.png");
}

.aud1_kj2{ /*控件2*/
background-image: url("../../assets/播放.png");
margin: 0 20px;
}
.aud1_kj2_1{ /*控件1*/
background-image: url("../../assets/暂停.png");
margin: 0 20px;
}
.aud1_kj3{ /*控件3*/
background-image: url("../../assets/下一首.png");
}
.aud1_kj4_1{ /*控件4*/
background-image: url("../../assets/单曲循环.png");
margin: 0 12px;
}
.aud1_kj4_2{ /*控件4*/
background-image: url("../../assets/随机播放.png");
margin: 0 12px;
}
.aud1_kj4_3{ /*控件4*/
background-image: url("../../assets/顺序播放.png");
margin: 0 12px;
}

.aud1_kj5{ /*控件5*/
background-image: url("../../assets/终止.png");
}
.aud1_kj6{ /*控件6*/
background-image: url("../../assets/音量.png");
margin-left: 20px;
}
.aud1_kj6_1{ /*控件6*/
background-image: url("../../assets/静音.png");
margin-left: 20px;
}
.aud1kj:active{
    border: 2px solid red;
}
.aud1kj:hover{
    background-color: rgb(103, 237, 255);
}
.yinliang{
flex-shrink: 0;
left: -45px;
width: fit-content;
height: 30px;

}
.aud1_size{/* 音量进度条 */
width: 100px;
height: 20px;
margin: 5px 0 0 0;
border: 1px solid #000;
border-radius: 40px;
background-color: rgb(209, 206, 206);
cursor: pointer;
box-sizing: content-box;
}
.aud1_size1{/* 音量有效进度条 */
margin-top:-21px;
left: 1px;
width: 100px;
background-color: chartreuse;
cursor: pointer;
border: 0;
background-image: radial-gradient(rgb(155, 226, 229),rgba(255,125,0,1))
}
#context{/*内容*/
margin-top: 40px;
}

 </style>