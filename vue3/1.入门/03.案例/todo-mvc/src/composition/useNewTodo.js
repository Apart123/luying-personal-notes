import { ref } from "vue";
import { generateId } from "../util/todoStorage";

export default function useNewTodo(todoRef) {
  const newTodoRef = ref("");
  const addTodo = () => {
    const value = newTodoRef.value && newTodoRef.value.trim();
    if (!value) return;
    // 生成任务对象，将其添加到任务列表中
    const todo = {
      id: generateId(),
      title: value,
      completed: false,
    };
    todoRef.value.push(todo);
    newTodoRef.value = "";
  };
  return {
    newTodoRef,
    addTodo,
  };
}
