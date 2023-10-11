// 1. 联合类型 |
// 1.1 声明变量时
let phone: string | number = 1346464;
phone = "1346464";

// 1.2 声明函数时
const word = (a: number | string) => a
console.log(word(123))
console.log(word("123"))

// 2. 交叉类型 &
// interface A {
//   name: string
// }
// interface B {
//   age: number
// }

// const p: A & B = {
//   name: "jia",
//   age: 16
// }
// console.log(p);

// const user = (u: A & B) => u
// console.log(user({name: "meng", age: 18}))

// 3. 类型断言：值 as 类型、<类型>值
// value as string  <string>value
// interface A {
//   run: string
// }

// interface B {
//   build: string
// }

// const fn = (type: A | B): string => {
//   return type.run
// }
//这样写是有警告的应为B的接口上面是没有定义run这个属性的

interface A {
  run: string
}

interface B {
  build: string
}

const fn = (type: A | B): string => {
  return (type as A).run
}
//可以使用类型断言来推断他传入的是A接口的值

