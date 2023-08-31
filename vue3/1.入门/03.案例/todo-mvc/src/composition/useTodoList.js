import { ref, watchEffect } from "vue";
import * as todoStorage from "../util/todoStorage";

export default function useTodeList() {
  const todosRef = ref(todoStorage.fetch());
  watchEffect(() => {
    // 监控完整列表的变化
    todoStorage.save(todosRef.value);
  });
  return {
    todosRef,
  };
}
