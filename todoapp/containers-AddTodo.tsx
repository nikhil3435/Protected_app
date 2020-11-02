import React, {ChangeEvent, useState} from 'react'
import { addTodo } from './actions-index'
import { useDispatch } from 'react-redux'
const { connect } = require('react-redux');

const AddTodo: React.FC = () => {

    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
    
    const addChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }
    
    const TodoSubmitHandler = () => {
        dispatch(addTodo(newTodo));
        setNewTodo('');
    }

    return (
        <div>
            <h1>My Todo List</h1>
            <input 
                type="text"
                value={newTodo}
                onChange={addChangeHandler}
            />
            <button onClick = {TodoSubmitHandler} >
                Add Todo
            </button>
        </div>
    );
};

export default connect()(AddTodo)
