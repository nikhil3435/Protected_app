import React from 'react'
import Todo from './components-Todo'
import { TodoSample } from './types'


interface TodoListProps {
    todos: TodoSample[];
    onTodoClick: (id: number) => {
        type: string;
        id: number;
    };
}

const TodoList: React.FC<TodoListProps> = ({todos, onTodoClick})  => {
    return (
    <ul>
        {todos.map((todo: TodoSample) =>(
            <Todo
                key={todo.id}
                task={todo}
                onClick = {() => onTodoClick(todo.id)}
            />
            ))
        }
    </ul>
)}

export default TodoList