// import {sum, isOdd} from "./main.js" // 静态依赖
// import * as math from "./main.js"    // 静态依赖

// 导入默认导出的模块
// import math from "./main.js"  // 静态依赖

// 在浏览器环境导入模块, 文件名必须加上后缀

// console.log(math);

// const a = 89;
// console.log(123);



// setTimeout(() => {
//     // 动态依赖, 可以不位于代码顶级
//     import("./main.js").then(m => {
//         // m 为模块对象
//         const math = m.default;
//         console.log(math.sum(3,4));
//     })
// }, 2000)

setTimeout(async () => {
  const m = await import("./main.js");
  const math = m.default;
  console.log(math.sum(3, 4));
}, 2000);
