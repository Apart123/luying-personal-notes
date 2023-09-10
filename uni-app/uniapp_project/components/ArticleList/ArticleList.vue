<template>
	<swiper :current="activeIndex">
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
		    changeCurrentIndex(e) {
		        const {current}  = e.detail;
		        this.$emit('changeCurrentIndex',current)
		    }
		}
	}
</script>

<style>

</style>