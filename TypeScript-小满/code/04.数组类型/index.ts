// // number[]
// const num: number[] = [1, 2, 3, 4, 5, 6];

// // boolean[]
// const b: boolean[] = [true, false];

// // string[]
// const str: string[] = ["1", "2", "a", "b"];

// Array<类型>
// const arr: Array<number> = [1, 2];
// const arr2: Array<boolean> = [true, false];

// 定义对象数组 interface
// interface A {
//   name: string
//   age?: number
// }

// const aa: A[] = [{ name: "jia" }, { name: "meng", age: 16 }]


// // 多维数组
// const arr: number[][] = [[1], [1, 2], [3]];
// const arr2: Array<Array<number>> = [[1], [1, 2], [3]];

// // 混合数组
// const arr3: any[] = [1, "str", true];
// const arr4: [number, string, boolean] = [1, "str", true];

// 应用于函数
// function agrs(...agrs: number[]) {
//   console.log(agrs)
// }

// agrs(1, 2, 3);  // [ 1, 2, 3 ]

// arguments 类数组
function Arr(...args:any): void {
  console.log(arguments)
  //错误的arguments 是类数组不能这样定义
  // let arr:number[] = arguments
}
Arr(111, 222, 333)



function Arr2(...args:any): void {
  console.log(arguments) 
  //ts内置对象IArguments 定义
  let arr:IArguments = arguments
}
Arr2(111, 222, 333)

//其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
interface IArguments {
[index: number]: any;
length: number;
callee: Function;
}