const mongoose = require("mongoose");

const addressSchema = require("./addressSchema");
const operationTypes = require("./operationTypes");

// 1. 定义Operation Schema
const operationSchema = new mongoose.Schema({
  operation: {
    type: String,
    required: true,
    enum: operationTypes
  },
  time: {
    type: Date,
    required: true,
    default: Date.now,
  },
  userid: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  extraInfo: {
    type: mongoose.Schema.Types.Mixed,  // 任意类型
  },
  address: {
    type: addressSchema,
    required: true,
  }
})
// 2. 通过Operation Schema定义模型，最终导出模型
module.exports = mongoose.model("Operation", operationSchema);