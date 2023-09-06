<template>
	<view class="index-container">
		<NavBar></NavBar>
		<!-- 选项卡 -->
		<TabBar :labelList="labelList"></TabBar>
	</view>

</template>

<script>
export default {
	onLoad() {
		this._initLabelList();
	},
	data() {
		return {
			labelList: [],
		}
	},
	methods: {
		_initLabelList() {
			uniCloud.callFunction({
				name: "get_label_list",
				success: (res) => {
					this.labelList = res.result.data;
				}
			})
		}
	}
}
</script>

<style></style>