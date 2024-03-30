/* 
1. 输出一个对象的所有键值对
*/
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for(var key in obj) {
//     console.log(`key: ${key}, value: ${obj[key]}`)
// }

/* 
2. 计算对象中字符串属性的数量
*/
// var obj = {
//   a: 1,
//   b: 2,
//   c: '3',
// };
// var count = 0;
// for (var key in obj) {
//   if (typeof obj[key] === "string") {
//     count++;
//   }
// }
// console.log(count);

/* 
3. 将一个对象所有的数字属性，转换为字符串，并在其前面加上￥
例如：
{
    name:"xxx",
    balance: 199.8, //余额
    taken: 3000 //消费
}
-->
{
    name:"xxx",
    balance: '￥199.8', //余额
    taken: '￥3000' //消费
}
*/

var obj = {
  name: "xxx",
  balance: 199.8, //余额
  taken: 3000, //消费
};

for (var key in obj) {
  if (typeof obj[key] === "number") {
    obj[key] = "￥" + obj[key];
  }
}
console.log(obj);

/* 
4. 按照下面的要求进行转换
[1, 2, 3]  
-->
[
    {number:1, doubleNumber: 2},
    {number:2, doubleNumber: 4},
    {number:3, doubleNumber: 6},
]
*/

var arr = [1, 2, 3];
for(var i = 0; i < arr.length; i++) {
  arr[i] = {
    number: arr[i],
    doubleNumber: arr[i] * 2,
  }
}
console.log(arr)
