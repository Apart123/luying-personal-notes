> uni-app 官方文档： https://uniapp.dcloud.net.cn/
>
> 微信小程序相关文档：
>
> 1. 开发文档：https://developers.weixin.qq.com/miniprogram/dev/framework/
>
> 2. 微信公众平台：https://mp.weixin.qq.com/
>
> 微信开发者工具下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html



# *uni-app* 简介

**uni-app 是一个使用 Vue.js进行 开发所有前端应用的框架**。开发者编写一套代码，即可发布到 iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。



![image-20230210163433478](https://gitee.com/luying61/note-pic/raw/master/picture/202302101634632.png)



## 学习 *uni-app* 的本质



1. 移动端技术太多，跨端框架极有可能是未来的发展趋势
2. 一套代码多端发布受开发者青睐。
3.  完整的生态，受企业青睐



## *uni-app* 的优势

![image-20230210163555719](https://gitee.com/luying61/note-pic/raw/master/picture/202302101635823.png)

> 来源于 uni-app 官网



## *uni-app* 和 *Vue* 的关系

\- 使用 VueJS 开发

\- 在发布到 H5 时，支持所有 Vue 语法

\- 发布到App和小程序时，实现部分 Vue 语法



## *uni-app* 和小程序有什么关系



- 组件标签靠近小程序规范
- 接口能力（JS API）靠近微信小程序开发
- 完整的小程序生命周期



## *uni-app* 与 *Web* 代码编写区别



![image-20230210163634428](https://duyi-bucket.oss-cn-beijing.aliyuncs.com/uni/202302101636556.png)



1. 标签不同
   1. div => view
   2. img => image
   3. p => view
   4. span => text



# 微信小程序介绍

> 微信公众平台的作用：小程序打包上线之后后期的维护、以及获取创建小程序的 *AppID* 

### 使用

**必选项处理**

![image-20230210164011622](https://duyi-bucket.oss-cn-beijing.aliyuncs.com/uni/202302101640719.png)

***AppID* 获取**

> 微信公众平台进行appID获取 

![image-20230210164132302](https://duyi-bucket.oss-cn-beijing.aliyuncs.com/uni/202302101641411.png)

### 小程序代码构成

> 参考地址：https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/code.html#JSON-%E9%85%8D%E7%BD%AE

1. `.json` 后缀的 `JSON` 配置文件
2. `.wxml` 后缀的 `WXML` 模板文件
3. `.wxss` 后缀的 `WXSS` 样式文件
4. `.js` 后缀的 `JS` 脚本逻辑文件



**小程序基本结构**

```html
<view class="container">
  <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}"> 获取头像昵称 </button>
    <block wx:else>
      <image src="{{userInfo.avatarUrl}}" background-size="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view>
</view>
```



### 小程序基本操作

- **配置信息**

  - 全局配置 -> https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html

    ```json
    {
      "pages": [
        "pages/index/index",
        "pages/logs/index"
      ],
      "window": {
        "navigationBarTitleText": "Demo"
      },
      "tabBar": {
        "list": [{
          "pagePath": "pages/index/index",
          "text": "首页"
        }, {
          "pagePath": "pages/logs/index",
          "text": "日志"
        }]
      },
      "networkTimeout": {
        "request": 10000,
        "downloadFile": 10000
      },
      "debug": true
    }
    ```

    

  - 页面配置： https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html

    ```json
    {
      "navigationBarBackgroundColor": "#ffffff",
      "navigationBarTextStyle": "black",
      "navigationBarTitleText": "微信接口功能演示",
      "backgroundColor": "#eeeeee",
      "backgroundTextStyle": "light"
    }
    ```

- **全局生命周期函数**

  ```js
    /**
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function () {
      
    },
  
    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function (options) {
      
    },
  
    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function () {
      
    },
  
    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function (msg) {
      
    }
  ```

  - **页面生命周期函数** -> https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page-life-cycle.html

  ```js
   onLoad: function(options) {
      // 页面创建时执行
    },
    onShow: function() {
      // 页面出现在前台时执行
    },
    onReady: function() {
      // 页面首次渲染完毕时执行
    },
    onHide: function() {
      // 页面从前台变为后台时执行
    },
    onUnload: function() {
      // 页面销毁时执行
    },
    onPullDownRefresh: function() {
      // 触发下拉刷新时执行
    },
    onReachBottom: function() {
      // 页面触底时执行
    },
    onShareAppMessage: function () {
      // 页面被用户分享时执行
    },
    onPageScroll: function() {
      // 页面滚动时执行
    },
    onResize: function() {
      // 页面尺寸变化时执行
    }
  ```

- **组件生命周期**->https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html

  ```js
  Component({
    lifetimes:{
      created() {
        console.log('created,组件实例刚刚被创建好时， created 生命周期被触发')
      },
      attached() {
        console.log('组件实力进入页面节点树时候进行执行');
      },
      detached() {
        console.log('在组件实例被从页面节点树移除时执行');
      }
    }
  })
  ```

  

- **界面跳转**

  - 新界面打开=>https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html

    ```js
    调用 API wx.navigateTo
    使用组件 <navigator open-type="navigateTo"/>
    ```

  - 页面重定向

    ```js
    调用 API wx.redirectTo
    使用组件 <navigator open-type="redirectTo"/>
    ```

  - 页面返回

    ```
    调用 API wx.navigateBack
    使用组件<navigator open-type="navigateBack">
    用户按左上角返回按钮
    ```

  - Tab切换

    ```javascript
    调用 API wx.switchTab
    使用组件 <navigator open-type="switchTab"/>
    用户切换 Tab
    ```

  - 重启动

    ```js
    调用 API wx.reLaunch
    使用组件 <navigator open-type="reLaunch"/>
    ```

- **数据绑定**

  ```html
  <view>{{message}}</view>
  ```

  ```js
  Page({
    data:{
      message:"hello world"
    }
  })
  ```

- **条件渲染**

  ```html
  <view wx:if="{{isShow}}">条件判断显示</view>
  ```

  ```
  Page({
  	data:{
  		isShow:false
  	}
  })
  ```

  

- **列表渲染**

  ```html
  <view wx:for="{{list}}" wx:for-index="idx" wx:for-item="itemName">
    {{idx}}: {{itemName.name}}
  </view>
  ```

  ```js
  Page({
    data: {
      list:[
        {name:'a'},
        {name:'b'}
      ]
    }
  })
  ```

  