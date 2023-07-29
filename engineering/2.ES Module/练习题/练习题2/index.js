// 再书写一个ESM模块，查阅文档，按照下面的要求分别写出导入代码：

// 1. 仅导入default
// import {default as obj} from "./main.js"
import test from "./main.js"
console.log(test);
// console.log(obj);


// 2. 仅导入a和b
// import {a, b} from "./main.js"
// console.log(a, b)

// 3. 同时导入default、a、b
// import {a, b, default as obj} from "./main.js"
// console.log(a, b, obj);


// 4. 导入整个模块对象
// import * as main from "./main.js"
// console.log(main);

// 5. 不导入任何东西，仅运行一次该模块
import "./main.js";
import "./main.js";
import "./main.js";
import "./main.js";
// 不管导入多少次, 只运行一次





