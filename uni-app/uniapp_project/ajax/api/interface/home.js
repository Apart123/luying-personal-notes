import ajax from "../../http.js";

export const get_label_list = data => ajax({
	name: "get_label_list",
	data,
})