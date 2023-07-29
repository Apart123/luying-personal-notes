// 导出两个函数

// 具名导出
// export {sum, isOdd};

// function sum(a,b) {
//     return a + b;
// }

// function isOdd(n) {
//     return n % 2 !== 0;
// }


// export function sum(a, b) {
//   return a + b;
// }

// export const isOdd = (n) => n % 2 !== 0;


export default  {
    sum(a, b) {
        return a+b;
    },
    isOdd(n) {
        return n % 2 !== 0;
    }
}