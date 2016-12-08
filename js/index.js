
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

    $(".add").click(function () {
        var flag1=true;
        if(!flag1){
            return;
        }
        flag1=false;
        if(flag1==true) {
            $(".add").css({animation:"img 2s forwards"})

        }
    })


})
