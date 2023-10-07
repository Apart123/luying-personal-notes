// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变
// 对数组：实现浅拷贝数组与截取数组,返回的是截取拷贝后的新数组,原数组不会改变

// 对字符串：还可以提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

let arr = ["one", "two", "three", "four", "five", "six"];
// slice(起始下标,结束下标) 没有结束下标就默认到最后 包括起始下标

let sliceArr0 = arr.slice(); // 浅拷贝数组 ['one', 'two', 'three', 'four', 'five']
let sliceArr1 = arr.slice(2); // 从下标2开始到最后一个   ['three', 'four', 'five']
let sliceArr2 = arr.slice(3, 5); //从下标3开始到5结束，包括3不包括5   ['four', 'five']
let sliceArr3 = arr.slice(-2); //倒数第二个到最后一个   ['four', 'five']

console.log(sliceArr0);
console.log(sliceArr1);
console.log(sliceArr2);
console.log(sliceArr3);

let str = '123456'
console.log(str.slice(1, 2)) //从下标为1开始到下标为2结束，包括1不包括2   结果：2


/**
 * splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组
 *
 * 可以实现数组的删除/截取/替换/添加,返回的是被删除/截取/替换的原数组的数据,同时原数组会被改变
 *
 * 语法：splice(起始下标,删除个数,插入的数1,插入的数2,...) (包括起始下标本身)
 *
 * 一个参数时就是删除从该下标开始的后面所有数,返回值是下标往后的数组,相当于截取,同时原数组只剩下该下标前的数,也相当于删除。相当于 取原数组=删除、 取返回的数组=截取
 *
 * 两个参数时，第一个参数依旧是开始删除的下标，第二个参数为删除的个数。返回的是删除的数、原数组会被改成删除后的数组。此时 取原数组=删除、 取返回的数组=截取
 */

let arr2 = ["first", "second", "third", "forth", "fifth"];

let spliceArr2 = arr2.splice(2, 1);
console.log(arr2); //原数组被从下标为2的开始截取一位,此处原数组中的这一位被删除,原数组结果为 ['first', 'second', 'forth', 'fifth']
console.log(spliceArr2); //这是被截取的下标为2的一位结果为:['third']
