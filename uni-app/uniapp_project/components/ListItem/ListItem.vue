<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll" @scrolltolower="loadMore">
			<view>
				<ListCard :item="item" v-for="item in articleList" :key="item._id">item</ListCard>
			</view>
			<uni-load-more status="loading"></uni-load-more>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "ListItem",
		props: {
			articleList: Array,
		},
		data() {
			return {
			};
		},
		methods: {
			loadMore() {
				this.$emit("loadMore")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-scroll-container {
		height: 100%;

		.list-scroll {
			overflow: hidden;
			height: 100%;
			box-sizing: border-box;
		}
	}
</style>