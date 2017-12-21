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
        var callNum;
        if( docNum == 10){
            localStorage.setItem("docNum",docNum);
            callNum = localStorage.getItem("docNum") * 10;
        }else {
            callNum = docNum * 10;
         console.log(99);
        }
        var right1 = "<span class='right'>" + $('#showtime').html()+ "</span>";
        var fullScore = " <span class='setBg'>call值:</span>" + "<span class='setColor'>" + callNum + "</span>";
        var right2 = "<span class='right'>" + $('#showtime').html()+ "<span class='setBg'>call值:</span><span class='setColor'>100</span>" + "</span>";
        $(".callNum").text(callNum);
        if(!localStorage.getItem(count)){

            if($(".callNum").text() == 100){
                localStorage.setItem(count,right1+fullScore);
                console.log(localStorage.getItem(count));
                var localDoc = localStorage.getItem(count);
                $(".right2").html(localDoc);
                console.log(localDoc);
                var insertStr = "<div><span class='left'> 用时" + "</span>" + localDoc + "</div>";
            }else {
                var insertStr = "<div><span class='left'>还未出现最佳成绩</div>";
                $(".callNum").attr("firstMark","1");
                $(".callNum").attr("firstMarkNum","1");
                $(".callNum").attr("firstMarkAll","1");

            }
        }else {
            //localStorage.setItem(count,right1+fullScore);
            var localDoc = localStorage.getItem(count);
            $(".right2").html(localDoc);
            //console.log(localDoc);
            //console.log($('#showtime').html());
            //if($(".callNum").attr("firstMark") && $(".callNum").attr("firstMark") == 1){
            //    localStorage.setItem(count,right1+fullScore);
            //    console.log(localStorage.getItem(count));
            //    var localDoc = localStorage.getItem(count);
            //    var insertStr = "<div><span class='left'> 用时" + "</span>" + localDoc + "</div>";
            //    $(".callNum").attr("firstMark","2");
            //    $(".callNum").attr("firstMarkAll","2")
            //}else
            if($(".callNum").text() == 100){
                alert(1);
                if($(".right2 .setColor").text() == 100 && $(".callNum").text() == 100){
                    console.log($('#showtime span').eq(0).text() +$('#showtime span').eq(2).text() +$('#showtime span').eq(4).text());
                    console.log($(".right2 .right span").eq(0).text()+$(".right2 .right span").eq(2).text()+$(".right2 .right span").eq(4).text());
                    if($('#showtime span').eq(0).text()>$(".right2 .right span").eq(0).text()){
                        var insertStr = "<div><span class='left'> 用时" + "</span>" + localDoc + "</div>";
                        localStorage.setItem(count,localDoc);
                    }else if($('#showtime span').eq(0).text() == $(".right2 .right span").eq(0).text()) {
                        if($('#showtime span').eq(2).text() > $(".right2 .right span").eq(2).text()){
                            var insertStr = "<div><span class='left'> 用时" + "</span>" + localDoc + "</div>";
                            localStorage.setItem(count,localDoc);
                        }else if($('#showtime span').eq(2).text() == $(".right2 .right span").eq(2).text()){
                            if($('#showtime span').eq(4).text() > $(".right2 .right span").eq(4).text()){
                                var insertStr = "<div><span class='left'> 用时" + "</span>" + localDoc + "</div>";
                                localStorage.setItem(count,localDoc);
                            }else if($('#showtime span').eq(4).text() == $(".right2 .right span").eq(4).text()){
                                var insertStr = "<div><span class='left'> 用时" + "</span>" + localDoc + "</div>";
                                localStorage.setItem(count,localDoc);
                            }else {
                                var insertStr = "<div><span class='left'> 用时" + "</span>" + right2 + "</div>";
                                localStorage.setItem(count,right2);
                            }
                        }else {
                            var insertStr = "<div><span class='left'> 用时" + "</span>" + right2 + "</div>";
                            localStorage.setItem(count,right2);
                        }
                    }else {
                        var insertStr = "<div><span class='left'> 用时" + "</span>" + right2 + "</div>";
                        localStorage.setItem(count,right2);
                    }
                }else {
                    console.log("");
                }
            }else {
                var insertStr = "<div><span class='left'> 用时" + "</span>" + localDoc + "</div>";
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
                    $(".showtime").html("<span>本次用时："+$("#showtime").text() + "</span>"+ "<span class='setColor' style='display: none'>"+ docNum*10 + "</span>");
                    $(".document").html("本次call值：" + "<span>" + docNum * 10 + "</span>" );

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

