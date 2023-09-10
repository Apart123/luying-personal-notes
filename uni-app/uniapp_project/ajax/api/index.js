/**
 * 第一个参数"."：使用绝对路径
 * 第二个参数true：是否查询当前子目录(递归调用)
 * 第三个参数：匹配规则对应文件(匹配.js结尾的文件)
 */
const requireApi = require.context(".", true, /.js$/);

let module = {};  // 接收所有requireApi导出的模块

/**
 * keys() 找到路径下的所有文件
 */
requireApi.keys().forEach((key, index) => {
	// 读取每一个 api 方法
	if(key == "./index.js") return;  // 当前文件
	// console.log(requireApi(key))
	Object.assign(module, requireApi(key));
})

export default module;