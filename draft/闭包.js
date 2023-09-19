// 模块化开发，防止污染全局变量

// function test() {
//   var arr = [];
//   for(var i = 0; i < 10; i++) {
//       arr[i] = function() {
//           console.log(i);
//       }
//   }
//   return arr;
// }

// var myArr = test();
// for(var j = 0; j < 10; j++) {
//   myArr[j]();
// }


// 解决方法

// function test() {
//   var arr = [];
//   for(var i = 0; i < 10; i++) {
//       (function(j) {
//           arr[j] = function() {
//           console.log(j);
//         }
//       }(i));
//   }
//   return arr;
// }

// var myArr = test();
// for(var j = 0; j < 10; j++) {
//   myArr[j]();
// }


// ?

// function test() {
//   var arr = [];
//   for(var i = 0; i < 10; i++) {
//       (function() {
//         arr[i] = function() {
//           console.log(j);
//       }
//       })(i)
//   }
//   console.log(arr)
//   return arr;
// }

// var myArr = test();
// for(var j = 0; j < 10; j++) {
//   myArr[j]();
// }


// 函数累加器
function add() {
  var num = 0;
  function a() {
      console.log(++num);
  }
  return a;
}
var myAdd = add();
myAdd();
myAdd();
myAdd();


// 作缓存
function eater() {
  var food = "";
  var obj = {
      eat: function() {
          console.log("I am eating " + food);
          food = "";
      },
      push: function(myFood) {
          food = myFood;
      }
  }
  return obj;
}
var eater1 = eater();
eater1.push("banana");
eater1.eat();