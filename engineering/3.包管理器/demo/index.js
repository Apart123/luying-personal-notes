// const _ = require("lodash");
const Mock = require("mockjs");

// console.log(_.chunk([1,2,3,4,5,6], 3));

const result = Mock.mock({
    name: "@cname",
});
console.log(result);