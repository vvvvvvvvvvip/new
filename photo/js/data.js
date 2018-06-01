/**
 * Created by cy183 on 2018/5/24.
 */
var data = {
    "span-3": {
        "all": [
            {
                "name": "小酒窝",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
            },
            {
                "name": "小酒窝",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
            },
            {
                "name": "小酒窝",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
            }
        ]
    },
    "span-4-5": {
        "all": [
            {
                "name": "小酒窝",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
            },
            {
                "name": "小酒窝",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
            },
            {
                "name": "小酒窝",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
            },
            {
                "name": "小酒窝",
                "img_url": "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
            }
        ]
    }
}

//Typescript
//Typescript支持与JavaScript几乎相同的数据类型。此外还提供了使用的枚举类型方便我们使用
//布尔值  Boolean ： true / false
let isDone: Boolean = false
//数字
//和JavaScript一样 Typescript里所有的数字都是浮点数  number(支持十进制和十六进制的字面量,哎呦二进制和八进制的字面量)
let decLiteral: number = 6;       //十进制
let hexLiteral: number = 0xf00d;  //十六进制
let binaryLiteral: number = 0b1010;  //二进制
let octalLiteral: number = 0o744;    //八进制
//字符串
//string表示文本数据类型，可以使用双引号或者单引号表示字符串
let name: string = "bob"
name = "smith"
//字符串之模板字符串 它可以使用多行文本和内嵌表达式。这种字符串是被反引号（``）包围，并且以${expr}这种形式嵌入表达式
let name: string = `gene`;
let age: number = 18;
let sentence: string  = `hello, my name is ${name},I will be ${age + 1} years old next month`;
//数组
//第一种：在元素类型后面接上[],表示由此类型元素组成的数组
let list: number[] = [1,2,3];
//第二种：使用数字泛型
let list: Array<number> = [1,2,3];
//元祖
//表示一个已知元素数量和类型的数组，各元素的数组不必相同
let x: [string,number];
x = ['hello',10];//ok
x = [10,'hello'];//error
//当访问一个已知索引的元素，会得到正确的类型
console.log(x[0].substr[1])
//当访问一个越界的元素，会使用联合类型代替：
x[3]='world'
console.log(x[5].toString())
//枚举
//enum类型是对JavaScript数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字
enum Color {red,green,blue}
let c: Color = Color.green
//默认情况下,从0开始编号，也可以手动进行编号，例如：
enum Color {red = 1,green, blue}
let colorName: string = color[2];
alert(colorName);//green
//Any
//有时候想为编程阶段还不清楚类型的变量指定一个类型，这些只可能来自有动态的内容，比如来自用户输入或第三方代码库。这种情况下我们不希望检查器对
//这些值进行检查而是让他们直接通过编译阶段的检查，那么我们可以使用any类型来标记这些变量：
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // ok definitely a boolean
//在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择的包含或移除类型检查。你可能认为object有相似的作用，就行它在其他语言
//中那样。但是object类型的变量只是允许你给她赋任意值，但是却不能够在它上面调用任意的方法：
let notSure: any = 4;
notSure.ifItExists();
notSure.toFixed();

let prettySure: object = 4;
prettySure.toFixed();
