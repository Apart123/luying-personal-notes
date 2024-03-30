function createPerson(firstName, lastName) {
  var obj = {};
  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.fullNmae = firstName + lastName;
  obj.sayHi = function() {
    console.log("我的名字叫做：", obj.fullNmae);
  }

  return obj;
}

// 构造函数
function Person(firstName, lastName) {
  // var obj = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullNmae = firstName + lastName;
  this.sayHi = function() {
    console.log("我的名字叫做：", this.fullNmae);
  }

  // return this;
}