var oliList = document.getElementsByTagName("li");
var oman = document.getElementById("man");
var obtnYes = document.getElementById("btnYes");
var oUl = document.getElementById("vip");




var names = ["肖战", "迪丽热巴", "罗云熙", "陈钰琪", "白宇", "叶青", "胡潇灵", "汤唯", "王一博", "李恩童", "林更新", "刘亦菲", "于朦胧", "陈乔恩", "高伟光", "陈宇欣", "朱一龙", "杨丞琳", "邢昭林", "王一菲", "杨洋", "萱萱", "刘昊然", "杨紫", "吴磊", "杨幂", "张国荣", "石原里美", "胡歌", "陈瑶", "吴亦凡", "刘诗诗", "霍建华", "赵丽颖", "张若昀", "唐嫣", "周杰伦", "angelababy", "姜潮", "李沁", "陈冠希", "谭松韵", "李现", "金晨", "乔振宇", "郭碧婷", "黄晓明", "张子枫", "陈赫", "杨子姗", "白敬亭", "韩雪", "彭于晏", "张钧甯", "朱亚文", "王丽坤", "王凯", "叶璇"];



var t = 0;


//格式
function place() {
    for (var i = 0; i < 58; i++) {
        t = i * (360 / 58) + "deg";
        oliList[i].innerHTML = names[i];
        oliList[i].style.transform = "rotate(" + t + ") translate(360px)";

        var oSpan = document.createElement("span");
        oSpan.innerHTML = "VIP!";
        oSpan.style.color = "#ac112c"
        oSpan.style.cursor = "pointer";
        oSpan.style.textAlign = "lift";
        oliList[i].appendChild(oSpan);

    }

}
place();
//随机度数
function fun() {
    var num = Math.round((Math.random() * 58));
    return num * (360 / 58) + 180;
}
//旋转事件
var myDeg = 0;
obtnYes.onmousedown = function() {
    myDeg = myDeg + fun();
    oman.style.transitionDuration = "3s";
    obtnYes.style.boxShadow = "none";
    console.log(myDeg);
    oman.style.transform = "rotateZ(" + myDeg + "deg)";
}
obtnYes.onclick = function() {
    btnYes.style.boxShadow = "2px 2px 5px black";
}

//VIP列表
for (var i = 0; i < oliList.length; i++) {
    oliList[i].lastElementChild.onclick = function() {
        var oVip = document.createElement("li");
        oVip.innerHTML = this.parentElement.innerHTML;
        oVip.style.height = "20px";
        oVip.style.border = "1px solid #FFFFFF";
        oUl.appendChild(oVip);
    }
}