/* 
1. 输出100个hello world
*/

// for(var i = 0; i < 100; i++) {
//   console.log("hello world");
// }

/* 
2. 输出100~200
*/

// for(var i = 100; i <= 200; i++) {
//   console.log(i);
// }

/* 
3. 创建一个包含1~100的数组
*/

var arr = [];
// for(var i = 0; i < 100; i++) {
//   arr[i] = i + 1;
// }
for(var i = 1; i <= 100; i++) {
  arr.push(i);
}
// console.log(arr);

/* 
4. 定义一个数组，遍历输出它的每一项
*/

for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}