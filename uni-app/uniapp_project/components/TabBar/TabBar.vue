<template>
	<view class="tab">
		<!-- 滚动区域 -->
		<scroll-view class="tab-scroll" scroll-x="true" scroll-with-animation="true" :scroll-into-view="currentIndex">
			<view class="tab-scroll-box">
				<view @click="changeActiveIndex(index)" :class="{active:activeIndex === index}"
					v-for="(item, index) in labelList" :key="index" class="tab-scroll-item" :id="`item${index}`">{{ item.name }}
				</view>
			</view>
		</scroll-view>
		<!-- 设置图标 -->
		<view class="tab-icons">
			<uni-icons @click="goLabelAdmin" type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	// list: ["meng", "JIA", "JIALAND", "jiajia", "mengjia", "meng", "JIA", "JIALAND", "jiajia", "mengjia"]
	export default {
		name: "TabBar",
		props: {
			labelList: Array,
			activeIndex: Number,
		},
		watch: {
			activeIndex(index) {
				this.currentIndex = `item${index}`;
			}
		},
		data() {
			return {
				currentIndex: 'item0'
			}
		},
		methods: {
			goLabelAdmin() {
				uni.navigateTo({
					url: "/pages/labelAdmin/labelAdmin"
				})
			},
			changeActiveIndex(index) {
				this.$emit("changeActiveIndex", index)
			}
		},
	}
</script>

<style scoped lang="scss">
	@import "./css/TabBar.scss";
</style>