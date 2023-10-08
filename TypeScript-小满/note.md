# 前置

TypeScript 是使用 .Net 写的，与 C# 非常类似。

## 安装

1. 安装 node

node 官网：https://nodejs.org/en

2. 使用 npm 安装 TypeScript

```shell
npm install -g typescript
```

使用 `tsc -v` 验证是否安装成功，能够正常输出 TS 的版本号即安装成功

![image-20231008173202119](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231008173202119.png)

## 使用

在当前文件夹下面使用 `tsc -w` 命令，相当于 `tsc --watch`，即监听当前文件夹下的 `index.ts` 文件，将 `index.ts` 文件编译成 `index.js` 文件

注意：在执行 `tsc -w` 之前，需要先使用 `tsc --inti` 创建配置文件 `tsconfig.json`。

![image-20231008174519382](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231008174519382.png)



然后使用 `node index.js` 执行 index.js 文件：

![image-20231008174801834](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231008174801834.png)

# 基础类型

使用 `tsc --init` 初始化 TS 配置文件，默认是严格模式；在严格模式下，不能将 null 赋值给 void 类型的变量；

如何修改严格模式：打开 tsconfig.json 文件，将  `"strict": true` 修改为  `"strict": false` 

![image-20231008175344295](https://gitee.com/luying61/note-pic/raw/master/picture/image-20231008175344295.png)



基础类型：Boolean、Number、String、`null`、`undefined` 以及 ES6 的 [Symbol](http://es6.ruanyifeng.com/#docs/symbol) 和 ES10 的 [BigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。