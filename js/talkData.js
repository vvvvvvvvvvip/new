/**
 * Created by cy183 on 2018/1/9.
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
    "all":[
        {
            "id": "1",
            "title": "小酒窝",
            "depict": "图片加描述",
            "img_url":
            [{"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"},
                {"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"}],
            "date":"2017.12.31",
            "type": "all"
        },
        {
            "id": "1",
            "title": "小酒窝",
            "depict": "图片加描述",
            "img_url":
                [{"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"},
                    {"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"}],
            "date":"2017.12.31",
            "type": "all"
        },
        {
            "id": "1",
            "title": "小酒窝",
            "depict": "图片加描述",
            "img_url":
                [{"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"},
                    {"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"}],
            "date":"2017.12.31",
            "type": "all"
        },
        {
            "id": "1",
            "title": "小酒窝",
            "depict": "图片加描述",
            "img_url":
                [{"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"},
                    {"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"}],
            "date":"2017.12.31",
            "type": "all"
        },
        {
            "id": "2",
            "title": "小酒窝",
            "depict": "描述",
            "img_url": "",
            "date":"2017.12.31",
            "type": "text"
        },
        {
            "id": "2",
            "title": "小酒窝",
            "depict": "描述",
            "img_url": "",
            "date":"2017.12.31",
            "type": "text"
        },
        {
            "id": "2",
            "title": "小酒窝",
            "depict": "描述",
            "img_url": "",
            "date":"2017.12.31",
            "type": "text"
        },
        {
            "id": "2",
            "title": "小酒窝",
            "depict": "描述",
            "img_url": "",
            "date":"2017.12.31",
            "type": "text"
        },
        {
            "id": "3",
            "title": "小酒窝",
            "depict": "图片",
            "img_url":
                [{"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"},
                    {"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"}],
            "date":"2017.12.31",
            "type": "pic"
        },
        {
            "id": "3",
            "title": "小酒窝",
            "depict": "图片",
            "img_url":
                [{"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"},
                    {"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"}],
            "date":"2017.12.31",
            "type": "pic"
        },
        {
            "id": "3",
            "title": "小酒窝",
            "depict": "图片",
            "img_url":
                [{"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"},
                    {"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"}],
            "date":"2017.12.31",
            "type": "pic"
        },
        {
            "id": "3",
            "title": "小酒窝",
            "depict": "图片",
            "img_url":
                [{"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"},
                    {"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"}],
            "date":"2017.12.31",
            "type": "pic"
        },
        {
            "id": "3",
            "title": "小酒窝",
            "depict": "图片",
            "img_url":
                [{"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"},
                    {"img1":"http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"}],
            "date":"2017.12.31",
            "type": "pic"
        }
    ]
}