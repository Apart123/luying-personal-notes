// 数组去重有哪些方法？

// 数字或字符串数组去重，效率高
function unique1(arr) {
  var result = {}; // 利用对象属性名的唯一性来保证不重复
  for (var i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) {
      result[arr[i]] = true;
    }
  }
  return Object.keys(result); // 获取对象所有属性名的数组
}

// 任意数组去重，适配范围广，效率低
function unique2(arr) {
  var result = []; // 结果数组
  for (var i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 利用ES6的Set去重，适配范围广，效率一般，书写简单
function unique3(arr) {
  return [...new Set(arr)];
}
