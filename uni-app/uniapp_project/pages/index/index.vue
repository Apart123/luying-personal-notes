<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar  :labelList="labelList"></TabBar>
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
			_intiLabelList() {
				uniCloud.callFunction({
					name: "get_label_list",
					success:(res)=> {
						this.labelList = res.result.labelList
					}
				})
			}
		},
	}
</script>

<style>
</style>
