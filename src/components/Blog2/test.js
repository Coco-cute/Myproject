
var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
function csrfSafeMethod(method) {
    return(/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
function J_s() {
    var x=$("#tx1").val();
    var y=$("#tx2").val();
    var z=$("#tx3").val();
    var a =new Object();
    a.val1=x;
    a.opt=y;
    a.val2=z;
    document.getElementById('txt_a').value =JSON.stringify(a);
}
function J_s1() {
    var x=$("#tx4").val();
    var y=$("#h_5b").text();
    var a =new Object();
    a.name=x;
    a.id=y;
    document.getElementById('txt_b').value =JSON.stringify(a);
}


$(document).ready(function(){
    document.getElementById('btn_a').onclick=function () {Cal_e();};
    document.getElementById('btn_b').onclick=function () {
        var a= parseInt($("#tx1").val());
        var b= $("#tx2").val();
        var c= parseInt($("#tx3").val());
        var x=0;
        if(b==='+') x=a+c;
        else if(b==='-')x=a-c;
        else if(b==='*')x=a*c;
        else if(b==='/' && c)x=a/c;
        else return 0;
        $("#h_5a").text(x);};
    document.getElementById('ipt_bt').onclick=function () {J_s();};
    document.getElementById('btn1_a').onclick=function () {
        students ={"毛星星":"16540109","金梦澄":"16550126","陈胜源":"17540116","方纯昀":"17540119","李泽平":"17540125","龙羽":"17540127","唐林啸":"17540129",
            "吴志明":"17540135", "陈超颖":"17540202", "马雪娟":"17540205", "毛慧芳":"17540206","徐丹婷":"17540210","徐阳":"17540212","曹丰":"17540219",
            "陈金亮":"17540220", "陈体靖":"17540221", "陈文俊":"17540222", "冯旭鹏":"17540223", "李一波":"17540228",  "潘王安":"17540231",
            "王成功":"17540236", "严景涛":"17540239", "俞钦洋":"17540241", "张志祥":"17540242", "朱盛雷":"17540244"}
             var str=$("#tx4") .val();
            $("#h_5b").text(students[str]);
    };
    document.getElementById('btn1_b').onclick=function () {select_ajx();};
    document.getElementById('ipt1_bt').onclick=function () {J_s1();};




});
function inquery_byajax() {
    var input_cnt=$("#input_name").val();
    var jsondata={"inquery":input_cnt};
    var senddata= JSON.stringify(jsondata);
    $.ajaxSetup({
        beforeSend: function (xhr,settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken",csrftoken);
            }
        }});
    $.ajax({
        url:"/inquery_ajax/",
        data:senddata,
        type:"post",
        success:function (data) {
            alert(data)
        }
    });
}

function Cal_e() {
    var val1 = $("#tx1").val();
    var val2 = $("#tx3").val();
    var op=$("#tx2").val();
    var jsondata = {"v1":val1,"op":op,"v2":val2};
    var senddata = JSON.stringify(jsondata);
    $.ajaxSetup({
        beforeSend: function (xhr,settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken",csrftoken);
            }
        }});
    $.ajax({
        url:"/jisuan_ajx/",
        data:senddata,
        type:"post",
        success:function (data) {
            $("#h_5a").text(JSON.parse(data));
        }
    });
}

function select_ajx() {
    var val1 = $("#tx4").val();
    var jsondata = {"v1":val1};
    var senddata = JSON.stringify(jsondata);
    $.ajaxSetup({
        beforeSend: function (xhr,settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken",csrftoken);
            }
        }});
    $.ajax({
        url:"/select_ajx/",
        data:senddata,
        type:"post",
        success:function (data) {
            var flag=JSON.parse(data);
            if(flag==="-1")alert("未找到该学生!");
            else $("#h_5b").text(flag);
        }
    });
}


/*
function T_j(){
function inquery_ajax() {
    var ids={"毛星星":"16540109","金梦澄":"16550126","陈胜源":"17540116","方纯昀":"17540119","李泽平":"17540125","龙羽":"17540127","唐林啸":"17540129",
        "吴志明":"17540135", "陈超颖":"17540202", "马雪娟":"17540205", "毛慧芳":"17540206","徐丹婷":"17540210","徐阳":"17540212","曹丰":"17540219",
        "陈金亮":"17540220", "陈体靖":"17540221", "陈文俊":"17540222", "冯旭鹏":"17540223", "李一波":"17540228",  "潘王安":"17540231",
        "王成功":"17540236", "严景涛":"17540239", "俞钦洋":"17540241", "张志祥":"17540242", "朱盛雷":"17540244"};
    var a=$("#tx4").val();
    var b=ids[a];
    alert(b);

}
}*/