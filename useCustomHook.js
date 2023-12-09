import { useState } from "react";
import { ChangeStatus, todoList } from "./TodoList";

const useCustomHook = (initialValue) => {
    const [todoCompletionValue, setTodoCompletionValue] = useState(initialValue);

    const toggle = (todoId) => {
        setTodoCompletionValue(!todoCompletionValue);
        const index = todoList.findIndex((todo) => todo.id == todoId);

        if (index > -1) {
            ChangeStatus(index);
        }
    };

    return { todoCompletionValue, toggle };
};

export default useCustomHook;
