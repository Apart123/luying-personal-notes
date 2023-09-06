<template>
	<view class="nav-bar-container">
		<view class="nav-bar-top">
			<!-- 垫片 -->
			<view :style="{height: statusHeight + 'rpx'}"></view>
			<view @click="toSearchPage" class="nav-bar-content" :style="{marginRight: statusRight + 'rpx'}">
				<uni-icons type="search" size=20 color="#999" style="padding-left: 10rpx;"></uni-icons>
				<view class="nav-bar-search-txt" >输入标题关键字进行文章搜索</view>
			</view>
		</view>
		<!-- 垫片 -->
		<view :style="{paddingTop: statusHeight+ 80 + 'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		name: "NavBar",
		created() {
			this.getStatusHeight();
		},
		data() {
			return {
				statusHeight: 20,
				statusRight: 0,
				
			};
		},
		methods: {
			async getStatusHeight() {
				const systemInfo = await uni.getSystemInfo();
				systemInfo.statusBarHeight && (this.statusHeight = systemInfo.statusBarHeight);
				// #ifdef MP-WEIXIN
				const menuRect = uni.getMenuButtonBoundingClientRect();
				this.statusHeight = menuRect.top * 2;
				this.statusRight = menuRect.width * 2 ;
				// #endif
			},
			toSearchPage() {
				uni.navigateTo({
					url: "/pages/search/search",
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "css/Navbar.scss"
</style>