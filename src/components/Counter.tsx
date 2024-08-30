import { useTodoContext } from "../lib/hooks";

export default function Counter() {
    const { totalTodos, completedTodos } = useTodoContext();
    return (
        <p>
            <b>
                {completedTodos}
            </b> / {totalTodos} todos completed
        </p>
    );
}
