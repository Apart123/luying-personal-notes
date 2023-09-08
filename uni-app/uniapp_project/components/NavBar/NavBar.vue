<template>
	<view class="nav-bar">
		<!-- 展示区 -->
		<view class="nav-bar-top">
			<!-- 处理 app 以及 小程序 的导航栏 -->
			<view :style="{height:statusHeight + 'rpx'}"></view>
			<view @click="goSearchPage" class="nav-bar-content" :style="{marginRight:marginRight + 'rpx'}">
				<uni-icons type="search" color="#999"></uni-icons>
				<view class="nav-bar-seatch-txt">
					输入文章标题进行搜索
				</view>
			</view>
		</view>
		<!-- 底部的占位垫片 -->
		<view :style="{height:statusHeight + 80 + 'rpx'}" ></view>
	</view>
</template>

<script>
	export default {
		name: "NavBar", // 方便 devtools 查看
		data() {
			return {
				statusHeight: 20,
				marginRight: 0
			};
		},
		created() {
			// 初始化获取状态栏高度
			this.initStatusBarHeight();
		},
		methods: {
			initStatusBarHeight() {
				const systemInfo = uni.getSystemInfoSync()
				this.statusHeight = systemInfo.statusBarHeight ? systemInfo.statusBarHeight * 2 : 20;
				/* 
				小程序，进行胶囊处理 
				uni.getMenuButtonBoundingClientRect 胶囊信息获取，得到的值单位是 px
				*/
				// #ifdef MP-WEIXIN
				const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.marginRight = menuButtonInfo.width * 2
				this.statusHeight = menuButtonInfo.top * 2
				// #endif
			},
			goSearchPage() {
				uni.navigateTo({
					url: "/pages/search/search"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "./css/NavBar.scss";
</style>