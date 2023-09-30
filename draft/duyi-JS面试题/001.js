// 根据下面 *ES6* 构造函数的书写方式，要求写出 *ES5* 的
// class Example { 
//   constructor(name) { 
//     this.name = name;
//   }
//   init() { 
//     const fun = () => { console.log(this.name) }
//     fun(); 
//   } 
// }
// const e = new Example('Hello');
// e.init();

// ES 5
function Example(name) {
  'use strict';
  if (!new.target) {
       throw new TypeError('Class constructor cannot be invoked without new');
  }
  this.name = name;
}

Object.defineProperty(Example.prototype, 'init', {
  enumerable: false,
  value: function () {
       'use strict';
       if (new.target) {
           throw new TypeError('init is not a constructor');
       }
       var fun = function () {
           console.log(this.name);
       }
       fun.call(this);
  }
})
const e = new Example('Hello');
e.init();