/**
 * 练习一
 */
var foo = 1;
function bar() {
  console.log(foo);
  if(!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar();

// GO {
//   foo: 1,
//   bar: fn,
//   AO(bar) {
//     foo: 先为 undefined，后为 10,
//   }
// }

// /**
//  * 练习二
//  */
var a = 1;
function b() {
  console.log(a);
  a = 10;
  return;
  function a() {};
}
b();
console.log(a);

/**
 * 练习三
 */
console.log(foo);  // Fn C 
var foo = "A";
console.log(foo);  // A
var foo = function() {
  console.log("B");  
}
console.log(foo);  // Fn B
foo(); // B

function foo() {
  console.log("C");
}
console.log(foo);  // Fn B
foo();  // B

// GO {
//   foo: Fn B,
// }


/**
 * 练习四
 */
var foo = 1;
function bar(a) {
  var a1 = a;
  var a = foo;
  function a() {
    console.log(a);  // 1
  }
  a1();
}
bar(3);