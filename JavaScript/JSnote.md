# 环境准备

[toc]

## 安装node

中文官网地址：https://nodejs.org/zh-cn/

下载安装即可

安装完成后，需要测试一下是否安装成功

测试方式是：

1. 打开命令终端
2. 输入命令 `node -v`，如果可以看到版本号，即为安装成功

## 使用node运行js代码

1. 在命令终端中进入js文件所在目录
2. 运行命令 `node js文件名`

## 使用 code runner 插件

使用vscode的插件`code runner`，可以更加轻松的运行js



# 知识回顾 - 数据的表达1

和 HTML、CSS 不同，JS 是一门 `命令式编程语言 ` ,和其他命令式编程语言一样，它的本质是 **处理数据**。

> `声明式语言`：HTML、CSS、SQL；不需要了解底层的工作原理。
>
> `命令式语言`：C、C++、C#、PHP、Python、JavaScript、Java；对数据的处理丰富的多，相对于 *声明式语言* 入门较难。



处理数据的关键：如何表达数据（在程序中如何描述出来）。



JS 提供了三种方式来表达数据：

- 变量
- 字面量（直接书写的数据，一个直接的值）
- 表达式

```js
//比如：
var a = 1；
// a 是变量
// 1 是字面量
// a = 1 是一个表达式
```

**程序中任何需要数据的地方，都可以使用上面任意一种数据表达。**



## 注意点

程序中所有可以自行命名的地方，都称之为**标识符**。

> 常见的标识符有：变量名、函数名、参数名。



js 的标识符必须符合以下规则：

- 允许数字、字母、下划线、$符号 命名
- 不能以数字开头
- 不能和关键字冲突
- 建议使用驼峰命名法（非必须）



名称最好做到，**望文知意**



```js
// 1. 下面的变量命名哪些是合法的

/* 


$  				√
_  				√
1$   			×
list-style	    ×
list_style		√
list style	    ×
$$ 				√
$emit			√
var	            ×


*/
```



## 转义符

| 转义符 | 含义           |
| ------ | -------------- |
| `\'`   | 普通英文单引号 |
| `\"`   | 普通英文双引号 |
| `\r`   | 回车           |
| `\n`   | 换行           |



```js
/* 2. 
一条语句输出下面的内容：
邓哥全名"邓旭明"
他为IT教育事业做出了'不可磨灭'的贡献
*/

console.log('邓哥全名"邓旭明"\n他为IT教育事业做出了\'不可磨灭\'的贡献');

// 习惯上写换行转义符：\r\n
// \r 表示回车
```



> 小技巧：常用`\r\n`表示换行





# 知识回顾 - 数据的表达2

本节课主要回顾对象的表达

## 数据类型

原始类型：number、string、boolean、null（需要手动赋值才会是null）、undefined

引用类型：对象（包含普通对象、数组、函数）；对象都是复合型的数据

### 练习题

```js
var name = "邓哥";
var age = 60;
var sex = "男";
// 把上面三个数据组装成一个对象，对象的属性名和变量名相同
var obj = {
  name: "邓哥",
  age: 60,
  sex: "男"
}

var obj2 = {
  name: name,
  age: age,
  sex: sex
}

// 修改部分信息
obj2.name = "xxxx";
```

```js
/*
于谦，72岁，男，职业捧哏，手机号13810129481，江湖人称谦哥，家住北京八大胡同。
其父亲是一位古汉语专家，爱好洗澡

用字面量描述上面的数据
*/

var yuqian = {
  name: "于谦",
  age: 72,
  isMale: true,
  job: "捧哏",
  mobile: "13810129481",
  nickname: "谦哥",
  address: {
    city: "北京",
    road: "八大胡同"
  },
  parent: {
    name: "王老爷子",
    job: "古汉语专家",
    love: "洗澡"
  }
}
```

