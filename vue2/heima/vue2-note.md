> 课程链接：【2023新版Vue2+Vue3基础入门到实战项目全套教程，自学前端vue就选黑马程序员，一套全通关！】 https://www.bilibili.com/video/BV1HV4y1a7n4/?p=19&share_source=copy_web&vd_source=2f0a31d70dab91c246048dede49b39cc



## Vue 是什么

渐进性框架，可以根据自己的开发需要进行插件和第三方库的安装



## 插值表达式

- 又叫作，大胡子语法；Vue 的一种模板语法

作用：利用表达式进行插值渲染

语法格式：`{{ JS表达式 }}`



**注意**

1. 使用的数据要存在
2. 支持的是表达式，不是语句
3. 不能在标签属性中使用 {{}}



## Vue 响应式特性

这里的响应式不是 *@media* 媒体查询中的响应式布局，而是指 *Vue* 会自动对页面中某些数据的变化做出响应。这也就是 *Vue* 最大的优点，通过 *MVVM* 思想实现数据的双向绑定，让开发者不用再操作 *DOM* 对象，有更多的时间去思考业务逻辑。


## 开发者工具安装

> Vue Devtoos

1. 通过谷歌应用商店安装

下载链接：https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?utm_source=ext_app_menu




## v-html



## v-show 和 v-if

v-show底层原理：切换 css 的 display: none 来控制显示隐藏

v-if  底层原理：根据 判断条件 控制元素的 创建 和 移除（条件渲染）

### v-else 和 v-else-if



## v-on



## v-bind

### *v-bind* 操作 *class*


## v-for

### v-for 的 key



## v-model

作用： 给表单元素使用，实现**双向数据绑定**，可以快速获取或设置表单元素内容

1. 数据变化 ==> 试图自动更新
2. 试图变化 ==> 数据自动更新

语法：`v-model = '变量'`


### *v-model* 应用于其他表单元素


## 指令的修饰符

通过`"."`指明一些后缀，不同后缀封装了不同的处理操作 -> 简化代码






## *computed*计算属性

## *computed* VS *methods*

- computed 有缓存
- methods 每次数据变化都会触发


## 计算属性的完整写法


## watch



