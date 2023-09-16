<template>
	<!-- current 当前所在滑块index -->
	<swiper class="swiper-container" :current="activeIndex" @change="changeActiveIndex">
		<swiper-item v-for="(item, index) in labelList" :key="item._id">
			<view class="swiper-item">
				<ListItem :articleList="articleData[index]" @loadMore="loadMoreData"></ListItem>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: "ArticleList",
		props: {
			labelList: Array,
			activeIndex: Number
		},
		created() {
			// this._getArticleList();
		},
		watch: {
			labelList(newValue, oldValue) {
				this._getArticleList(this.activeIndex);
			}
		},
		data() {
			return {
				articleData: {},
			};
		},
		methods: {
			// 触底加载更多内容事件
			loadMoreData() {
				this.page++,
					this._getArticleList(this.activeIndex)
			},
			changeActiveIndex(e) {
				// 获取当前页面的索引值
				const index = e.detail.current;
				this.$emit('changeActiveIndex', index)
				if (!this.articleData[index] || !this.articleData[index].length) {
					this._getArticleList(index)
				}
			},
			// 数据请求函数
			async _getArticleList(currentIndex) {
				// console.log(this.labelList, this.activeIndex)
				const {
					articleList,
					total
				} = await this.$http.get_article_list({
					classify: this.labelList[currentIndex].name
				});
				this.$set(this.articleData, currentIndex, articleList);
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