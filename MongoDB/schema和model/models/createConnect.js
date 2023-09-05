// 导入 monngoose
const mongoose = require('mongoose');
// 连接
mongoose.connect('mongodb://127.0.0.1:27017/test');
// 创建连接对象
// 使用 on 绑定 open 事件; open: 连接打开事件
mongoose.connection.on("open", () => {
  console.log("连接已打开")
})