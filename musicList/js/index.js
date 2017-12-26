/**
 * Created by cy183 on 2017/12/26.
 */
$(function(){
    var x = document.getElementById("myAudio");

    console.log(data);
    $.each(data.music.all, function(i, resObj) {
        var tcStr = $(".module").html();
        var msg = transferMes(tcStr, resObj);
        $(msg).appendTo($('.body'));
    });
    $(".body .bodyContent").eq(0).addClass("bgColor");
    x.play();

    //打开关闭音乐播放器
    $('.showMusicList').click(function(){
        showMusicList();
    });

    $('.musicColse').click(function(){
        closeMusic();
    });

    //点击div时获取头像和歌曲src
    var songLen = $(".body .bodyContent").length;
    $(".body .bodyContent").on("click",function(){
        $(this).siblings(".bodyContent").removeAttr("data-click").removeClass("bgColor");
        $(this).attr("data-click","1").addClass("bgColor");
        var url;
        var src;
        for(var i= 0;i<songLen;i++){
            if($(".body .bodyContent").eq(i).attr("data-click") && $(".body .bodyContent").eq(i).attr("data-click")==1 ){
                url = $(".body .bodyContent").eq(i).find(".otherInfo").attr("data-url");
                src = $(".body .bodyContent").eq(i).find(".otherInfo").attr("data-src");
            }
        }
        $("audio").attr("src",src);
        $(".singerInfo img").attr("src",url);
        x.play();
        $(".play").find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
        $(".play").addClass("pause").removeClass("play");
    })
    var x = document.getElementById("myAudio");
    $("body").on("click",".play",function(){
        $(this).find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
        $(this).addClass("pause").removeClass("play");
        x.play();
    })

    $("body").on("click",".pause",function(){
        $(this).find("span").removeClass("glyphicon-pause").addClass("glyphicon-play");
        $(this).addClass("play").removeClass("pause");
        x.pause();
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