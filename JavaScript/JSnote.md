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



# 知识回顾 - 数据的运算

## 运算符

### 算术（数学）运算

支持：加(+)、减(-)、乘(*)、除(/)、求余(%)

值得注意的是，+ 和 - 可以放到单个数据的前面，表示正负。

算术运算的表达式一定返回数字，可以利用其特点做类型转换，参考[类型的隐式转换](#类型的隐式转换)

### 字符串拼接

当`+`的两端有一个是字符串时，不再进行算术运算，而变为字符串拼接

表达式一定返回string，可以利用其特点做类型转换，参考[类型的隐式转换](#类型的隐式转换)

### 赋值运算

涉及的运算符：`=` `+=` `*=` `/=` `-=` `%=`。

其中，`a += xxx`，等效于`a = a + (xxx)`，其他类似

> 小贴士
> 赋值表达式始终返回赋值结果，我们可以利用该特点完成连续赋值
>
> ```js
> // 将 3 同时赋值给 a、b
> a = b = 3;
> ```

### 比较运算

涉及的运算符：`==` `===` `!=` `!==` `>` `>=` `<` `<=`

> 小贴士
> 在实际开发中，没有任何理由使用`==`和`!=`，你可以当做这两个运算符并不存在。
> 应该始终使用`===`和`!==`来比较相等和不相等

> 小贴士
> 比较运算始终返回boolean，我们可以利用这一点来完成某些赋值
>
> ```js
> // 啰嗦的代码
> if(sex === '男'){
> 	user.isMale = true;
> }
> else{
> 	user.isMale = false;
> }
> 
> // 简洁优雅的代码
> user.isMale = sex === '男'
> ```

### 逻辑运算

逻辑运算会涉及到[布尔判定](#布尔判定)

运算符：`!`

对后面的数据取反，表达式*一定*返回boolean。

可以利用其特点做类型转换，参考[类型的隐式转换](#类型的隐式转换)

运算符：`&&`

并且，真真为真，其他为假，具有**短路规则**。

表达式返回**最后一个判定的数据**

> 小贴士
> 在实际的开发中，我们可以利用短路规则简化代码
>
> ```js
> // 实现功能，如果exp有值（判定为真），就输出ok
> 
> // 啰嗦的代码
> if(exp){
> 	console.log(exp);
> }
> 
> // 简洁的代码
> exp && console.log(exp)
> ```

运算符：`||`

或者，假假为假，其他为真，具有**短路规则**。

表达式返回**最后一个判定的数据**

> 小贴士
> 在实际的开发中，我们可以利用短路规则简化代码
>
> ```js
> // 实现功能，如果exp有值，就把它的值赋值给n，如果没有值，就给n赋值为默认值 1
> 
> // 啰嗦的代码
> if(exp){
> 	n = exp;
> }
> else{
> 	n = 1;
> }
> 
> // 简洁的代码
> n = exp || 1;
> ```

运算符：`? :`，格式`a ? b : c`

三目运算，判定a，为真时表达式返回b，否则返回c

> 小贴士
> 三目运算通常用于替代一些简单的if结构
>
> ```js
> // 如果exp为真，则把1赋值给n，否则，把2赋值给n
> // 啰嗦的代码
> if(exp){
> 	n = 1;
> }
> else{
> 	n = 2;
> }
> 
> // 更简洁的代码
> n = exp ? 1 : 2;
> ```


## 布尔判定

所有需要判断真假的地方都会使用下面的规则

| 数据                                      | 判定  |
| ----------------------------------------- | ----- |
| `false` `null` `undefined` `0` `NaN` `''` | false |
| 剩余所有数据                              | true  |

## 类型的隐式转换

每个运算符都有自己期望的数据，比如`*`期望两端都是数字

一旦数据不符合运算符的期望，js就会悄悄的对数据进行类型转换，把它转换成期望的值后进行运算。

值得注意的是，这种转换是 _临时_ 的，并不会对原数据造成影响

> 小贴士
> 在实际的开发中，我们可以利用类型的隐式转换完成以下功能：
>
> ```js
> var n = +a; // 不管a是啥，都会被转换成数字，保存到n中
> var s = a + ''; // 不管a是啥，都会被转换成字符串，保存到s中
> var b = !!a; // 不管a是啥，都会被转换成boolean，保存到b中
> ```



## 练习题

```js
/* 
编写一个完美的求和函数：
1. 若两个数据都是普通数字，求和即可
2. NaN的数据需要变为0
3. 其他类型的数据需要转换为数字
*/

function sum(a, b) {
  // code here
  return (isNaN(+a) ? 0 : +a) + (isNaN(+b) ? 0 : +b);
}
console.log(sum('a','a'))
console.log(sum(0, 1))
```



```js
/* 
  不使用if，判断一个年份是否是闰年，输出是或否

  闰年规则：
  1. 4年一闰，百年不闰
  2. 400年必闰
  上述两点满足其一即可
*/
var year = 2021;

// 判断变量year是否是闰年
console.log(
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "是" : "否"
);
```



```js
/* 
  不使用if
  根据身高、体重，计算健康状况

  健康状况取决于BMI   BMI=体重÷身高的平方。（体重单位：千克；身高单位：米。）
  BMI的正常值在20~25之间，少于20偏瘦，高于25偏胖

  输出 正常、偏瘦、偏胖
*/
var height = 185, // 身高（厘米）
  weight = 60; // 体重（千克）

var BMI = weight/(height/100)**2;
console.log(BMI < 20 ? '偏瘦' : (BMI > 25 ? '偏胖' : '正常'))
```



# 知识回顾 - 数据的流程

给具体的事务划分步骤，然后将数据运用在需要的位置

## **常见的三个流程**

线性

分支

循环：确定循环的范围



## 练习题

见[数据的流程文件夹]文件夹



> tabnine 插件



# 知识回顾 - 流程的切割

## 函数的作用

使用函数切割流程，不仅可以**减少重复代码**、还可以有效的**降低整体复杂度**；最重要的是利于代码的维护

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/20211209124426.png" alt="image-20211209124426753" style="zoom:50%;" />

> 把一套重复的流程单独提出来 - 函数声明
>
> 使用函数声明 - 函数调用



## 函数的常见问题

### **如何理解函数的参数、返回值、函数体？**

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/20211209125120.png" alt="image-20211209125120817" style="zoom:50%;" />

参数：表示完成流程所需的**必要信息**

返回值：表示完成流程后**产生的结果**

函数体：表示具体的流程

**函数的参数、返回值只取决于函数的作用，与函数体无关**

### 为什么我觉得有了函数之后，程序反而变得更复杂了？

函数的核心作用，是为了让某一段复杂的流程变得简单。

如果在函数的帮助下，反而觉得流程变得复杂了，极有可能的原因是开发思想没有做相应的切割，导致思想负担过重。

**始终记住以下两点**：

1. 定义函数时，只需要考虑这个函数如何实现即可，完全不需要考虑其他无关的东西。
2. 调用函数时，只需要考虑向其传递什么参数，如何使用它的返回结果，完全无需考虑函数的具体实现。

函数具有**三要素**：函数名、参数、返回值

只要具备三要素，就能书写函数体；只要具备三要素，就能完成函数调用。

### 学习函数时不知道该如何切割流程怎么办？

要完成一个函数声明，分为两步：

1. 设计函数

   设计函数就是如何切割流程，具体来说就是设计出函数的三要素。

2. 书写函数体

   根据设计的三要素完成函数体，这一步就是现阶段的重点。



# 核心概念 - 数据的作用域

1. JS 有两种作用域：全局作用域和函数作用域
   - 内部的作用域能访问外部，反之不行。访问时从内向外依次查找
   - 如果内部的作用域中访问了外部，则会产生闭包
   - 内部作用域能访问的外部，取决于函数定义的位置，和调用无关
2. 作用域定义的变量、函数声明会提升到作用域顶部



## 面试题

同目录下的[数据的作用域面试题]



> 函数里面的变量和函数外面的变量是完全不冲突的
>
> 函数提升
>
> 闭包



# 核心概念 - 全局对象

无论是浏览器环境，还是node环境，都会提供一个全局对象

- 浏览器环境：window
- node环境：global

全局对象有下面几个特点：

- 全局对象的属性可以被直接访问

- 给未声明的变量赋值，实际就是给全局对象的属性赋值

  > 永远别这么干

- 所有的全局变量、全局函数都会附加到全局对象

  > 这称之为全局污染，又称之为全局暴露，或简称污染、暴露
  >
  > 如果要避免污染，需要使用**立即执行函数**改变其作用域
  >
  > 立即执行函数又称之为IIFE，它的全称是Immediately Invoked Function Expression
  >
  > **IIFE通常用于强行改变作用域**



# 核心概念 - 构造函数



```js
// 普通函数
function createPerson(firstName, lastName) {
  var obj = {};
  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.fullNmae = firstName + lastName;
  obj.sayHi = function() {
    console.log("我的名字叫做：", obj.fullNmae);
  }

  return obj;
}

// 构造函数
function Person(firstName, lastName) {
  // var this = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullNmae = firstName + lastName;
  this.sayHi = function() {
    console.log("我的名字叫做：", this.fullNmae);
  }

  // return this;
}
```



使用构造函数

```js
var p1 = new Person("x", "y");
```



**JS 所有的对象，都是通过构造函数产生的**

例如：

```js
// 语法糖
var obj = {
  a: 1,
  b: 2
}

// 实际创建过程
var obj = new Object();  // 创建一个空对象
obj.a = 1;
obj.b = 2;


var arr = [1, 2, 3, 4];

var arr = new Array(1, 2, 3, 4);
```



函数本身也是对象，是通过 `new Function()` 创建的。

调用函数的次数远远大于声明函数的次数。

构造函数的作用：生成对象

## 练习题

待补充



# 核心概念 - 原型

##  原型要解决的问题

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/20211210142340.png" alt="image-20211210142340406" style="zoom:50%;" />

上图中，通过构造函数可以创建一个用户对象

这种做法有一个严重的缺陷，就是每个用户对象中都拥有一个`sayHi`方法，对于每个用户而言，`sayHi`方法是完全一样的，没必要为每个用户单独生成一个。

要解决这个问题，必须学习原型

## 原型是如何解决的

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/20211210141850.png" alt="image-20211210141850465" style="zoom:50%;" />



1. **原型**

   每个函数都会自动附带一个属性`prototype`，这个属性的值是一个普通对象，称之为原型对象

2. **实例**

   instance，通过`new`产生的对象称之为实例。

   > 由于JS中所有对象都是通过`new`产生的，因此，严格来说，JS中所有对象都称之为实例

3. **隐式原型**

   每个实例都拥有一个特殊的属性`__proto__`，称之为隐式原型，它指向构造函数的原型



这一切有何意义？

**当访问实例成员时，先找自身，如果不存在，会自动从隐式原型中寻找**

**这样一来，我们可以把那些公共成员，放到函数的原型中，即可被所有实例共享**

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/20211210143328.png" alt="image-20211210143328533" style="zoom:50%;" />



> 通常情况下，实例方法都放在原型上



# 核心概念 - this

不同的场景，**这** 指代的含义不同，JS中的**this**关键字也是如此：

- 在全局代码中使用this，指代全局对象

  > 在真实的开发中，很少在全局代码使用this

- **在函数中使用this，它的指向完全取决于函数是如何被调用的**，也就是说只有在运行的时候才知道 this 指向d的是什么

  | 调用方式         | 示例                | 函数中的this指向  |
  | ---------------- | ------------------- | ----------------- |
  | **通过new调用**  | `new method()`      | 新对象            |
  | **直接调用**     | `method()`          | 全局对象          |
  | **通过对象调用** | `obj.method()`      | 前面的对象        |
  | **call**         | `method.call(ctx)`  | call的第一个参数  |
  | **apply**        | `method.apply(ctx)` | apply的第一个参数 |
  |                  |                     |                   |

  call(this指向的对象, 参数1, 参数2, ...)

  apply(this指向的对象, [参数1, 参数2, ...])



# 核心概念 - 原型链

## 什么是原型链

**所有的对象都是通过`new 函数`的方式创建的**

```js
var u1 = new User('邓', '旭明'); // 对象 u1 通过 new User 创建
var u2 = { // 对象 u2 通过 new Object 创建
  firstName: '莫',
  lastName: '妮卡'
}
// 等效于
var u2 = new Object(); 
u2.firstName = '莫';
u2.lastName = '妮卡';
```

上面的代码形成的原型图如下

![image-20210903081220607](https://gitee.com/luying61/note-pic/raw/master/picture/20210903081220.png)

原型对象本身也是一个对象，默认情况下，是通过`new Object`创建的，因此，上面的两幅原型图是可以发生关联的

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/20210903082540.png" alt="image-20210903082540379" style="zoom:50%;" />

> `Object.prototype.__proto__`比较特殊，它固定指向null

可以看出，u1的隐式原型形成了一个链条，称之为**原型链**

当读取对象成员时，会先看对象自身是否有该成员，如果没有，就依次在其原型链上查找

## 完整的链条

![image-20210903152359095](https://gitee.com/luying61/note-pic/raw/master/picture/20210903152359.png)

> Function原型上的东西影响到所有的函数；Object原型上的东西影响所有的对象

## 对开发的影响

### 在原型上更改会产生多大影响

更改构造函数的原型会对所有原型链上有该构造函数的原型的对象产生影响

### 学会利用原型链判断类型

1. `instanceof`关键字【常用】

   ```js
   object instanceof constructor
   // 判断object的原型链中，是否存在constructor的原型
   ```

2. `Object.getPrototypeOf()`【不常用】

   ```js
   Object.getPrototypeOf(object);
   // 返回object的隐式原型
   ```

### 学会创建空原型的对象

1. 利用`Object.create()`

   ```js
   Object.create(target);
   // 返回一个新对象，新对象以target作为隐式原型
   ```

2. 利用`Object.setPrototypeOf()`

   ```js
   Object.setPrototypeOf(obj, prototype);
   // 设置obj的隐式原型为prototype
   ```

   

# 核心概念 - 继承

## 会员系统

视频网站有两种会员：

- 普通会员
  - 属性：用户名、密码
  - 方法：观看免费视频
- VIP会员
  - 属性：普通会员的所有属性、会员到期时间
  - 方法：普通会员的所有方法、观看付费视频

如果我们需要使用构造函数来创建会员，如何书写构造函数才能实现上面的需求？

```js
// 普通会员的构造函数
function User(username, password){
  this.username = username;
  this.password = password;
}
User.prototype.playFreeVideo = function(){
  console.log('观看免费视频')
}

// VIP会员的构造函数
function VIPUser(username, password, expires){
  this.username = username;
  this.password = password;
  this.expires = expires;
}
VIPUser.prototype.playFreeVideo = function(){
  console.log('观看免费视频')
}
VIPUser.prototype.playPayVideo = function(){
  console.log('观看付费视频')
}
```

上面的代码出现了两处重复代码：

1. VIPUser的构造函数中包含重复代码

   ```js
   this.username = username;
   this.password = password;
   ```

   这段代码和User构造函数并没有区别，可以想象得到，将来也不会有区别，即：**普通用户该有的属性，VIP用户一定有**

2. VIPUser的原型上包含了重复代码

   ```js
   VIPUser.prototype.playFreeVideo = function(){
     console.log('观看免费视频')
   }
   ```

   这个方法和User上的同名方法逻辑完全一致，可以想象得到，将来也不会有区别，即：**普通用户该有的方法，VIP用户一定有**

> 如何解决上述两处重复？

## 处理构造器内部的重复

可以将VIPUser构造器改写为

```js
function VIPUser(username, password, expires){
  User.call(this, username, password);
  this.expires = expires;
}
```

## 处理原型上的重复

只需要将原型链设置为下面的结构即可

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/20211214155347.png" alt="image-20211214155342118" style="zoom:50%;" />

仅需一句代码即可

```js
Object.setPrototypeOf(VIPUser.prototype, User.prototype)
```

至此，完美的解决了之前提到的两处重复代码的问题

## 这和继承有什么关系

继承是面向对象的概念，它描述了两个对象类型（类，构造函数）之间的关系

如果在逻辑上可以描述为：A不一定是B，但B一定是A，则：B继承A、A派生B、A是B的父类、B是A的子类

**子类的实例应该自动拥有父类的所有成员**

继承具有两个特性：

- 单根性：子类最多只有一个父类
- 传递性：间接父类的成员会传递到子类中

## 如何在JS中封装继承

```js
function inherit(Child, Parent){
  // 在原型链上完成继承 
  Object.setPrototypeOf(Child.prototype, Parent.prototype);
}
```

> 过去，由于没有提供更改隐式原型的方法，因此这一过程会比较复杂。那时候，我们使用一种称之为「圣杯模式」的办法来达到相同的目的，这里不做介绍。

