window.onload=function () {
   var nav=document.getElementsByClassName("nav")[0];
    var na=document.getElementsByTagName("nav","a");
    na.addEventListener("touchstart",function (e) {
        var ev=e || window.event;
        var e=ev.target ||ev.srcElement;
        for(i=0;i<na.length;i++){
          na[i].removeClass("active")
            e.addClass("active")
        }
    })

}