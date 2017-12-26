/**
 * Created by cy183 on 2017/12/1.
 */
function transferMes(msg, resObj) {
    if (msg) {
        for (tempObj in resObj) {
            var regStr = "\\${" + tempObj + "}";
            msg = msg.replace(new RegExp(regStr, 'g'), resObj[tempObj]);
        }
        return msg;
    }
};
var data = {
    "music": {
        "all":[
            {
                "id": "110",
                "name": "小酒窝",
                "singer": "林俊杰,蔡卓妍",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
                "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0,%E8%94%A1%E5%8D%93%E5%A6%8D%20-%20%E5%B0%8F%E9%85%92%E7%AA%9D.mp3",
                "type": "华语 林俊杰",
                "lyric": [{
                    "timeId": "1",
                    "text": "小酒窝 - 林俊杰&蔡卓妍"
                },
                    {
                        "timeId": "10",
                        "text": "我还在寻找一个依靠和一个拥抱"
                    },
                    {
                        "timeId": "20",
                        "text": "谁替我祈祷替我烦恼为我生气为我闹"
                    },
                    {
                        "timeId": "30",
                        "text": "幸福开始有预兆缘分让我们慢慢紧靠"
                    },
                    {
                        "timeId": "39",
                        "text": "然后孤单被吞没了无聊变得有话聊有变化了"
                    },
                    {
                        "timeId": "49",
                        "text": "小酒窝长睫毛是你最美的记号"
                    },
                    {
                        "timeId": "54",
                        "text": "我每天睡不着想念你的微笑"
                    },
                    {
                        "timeId": "60",
                        "text": "你不知道你对我多么重要"
                    },
                    {
                        "timeId": "65",
                        "text": "有了你生命完整的刚好"
                    },
                    {
                        "timeId": "69",
                        "text": "小酒窝长睫毛迷人的无可救药"
                    },
                    {
                        "timeId": "74",
                        "text": "我放慢了步调感觉像是喝醉了"
                    },
                    {
                        "timeId": "80",
                        "text": "终于找到心有灵犀的美好"
                    },
                    {
                        "timeId": "85",
                        "text": "一辈子暖暖的好"
                    },
                    {
                        "timeId": "90",
                        "text": "我永远爱你到老"
                    },
                    {
                        "timeId": "103",
                        "text": "幸福开始有预兆缘分让我们慢慢紧靠"
                    },
                    {
                        "timeId": "112",
                        "text": "然后孤单被吞没了无聊变得有话聊有变化了"
                    },
                    {
                        "timeId": "122",
                        "text": "小酒窝长睫毛是你最美的记号"
                    },
                    {
                        "timeId": "127",
                        "text": "我每天睡不着想念你的微笑"
                    },
                    {
                        "timeId": "133",
                        "text": "你不知道你对我多么重要"
                    },
                    {
                        "timeId": "138",
                        "text": "有了你生命完整的刚好"
                    },
                    {
                        "timeId": "142",
                        "text": "小酒窝长睫毛迷人的无可救药"
                    },
                    {
                        "timeId": "148",
                        "text": "我放慢了步调感觉像是喝醉了"
                    },
                    {
                        "timeId": "154",
                        "text": "终于找到心有灵犀的美好"
                    },
                    {
                        "timeId": "159",
                        "text": "一辈子暖暖的好"
                    },
                    {
                        "timeId": "164",
                        "text": "我永远爱你到老"
                    },
                    {
                        "timeId": "177",
                        "text": "小酒窝长睫毛迷人的无可救药"
                    },
                    {
                        "timeId": "182",
                        "text": "我放慢了步调感觉像是喝醉了"
                    },
                    {
                        "timeId": "188",
                        "text": "终于找到心有灵犀的美好"
                    },
                    {
                        "timeId": "193",
                        "text": "一辈子暖暖的好"
                    },
                    {
                        "timeId": "197",
                        "text": "我永远爱你到老"
                    }]
            },
            {
                "id": "109",
                "name": "一千年以后",
                "singer": "林俊杰",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E5%A5%B9%E8%AF%B4.jpg",
                "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%B8%80%E5%8D%83%E5%B9%B4%E4%BB%A5%E5%90%8E.mp3",
                "type": "华语 林俊杰",
                "lyric": ""
            },
            {
                "id": "107",
                "name": "那些你很冒险的梦",
                "singer": "林俊杰",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E9%82%A3%E4%BA%9B%E4%BD%A0%E5%BE%88%E5%86%92%E9%99%A9%E7%9A%84%E6%A2%A6.jpg",
                "url": "http://www.daiwei.org/vue/music/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%82%A3%E4%BA%9B%E4%BD%A0%E5%BE%88%E5%86%92%E9%99%A9%E7%9A%84%E6%A2%A6.mp3",
                "type": "华语 林俊杰",
                "lyric": ""
            },
            {
                "id": "27",
                "name": "再见了单纯",
                "singer": "小5",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E5%86%8D%E8%A7%81%E4%BA%86%20%E5%8D%95%E7%BA%AF.jpg",
                "url": "http://www.daiwei.org/vue/music/%E5%B0%8F5%20-%20%E5%86%8D%E8%A7%81%E4%BA%86%E5%8D%95%E7%BA%AF.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "26",
                "name": "Color-X 3D",
                "singer": "徐梦圆",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_color-3d.jpg",
                "url": "http://www.daiwei.org/index/music/%E6%88%91%E6%98%AF%E7%88%B1%E9%9F%B3%E4%B9%90%E7%9A%84%E5%BE%90%E6%A2%A6%E5%9C%86%20-%20color-X%203D.mp3",
                "type": "纯音乐 电音",
                "lyric": ""
            },
            {
                "id": "25",
                "name": "外面的世界",
                "singer": "莫文蔚 ",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C.jpg",
                "url": "http://www.daiwei.org/vue/music/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "23",
                "name": "Viva La Vida",
                "singer": "David Garrett",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_Viva%20La%20Vida.jpg",
                "url": "http://www.daiwei.org/vue/music/David%20Garrett%20-%20Viva%20La%20Vida.mp3",
                "type": "纯音乐",
                "lyric": ""
            },
            {
                "id": "21",
                "name": "Zeemeeuw",
                "singer": "Lindequist",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_Zeemeeuw.jpg",
                "url": "http://www.daiwei.org/vue/music/Lindequist%20-%20Zeemeeuw.mp3",
                "type": "纯音乐",
                "lyric": ""
            },
            {
                "id": "20",
                "name": "China-X",
                "singer": "徐梦圆",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_china.jpg",
                "url": "http://www.daiwei.org/vue/music/徐梦圆 - China-X.mp3",
                "type": "纯音乐 电音",
                "lyric": ""
            },
            {
                "id": "19",
                "name": "爱与诚",
                "singer": "古巨基",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E7%88%B1%E4%B8%8E%E8%AF%9A.jpg",
                "url": "http://www.daiwei.org/vue/music/%E5%8F%A4%E5%B7%A8%E5%9F%BA%20-%20%E7%88%B1%E4%B8%8E%E8%AF%9A.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "18",
                "name": "China-A",
                "singer": "徐梦圆",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_china.jpg",
                "url": "徐梦圆 - China-A.mp3",
                "type": "纯音乐 电音",
                "lyric": ""
            },
            {
                "id": "17",
                "name": "Visions",
                "singer": "Vief",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_visions1.jpg",
                "url": "http://www.daiwei.org/vue/music/Vief,Maidden%20-%20Visions.mp3",
                "type": "纯音乐 电音",
                "lyric": ""
            },
            {
                "id": "16",
                "name": "Visions",
                "singer": "Acreix",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_visions.jpg",
                "url": "http://www.daiwei.org/vue/music/Acreix%20-%20Visions.mp3",
                "type": "纯音乐 电音",
                "lyric": ""
            },
            {
                "id": "15",
                "name": "小棋童",
                "singer": "双笙",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E5%B0%8F%E6%A3%8B%E7%AB%A5.jpg",
                "url": "http://www.daiwei.org/vue/music/%E5%8F%8C%E7%AC%99%20-%20%E5%B0%8F%E6%A3%8B%E7%AB%A5.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "14",
                "name": "The truth that you leave",
                "singer": "Pianoboy",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_The-truth-that-you-leave.jpg",
                "url": "http://www.daiwei.org/vue/music/Pianoboy%20-%20The%20truth%20that%20you%20leave.mp3",
                "type": "纯音乐",
                "lyric": ""
            },
            {
                "id": "13",
                "name": "七里香",
                "singer": "周杰伦",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E4%B8%83%E9%87%8C%E9%A6%99.jpg",
                "url": "http://www.daiwei.org/vue/music/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E4%B8%83%E9%87%8C%E9%A6%99.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "3",
                "name": "Faded",
                "singer": "Alan Walker",
                "img_url": "http://www.daiwei.org/index/music/musicImg/Faded.jpg",
                "url": "http://www.daiwei.org/vue/music/Alan%20Walker%20-%20Faded.mp3",
                "type": "纯音乐 电音",
                "lyric": ""
            },
            {
                "id": "2",
                "name": "你的爱",
                "singer": "王力宏",
                "img_url": "http://www.daiwei.org/index/music/musicImg/王力宏-你的爱.jpg",
                "url": "http://www.daiwei.org/vue/music/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E4%BD%A0%E7%9A%84%E7%88%B1.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "2",
                "name": "你的爱",
                "singer": "王力宏",
                "img_url": "http://www.daiwei.org/index/music/musicImg/王力宏-你的爱.jpg",
                "url": "http://www.daiwei.org/vue/music/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E4%BD%A0%E7%9A%84%E7%88%B1.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "2",
                "name": "你的爱",
                "singer": "王力宏",
                "img_url": "http://www.daiwei.org/index/music/musicImg/王力宏-你的爱.jpg",
                "url": "http://www.daiwei.org/vue/music/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E4%BD%A0%E7%9A%84%E7%88%B1.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "2",
                "name": "你的爱",
                "singer": "王力宏",
                "img_url": "http://www.daiwei.org/index/music/musicImg/王力宏-你的爱.jpg",
                "url": "http://www.daiwei.org/vue/music/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E4%BD%A0%E7%9A%84%E7%88%B1.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "2",
                "name": "你的爱",
                "singer": "王力宏",
                "img_url": "http://www.daiwei.org/index/music/musicImg/王力宏-你的爱.jpg",
                "url": "http://www.daiwei.org/vue/music/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E4%BD%A0%E7%9A%84%E7%88%B1.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "2",
                "name": "你的爱",
                "singer": "王力宏",
                "img_url": "http://www.daiwei.org/index/music/musicImg/王力宏-你的爱.jpg",
                "url": "http://www.daiwei.org/vue/music/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E4%BD%A0%E7%9A%84%E7%88%B1.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "2",
                "name": "你的爱",
                "singer": "王力宏",
                "img_url": "http://www.daiwei.org/index/music/musicImg/王力宏-你的爱.jpg",
                "url": "http://www.daiwei.org/vue/music/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E4%BD%A0%E7%9A%84%E7%88%B1.mp3",
                "type": "华语",
                "lyric": ""
            },
            {
                "id": "1",
                "name": "告白气球",
                "singer": "周杰伦",
                "img_url": "http://www.daiwei.org/index/music/musicImg/周杰伦-告白气球.jpg",
                "url": "http://www.daiwei.org/vue/music/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.mp3",
                "type": "华语",
                "lyric": ""
            }
        ]
    }
}