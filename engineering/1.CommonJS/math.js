// 提供一些数学相关的函数
function isOdd(n) {
    return n % 2 !== 0;
}

function sum(a, b) {
    return a + b;
}

module.exports = {
    isOdd,
    sum
}


// 这种写法,下面导出的会将上面的覆盖
// module.exports = isOdd;
// module.exports = sum