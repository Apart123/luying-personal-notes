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

# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue
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

任务列表是将筛选后的结果渲染到页面上

hash => 筛选方式 => 筛选列表

- 筛选方式：

​	全部：all   ==> 没有 hash 默认显示 all

​	未完成：active

​	 已完成：completed



- useFilter



## 修改和删除

**修改**

完成修改：失去焦点、按下回车

取消修改：esc

全部完成



- useEditTodo



**删除**

删除当前任务

删除所有已完成任务



- useRemoveTodo



没有任何任务的时候 不显示*footer*元素



# Vite 原理

Vite：用于搭建工程的脚手架，包括但不局限于vue3、react 。

Vite（法语意为 "快速的"，发音 `/vit/`，发音同 "veet"）是一种新型前端构建工具，能够显著提升前端开发体验。

> Vite 官方网站：https://vitejs.dev/
>
> Vite 官方中文文档：https://cn.vitejs.dev/
>
> Vite 源码：https://github.com/vitejs/vite

**webpack 原理图**

![webpack原理图](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230920230630654.png)

**Vite 原理图**

![Vite原理图](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230920231655523.png)

1. 不打包
2. 可以修改入口文件名称
3. 会对资源路径做一些改动
4. 编译

> 图中 devServer 代表开发服务器



> 使用 vue cli 和 vite 分别搭建工程，然后进行对比
>
> 1. 控制台 network 对比
> 2. 入口文件对比
> 3. 启动速度对比
> 4. 尝试更改使用 vite 所搭建的项目中入口文件(main.js)的名称
> 5. ...



**谈谈你对 Vite 的理解，最好对此 webpack 说明**

> webpack 会先打包，然后启动开发服务器，请求服务器时会直接给予打包结果。
>
> Vite 是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。
>
> 由于现代浏览器本身就支持 ES Module，会自动向依赖的 Module 发出请求。Vite 充分利用这一点，将开发环境下的模块文件，就作为浏览器要执行的文件，而不是像 webpack 那样进行打包合并。
>
> 由于 Vite 在启动的时候不需要打包，也就意味着不需要分析模块的依赖、不需要编译，因此启动速度非常快。当浏览器请求某个模块时，再根据需要对模块内容进行编译。这种按需动态变异的方式，极大的缩减了编译的时间，项目越复杂、模块越多，Vite 的优势越明显。
>
> 在 HMR（热模块替换） 方面，当改动了一个模块后，仅需让浏览器重新请求该模块即可，不像 webpack 那样需要把该模块的相关依赖块全部编译一次，效率更高。
>
> 当那个需要打包到生产环境时，Vite 使用传统的 Rollup 进行打包，因此，Vite 的主要优势在**开发阶段**。另外，由于 Vite 利用的是 ES Module，因此在代码中不可以使用CommonJS。



# 效率的提升

> 客户端渲染效率比 vue2 提升了 1.3 ~ 2 倍
>
> SSR 渲染效率比 vue2 提升了 2 ~ 3 倍

## 静态提升

下面的静态节点会被提升

- 元素节点
- 没有绑定动态内容

```js
// vue2 的静态节点
render(){
  createVNode("h1", null, "Hello World")
  // ...
}

// vue3 的静态节点
const hoisted = createVNode("h1", null, "Hello World")
function render(){
  // 直接使用 hoisted 即可
}
```

静态属性会被提升

```html
<div class="user">
  {{user.name}}
</div>
```

```js
const hoisted = { class: "user" }

function render(){
  createVNode("div", hoisted, user.name)
  // ...
}
```



## 预字符串化

```html
<div class="menu-bar-container">
  <div class="logo">
    <h1>logo</h1>
  </div>
  <ul class="nav">
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
    <li><a href="">menu</a></li>
  </ul>
  <div class="user">
    <span>{{ user.name }}</span>
  </div>
</div>
```

当编译器遇到**大量连续的静态内容**，会直接将其编译为一个普通字符串节点

```js
const _hoisted_2 = _createStaticVNode("<div class=\"logo\"><h1>logo</h1></div><ul class=\"nav\"><li><a href=\"\">menu</a></li><li><a href=\"\">menu</a></li><li><a href=\"\">menu</a></li><li><a href=\"\">menu</a></li><li><a href=\"\">menu</a></li></ul>")
```

<img src="http://mdrs.yuanjin.tech/img/20200929170205.png" alt="image-20200929170205828" style="zoom:50%;" />

<img src="http://mdrs.yuanjin.tech/img/20200929170304.png" alt="image-20200929170304873" style="zoom:50%;" />

## 缓存事件处理函数

```html
<button @click="count++">plus</button>
```

```js
// vue2
render(ctx){
  return createVNode("button", {
    onClick: function($event){
      ctx.count++;
    }
  })
}

// vue3
render(ctx, _cache){
  return createVNode("button", {
      // 看缓存对象是否有事件处理函数，有的话直接返回
    onClick: cache[0] || (cache[0] = ($event) => (ctx.count++))
  })
}
```



## Block Tree

vue2在对比新旧树的时候，并不知道哪些节点是静态的，哪些是动态的，因此只能一层一层比较，这就浪费了大部分时间在比对静态节点上

```html
<form>
  <div>
    <label>账号：</label>
    <input v-model="user.loginId" />
  </div>
  <div>
    <label>密码：</label>
    <input v-model="user.loginPwd" />
  </div>
</form>
```

<img src="http://mdrs.yuanjin.tech/img/20200929172002.png" alt="image-20200929172002761" style="zoom:50%;" />

> Vue2：依次对比

<img src="http://mdrs.yuanjin.tech/img/20200929172555.png" alt="image-20200929172555681" style="zoom:50%;" />

