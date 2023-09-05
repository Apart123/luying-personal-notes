// 1. 定义 User Schema
const mongoose = require("mongoose");
const addressScheme = require("./addressSchema");
const userSchema = new mongoose.Schema({
  // Schema 配置
  loginId: {
    type: String,   // 字段类型：字符串
    required: true, // 必填
    trim: true,     // 去掉首尾空格
    minLength: 6,   // 最小长度
    maxLength: 18,   // 最大长度

    index: true,    // 将该字段设置为索引
    unique: true,   // 特殊索引，唯一索引
  },
  loginPwd: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    maxLength: 18,
    select: false,   // 默认情况下，查询用户时不查询该字段
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 10,
  },
  loves: {
    type: [String],  // 数组的每一项都是 string
    required: true,
    default: [],     // 默认值
  },
  address: {
    type: addressScheme,
    required: true,

  }
})


// 2. 通过 User Schema 定义模型，最终导出模型
// 第一个参数 User：模型的名称
// 第二个参数 userSchema：模型对应的 Schema (结构)名称
module.exports = mongoose.model("User", userSchema);