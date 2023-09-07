<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
			<input type="text" v-model="responsiveTxt">
			<view>{{responsiveTxt}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				responsiveTxt: "今天是个好日子"
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
