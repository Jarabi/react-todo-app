import { useTodoContext } from '../lib/hooks';
import DeleteButton from './DeleteButton';

export default function TodoList() {
    const { todos, handleToggleTodo, handleDeleteTodo } = useTodoContext();

    return (
        <ul>
            {todos.length === 0 && (
                <li className='h-full flex justify-center items-center font-semibold'>
                    Start by adding a todo
                </li>
            )}
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className='flex justify-between items-center px-8 h-[3.125rem] text-[0.875rem] cursor-pointer border-b border-black/[8%]'
                    onClick={() => {
                        handleToggleTodo(todo.id);
                    }}
                >
                    <span
                        className={`${
                            todo.isCompleted ? 'line-through text-[#ccc]' : ''
                        }`}
                    >
                        {todo.text}
                    </span>
                    <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
                </li>
            ))}
        </ul>
    );
}
