<template>
	<!-- current 当前所在滑块index -->
	<swiper :current="activeIndex" @change="changeActiveIndex">
		<swiper-item v-for="(item, index) in labelList" :key="index">
			<view class="swiper-item">
				{{item.name}}
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

<style>

</style>