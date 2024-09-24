import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

interface TodoInputProps {
  value: string;
  addTodo: () => void;
  todoTextBtn: string;
  onChange: (value: string) => void;
}
export const TodoInput = ({
  addTodo,
  todoTextBtn,
  value,
  onChange,
}: TodoInputProps) => {
  return (
    <InputGroup bg="white" borderRadius={"6px"} my={"12px"}>
      <Input
        color="teal"
        placeholder="Создать задачу"
        _placeholder={{ color: "inherit" }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <InputRightElement>
        <Button colorScheme="blue" size="sm" onClick={addTodo}>
          {todoTextBtn}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
