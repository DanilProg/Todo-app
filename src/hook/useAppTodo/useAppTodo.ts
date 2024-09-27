import { useCallback, useState } from "react";
import { ITodo } from "../../App.tsx";

export const useAppTodo = (initialTodos: ITodo[]) => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [todoValue, setTodoValue] = useState<string>("");
  const [selectedTodo, setSelectedTodo] = useState<string | null>(null);
  const [countId, setCountId] = useState(0);
  const createTodo = () => {
    const trimValue = todoValue.trim();
    if (!todoValue) return;
    if (!selectedTodo) {
      setCountId((prevState) => prevState + 1);
      const todo = {
        value: trimValue,
        id: String(countId),
      };
      setTodos([...todos, todo]);
    } else {
      setTodos(() =>
        todos.map((todo) => {
          if (selectedTodo === todo.id) {
            todo.value = trimValue;
            return todo;
          }
          return todo;
        }),
      );
      setSelectedTodo(null);
    }
    setTodoValue("");
  };
  const onStartEdit = useCallback((id: string, value: string) => {
    setSelectedTodo(id);
    setTodoValue(value);
  }, []);

  const deleteTodo = useCallback(
    (id: string) => {
      setTodos(() => todos.filter((todo) => todo.id !== id));
      setSelectedTodo(null);
      setTodoValue("");
    },
    [todos],
  );
  return {
    createTodo,
    deleteTodo,
    onStartEdit,
    todos,
    selectedTodo,
    todoValue,
    setTodoValue,
  };
};
