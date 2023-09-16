console.log("script start");
async function async1() {
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 end");
}
async1();
setTimeout(function () {
  console.log("setTimeout");
}, 0);
new Promise((resolve) => {
  console.log("Promise");
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("script end");

// 每次调用栈执行完一个宏任务之后，都会去查看微任务队列，如果microtask queue不
// 为空，则会执行微任务队列中的任务，直到微任务队列为空再返回去查看执行宏任务队列中的任务

// 宏任务
// setTimeout/setInterval
// ajax
// setImmediate (Node 独有)
// requestAnimationFrame (浏览器独有)
// I/O
// UI rendering (浏览器独有)

// 微任务
// process.nextTick (Node 独有)
// Promise
// Object.observe
// MutationObserver

