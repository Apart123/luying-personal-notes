<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar  :labelList="labelList"></TabBar>
		<ArticleList class="list-container"></ArticleList>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._intiLabelList()
		},
		data() {
			return {
				labelList: []
			}
		},
		methods: {
			async _intiLabelList() {
				this.labelList = await this.$http.get_label_list();
				// uniCloud.callFunction({
				// 	name: "get_label_list",
				// 	success:(res)=> {
				// 		// 不使用箭头函数，this 指向的是 "get_label_list"
				// 		this.labelList = res.result.labelList
				// 	}
				// })
			}
		},
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}
	.home-container {
		overflow: hidden;
		flex:1;
		box-sizing: border-box;
		@include flex(flex-start,column);
		align-items: inherit;
	}
	.list-container {
		flex: 1;
		box-sizing: border-box;
	}
</style>
