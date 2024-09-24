import { useState } from "react";
import { ITodo } from "../../App.tsx";

export const useAppTodo = (initialTodos: ITodo[]) => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [todoText, setTodoText] = useState<string>("");
  const [selectedTodo, setSelectedTodo] = useState<string | null>(null);
  const createTodo = (todoValue: string) => {
    const trimValue = todoValue.trim();
    if (!todoValue) return;
    if (!selectedTodo) {
      const todo = {
        value: trimValue,
        id: String(todos.length),
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
    setTodoText("");
  };
  const onStartEdit = (id: string, value: string) => {
    setSelectedTodo(id);
    setTodoText(value);
  };
  const deleteTodo = (id: string) => {
    setTodos(() => todos.filter((todo) => todo.id !== id));
    setSelectedTodo(null);
  };
  return {
    createTodo,
    deleteTodo,
    onStartEdit,
    todos,
    selectedTodo,
    todoText,
    setTodoText,
  };
};
