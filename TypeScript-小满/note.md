# 前置

TypeScript 是使用 .Net 写的，与 C# 非常类似。

## 安装

1. 安装 node

node 官网：https://nodejs.org/en

2. 使用 npm 安装 TypeScript

```shell
npm install -g typescript
```

使用 `tsc -v` 验证是否安装成功，能够正常输出 TS 的版本号即安装成功

![image-20231008173202119](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231008173202119.png)

## 使用

在当前文件夹下面使用 `tsc -w` 命令，相当于 `tsc --watch`，即监听当前文件夹下的 `index.ts` 文件，将 `index.ts` 文件编译成 `index.js` 文件

注意：在执行 `tsc -w` 之前，需要先使用 `tsc --init` 创建配置文件 `tsconfig.json`。

![image-20231008174519382](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231008174519382.png)



然后使用 `node index.js` 执行 index.js 文件：

![image-20231008174801834](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231008174801834.png)

# 基础类型

使用 `tsc --init` 初始化 TS 配置文件，默认是严格模式；在严格模式下，不能将 null 赋值给 void 类型的变量；

如何修改严格模式：打开 tsconfig.json 文件，将  `"strict": true` 修改为  `"strict": false` 

![image-20231008175344295](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231008175344295.png)



基础类型：Boolean、Number、String、`null`、`undefined` 以及 ES6 的 [Symbol](http://es6.ruanyifeng.com/#docs/symbol) 和 ES10 的 [BigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

1. 字符串类型

```tsx
let a: string = '123';  //普通声明

//也可以使用es6的字符串模板
let str: string = `dddd${a}`;

console.log(a, str)
```

2. 数字类型

```tsx
let notANumber: number = NaN;//Nan
let num: number = 123;//普通数字
let infinityNumber: number = Infinity;//无穷大
let decimal: number = 6;//十进制
let hex: number = 0xf00d;//十六进制
let binary: number = 0b1010;//二进制
let octal: number = 0o744;//八进制s
```

3. 布尔类型

```tsx
let b1: boolean = true;
let b2: boolean = Boolean(1);  // true
console.log(b1, b2);

// let createBoolean: boolean = new Boolean(1);   // 报错
let createBoolean: Boolean = new Boolean(1);    // 不报错
```

4. 空值类型：*JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数*

```tsx
let v: void 

function voidFn(): void {
  console.log('test void')
}

let uu: void = undefined;
console.log(uu);

// let n: void = null;  // null 不能 赋予 void 类型 
```

5. null 和 undefined 类型

```tsx
let u: undefined = undefined;//定义undefined
let n: null = null;//定义null

//这样写会报错 void类型不可以分给其他类型
// let test: void = undefined
// let num2: string = "1"
 
// num2 = test
```



# 任意类型

想要在 node 环境执行 ts 文件:

```shell
npm i ts-node -g;  # 安装ts-node库
```

生成 package.json 文件：

```shell
npm init -y
```

安装声明文件：

```shell
npm i @types/node -D
```

即可使用 `ts-node ts文件名` 命令，在 node 环境运行 ts 文件：

![image-20231008221455423](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231008221455423.png)



> any：任意类型
>
> unknown：不知道的类型

**类型优先级**：

1. top type 顶级类型  any unknown
2. Object
3. Number String Boolean
4. number string boolean
5. 字面量  1 "1" ture
6. never



any 可以赋值为 任何类型

```tsx
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
```



unknown 只能赋值给自身 或 any

```tsx
let u1: unknown = 1;
let u2: number = 9;
u1 = u2;
// u2 = u1;  // 报错，不能将类型 unknown 分配给 number
```



unknown 是不能调用属性和方法的

```tsx
let obj:unknown = {
  name: "mj",
  open: () => 123
}

// obj.name // 报错，obj 的类型是未
// obj.open // 报错，obj 的类型是未知
```



any 可以调用属性和方法

```tsx
let obj2:any = {
  name: "mj",
  open: () => console.log("open")
}

console.log(obj2.name);
obj2.open()
```



# Object、object、{} 扩展

Object、object、{} 这三个有什么不一样：

```tsx
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
```



# 接口和对象类型

interface：接口，用来定义对象的方式，可以理解为对对象的约束；

语法：`interface 接口名称`

> 规定接口名称的首字母要大写

使用 interface（接口）约束对象时，对象的属性和接口的属性必须保持一致，不能多一个属性也不能少一个属性

```tsx
interface Student {
  name: string,
  age: number
}

const stu:Student = {
  name: "jia",
  age: 18
}
```

如果有重名的 interface，则会重合

```tsx
interface Student {
  name: string,
  age: number
}

interface Student {
  address: {},
}

// 上面的代码相当于
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
```

任意key（索引签名）：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集

```tsx
interface Anykey {
  name: string,
  age: number,
  [propName: string]: any
}

const s:Anykey = {
  name: "jia",
  age: 18,
  a: 2,
  hobby: () => {}
}
```

可选属性：使用 `?` 操作符

```tsx
//可选属性的含义是该属性可以不存在
//所以说这样写也是没问题的
interface Person {
    name?:string,
    age:number
}
 
const person:Person  = {
    age: 18
}
```

只读属性：使用 `readonly` 操作符

```tsx
interface Person {
  name?: string,
  readonly age: number,
}

const person: Person = {
  age: 18
}

person.age = 20;  // 无法为 age 赋值，因为它是只读属性
```

继承：使用 `extends`

```tsx
interface A {
  readonly id: number
  count: number
}

interface B extends A {
  student: {}
}

const c:B = {
  id: 1,
  count: 30,
  student: {}
}
```

定义函数

```tsx
interface Fn {
  (name: string): number[]
}

const fn: Fn = (name = "jia") => {
  return [1]
}
```



# 数组类型

类型[]

```tsx
// number[]
const num: number[] = [1, 2, 3, 4, 5, 6];

// boolean[]
const b: boolean[] = [true, false];

// string[]
const str: string[] = ["1", "2", "a", "b"];
```

Array<类型>

```tsx
const arr: Array<number> = [1, 2];
const arr2: Array<boolean> = [true, false];
```

定义对象数组，使用 interface

```tsx
interface A {
  name: string
  age?: number
}

const aa: A[] = [{ name: "jia" }, { name: "meng", age: 16 }]
```

多维数组

```tsx
const arr: number[][] = [[1], [1, 2], [3]];
const arr2: Array<Array<number>> = [[1], [1, 2], [3]];
```

混合数组

```tsx
const arr3: any[] = [1, "str", true];
const arr4: [number, string, boolean] = [1, "str", true];
```

应用于函数

```tsx
function agrs(...agrs: number[]) {
  console.log(agrs)
}

agrs(1, 2, 3);  // [ 1, 2, 3 ]
```

arguments类数组

```tsx
function Arr(...args:any): void {
  console.log(arguments)
  //错误的arguments 是类数组不能这样定义
  let arr:number[] = arguments
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
```

