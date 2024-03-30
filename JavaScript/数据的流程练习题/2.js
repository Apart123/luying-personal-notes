/* 
1. 输出1-100的所有奇数
*/

// for (var i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

/* 
2. 定义一个数组，输出数组中所有的奇数
*/

// var arr = [1, 2, 3, 4, 66, 55, 33];
// for(var i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 !== 0) {
//     console.log(arr[i]);
//   }
// }

/* 
3. 定义一个数组，找出所有的奇数，放入到一个新数组中
*/

var arr = [1, 2, 3, 4, 66, 55, 33];
var arr2 = [];
for(var i = 0; i < arr.length; i++) {
  if(arr[i] % 2 !== 0) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);
