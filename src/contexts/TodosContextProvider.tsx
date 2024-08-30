import { createContext, useEffect, useState } from 'react';
import { Todo } from '../lib/types';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

interface TodosContextProviderProps {
    children: React.ReactNode;
}

type TodosContextType = {
    todos: Todo[];
    totalTodos: number;
    completedTodos: number;
    handleAddTodo: (todoText: string) => void;
    handleToggleTodo: (id: number) => void;
    handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TodosContextType | null>(null);

const getInitialTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
};

export default function TodosContextProvider({
    children,
}: TodosContextProviderProps) {
    const { isAuthenticated } = useKindeAuth();
    // State
    const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

    // Derived state
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.isCompleted).length;

    // Handlers / actions
    const handleAddTodo = (todoText: string) => {
        if (todos.length >= 3 && !isAuthenticated) {
            alert('Login to add more than 3 todos');
            return;
        } else {
            setTodos((prev) => [
                ...prev,
                {
                    id: prev.length + 1,
                    text: todoText,
                    isCompleted: false,
                },
            ]);
        }
    };

    const handleToggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? {
                          ...todo,
                          isCompleted: !todo.isCompleted,
                      }
                    : todo;
            })
        );
    };

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Side effects
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodosContext.Provider
            value={{
                todos,
                totalTodos,
                completedTodos,
                handleAddTodo,
                handleToggleTodo,
                handleDeleteTodo,
            }}
        >
            {children}
        </TodosContext.Provider>
    );
}
