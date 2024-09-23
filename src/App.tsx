import { Center, Container, Heading } from "@chakra-ui/react";
import { TodoList } from "./componennts/TodosList/TodoList.tsx";
import { TodoInput } from "./componennts/TodoInput/TodoInput.tsx";
import { useState } from "react";
export interface ITodo {
  value: string;
  id: string;
}
export const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoValue, setTodoValue] = useState("");
  const [selectedTodo, setSelectedTodo] = useState<string | null>(null);
  const createTodo = () => {
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
    setTodoValue("");
  };
  const onStartEdit = (id: string, value: string) => {
    setSelectedTodo(id);
    setTodoValue(value);
  };

  const deleteTodo = (id: string) => {
    setTodos(() => todos.filter((todo) => todo.id !== id));
    setSelectedTodo(null);
  };

  return (
    <div style={{ background: "#2654fc" }}>
      <Container maxW={"560px"}>
        <Center>
          <Heading color={"white"}>TO-DO LIST</Heading>
        </Center>
        <TodoInput
          value={todoValue}
          onChange={setTodoValue}
          addTodo={createTodo}
          todoText={selectedTodo ? "EDIT" : "ADD"}
        />
        <TodoList todos={todos} deleteTodo={deleteTodo} onEdit={onStartEdit} />
      </Container>
    </div>
  );
};
