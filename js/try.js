/**
 * Created by cy183 on 2018/1/9.
 */
$(function(){
    $.each(data.all, function (i, trmes) {
        if(trmes.type == "all"){
            var temStr = $('.all').html();
            var msg = transferMes(temStr, trmes);
            $(msg).appendTo($('.content'));
            $.each(data.all[i].img_url, function (t, trmes) {
                var temStr = $('.imgModel').html();
                var msg = transferMes(temStr, trmes);
                $(msg).appendTo($(".content .model").eq(i).find('.imgBox'));
            })
        }else if(trmes.type == "text"){
            var temStr = $('.text').html();
            var msg = transferMes(temStr, trmes);
            $(msg).appendTo($('.content'));
        }else if(trmes.type == "pic") {
            var temStr = $('.pic').html();
            var msg = transferMes(temStr, trmes);
            $(msg).appendTo($('.content'));
            $.each(data.all[i].img_url, function (t, trmes) {
                var temStr = $('.imgModel').html();
                var msg = transferMes(temStr, trmes);
                $(msg).appendTo($(".content .model").eq(i).find('.imgBoxOnly'));
            })
        }else {
            console.log(1);
        }
    })

    $(".model").on("click",function(){
        $(this).attr("show","true").siblings(".model").removeAttr("show");
        for(var i=0;i<data.all.length;i++){
            if($(".content .model").eq(i).attr("show")&&$(".content .model").eq(i).attr("show")=="true"){
                $(".content .model").eq(i).addClass("showTrue").siblings(".model").hide();
                $(".iconChange").show();
                $(".homeIcon").hide();
            }
        }
    })

    $("body").on("click",".iconChange",function(){
        for(var i=0;i<data.all.length;i++){
            if($(".content .model").eq(i).attr("show")&&$(".content .model").eq(i).attr("show")=="true"){
                $(".content .model").eq(i).removeClass("showTrue").siblings(".model").show();
            }
        }
        $(this).hide();
        $(".homeIcon").show();
    })
})