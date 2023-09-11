<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<ListCard :item="item" v-for="(item, index) in itemList" :key="index">item</ListCard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"ListItem",
		data() {
			return {
				itemList: [
					{mode: "base"},
					{mode: "column"},
					{mode: "base"},
					{mode: "image"},
					{mode: "image"},
					{mode: "column"},
				]
			};
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