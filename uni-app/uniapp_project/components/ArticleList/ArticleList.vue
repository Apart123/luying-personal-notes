<template>
	<!-- current 当前所在滑块index -->
	<swiper class="swiper-container" :current="activeIndex" @change="changeActiveIndex">
		<swiper-item v-for="(item, index) in labelList" :key="index">
			<view class="swiper-item">
				<ListItem></ListItem>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name:"ArticleList",
		props: {
			labelList: Array,
			activeIndex: Number
		},
		data() {
			return {
				
			};
		},
		methods:{
		    changeActiveIndex(e) {
		        const index  = e.detail.current;
		        this.$emit('changeActiveIndex',index)
		    }
		}
	}
</script>

<style scoped lang="scss">
	.swiper-container {
		height: 100%;
		.swiper-item {
			height: 100%;
			overflow: hidden;
		}
	}
</style>