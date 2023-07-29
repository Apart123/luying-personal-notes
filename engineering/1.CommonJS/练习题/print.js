const config = require("./config.js");

/**
 * 该函数会做以下两件事：
 * 1. console.clear() 清空控制台
 * 2. 读取config.js中的text配置，打印开始位置到index位置的字符
 * @param {number} index 
 */
function print(index){
    console.clear();
    // 逐行打印
    // for(let i = 0; i <= index; i++) {
    //     console.log(config.text[i]);
    // }

    console.log(config.text.substring(0, index + 1));
}
// print(2)

module.exports = print;