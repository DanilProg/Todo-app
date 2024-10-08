import { Todo } from "../Todo/Todo.tsx";
import { Box } from "@chakra-ui/react";
import { ITodo } from "../../App.tsx";
import { memo } from "react";
interface TodoListProps {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
  onEdit: (id: string, value: string) => void;
}

export const TodoList = memo(({ todos, deleteTodo, onEdit }: TodoListProps) => {
  return (
    <Box bg="white" p={"18px"} borderRadius={"6px"}>
      {todos.map((todo) => {
        const onStartEdit = () => {
          onEdit(todo.id, todo.value);
        };
        const onDelete = () => {
          deleteTodo(todo.id);
        };
        return (
          <Todo
            value={todo.value}
            key={todo.id}
            onDelete={onDelete}
            onEdit={onStartEdit}
            id={todo.id}
          />
        );
      })}
    </Box>
  );
});
