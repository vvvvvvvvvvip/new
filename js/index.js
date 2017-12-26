/**
 * Created by cy183 on 2017/12/1.
 */
$(function(){
    $("label").on("click",function(){
        $(".mask").toggle();
    })

    $("#menu li").on("click",function(){
        $("#check").attr("checked",false);
        $(".mask").hide();
    })
})
