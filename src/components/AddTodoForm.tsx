import { useState } from "react";
import Button from "./Button";
import { useTodoContext } from "../lib/hooks";

export default function AddTodoForm() {
    const [todoText, setTodoText] = useState("")
    const { handleAddTodo } = useTodoContext();
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (!todoText.trim()) return
            handleAddTodo(todoText)
            setTodoText('');
        }}>
            <h2 className='form-medium text-[#231d15]'>Add a todo</h2>
            <input
                type='text'
                className='h-[2.8125rem] border border-black/[12%] rounded-[5px] my-[0.5625rem] text-[0.875rem] block w-full px-[1rem]'
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <Button>Add to list</Button>
        </form>
    );
}
