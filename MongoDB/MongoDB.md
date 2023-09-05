> MongoDB官网：https://www.mongodb.com/zh



# 安装

## 安装 MongoDB

> 在 Windows 安装 MongoDB

1. 打开官网 -> 下载社区版 msi 或者 复制链接到迅雷下载【下载速度更快】

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904231829442.png" alt="image-20230904231829442" style="zoom: 50%;" />

   

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904231909711.png" alt="image-20230904231909711" style="zoom:50%;" />

   **双击安装包进行安装**

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904232104940.png" alt="image-20230904232104940" style="zoom:67%;" />

   

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904232134989.png" alt="image-20230904232134989" style="zoom:67%;" />

   

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904232157006.png" alt="image-20230904232157006" style="zoom:67%;" />

   

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904232237482.png" alt="image-20230904232237482" style="zoom:67%;" />

   安装为服务

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904232405513.png" alt="image-20230904232405513" style="zoom:67%;" />

   不安装客户端可视化管理工具

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904232448816.png" alt="image-20230904232448816" style="zoom:67%;" />

2. 测试是否安装成功

   1. 将 *MongoDB* 添加到环境变量，在命令行输入 `mongosh` 才有效

      <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904234927472.png" alt="image-20230904234927472" style="zoom:67%;" />

   在安装目录打开 mongosh.exe，输入`show dbs`

   在`cmd` 或者 `powershell`中输入 `mongosh`

3. 将 *MongoDB* 服务设置为 **自动**

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904235322378.png" alt="image-20230904235322378" style="zoom:80%;" />

   <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230904235514788.png" alt="image-20230904235514788" style="zoom: 67%;" />



## 安装可视化工具

> navicat
>
> 下载链接：https://pan.baidu.com/s/1M6qk7FfaOo-mh0uKfMFoHA?pwd=ying 



# 基础概念

- *db*：数据库，和 *mysql* 的概念一样
- *collection*：集合，类似于 *mysql* 中的表
- *document*：每个集合的文档，类似与 *mysql* 中的记录
  - *Primary Key*：和 *mysql* 中的主键含义一样，每个 *document* 都有一个主键
  - *field*：文档中的字段，包含除了主键之外的所有组件

​    

![mongodb基本结构](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905091527021.png)



`mongodb`属于`nosql`中的文档型数据库，每个文档相当于是一个对象，它没有列的概念，也没有表关系

由于它是一个`nosql`数据库：

- 无`sql`语句
- 使用极其简单，学习成本非常低
- 由于没有集合之间的关联，难以表达复杂的数据关系
- 存取速度极快

由于它是一个`文档型`数据库：

- 数据内容非常丰富和灵活
- 由于结构过于灵活，对数据结构难以进行有效的限制



# 基本操作

绝大多数的时候，都是在 node 环境操作 MongoDB 。*node* 环境的交互 和 *shell* 环境的交互大同小异。

通过 `mongosh` 命令，即可进入到 *mongodb* 的 *shell* 环境中，很多时候使用简单的 *js* 语句即可完成对 *mongodb* 的控制

![image-20230905090728584](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905090728584.png)

下面是`mongo`的常用命令：

1. 查看所有数据库：

   ```shell
   show dbs;
   ```

   ![image-20230905090837313](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905090837313.png)

   

2. 显示当前使用的数据库：

   ```shell
   db;
   ```

   ![image-20230905090919078](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905090919078.png)

   > 在 mongodb 你完全可以使用一个不存在的数据库，在你向这个不存在数据库添加数据时会自动生成数据库

3. 查看当前数据库状态：

   ```
   db.stats()
   ```

   ![image-20230905091004381](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905091004381.png)

   

4. 查看数据库中所有的集合：

   ```shell
   show collections;
   ```

5. 切换数据库：

   ```shell
   use 数据库名;
   ```

   ![image-20230905092449129](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905092449129.png)

   

