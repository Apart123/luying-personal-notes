/**
 * interface 重名 合并
 * interface 任意key（索引签名）
 * interface ?：可选属性 readonly：只读
 * interface extends 接口继承
 * interface 定义函数类型
 */

interface Student {
  name: string,
  age: number
}

interface Student {
  address: {},
}

// interface Student {
//   name: string,
//   age: number,
//   address: {}
// }

const stu: Student = {
  name: "jia",
  age: 18,
  address: {}
}

// 任意key（索引签名）：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Anykey {
  name: string,
  age: number,
  [propName: string]: any
}

const s: Anykey = {
  name: "jia",
  age: 18,
  a: 2,
  hobby: () => { }
}

// 可选属性
//可选属性的含义是该属性可以不存在
//所以说这样写也是没问题的
interface Person {
  name?: string,
  readonly age: number,
}

const person: Person = {
  age: 18
}

// person.age = 20;  // 无法为 age 赋值，因为它是只读属性

// 继承：extends
interface A {
  readonly id: number
  count: number
}

interface B extends A {
  student: {}
}

const c: B = {
  id: 1,
  count: 30,
  student: {}
}


// 定义函数类型
interface Fn {
  (name: string): number[]
}

const fn: Fn = (name = "jia") => {
  return [1]
}