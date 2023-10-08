// any：任意类型 和 unknown：不知道的类型

/**
 * 类型优先级：
 * 1. top type 顶级类型  any unknown
 * 2. Object
 * 3. Number String Boolean
 * 4. number string boolean
 * 5. 字面量  1 "1" ture
 * 6. never
 */

// any 可以赋值为 任何类型
const a1: any = {};
const a2: any = [];
let a3: any = 123;
const a4: any = "123";
const a5: any = false;
const a6: any = null;
const a7: any = undefined;
const a8: any = Symbol(1);

let a9: number = 456;
a3 = a9;
a9 = a3;

// unknown 只能赋值给自身 或者 any
let u1: unknown = 1;
let u2: number = 9;
u1 = u2;
// u2 = u1;  // 报错，不能将类型 unknown 分配给 number

// unknown 是不能调用属性和方法的
let obj:unknown = {
  name: "mj",
  open: () => 123
}

// obj.name // 报错，obj 的类型是未
// obj.open // 报错，obj 的类型是未知

// any 可以调用属性和方法
let obj2:any = {
  name: "mj",
  open: () => console.log("open")
}

console.log(obj2.name);
obj2.open()
