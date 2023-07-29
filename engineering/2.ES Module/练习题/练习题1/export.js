/// 练习1: 书写一个ESM模块，查阅文档，导出下面的模块对象
// {
//   a: 1
// }
// 你可以写出多少种导出的方式？

// export const a = 1;

// export default {
//     a: 1
// }

const a = 1;
export { a };

export { a as temp}

export { a as default}