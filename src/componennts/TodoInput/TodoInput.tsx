import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface TodoInputProps {
  valueEdit: string;
  addTodo: (value: string) => void;
  todoTextBtn: string;
}
export const TodoInput = ({
  addTodo,
  todoTextBtn,
  valueEdit,
}: TodoInputProps) => {
  const [value, setValue] = useState<string>(valueEdit);
  useEffect(() => {
    setValue(valueEdit);
  }, [valueEdit]);
  return (
    <InputGroup bg="white" borderRadius={"6px"} my={"12px"}>
      <Input
        color="teal"
        placeholder="Создать задачу"
        _placeholder={{ color: "inherit" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <InputRightElement>
        <Button
          colorScheme="blue"
          size="sm"
          onClick={() => {
            addTodo(value);
            setValue("");
          }}
        >
          {todoTextBtn}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
