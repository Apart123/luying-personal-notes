// 入口模块: 启动文件 通过node命令运行的文件

// 在 index.js 中使用 math.js 提供的东西

// 导入模块
// require("./math.js")
// 导入模块：路径必须以 ./ 或者 ../ 开头; 文件名可以省略.js, 没有写.js默认就是js文件
// require函数的返回结果就是导出的对象
const math = require("./math"); // 返回被导出的东西
console.log(math.sum(1, 3));
console.log(math.isOdd(8));

// 导入之后有缓存存在node中,所以node start不会反复输出
require("./math");
require("./math");
require("./math");
require("./math");