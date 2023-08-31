# 搭建工程

使用脚手架搭建工程，一般有两种方式

1. *vue cli*

```shell
# vue cli 搭建工程 --- webpack
vue create projectName
```

![image-20230830002052986](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230830002052986.png)

- 使用 *webpack* 打包过程很慢
- index.html 页面文件存放在 *public* 目录下



2. 新的脚手架 / 构建工具 --- *vite*

```shell
# vite 搭建工程
# 下载工具并搭建工程命令
npm init vite-app projectName  # 方式一：临时下载 vite，并搭建工具；搭建完成之后再将其卸载，保证每次搭建工程都是最新版本的 vite
npm init vite@latest           # 方式二
yarn create vite               # 方式三
```

![image-20230830003111020](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230830003111020.png)

- *vite* 有缓存，启动速度快；打包过程相较于 *webpack* 也较快
- 引用 `.vue` 文件，必须添加后缀名，`.js` 文件可以不用加后缀名
- index.html 页面文件存放在根目录下；其他静态资源可以存放在 *public* 目录下



# vue3 的重大变化

最重要的变动 --- *composition api*



1. 入口文件

```js
// vue2
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

// 在 vue2 中使用插件
Vue.use()
```



```js
// vue3 不存在构造函数 Vue
// 属于 breaking， 截断式更新；更新前后不兼容
import { createApp } from 'vue'  
import App from './App.vue'
import './index.css'

// createApp(App).mount('#app')
// 相当于
const app = createApp(App);
// 在 vue3 中使用插件；通过实例成员使用
app.use();
app.mount('#app');
```



2. this

在 vue2 中 *this* 指向组件实例；

在 vue3 中 *this* 指向 Proxy

![vue3的组件实例代理](https://gitee.com/luying61/note-pic/raw/master/picture/vue3%E7%9A%84%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E4%BB%A3%E7%90%86.jpg)

 

3. *option api* 和 *composition api*

  ![image-20230830165249966](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230830165249966.png)



4. ref

数据响应式

![vue3对ref的特殊处理](https://gitee.com/luying61/note-pic/raw/master/picture/vue3%E5%AF%B9ref%E7%9A%84%E7%89%B9%E6%AE%8A%E5%A4%84%E7%90%86.jpg)

- *setup* 函数中 *this* 指向 *undefined*
- *setup* 函数在所有生命周期钩子函数之前调用
- *setup* 中 *count* 是一个对象；实例代理中，*count*是一个 *count.value*



# 案例

## 新增任务

新增任务的数据进行本地存储：将数据保存到 localStorage 

- useTodoList

任务列表

- useNewTodo

新增任务

提供绑定的数据

提供新增数据的方法，返回一个任务列表的对象，包括任务id，任务内容title，任务是否完成completed





 ## 任务筛选

1. 将内存中的数据(任务)渲染到页面

hash => 筛选方式 => 筛选列表

composition/useFilter.js

默认：all

已完成：completed
