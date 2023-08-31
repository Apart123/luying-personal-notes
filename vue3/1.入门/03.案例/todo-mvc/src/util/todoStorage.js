const LOCAL_KEY = "todomvc";

/**
 * 获取目前所有任务
 */
export function fetch() {
  const result = localStorage.getItem(LOCAL_KEY);
  if(result) {
    // 转为对象
    return JSON.parse(result);
  }
  return [];
}

/**
 * 保存所有任务
 * @param {*} todos 任务列表
 */
export function save(todos) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}

/**
 * 生成任务对象的唯一编号：时间戳 + 4位随机数
 * @returns 随机 id
 */
export function generateId() {
  return Date.now() + Math.random().toString(16).substring(2, 6);
}

/**
 * 
 * @param {*} todos 
 * @param {*} visibility 
 * @returns 
 */
export function filter(todos, visibility = "all") {
  if (visibility === "all") {
    return todos;
  } else if (visibility === "active") {
    return todos.filter((it) => !it.completed);
  } else if (visibility === "completed") {
    return todos.filter((it) => it.completed);
  }
  throw new Error("invalid visibility value");
}