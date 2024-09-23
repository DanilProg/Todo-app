import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
interface TodoInputProps {
  value: string;
  onChange: (value: string) => void;
  addTodo: () => void;
  todoText: string;
}
export const TodoInput = ({
  onChange,
  value,
  addTodo,
  todoText,
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
          {todoText}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
