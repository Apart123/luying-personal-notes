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



# 安装与使用

## 安装

```she
npm install echarts --save
```



## [使用](https://echarts.apache.org/handbook/zh/basics/import/)

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



# API

<img src="https://gitee.com/luying61/note-pic/raw/master/picture/image-20230730235308215.png" alt="image-20230730235308215" style="zoom: 80%;" />

