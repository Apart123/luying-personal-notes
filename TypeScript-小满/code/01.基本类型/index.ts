// 1. 字符串类型
let a: string = '123';  //普通声明

//也可以使用es6的字符串模板
let str: string = `dddd${a}`;

console.log(a, str)


// 2. 数字类型
let notANumber: number = NaN;//Nan
let num: number = 123;//普通数字
let infinityNumber: number = Infinity;//无穷大
let decimal: number = 6;//十进制
let hex: number = 0xf00d;//十六进制
let binary: number = 0b1010;//二进制
let octal: number = 0o744;//八进制s


// 3. 布尔类型
let b1: boolean = true;
let b2: boolean = Boolean(1);  // true
console.log(b1, b2);

// let createBoolean: boolean = new Boolean(1);   // 报错
let createBoolean: Boolean = new Boolean(1);    // 不报错


// 4. 空值类型：JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
let v: void 

function voidFn(): void {
  console.log('test void')
}

let uu: void = undefined;
console.log(uu);

// let n: void = null;  // null 不能 赋予 void 类型 


// 5. null 和 undefined 类型
let u: undefined = undefined;//定义undefined
let n: null = null;//定义null

//这样写会报错 void类型不可以分给其他类型
// let test: void = undefined
// let num2: string = "1"
 
// num2 = test