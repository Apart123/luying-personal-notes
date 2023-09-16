'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const {
		classify,
		page = 1,
		pageSize = 10
	} = event;
	let matchObj = {}
	if (classify != "全部") {
		matchObj = {
			classify
		}
	}
	const list = await db.collection("article") 	
		.aggregate()   	// 使用聚合的形式进行数据的获取
		.match(matchObj)		
		.project({ 
			content: 0
		})
		.skip(pageSize * (page - 1))
		.limit(pageSize)
		.end();
		
		const {total} = await db.collection("article").where(matchObj).count();
	//event为客户端上传的参数
	// console.log('event : ', event)

	//返回数据给客户端
	return {
		code: 0,
		msg: "数据获取成功",
		data: {
			articleList: list.data,
			total
		},
	}
};