<template>
	<view class="tab-bar-container">
		<scroll-view scroll-x="true" class="tab-bar-scroll">
			<view class="tab-bar-box">
				<view :class="{active: itemIndex === index}" class="tab-bar-item" v-for="(item, index) in labelList" :key="item._id">
					{{item.name}}
				</view>
			</view>
		</scroll-view>

		<view class="tab-bar-icon">
			<uni-icons type="gear" size="24" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "TabBar",
		props: {
			labelList: Array
		},
		data() {
			return {
				itemIndex: 3,
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "css/TabBar.scss"
</style>