var a, b, c, d;
var docNum = 0;
$(function () {
    a = setInterval(time, 1000);
    var min = 0;
    var sec = 0;
    var ms = 0;
    var timer = null;
    var count = 0;

    //记次
    function counts() {
        if (!timer) {
            alert("没有开启定时器!");
            return;
        }
        count++;

        var right1 = "<span class='right'>" + $('#showtime').html() + "</span>";
        var right2;
        if(!localStorage.getItem(count)){
            localStorage.setItem(count,right1);
            var insertStr = "<div><span class='left'>最佳纪录" + "</span>" + right1 + "</div>";
        }else {
            //本地存储有的话right1和本地存储比较；哪一个时间短insertStr就是哪个，本地存储存成时间短的
            var localDoc = localStorage.getItem(count);
            $(".right2").html(localDoc);
            console.log(localDoc);
            console.log($('#showtime').html());
            if($('#showtime span').eq(0).text()>$(".right2 .right span").eq(0).text()){
                var insertStr = "<div><span class='left'>最佳纪录" + count + "</span>" + localDoc + "</div>";
                localStorage.setItem(count,localDoc);
            }else if($('#showtime span').eq(0).text() == $(".right2 .right span").eq(0).text()) {
                if($('#showtime span').eq(2).text() > $(".right2 .right span").eq(2).text()){
                    var insertStr = "<div><span class='left'>最佳纪录" + "</span>" + localDoc + "</div>";
                    localStorage.setItem(count,localDoc);
                }else if($('#showtime span').eq(2).text() == $(".right2 .right span").eq(2).text()){
                    if($('#showtime span').eq(4).text() > $(".right2 .right span").eq(4).text()){
                        var insertStr = "<div><span class='left'>最佳纪录" + "</span>" + localDoc + "</div>";
                        localStorage.setItem(count,localDoc);
                    }else if($('#showtime span').eq(4).text() == $(".right2 .right span").eq(4).text()){
                        var insertStr = "<div><span class='left'>最佳纪录" +  "</span>" + right1 + "</div>";
                        localStorage.setItem(count,right1);
                    }else {
                        var insertStr = "<div><span class='left'>最佳纪录" + "</span>" + right1 + "</div>";
                        localStorage.setItem(count,right1);
                    }
                }else {
                    var insertStr = "<div><span class='left'>最佳纪录" + "</span>" + right1 + "</div>";
                    localStorage.setItem(count,right1);
                }
            }else {
                var insertStr = "<div><span class='left'>最佳纪录" + "</span>" + right1 + "</div>";
                localStorage.setItem(count,right1);
            }
        }
        $("#record").prepend($(insertStr));

    }

    //复位
    function revert() {
        min = 0;
        sec = 0;
        ms = 0;
        count = 0;
        $('#showtime span:eq(0)').html('00');
        $('#showtime span:eq(2)').html('00');
        $('#showtime span:eq(4)').html('00');
        $('#record').html('');
    }

//生成时间
    function show() {
        ms++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (ms == 100) {
            sec++;
            ms = 0;
        }
        var msStr = ms;
        if (ms < 10) {
            msStr = "0" + ms;
        }
        var secStr = sec;
        if (sec < 10) {
            secStr = "0" + sec;
        }
        var minStr = min;
        if (min < 10) {
            minStr = "0" + min;
        }
        $('#showtime span:eq(0)').html(minStr);
        $('#showtime span:eq(2)').html(secStr);
        $('#showtime span:eq(4)').html(msStr);
    }

    //停止计时
    function stop() {
        clearInterval(timer);
        counts();
    }

    function time() {
        $(".countDown span").eq(0).addClass("active");
        clearInterval(a);
        b = setInterval(timer1, 1000);
    }

    function timer1() {
        clearInterval(timer1);
        $(".countDown span").eq(1).addClass("active");
        clearInterval(b);
        c = setInterval(timer2, 1000);
    }

    function timer2() {
        clearInterval(timer2);
        $(".countDown span").eq(2).addClass("active");
        clearInterval(c);
        d = setInterval(timer3, 1000);
    }

    function timer3() {
        clearInterval(timer3);
        $(".countDown span").eq(3).addClass("active");
        clearInterval(d)
        e = setInterval(showBox, 1000);
    }

    function showBox() {
        $(".showBox").show();
        clearInterval(e);
        clearInterval(timer);
        timer = setInterval(show, 10);
        $(".task .section p").removeClass("disabled");
        $(".task .section").eq(0).show();
    }

    function nextTask (){
        var len = $(".task .section").length;
        for (var i = 0; i < len; i++) {
            if ($(".task .section").eq(i).attr("mark") && $(".task .section").eq(i).attr("mark") == 1) {
                if (i == len - 1) {
                    stop();
                    $(".task .section").eq(i).hide();
                    $(".complete").show();
                    $("#showtime").hide();
                    $(".showtime").text("本次用时："+$("#showtime").text());
                    $(".document").text("本次call值：" + docNum * 10);

                    if(0<=docNum && docNum<6){
                        $(".endWord").text('这你都不及格，亲！！！');
                    } else if(6<=docNum && docNum<7){
                        $(".endWord").text("蛮凑合的吗！！！");
                    } else if(7<=docNum && docNum<8){
                        $(".endWord").text("还有机会哦！！！");
                    } else if(8<=docNum && docNum<9){
                        $(".endWord").text("距离胜利还有一步之遥！！！");
                    } else if(9<=docNum && docNum<=10){
                        $(".endWord").text("؏؏☝ᖗ乛◡乛ᖘ☝؏؏完美！！！");
                    }
                } else {
                    $(".task .section").eq(i).hide();
                    $(".task .section").eq(i).removeAttr("mark");
                    $(".task .section").eq(i + 1).show();

                }
            }
        }
    }

    $(".task .section p").on("click", function () {
        if ($(this).hasClass("rightPart")) {
            $(this).css("background", "green").css("border-radius","10px").css("color","#fff").addClass("disabled");
            docNum++;
            $(this).siblings("p").addClass("disabled");
        } else {
            $(this).css("background", "red").css("border-radius","10px").css("color","#fff").addClass("disabled");
            $(this).siblings("p").addClass("disabled");
        }
        $(this).parent(".section").attr("mark", 1);

        setTimeout(nextTask,500);
    })

    $(".again").on("click",function(){
        window.location.reload();
    })
})

