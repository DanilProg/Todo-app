import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Pencil, Trash2 } from "lucide-react";

export const Todo = ({
  value,
  onDelete,
  onEdit,
}: {
  value: string;
  id: string;
  onDelete: () => void;
  onEdit: () => void;
}) => {
  return (
    <InputGroup>
      <Input
        variant="flushed"
        placeholder="Flushed"
        value={value}
        color={"black"}
        readOnly
      />
      <InputRightElement>
        <Trash2 color="#ff0000" cursor="pointer" onClick={onDelete} />
        <Pencil color="#000000" cursor={"pointer"} onClick={onEdit} />
      </InputRightElement>
    </InputGroup>
  );
};
