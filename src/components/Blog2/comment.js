var address=window.location.href.split("/C");

//获取服务器网址
//var hostport=document.location.host;
var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
window.onload=function () {Comnt2(0);
    document.getElementById('btn_a').onclick=function () {
        if(!document.getElementById('txt_a').value.length )
                alert("请输入网名");
        else
                Comnt(0);};
    document.getElementById('btn_b').onclick=function () {Comnt2(1);};
    document.getElementById('btn_c').onclick=function () {window.location.href=address[0]+"/index/";};
    document.getElementById('img_a').onclick=function () {Img("1.png");};
    document.getElementById('img_b').onclick=function () {Img("2.png");};
    document.getElementById('img_c').onclick=function () {Img("3.png");};
    document.getElementById('img_d').onclick=function () {Img("4.gif");};
    document.getElementById('img_e').onclick=function () {Img("5.png");};

    //addEventListener("click",function ()
};

function Time(){
    var out="";
    var now =new Date();
    out+=now.getFullYear();
    out+="年"+(now.getMonth()+1);
    out+="月"+now.getDate()+"日&emsp;";
    out+=now.getHours();
    out+=":"+now.getMinutes();
    out+=":"+now.getSeconds();
    return out;}

function Img(temporary) {
    var txtValue =document.getElementById('txt_b');
    var bigImg = document.createElement("img");
    bigImg.src=address[0]+"/static/"+temporary;
    txtValue.appendChild(bigImg);
}

function Comnt(temporary) {
        var ch=new Object();
            ch.name=temporary?temporary[0]:document.getElementById('txt_a').value;
            ch.txtVal=temporary?temporary[1]:document.getElementById('txt_b').innerHTML;
            ch.time=temporary?temporary[2]:Time();
            ch.good=temporary?temporary[3]:0;
         var ch_str=JSON.stringify(ch);
         Create_div(ch_str);}

function Create_div(temporary) {
    var c = JSON.parse(temporary);
    var div = document.getElementById('div_a');
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    var div5 = document.createElement('div');
    var div6 = document.createElement('div');
    var div3$ = document.createElement('div');
    div2.innerHTML = "&emsp;&emsp;&emsp;" + c.txtVal;
    div3.innerHTML = "用户:" + c.name;
    div3$.innerHTML = "(留下的足迹)";
    div5.innerHTML = "发表时间:" + c.time;
    var bigImg = document.createElement("img");
    bigImg.src =address[0]+ "/static/15.png";
    div6.appendChild(bigImg);
    div6.innerHTML += c.good;
    div3.appendChild(div3$);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div1.appendChild(div2);
    div.appendChild(div1);
    //设置div样式
    div1.style = "border-bottom:1px dashed black;width: 100%;height:140px;";//最外层div
    div2.style = "font-family: 楷体;width:88%;height: 115px;position: relative;margin:-136px 0px 0 145px; ";//内容div
    div3.style = "text-align: center;font-weight: bold;font-size: 20px;width: 10%;height:140px; border-right:2px solid red;";//网名div
    div3$.style = ";color: #779dbd;margin:50px 0 0 10px";
    div4.style = "height: 20px;width: 80%;position:relative ;margin: -22px 0 1px 245px;";//时间点赞div
    div5.style = "color: darkblue;float: left;";//时间
    div6.className = "zan";
    div6.style = "float: right;height: 20px;width:60px;";//点赞
    div.scrollTop = div.scrollHeight;//设置自动到最底端
    div6.onclick = function () {
        var _txt = this.innerHTML.split(">");
        this.innerHTML = _txt[0] + ">" + (++_txt[1]);
    };
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

function Comnt2(flag_i) {
    var name1 = $("#txt_a").val();
    if(flag_i && !name1.length)alert("请输入网名:");
    var txt = $("#txt_b").html();
    var time=Time();
    var jsondata = {"_name":name1,"_value":txt,"Time":time};
    var senddata = JSON.stringify(jsondata);
    $.ajaxSetup({
        beforeSend:function (xhr,settings) {
            if(!csrfSafeMethod(settings.type)&&!this.crossDomain){
                xhr.setRequestHeader("X-CSRFToken",csrftoken);
            }
        }
    });
    $.ajax({
        url:"/Comnt_run/",
        data:senddata,
        type:"post",
        success:function (data) {
           var str1=JSON.parse(data);
           var str2=str1.txt_value;//[]
           var len=str2.length;
           document.getElementById('div_a').innerHTML="";
           for(var i=0;i<len;i++){
             var out="";var j=0;
                for(j in str2[i])
                    out+=(str2[i])[j]+"|||";
                 var str=out.split("|||");
              Comnt(str);}
                 }
    })}
