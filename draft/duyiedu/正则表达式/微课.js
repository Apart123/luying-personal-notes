/**
 * 正则表达式：主要是用用微字符串的规则校验或者查找子字符串
    str = "hello world"
    reg = /hello/
    reg.test(str)  //如果 str 中含有符合 reg 规则的字符串，则返回 true，否则返回 false
    str.match(reg)：匹配符合正则表达式规则的字符串，返回一个数组
    [0-9]：表示 0-9 之间的任意一个数字
    \d：表示 0-9 之间的任意一个数字
 */

// 示例一：
const str1 = "hello world";
const reg1 = /hello/; // 直接赋值(字面量)
// const reg = new RegExp("hello");  // 构造函数赋值
const result = reg.test(str1);

// 示例二：匹配任意数字

console.log(result)
