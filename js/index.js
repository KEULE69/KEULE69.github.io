var oliList = document.getElementsByTagName("li");
var oman = document.getElementById("man");
var obtnYes = document.getElementById("btnYes");
var oUl = document.getElementById("vip");




var names = ["A", "B", "C", "D"];



var t = 0;


//格式
function place() {
    for (var i = 0; i < 10; i++) {
        t = i * (360 / 10) + "deg";
        oliList[i].innerHTML = names[i];
        oliList[i].style.transform = "rotate(" + t + ") translate(360px)";

        var oSpan = document.createElement("span");
        oSpan.innerHTML = " ";
        oSpan.style.color = "#ac112c"
        oSpan.style.cursor = "pointer";
        oSpan.style.textAlign = "lift";
        oliList[i].appendChild(oSpan);

    }

}
place();
//随机度数
function fun() {
    var num = Math.round((Math.random() * 4));
    return num * (360 / 4) + 180;
}
//旋转事件
var myDeg = 0;
obtnYes.onmousedown = function() {
    myDeg = myDeg + fun();
    oman.style.transitionDuration = "5s";
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
