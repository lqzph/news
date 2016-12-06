
$(function () {
    var flag=true;
$(".jia").click(function () {
    if(flag==true){
        $(".xiala").css({animation:"xia 2s forwards"})
        flag=false;
    }else{
        $(".xiala").css({animation:"xia1 2s forwards"})
        flag=true;
    }
})
})