> Vue3：会对动态节点和静态节点分别进行标记，然后把所有的动态节点提取到根节点形成了数组；对比时直接对根节点(Block)，循环数组对比，跳过很多不必要的节点。

## PatchPlag

vue2在对比每一个节点时，并不知道这个节点哪些相关信息会发生变化，因此只能将所有信息依次比对

```html
<div class="user" data-id="1" title="user name">
  {{user.name}}
</div>
```

<img src="http://mdrs.yuanjin.tech/img/20200929172805.png" alt="image-20200929172805674" style="zoom:50%;" />

# API 和数据响应式的变化

> 面试题1：为什么vue3中去掉了vue构造函数？
>
> 面试题2：谈谈你对vue3数据响应式的理解

## 去掉了Vue构造函数

在过去，如果遇到一个页面有多个`vue`应用时，往往会遇到一些问题

```html
<!-- vue2 -->
<div id="app1"></div>
<div id="app2"></div>
<script>
  Vue.use(...); // 此代码会影响所有的vue应用
  Vue.mixin(...); // 此代码会影响所有的vue应用
  Vue.component(...); // 此代码会影响所有的vue应用
                
	new Vue({
    // 配置
  }).$mount("#app1")
  
  new Vue({
    // 配置
  }).$mount("#app2")
</script>
```

在`vue3`中，去掉了`Vue`构造函数，转而使用`createApp`创建`vue`应用

```html
<!-- vue3 -->
<div id="app1"></div>
<div id="app2"></div>
<script>  
  createApp(根组件).use(...).mixin(...).component(...).mount("#app1")
  createApp(根组件).mount("#app2")
</script>
```

> 更多vue应用的api：https://v3.vuejs.org/api/application-api.html

## 组件实例中的 API

在`vue3`中，组件实例是一个`Proxy`，它仅提供了下列成员，功能和`vue2`一样

属性：https://v3.vuejs.org/api/instance-properties.html

方法：https://v3.vuejs.org/api/instance-methods.html

## 对比数据响应式

vue2 和 vue3 均在相同的生命周期完成数据响应式，但做法不一样

<img src="http://mdrs.yuanjin.tech/img/20201014155433.png" alt="image-20201014155433311" style="zoom:50%;" />

## 面试题参考答案

面试题1：为什么 vue3 中去掉了 vue 构造函数？

> vue2的全局构造函数带来了诸多问题：
> 1. 调用构造函数的静态方法会对所有 vue 应用生效，不利于隔离不同应用
> 2. vue2的构造函数集成了太多功能，不利于 tree shaking，vue3把这些功能使用普通函数导出，能够充分利用tree shaking优化打包体积
> 3. vue2 没有把组件实例和 vue 应用两个概念区分开，在 vue2 中，通过 new Vue 创建的对象，既是一个vue 应用，同时又是一个特殊的 vue 组件。vue3 中，把两个概念区别开来，通过 createApp 创建的对象，是一个 vue 应用，它内部提供的方法是针对整个应用的，而不再是一个特殊的组件。

面试题2：谈谈你对 vue3 数据响应式的理解

> vue3 不再使用 Object.defineProperty 的方式定义完成数据响应式，而是使用 Proxy。
> 除了 Proxy 本身效率比 Object.defineProperty 更高之外，由于不必递归遍历所有属性，而是直接得到一个 Proxy。所以在 vue3 中，对数据的访问是动态的，当访问某个属性的时候，再动态的获取和设置，这就极大的提升了在组件初始阶段的效率。
> 同时，由于 Proxy 可以监控到成员的新增和删除，因此，在 vue3 中新增成员、删除成员、索引访问等均可以触发重新渲染，而这些在 vue2 中是难以做到的。



# 模板中的变化

## v-model

`vue2`比较让人诟病的一点就是提供了两种双向绑定：`v-model`和`.sync`，在`vue3`中，去掉了`.sync`修饰符，只需要使用`v-model`进行双向绑定即可。

为了让`v-model`更好的针对多个属性进行双向绑定，`vue3`作出了以下修改

- 当对自定义组件使用`v-model`指令时，绑定的属性名由原来的`value`变为`modelValue`，事件名由原来的`input`变为`update:modelValue`

  ```html
  <!-- vue2 -->
  <ChildComponent :value="pageTitle" @input="pageTitle = $event" />
  <!-- 简写为 -->
  <ChildComponent v-model="pageTitle" />
  
  <!-- vue3 -->
  <ChildComponent
    :modelValue="pageTitle"
    @update:modelValue="pageTitle = $event"
  />
  <!-- 简写为 -->
  <ChildComponent v-model="pageTitle" />
  ```

- 去掉了`.sync`修饰符，它原本的功能由`v-model`的参数替代

  ```html
  <!-- vue2 -->
  <ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
  <!-- 简写为 -->
  <ChildComponent :title.sync="pageTitle" />
  
  <!-- vue3 -->
  <ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
  <!-- 简写为 -->
  <ChildComponent v-model:title="pageTitle" />
  ```

- `model`配置被移除

- 允许自定义`v-model`修饰符

  vue2 无此功能

  <img src="http://mdrs.yuanjin.tech/img/20201008163022.png" alt="image-20201008163021918" style="zoom:50%;" />

## v-if v-for

`v-if` 的优先级 现在高于 `v-for`

## key

- 当使用`<template>`进行`v-for`循环时，需要把`key`值放到`<template>`中，而不是它的子元素中

- 当使用`v-if v-else-if v-else`分支的时候，不再需要指定`key`值，因为`vue3`会自动给予每个分支一个唯一的`key`

  即便要手工给予`key`值，也必须给予每个分支唯一的`key`，**不能因为要重用分支而给予相同的 key**

## Fragment

`vue3`现在允许组件出现多个根节点



## 案例

组件：CheckEditor.vue

​	复选框 + 文本框   
