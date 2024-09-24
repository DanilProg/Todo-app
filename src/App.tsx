import { Center, Container, Heading } from "@chakra-ui/react";
import { useAppTodo } from "./hook/useAppTodo/useAppTodo.ts";
import { TodoInput } from "./componennts/TodoInput/TodoInput.tsx";
import { TodoList } from "./componennts/TodosList/TodoList.tsx";

export interface ITodo {
  value: string;
  id: string;
}
export const App = () => {
  const { createTodo, deleteTodo, onStartEdit, todos, selectedTodo, todoText } =
    useAppTodo([]);
  return (
    <div style={{ background: "#2654fc" }}>
      <Container maxW={"560px"}>
        <Center>
          <Heading color={"white"}>TO-DO LIST</Heading>
        </Center>
        <TodoInput
          valueEdit={todoText || ""}
          addTodo={createTodo}
          todoTextBtn={selectedTodo ? "EDIT" : "ADD"}
        />
        <TodoList todos={todos} deleteTodo={deleteTodo} onEdit={onStartEdit} />
      </Container>
    </div>
  );
};
