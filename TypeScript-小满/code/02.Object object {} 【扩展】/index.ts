// 1. Object
let a:Object = 123;
let a1:Object = "123";
let a2:Object = {};
let a3:Object = [];
let a6:Object = true;

// 2. object
// let b:object = 123;   // 报错，123 不是引用类型
// let b1:object = "123";  // 报错，"123" 不是引用类型
let b2:object = {};
let b3:object = [];
// let b6:object = true;  // 报错，ture 不是引用类型


// 3. {}
let c:{} = 123;
let c1:{} = "123";
let c2:{} = {name: 1};
let c3:{} = [];
let c6:{} = true;

// 字面量模式是不能修改值的
// c2.age = 23

