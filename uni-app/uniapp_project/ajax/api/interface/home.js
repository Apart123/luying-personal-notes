import ajax from "../../http.js";

export const get_label_list = data => ajax({
	name: "get_label_list",
	data,
});

// 获取文章列表
export const get_article_list = data => ajax({
	name: "get_article_list",
	data
})