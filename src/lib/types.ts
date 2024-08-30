type Todo = {
    id: number;
    text: string;
    isCompleted: boolean;
};

type TodoListProps = {
    todos: Todo[];
    handleToggleTodo: (id: number) => void;
    handleDeleteTodo: (id: number) => void;
};

type AddTodoFormProps = {
    handleAddTodo: (todoText: string) => void;
};

type ButtonProps = {
    onClick?: () => Promise<void>;
    buttonType?: 'primary' | 'secondary';
    children: React.ReactNode;
};

type HeaderProps = {
    totalTodos: number,
    completedTodos: number
};

type DeleteButtonProps = {
    id: number;
    onDeleteTodo: (id: number) => void;
};

export type { Todo, TodoListProps, AddTodoFormProps, ButtonProps, HeaderProps, DeleteButtonProps };