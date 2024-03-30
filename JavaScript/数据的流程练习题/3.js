/* 
1. 1~100求和
*/

// var sum = 0;
// for(var i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

/* 
2. 求某个数的阶乘
*/

// var num = 4;
// var result = 1;
// for(var i = 1; i <= num; i++) {
//   result *= i;
// }
// console.log(result);

/* 
3. 数组求和
*/

// var arr = [2, 5, 6, 7, 9];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

/* 
4. 求数组中的奇数的个数
*/

// var arr = [2, 5, 6, 7, 9];
// var count = 0;
// for(var i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 !== 0) {
//     count++;
//   }
// }
// console.log(count)

/* 
5. 求数组中的奇数和
*/

var arr = [2, 5, 6, 7, 9];
var sum = 0;
for(var i = 0; i < arr.length; i++) {
  if(arr[i] % 2 !== 0) {
    sum += arr[i];
  }
}
console.log(sum);