6. 向集合中添加文档：

   ```js
   db.collection.insertOne({文档内容});
   db.collection.insertMany([多个文档]);
   ```

   **添加单个文档**

   ![image-20230905092924130](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905092924130.png)

   ![image-20230905093012501](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905093012501.png)

   **添加多个文档**

   ![image-20230905093428710](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905093428710.png)

   ![image-20230905093525523](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905093525523.png)

   

   > 新的文档如果没有指定字段`_id`，则会自动添加一个字段`_id`作为主键
   >
   > 自动的主键是一个`ObjectId`对象，该对象是通过调用函数`ObjectId()`创建的
   >
   > 它的原理是根据`时间戳+机器码+进程Id+自增量`生成的一个十六进制的唯一字符串
   >
   > 使用`ObjectId`函数还可以把某个字符串还原成一个`ObjectId`对象，例如`ObjectId("xxxxx")`

7. 查询文档：

   ```js
   db.collection.find(查询对象);
   ```

   ![image-20230905093723507](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905093723507.png)

   

8. 修改文档：

   ```shell
   db.collection.updateOne(<filter>, <update>)     # 修改一个
   db.collection.updateMany(<filter>, <update>)	# 修改多个
   db.collection.replaceOne(<filter>, <update>)	# 替换
   ```

   ![image-20230905095433033](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905095433033.png)

   

9. 删除文档：

   ```shell
   db.collection.deleteMany(查询对象)
   db.collection.deleteOne(查询对象)
   ```

   

# *schema* 和 *model*

mongodb 的驱动就叫做 `mongodb`

## 数据库的连接与启动

1. 安装驱动

> mongoose 官网：https://mongoosejs.com
>
> mongoose 民间中文网：http://www.mongoosejs.net
>
> mongoose 内部使用了 mongodb

```shell
npm i mongoose # 安装驱动
```

![image-20230905100555248](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905100555248.png)

2. 创建连接

   1. 导入 `mongoose`
   2. 使用 connect 方法连接

   ```js
   // index.js
   // 导入 monngoose
   const mongoose = require('mongoose');
   // 连接
   mongoose.connect('mongodb://127.0.0.1:27017/test');
   // 创建连接对象
   // 使用 on 绑定 open 事件; open: 连接打开事件
   mongoose.connection.on("open", () => {
     console.log("连接已打开")
   })
   ```

   ![image-20230905101546717](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230905101546717.png)



## 结构和模型

schema：结构，描述某种数据中有哪些字段，每个字段是什么类型，以及每个字段的约束

模型：对应数据库中集合的文档（相当于 mysql 中的记录）

> 根据结构定义模型，有了结构之后再去定义模型

```js
// 1. 定义 User Schema
const mongoose = require("mongoose");  // 导入 mongoose
// 创建 Scheme(结构)
const userSchema = new mongoose.Schema({
  // Schema 配置
})

// 2. 通过 User Schema 定义模型，最终导出模型
// 第一个参数 User：模型的名称
// 第二个参数 userSchema：模型对应的 Schema (结构)名称
module.exports = mongoose.model("User", userSchema);
```



**完成一下模型的定义**

1. 用户：

   ```js
   {
     loginId:"账号",
     loginPwd:"密码",
     name:"姓名",
     loves: ["爱好"],
     address: {
       province: "省份",
       city: "城市"
     }
   }
   ```


**代码**

```js
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

// addressScheme.js
module.exports = {
  province: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  }
}
```



2. 用户操作：

   ```js
   {
     operation: "登录",
     time: 日期,
     userid: 用户的id,
     extraInfo: 任意对象, // 操作额外的信息
     address: { // 操作的地址
       province: "省份",
       city: "城市"
     }
   }
   ```

**代码**

```js
const mongoose = reuire("mongoose");

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


// operationTypes.js
module.exports = ["登录", "注销", "阅读文章"];
```

