// 下面代码的执行结果

foo(typeof a);
function foo(p) {
  console.log(this);
  console.log(p);
  console.log(typeof b);
  let b = 0;
}

// 报错，报错的位置在 console.log(typeof b);
// 报错原因：ReferenceError: Cannot access 'b' before initialization
// 解析：
// 这道题考查的是 ES6 新增的声明变量关键字 let 以及暂时性死区的知识。let 和以前的 var 关键字不一样，无法在 let 声明变量之前访问到该变量，所以在 typeof b 的地方就会报错。