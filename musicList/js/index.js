/**
 * Created by cy183 on 2017/12/26.
 */
var url;
var src;
$(function () {
    var x = document.getElementById("myAudio");

    console.log(data);
    $.each(data.music.all, function (i, resObj) {
        var tcStr = $(".module").html();
        var msg = transferMes(tcStr, resObj);
        $(msg).appendTo($('.body'));
    });
    var songLen = $(".body .bodyContent").length;

    $(".body .bodyContent").eq(0).attr("data-click", "1").addClass("bgColor");
    x.play();

    //播放完之后自动播放下一首
    x.onended = function() {
        for (var i = 0; i < songLen; i++) {
            if ($(".body .bodyContent").eq(i).attr("data-click") && $(".body .bodyContent").eq(i).attr("data-click") == 1) {
                if (i == songLen - 1) {
                    console.log(1);
                } else {
                    $(".body .bodyContent").eq(i).removeAttr("data-click").removeClass("bgColor");
                    $(".body .bodyContent").eq(i + 1).attr("data-click", "1").addClass("bgColor");
                    url = $(".body .bodyContent").eq(i + 1).find(".otherInfo").attr("data-url");
                    src = $(".body .bodyContent").eq(i + 1).find(".otherInfo").attr("data-src");
                    $("audio").attr("src", src);
                    $(".singerInfo img").attr("src", url);
                    x.play();
                    $(".play").find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
                    $(".play").addClass("pause").removeClass("play");
                    return false;
                }
            }
        }
    };

    //打开关闭音乐播放器
    $('.showMusicList').click(function () {
        showMusicList();
    });

    $('.musicColse').click(function () {
        closeMusic();
    });

    //点击div时获取头像和歌曲src
    $(".body .bodyContent").on("click", function () {
        $(this).siblings(".bodyContent").removeAttr("data-click").removeClass("bgColor");
        $(this).attr("data-click", "1").addClass("bgColor");

        for (var i = 0; i < songLen; i++) {
            if ($(".body .bodyContent").eq(i).attr("data-click") && $(".body .bodyContent").eq(i).attr("data-click") == 1) {
                url = $(".body .bodyContent").eq(i).find(".otherInfo").attr("data-url");
                src = $(".body .bodyContent").eq(i).find(".otherInfo").attr("data-src");
            }
        }
        $("audio").attr("src", src);
        $(".singerInfo img").attr("src", url);
        x.play();
        $(".play").find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
        $(".play").addClass("pause").removeClass("play");
    })

    //播放
    $("body").on("click", ".play", function () {
        $(this).find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
        $(this).addClass("pause").removeClass("play");
        x.play();
    })
    //暂停
    $("body").on("click", ".pause", function () {
        $(this).find("span").removeClass("glyphicon-pause").addClass("glyphicon-play");
        $(this).addClass("play").removeClass("pause");
        x.pause();
    })

    //上一首
    $(".last").on("click", function () {
        for (var i = 0; i < songLen; i++) {
            if ($(".body .bodyContent").eq(i).attr("data-click") && $(".body .bodyContent").eq(i).attr("data-click") == 1) {
                if (i == 0) {
                    console.log(1);
                } else {
                    $(".body .bodyContent").eq(i).removeAttr("data-click").removeClass("bgColor");
                    $(".body .bodyContent").eq(i - 1).attr("data-click", "1").addClass("bgColor");
                    url = $(".body .bodyContent").eq(i - 1).find(".otherInfo").attr("data-url");
                    src = $(".body .bodyContent").eq(i - 1).find(".otherInfo").attr("data-src");
                }
            }
        }
        $("audio").attr("src", src);
        $(".singerInfo img").attr("src", url);
        x.play();
        $(".play").find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
        $(".play").addClass("pause").removeClass("play");
    })

    //下一首
    $(".next").on("click", function () {
        for (var i = 0; i < songLen; i++) {
            if ($(".body .bodyContent").eq(i).attr("data-click") && $(".body .bodyContent").eq(i).attr("data-click") == 1) {
                if (i == songLen - 1) {
                    console.log(1);
                } else {
                    $(".body .bodyContent").eq(i).removeAttr("data-click").removeClass("bgColor");
                    $(".body .bodyContent").eq(i + 1).attr("data-click", "1").addClass("bgColor");
                    url = $(".body .bodyContent").eq(i + 1).find(".otherInfo").attr("data-url");
                    src = $(".body .bodyContent").eq(i + 1).find(".otherInfo").attr("data-src");
                    $("audio").attr("src", src);
                    $(".singerInfo img").attr("src", url);
                    x.play();
                    $(".play").find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
                    $(".play").addClass("pause").removeClass("play");
                    return false;
                }
            }
        }
    })
})
function showMusicList() {
    $(".tableBox").show();
    $('.showMusicList').addClass('active');
    $('.musicBox').removeClass('active');
    $('.music').addClass('active');
}

function closeMusic() {
    $('.showMusicList').removeClass('active');
    $('.musicBox').addClass('active');
    $('.music').removeClass('active');
}