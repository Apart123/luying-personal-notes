/* 
1. 数组中是否存在某个数，输出 是 或 否
*/
// var num = 7;
// var arr = [1, 4, 6, 8, 9, 3];
// var isExist = false;
// for(var i = 0; i < arr.length; i++) {
//   if(num === arr[i]) {
//     isExist = true;
//     break;   // 遗漏点
//   }
// }
// isExist ? console.log("是") : console.log("否");

/* 
2. 数组中是否存在某个数，如果存在，则输出它所在的下标，如果不存在，则输出-1
*/
/* var num = 3;
var arr = [1, 4, 6, 8, 9, 3];
// var isExist = false;
var target = -1;
for(var i = 0; i < arr.length; i++) {
  if(num === arr[i]) {
    // isExist = true;
    target = i;
    break;   // 遗漏点
  }
}
// isExist ? console.log("是") : console.log("否");
console.log(target); */

/* 
3. 找到数组中第一个奇数和最后一个奇数，将它们求和
*/
// var arr = [23, 5, 23, 67, 24, 34, 3];
// var arr2 = [];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2[0] + arr2[arr2.length - 1]);

/* 
4. 有两个数组，看两个数组中是否都存在奇数，输出 是 或 否
*/
var arr = [2, 1, 6, 8];
var arr2 = [1, 2, 3, 5];
var odd1 = odd2 = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    odd1 = true;
    break;
  }
}

for (var j = 0; j < arr.length; j++) {
  if (arr[j] % 2 !== 0) {
    odd2 = true;
    break;
  }
}

odd1 && odd2 ? console.log("是") : console.log("否");
