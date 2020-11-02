import React from 'react'
import { TodoSample } from './types'

interface TodoProps {
    key: number;
    task: TodoSample;
    onClick: () => any;
}

const Todo : React.FC<TodoProps> = ({key, task, onClick}) => (
    <li 
        key={key}
        onClick={onClick}
        style={{
            textDecoration:
                task.completed ? 'line-through' : 'none'
        }}
    >
        {task.text}
    </li>
);

export default Todo