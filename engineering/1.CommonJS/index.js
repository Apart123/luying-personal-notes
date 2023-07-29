// 入口模块: 启动文件 通过node命令运行的文件

// 在 index.js 中使用 math.js 提供的东西

// 导入模块
// require("./math.js")
const math = require("./math"); // 返回被导出的东西
console.log(math.isOdd(8));