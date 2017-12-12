/**
 * Created by cy183 on 2017/12/1.
 */
$(function(){
    console.log(data);
    $.each(data.music.all, function(i, resObj) {
        var tcStr = $(".module").html();
        var mes = transferMes(tcStr, resObj);
        $(".table").append(mes);
    });
    //打开关闭音乐播放器
    $('.showMusicList').click(function(){
        showMusicList();
    });

    $('.musicColse').click(function(){
        closeMusic();
    });

    $("label").on("click",function(){
        $(".mask").toggle();
    })

    $("#menu li").on("click",function(){
        $("#check").attr("checked",false);
        $(".mask").hide();
    })
})
function showMusicList(){
    $(".tableBox").show();
    $('.showMusicList').addClass('active');
    $('.musicBox').removeClass('active');
    $('.music').addClass('active');
}

function closeMusic(){
    $('.showMusicList').removeClass('active');
    $('.musicBox').addClass('active');
    $('.music').removeClass('active');
}