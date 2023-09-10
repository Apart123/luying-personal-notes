export default ({name, data = {}}) => {
	return new Promise((resolve, reject) => {
		// 打开一个 loading 弹窗
		uni.showLoading({});
		// uniCloud 函数调用，真正的发起数据的请求
		uniCloud.callFunction({
			name,
			success({result}) {  // 请求发送成功
				if(result.code === 0) {  // 能够拿到数据
					resolve(result.data);
				}else {
					uni.showToast({  // 提示框，一般是后端没有查询到的数据值
						icon: "none",
						title: result.msg,
					})
				}
			},
			fail(err) {  // 请求失败，一般是网络原因，后端的错误
				reject(err);
			},
			complete() {  // 请求完成
				uni.hideLoading();  // 关闭弹窗
			}
		})
	});
}