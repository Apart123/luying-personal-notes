# 介绍

> 官方网站： https://echarts.apache.org/zh/index.html
>
> 由百度开发，使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE9/10/11，Chrome，Firefox，Safari等），底层依赖 [ZRender](https://ecomfe.github.io/zrender-doc/public/) ，提供直观、交互丰富、可高度个性化定制的数据可视化图表。

## [特性](https://echarts.apache.org/zh/feature.html)

1. 丰富的可视化类型
2. 多种数据格式无需转换直接使用
3. 千万数据的前端展示
4. 移动端优化
   1. 移动端 --- svg （占用内存较少）
   2. PC 端 --- canvas 
5. 多渲染方案，跨平台使用
6. 深度的交互式数据探索
7. 多组数据的支持以及丰富的视觉编辑手段
8. 动态数据
9. 绚丽的特效
10. 通过 GL 实现更多更强大绚丽的三维可视化
11. 无障碍访问（4.0+）



## API

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230730235308215.png" alt="image-20230730235308215" style="zoom: 80%;" />

- GL 配置：3d 的配置

### *echarts*

> 是一个全局对象
>
> 通过*init*创建*Echarts*实例，在此基础上进行配置



### *echartsInstance*

> 通过 [echarts.init](https://echarts.apache.org/zh/api.html#echarts.init) 创建的实例对象。
>
> 有一些实例针对性的操作

- setOption

  创建实例之后就会执行的操作（配置）

- dispatchAction

  触发图标的**行为**（自定义事件）

- on

  绑定事件处理函数

  添加的事件在*events*

- off

  解绑事件处理函数



### *action*

> ECharts 中支持的图表行为，通过 [dispatchAction](https://echarts.apache.org/zh/api.html#echartsInstance.dispatchAction) 触发。

- legend

  图例的组件



### *events*

> 在 ECharts 中主要通过 [on](https://echarts.apache.org/zh/api.html#echartsInstance.on) 方法添加事件处理函数，该文档描述了所有 ECharts 的事件列表。
>
> ECharts 中的事件分为两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 [dispatchAction](https://echarts.apache.org/zh/api.html#echartsInstance.dispatchAction) 后触发的事件。



## 配置项和*GL*配置

- 配置项 和 *GL*配置 都是 setOption 中使用的参数
- 配置项 是某一个图表详细的射程



## 教程

### 安装和[使用](https://echarts.apache.org/handbook/zh/basics/import/)

- 第一种

```html
<!--在 https://www.jsdelivr.com/package/npm/echarts 选择 dist/echarts.js，点击并保存为 echarts.js 文件。-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <!-- 引入刚刚下载的 ECharts 文件 -->
    <script src="echarts.js"></script>
  </head>
</html>
```



- 第二种：从 CDN 获取

  可以从以下免费 CDN 中获取和引用 ECharts。然后通过*<script></script>*引入

  - [jsDelivr](https://www.jsdelivr.com/package/npm/echarts)
  - [unpkg](https://unpkg.com/browse/echarts/)
  - [cdnjs](https://cdnjs.com/libraries/echarts)

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js" integrity="sha512-EmNxF3E6bM0Xg1zvmkeYD3HDBeGxtsG92IxFt1myNZhXdCav9MzvuH/zNMBU1DmIPN6njrhX1VTbqdJxQ2wHDg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```



- 第三种

安装

```shell
npm install echarts --save
```

引入Echarts

```js
import * as echarts from 'echarts';   // 引入

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
```



# 组件

## title

官方链接：https://echarts.apache.org/zh/option.html#title

- id：组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

- show：boolean；是否显示标题组件。
- text：string；主标题文本，支持使用 `\n` 换行。

- link：string；主标题文本超链接。
- target：string；指定窗口打开主标题超链接。两个可选值 `self`(当前窗口) 、 `blank`(默认，新窗口打开)。
- textStyle：Object  设置主标题文本
  - color：主标题文本颜色。
  - fontStyle：主标题文字字体的风格。
    - `'normal'`
    - `'italic'`
    - `'oblique'`
  - fontWeight：主标题文字粗细。
    - `'normal'`
    - `'bold'`
    - `'bolder'`
    - `'lighter'`
    - 100 | 200 | 300 | 400...
  - fontFamily：主标题文字字体系列
  - fontSize：字体大小
  - lineHeight：行高
  - width：字体宽度
  - height：高度
  - textBorderColor：文字描边颜色
  - textBorderWidth：文字描边宽度
  - textBorderType：描边风格（`solid` `dashed` `dotted`)
  - textBorderDashOffse：虚线偏移量
  - textShadowColor：文字阴影颜色
  - textShadowBlur：文字的阴影长度
  - textShadowOffsetX：文字阴影横向偏移量
  - textShadowOffsetY：文字阴影纵向偏移量
  - overflow：文字超出 `width` 是否截断或者换行
    - `'truncate'`
    - `'break'`
    - `'breakAll'`
  - ellipsis: 在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。
  - rich：富文本
- subtext：副标题
- sublink
- subtarget
- subtextStyle
- textAlign：整体（包括 text 和 subtext）的水平对齐。
  - `'auto'`、`'left'`、`'right'`、`'center'`
- textVerticalAlign：整体（包括 text 和 subtext）的垂直对齐。
  - 可选值：`'auto'`、`'top'`、`'bottom'`、`'middle'`。
- triggerEvent：boolean，是否触发事件
- padding：number，标题内边距
- itemGap：number，主副标题之间的间距
- zlevel
- z
- left
- top
- right
- bottom
- backgroundColor：string，标题背景色，默认透明。
- borderColor：string，标题的边框颜色。支持的颜色格式同 backgroundColor。
- borderWidth：number，标题的边框线宽
- brderRadius：string|Array，圆角半径，单位px
- shadowBlur：图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。
- shadowColor：阴影颜色
- shadowOffsetX
- shadowOffsetY



## legend

图例组件。

- type：图例的类型。

  - `'plain'`(普通图例)、`'scroll'`(可滚动翻页的图例)

- id：组件 ID。

- show：boolean，是否展示。

- zlevel：number，所有图形的zlevel值。

- z

- left

- top

- right

- bottom

- width

- height

- orient：string，图例列表的布局朝向。

  - `'horizontal'`、`'vertical'`

- align：string，图例标记和文本的对齐。

  - `'auto'`、`'left'`、`'right'`

- padding：number，图例内边距。

- itemGap：number，图例每项之间的间隔。

- itemWidth：number，图例标记的图形宽度。

- itemHeight：number，图例标记的图形高度。

- itemStyle：Object

- lineStyle

- symbolRotate

- formatter：string|Function，格式化图例文本。

- selectedMode：string|boolean，图例的选择模式。

- inactiveColor：图例关闭时的颜色。

- inactiveBorderColor：图例关闭时的描边颜色。

- selected：Object，图例选中状态表。

  - ```js
    selected: {
        // 选中'系列1'
        '系列1': true,
        // 不选中'系列2'
        '系列2': false
    }
    ```

- textStyle：Object

- icon

- data：Array

- 以下在`type = 'scroll'`时有效

  - <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230827225311564.png" alt="image-20230827225311564" style="zoom:67%;" />


- animation：boolean，图例翻页是否使用动画。

- animationDurationUpdate：number，图例翻页时的动画时长。



## grid

- show：boolean，是否显示直角坐标系网格。默认`false`。
- containerLabel：grid 区域是否包含坐标轴的[刻度标签](https://echarts.apache.org/zh/option.html#yAxis.axisLabel)。
- 在`show: true`时生效。
  - <img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230827233357312.png" alt="image-20230827233357312" style="zoom:80%;" />





# 坐标轴

