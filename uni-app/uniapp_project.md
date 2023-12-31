# 项目启动-结构搭建



## 一、初始化数据库

1. 定义（选择）云服务空间

2. 初始化数据库

   1. 使用db_init.json文件 

      参考文档：https://uniapp.dcloud.io/uniCloud/hellodb?id=db-init

   2. 初始化db_init.json文件使用课程里面提供的文件即可

      source 文件夹 => db._init.json文件

      uniCloud目录找到database目录 添加db_init.json文件

      ![image-20230213104828561](https://duyi-bucket.oss-cn-beijing.aliyuncs.com/uni/202302131048676.png)



## 二、静态文件配置

### 1、static文件导入

> ​	导入项目中需要的图片文件
>
> ​	文件在当天课程资料source文件夹下进行查找
>
> ​	source文件目录：
>
> - app_logo =>**应用打包目录**
> - project_img => **工程所需图片文件**		

### 2、css预编译处理器定义

1. uni.scss文件定义公共变量及混编方法

2. 每个页面下直接进行样式方法及变量使用

   ```scss
   /* 多行注释 */
   @mixin flex($level_style:space-between, $vertical_style:row, $isWrapper:nowrap) {
       display: flex;
       align-items: center;
       justify-content: $level_style;
       flex-wrap: $isWrapper;
       flex-direction: $vertical_style;
   }
   
   // $base-color:#ff6600;
   /* 全局系统样式定义 */
   $base-color:#f25037;
   ```

   

### 3、page.json文件-tabBar创建

文档参考地址：https://uniapp.dcloud.net.cn/collocation/pages

> 在 `pages` 目录中，创建首页(home)、我的(self)、关注(follow)这 3 个 tabBar 页面。在 HBuilderX 中，可以通过如下的两个步骤，快速新建页面：



1. 在 `pages` 目录上鼠标右键，选择**新建页面**

2. 在弹出的窗口中，填写**页面的名称**、**勾选 scss 模板**之后，点击创建按钮。截图如下：

   ![image-20230213105800769](https://duyi-bucket.oss-cn-beijing.aliyuncs.com/uni/202302131058829.png)

3. 配置tabBar效果，修改项目根目录中的 `pages.json` 配置文件，新增 `tabBar` 的配置节点如下：

   ```json
   "tabBar": {  // 设置底部 tab 的表现
       "color": "#666",
   	"selectedColor": "#f25037",
   	"backgroundColor": "#fff",
   	"list": [   // 显示页面信息, 包含了 tabBar 需要跳转的所有的页面信息
           {
               "pagePath": "pages/index/index",   // 页面路径
               "iconPath": "static/img/home.png",   // 默认图片
   	        "selectedIconPath": "static/img/home-active.png",  // 选中图片
   	        "text": "首页"   // 文字描述信息
           },
           {
   	        "pagePath": "pages/follow/follow",
   	        "iconPath": "static/img/follow.png",
   	        "selectedIconPath": "static/img/follow-active.png",
   	        "text": "关注"
           },
           {
   	        "pagePath": "pages/self/self",
   	        "iconPath": "static/img/my.png",
   	        "selectedIconPath": "static/img/my-active.png",
   	        "text": "我的"
           }
       ]
   },
   ```

4. 删除默认index界面

   1. 在 HBuilderX 中，把 `pages` 目录下的 `index首页文件夹` 删除掉
   2. 同时，把 `page.json` 中记录的 `index 首页` 路径删除掉

5. 修改globalStyle样式

   ```json
    "globalStyle": {
       "navigationBarTextStyle": "white",
       "navigationBarTitleText": "渡一教育",
       "navigationBarBackgroundColor": "#f25037",
       "backgroundColor": "#F8F8F8"
     },
   ```

### 4、页面定义

> ​	创建tabBar需要的页面文件 
>
> index页面
>
> follow页面
>
> self页面

### 5、index（首页）界面制作

- 导航栏-navBar组件实现

  > 同名组件名不需要使用import 进行导入

  ```css
  easyCom components/组件名/组件名.vue   // 特点：局部引入
  ```

  **微信及APP进行状态栏高度进行占位处理**

  方法参考地址：https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync

  ```js
   // 获取手机系统信息
      const info = uni.getSystemInfoSync()
      // 设置状态栏高度
      this.statusBarHeight = info.statusBarHeight
  ```

  **胶囊信息获取**

  文档参考地址：https://uniapp.dcloud.io/api/ui/menuButton?id=getmenubuttonboundingclientrect

  **需要进行条件编译实现**

  ```js
  // (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
      this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
  ```

  **page.json进行前景色设置**

  ```json
  "navigationBarTextStyle": "white"
  ```

- **tabBar组件实现**

  > 配置tabBar效果，修改项目根目录中的 `pages.json` 配置文件，新增 `tabBar` 的配置节点如下：

```js
 "globalStyle": {
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#f25037",
    "backgroundColor": "#F8F8F8"
  },
"tabBar": {  // 设置底部 tab 的表现
    "color": "#666",
	"selectedColor": "#f25037",
	"backgroundColor": "#fff",
	"list": [   // 显示页面信息, 包含了 tabBar 需要跳转的所有的页面信息
        {
            "pagePath": "pages/index/index",   // 页面路径
            "iconPath": "static/img/home.png",   // 默认图片
	        "selectedIconPath": "static/img/home-active.png",  // 选中图片
	        "text": "首页"   // 文字描述信息
        },
        {
	        "pagePath": "pages/follow/follow",
	        "iconPath": "static/img/follow.png",
	        "selectedIconPath": "static/img/follow-active.png",
	        "text": "关注"
        },
        {
	        "pagePath": "pages/self/self",
	        "iconPath": "static/img/my.png",
	        "selectedIconPath": "static/img/my-active.png",
	        "text": "我的"
        }
    ]
},
```



# 导航栏制作适配多端

## 一、导航栏组件创建

1. 定义导航栏组件

2. 引入导航栏组件

   ![image-20230213105942614](https://duyi-bucket.oss-cn-beijing.aliyuncs.com/uni/202302131059734.png)


> 同名组件支持easycomment，不需要使用import方式进行导入即可使用

3. 结构搭建

   1. 图标使用

      uni-icons图标插件安装：[https://ext.dcloud.net.cn/plugin?id=28](https://ext.dcloud.net.cn/plugin?id=28)

4. 处理小程序显示错位问题

   **微信及APP应用实现状态栏高度占位处理**

   方法参考地址：[https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync](https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync)

   ![image-20230213110250401](https://duyi-bucket.oss-cn-beijing.aliyuncs.com/uni/202302131102450.png)

   **微信小程序胶囊信息获取**

   文档参考地址:[https://uniapp.dcloud.io/api/ui/menuButton?id=getmenubuttonboundingclientrect](https://uniapp.dcloud.io/api/ui/menuButton?id=getmenubuttonboundingclientrect)

   ![image-20230213110201536](https://duyi-bucket.oss-cn-beijing.aliyuncs.com/uni/202302131102606.png)



# 选项卡制作

![image-20230213111015648](https://duyi-bucket.oss-cn-beijing.aliyuncs.com/uni/202302131110721.png)

## 一 、组件创建

> 1. 定义组件TabBar
> 2. index界面首页面进行组建引入

## 二、scroll-view组件使用

参考文档地址：https://uniapp.dcloud.io/component/scroll-view

> 使用scroll-view横向滚动的时候，需要注意，内部需添加一个容器对里面的滚动内容进行包裹

```vue
 <scroll-view class="tab-scroll" scroll-x="true">
      <view class="tab-scroll-box">
        <view v-for="(item, index) in navList" :key="index" class="tab-scroll-item">{{ item }}</view>
      </view>
 </scroll-view>
```

## 三、点击设置按钮跳转到标签设置界面

```vue
 <view class="tab-icons">
      <uni-icons @click="goLabelAdmin" type="gear" size="26" color="#666"></uni-icons>
    </view>

<script>
  // 创建labelAdmin界面之后进行跳转
  uni.navitageTo({url:'/pages/labelAdmin/labelAdmin'})
</script>
```

## 四、数据获取

1. 在page界面onLoad生命周期内进行_initLableList方法创建

2. 定义云函数，获取label表中的数据

   ```js
   'use strict';
   const db = uniCloud.database()
   exports.main = async (event, context) => {
   	const collection = db.collection('label')
   	const res = await collection.get()
   	
   	//返回数据给客户端
   	return {
   		code:0,
   		labelList:res.data
   	}
   };
   ```

3. page下的index界面进行数据获取，并将数据传递到tabBar组件，unicloud.callFunction方法进行数据获取

   ```json
   uniCloud.callFunction({
       name: "get_label_list",
       success:(res)=> {
      	 this.labelList = res.result.labelList
       }
   })
   ```

4. tabBar组件内部prop属性进行数据获取

   ```vue
   props: {
   			labelList: Array
   		}
   ```



# 请求方法封装

> 为了减少代码的冗余，优化代码的可读性，及可维护性，进行请求方法的封装

## 实现流程

### 一、定义公共的http请求方法

1. 创建http.js文件，导出一个封装好的promise对象（内部进行uniCloud调用)

   ```js
   export default ({name,data={}})=> {
   	/* 导出pormise对象 */
   	return new Promise((resolve,reject) => {
   		uni.showLoading({
   		})
   		uniCloud.callFunction({
   			name,
   			success({result}) {
   				if(result.code === 0) {
   					resolve(result.data)
   				}else {
   					uni.showToast({icon:"none",title:result.msg})
   				}
   			},
   			fail(err) {
   				reject(err)
   			},
   			complete() {
   				uni.hideLoading()
   			}
   		})
   	})
   }
   ```

### 二、创建接口文件进行公共方法的调用

![image-20230213114708707](https://duyi-bucket.oss-cn-beijing.aliyuncs.com/uni/202302131147814.png)

### 三、方法挂载到Vue原型上，供每个界面进行使用 

1. **使用webpacck的require.context方法对所有的请求函数收集**

   > require.context是什么？
   >
   > 一个webpack的api,通过执行require.context函数获取一个特定的上下文,主要用来实现自动化导入模块,在前端工程中,如果遇到从一个文件夹引入很多模块的情况,可以使用这个api,它会遍历文件夹中的指定文件,然后自动导入,使得不需要每次显式的调用import导入模块

   ```js
   /* 批量进行文件导出 */
   // . =>API目录的相对路径
   // true => 是否查询子目录
   // /.js/ => 需要查询的文件的后缀名
   
   const requireApi = require.context('.', true, /.js$/);
   console.log(requireApi.keys())
   let module = {};
   
   requireApi.keys().forEach((key, index) => {
   	if (key === './index.js') return
   	Object.assign(module, requireApi(key))
   })
   
   export default module
   ```

2. **main.js进行方法挂载**

   ```react
   import module from './ajax/api/index.js'
   Vue.prototype.$http = module;
   ```

   

### 四、页面/组件内部进行方法的调用

```js
onLoad() {
	this._intiLabelList()
},
methods: {
    async _intiLabelList() {
        this.labelList = await this.$http.get_label_list();
    }
}
```



# 文章列表制作

## 容器组件

### 一、定义 ArticleList 组件

1. **使用swiper组件实现滚动效果** https://uniapp.dcloud.io/component/swiper

   1. swiperItem数量动态话，当前的swiper数量应该与选项卡的数量相同

      获取选项卡的数量值，根据选项卡数量进行swiperItem渲染,index界面进行labelList传递

      ```react
      		<ArticleList :labelList="labelLIst" class="list-container"></ArticleList>
      ```

   2. ArticleList内根据swiper数量进行swiperItem渲染

      ```react
       <swiper class="swiper-container">
          <swiper-item v-for="(item,index) in labelList" :key="index">
            <view class="swiper-item uni-bg-red">
              <list-item></list-item>
            </view>
          </swiper-item>
        </swiper>
      ```

      

2. **选项卡与swiper组件联动效果实现**

   1. 选项卡点击事件绑定

      发送事件，调整activeIndex值，将activeIdnex值调整为父组件传递值

      swiper制定current属性，值为activeIndex

   2. swiper change事件监听，实现改变activeIndex属性

      ```react
       <swiper class="swiper-container" :current="activeIndex" @change="changCurrentIndex">
          <swiper-item v-for="(item,index) in labelList" :key="index">
            <view class="swiper-item uni-bg-red">
              <list-item></list-item>
            </view>
          </swiper-item>
        </swiper>
        
      <script>
        	 methods:{
            changeCurrentIndex(e) {
                const {current}  = e.detail;
                this.$emit('changeCurrentIndex',current)
           	 }
        		}
      </script>
      ```

      

### 二、选项卡自动进行位置调整

1. scroll-view 组件添加属性 scroll-with-animation及 scroll-left 属性  https://uniapp.dcloud.io/component/scroll-view

2. 动态设置scrollintoview属性，为每一项添加ID属性进行跳转切换

   ```react
    <scroll-view class="tab-scroll" scroll-x="true" :scroll-into-view="currentIndex" :scroll-with-animation="true">
         <view class="tab-scroll-box">
           <view :id="`item${index}`" @click="navClickFn(index)" :class="{active:activeIndex === index}" v-for="(item, index) in labelList" :key="index" class="tab-scroll-item">{{ item.name}}</view>
         </view>
       </scroll-view>
   
   <script>
      watch:{
   	  activeIndex(index){
   		this.currentIndex = `item${index}`
   	  }
     },
     data() {
       return {
   		currentIndex:''
       }
     }
   </script>
   ```

3. 通过watch属性监听currIndex值改变，进行currentIndex设定

```js
watch: {
	activeIndex(index) {
		this.currentIndex = `item${index}`;
	}
},
```



## 文章卡片

### 一、创建文章相关 ListItem 组件

> 使用scroll-view 实现竖向滚动容器制作，注意在样式定义时进行多级高度设定

```vue
<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<ListCard v-for="item in 50" :key="item"></ListCard>
			</view>
		</scroll-view>
</view>
```

### 二、文章卡片组件定义

1. 创建基本样式及结构

2. 定义多状态卡片模块

   1. 通过父组件传递mode属性进行条件编译

   2. 根据条件进行选项卡卡片展示


### 三、定义 uniapp 模版

1. 根目录下创建index.html文件

2. 参考地址：https://uniapp.dcloud.io/collocation/manifest?id=h5-template

3. manifest文件的html5配置中进行index.html文件引入

```html
<!DOCTYPE html>
<html lang="zh-CN">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<meta name="referrer" content="never" />
		<title><%= htmlWebpackPlugin.options.title %></title>
		<link rel="stylesheet" href="<%= BASE_URL %>static/index.<%= VUE_APP_INDEX_CSS_HASH %>.css" />
	</head>
	<body>
		<noscript>
			<strong>Please enable JavaScript to continue.</strong>
		</noscript>
		<div id="app"></div>
	</body>
</html>
```

![image-20230911164935537](https://gitee.com/luying61/note-pic/raw/master/picture/image-20230911164935537.png)

## 数据渲染

### 一、云函数创建

> 定义articleList云函数
>
> 删除不需要返回的文章详情内容

```react
'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const list = await db.collection('article')
	.aggregate()
	.project({
		content:0
	})
	.end()
	//返回数据给客户端
	return {
		code:0,
		msg:"数据请求成功",
		data:list.data
	}
};

```

### 二、前端进行数据获取

1. articleList组件 => created钩子中进行数据获取

   ```react
   created () {
       this._getArticleList()
     }
    methods: {
       async _getArticleList () {
         const articleList = await this.$http.get_article_list()
         this.articleList = articleList
       }
     }
   ```

### 三、数据渲染

listItem组件中进行循环渲染使用

```react
<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<ListCard :item="item" v-for="(item,index) in articleList" :key="index"></ListCard>
			</view>
		</scroll-view>
	</view>
```



#### 四、根据选项卡分类进行数据渲染

1. 添加全部分类选项

   ```react
   async _intiLabelList() {
   				const labelList = await this.$http.get_label_list()
   				this.labelList = [{name:"全部"},...labelList]
   			}
   ```

2. 请求articleList时进行数据传递 

   1. 为了保证导航数据的正确获取，调整created函数的_getArticle_list方法在watch中进行调用

      ```react
       watch: {
          labelList(newVal,OldVal) {
          this._getArticleList()
          },
        },
      ```

      

3. 云函数进行数据过滤调整

   ```js
   'use strict';
   const db = uniCloud.database()
   exports.main = async (event, context) => {
   	
   	const {classify} = event
   	
   	let matchObj = {}
   	
   	if(classify !== '全部') {
   		matchObj = {classify}
   	}
   	
   	const list = await db.collection('article')
   	.aggregate()   // 使用聚合的形式进行数据的获取
   	.match(matchObj)   // 根据匹配条件进行数据返回
   	.project({
   		content:0    // 本次查询不需要返回文章详情给前端
   	})
   	.end()
   	//返回数据给客户端
   	return {
   		code:0,
   		msg:"数据请求成功",
   		data:list.data
   	}
   };
   
   ```

4. 前端对数据进行缓存处理

   将原有接受内容数组转换为对象进行存储。每次change改变内容时进行判断操作处理

   使用$set方法进行对象的页面重新渲染

   ```js
   async _getArticleList (currentIndex) {
         const articleList = await this.$http.get_article_list({classify:this.labelList[currentIndex].name})
         this.$set(this.articleData,currentIndex,articleList)
       }
   ```




## 上拉加载更多

### 一、使用uni-load-more插件

下载地址：https://ext.dcloud.net.cn/plugin?id=29

使用：

```react
<uni-load-more status="loading"></uni-load-more>
```

### 二、修改参数传递

1. 前端添加page及size属性到云函数

2. 云函数内进行返回值限制处理

   ```js
   const list = await db.collection('article')
   		.aggregate() // 使用聚合的形式进行数据的获取
   		.match(matchObj) // 根据匹配条件进行数据返回
   		.project({
   			content: 0 // 本次查询不需要返回文章详情给前端
   		})
   		.skip(pageSize * (page - 1)) // 首页从0开始计算
   		.limit(pageSize) // 每页最多返回多少条数据
   		.end()
   ```

3. 监听scroll-view的scrolltolower事件，触底时进行新的数据请求，当前的page值

4. 前端调整数据处理将直接赋值变为追加数据

   ```js
    // 填充数据时改变为追加数据
         let oldList = this.articleData[currentIndex] || []
         oldList.push(...articleList)
         this.$set(this.articleData, currentIndex, oldList)
   ```


### 三、分类页数处理

1. 创建每一个分类的存储对象，含page及加载状态

   ```js
   loadData:{
   	page:1,
   	loading:loading
   }
   ```

2. 处理数据全部加载完成状态

   ```react
   // 判断当前后端没有返回数据处理 
         if(!articleList.length) {
           this.loadData[currentIndex] = {
             loading:"noMore",
             page:this.loadData[currentIndex].page
           }
           this.$forceUpdate()
           return 
         }
   ```

   



















​	



