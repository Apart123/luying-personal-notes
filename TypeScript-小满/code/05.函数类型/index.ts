/**
 * 1. 函数定义类型和返回值 | 箭头函数定义类型和返回值
 * 2. 函数默认的参数 | 函数可选参数
 * 3. 参数一个对象如何定义
 * 4. 函数 this 类型
 * 5. 函数重载
 */

// 1.1 函数定义类型和返回值
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 2));

// 1.2 箭头函数定义类型和返回值
const add2 = (a: number, b: number): number => a + b;
console.log(add2(1, 9))

// 2.1 函数默认的参数
function add3(a: number = 2, b: number = 9) {
  return a + b;
}
console.log(add3());

// 2.2 函数可选参数
function add4(a?: number, b?: number) {
  return;
}

// 3. 参数一个对象如何定义
//  interface User {
//   name: string,
//   age: number
//  }
// function user(user: User): User {
//   return user;
// }

// console.log(user({name: "jia", age: 18}));

// 4. 函数 this 类型
interface Obj {
  user: number[]
  add: (this: Obj, num: number) => void
}
let obj: Obj = {
  user: [1, 2, 3],
  add(this: Obj, num: number) {
    this.user.push(num)
  }
}
obj.add(4)
console.log(obj);  // { user: [ 1, 2, 3, 4 ], add: [Function: add] }

// 5. 函数重载

let user = [1, 2, 3];

function findNum(add: number[]): number[]; // 如果传入的是一个 number 类型的数组，那就对传入的数组做添加
function findNum(id: number): number[]; // 如果如的是一个数字，那就进行查询
function findNum(): number[];  // 如果什么都有传，就是查询全部

function findNum(ids?: number | number[]): number[] {
  if (typeof ids == "number") {
    return user.filter(id => id == ids)
  } else if (Array.isArray(ids)) {
    user.push(...ids);
    return user;
  } else {
    return user;
  }
}

console.log(findNum());   
console.log(findNum(2));
console.log(findNum([7, 8, 9]));