```js
/*
有一个非常特别的对象，它的键值对是：
0: "a"
1: "b"
how are you: "fine thank you"
用字面量表示该对象，然后分别读取它的每个属性输出
*/

var obj = {
    "0": "a",
    "1": "b",
    "how are you": "fine thank you"
}
var obj1 = {
    0: "a",
    1: "b",
    "how are you": "fine thank you"
}

var key = 1;

// 读取属性名为数字的属性值
console.log(obj[0]);     // a
console.log(obj["0"]);   // a

console.log(obj1[key]);  // b

// 读取对象obj1中的key属性
console.log(obj1["key"]); // undefined
```



## 对象的原始写法

对象的**所有属性名都是字符串**，因此使用单引号或双引号包裹起来

```js
var obj = {
  'name': '邓哥',
  'age': 35,
  'graduate date': '2007-7-1',
  'home address': {
    'province': '黑龙江',
    'city': 'city'
  }
};
```

为了书写的方便，当对象的属性名是 **纯数字** 或 **符合标识符规范** 时，可以 **省略引号**；但属性的本质还是字符串。

> 小贴士：
> 书写代码时我们无须关注这些规则，直接按照简写方式书写属性，若编辑器出现报错，则使用引号包裹属性名即可

读取对象属性时，使用`[]`，把要读取的属性名传递到中括号中；使用`.`是取巧的使用方法

```js
obj['name'] // 读取obj的name属性
obj['home address'] // 读取obj的home address属性
obj['home address']['province'] // 这是啥意思？
```

若属性**符合标识符规范**，可以使用`.`符号连接属性名

```js
obj.name // 读取obj的name属性
obj.age // 读取obj的age属性
obj['home address'].province // 请自行脑补
// obj.name 的写法内部最终会转换为 obj['name']
```

### 练习题

```js
/**
 * 打印一个对象的某个属性
 * @param {object} obj 要打印的对象
 * @param {string} key 要打印的对象的属性名
 */
function printProperty(obj, key) {
    // 完成该函数
    // console.log(obj[key]);
}

var user = {
    name: "monica",
    age: 17,
    sex: "女"
}

printProperty(user, "name");  // 打印：monica
printProperty(user, "age");  // 打印：17
printProperty(user, "sex");  // 打印：女
```



# 知识回顾 - 数据的表达3

数组，用于表达多个**同类型**的数据

它的本质就是一个对象，只不过它的属性名是字符串类型的**数字**

```js
// 数组的对象结构
{
    '0': xxx,
    '1': xxx,
    '2': xxx,
    'length': 3
}
```



## 练习题

```js
/**
 * 邓哥，男，身高185
 * 有邓嫂二位：
 * 其一名为翠花，东北人
 * 其二名为丧彪，铜锣湾人
 * 
 * 用字面量描述上面的信息
 */

var dengBro = {
  name: "邓哥",
  isMale: true,
  tall: 185,
  lover: [
    { name: "翠花", address: "东北" },
    { name: "丧彪", address: "铜锣湾" }
  ]
}

// console.log(dengBro.lover.length);
// console.log(dengBro.lover[0]);

dengBro.lover[0].name = "酸菜";
console.log(dengBro.lover[0].name);
```



```js
/**
 * 邓哥，81岁，爱好香菜、秋葵、遛鸟
 * 成哥，30岁，爱好扯淡、找邓嫂
 * monica，17岁，爱好奶茶、唱歌
 * 
 * 用字面量描述上面的信息
 * 
 * 思考：
 * 1. 如何得到平均年龄
 * 2. 如何找到所有人所有的爱好的总数
 */

var teachers = [
  {name: "邓哥", age: 81, love: ["香菜", "秋葵", "遛鸟"]},
  {name: "成哥", age: 30, love: ["扯淡", "找邓嫂"]},
  {name: "monica", age: 17, love: ["奶茶", "唱歌"]}
]

age = 0;
love = 0;
for(var i = 0; i < teachers.length; i++) {
  age += teachers[i].age;
  love += teachers[i].love.length;
}
console.log(age/teachers.length);
console.log(love);
```



> 目的：能够将一个数据用合适的类型表达出来，并能够修改、访问

