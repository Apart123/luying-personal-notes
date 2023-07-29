// 再书写一个ESM模块，查阅文档，导入上面的模块，你可以写出多少中导入的方式
// 导入默认导出的模块
import a from "./export.js"

// 导入具名导出的模块
// import {a} from "./export.js"
console.log(a);

// import * as obj from "./export.js"
// console.log(obj.a);