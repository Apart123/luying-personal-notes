// 书写一个ESM模块，查阅文档，导出下面的模块对象
// {
//   a: 1,
//   b: 2,
//   c: function() {},
//   default: {
//     a: 1,
//     b: 2
//   }
// }

const a = 1;
const b = 2;
const c = function() {};

export {a, b, c};
export default {
    a: 1,
    b:2
}


console.log("测试不导入任何, 只执行一次");