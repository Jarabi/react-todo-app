import { DeleteButtonProps } from "../lib/types";

export default function DeleteButton({ id, onDeleteTodo }: DeleteButtonProps) {
  return (
    <button onClick={(e) => {
      e.stopPropagation();
      onDeleteTodo(id);
    }}>❌</button>
  )
}
