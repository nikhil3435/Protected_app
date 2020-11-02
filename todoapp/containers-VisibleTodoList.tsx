//import { connect } from 'react-redux'
import { Dispatch } from 'react'
import { toggleTodo } from './actions-index'
import TodoList from './components-TodoList'
import { TodoSample, ToggleDispatch} from './types'
const { connect } = require('react-redux');

const getVisibleTodos = (
    todos : TodoSample[], filter: string = 'SHOW_ALL'
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
        default:
            return todos; 
    }
}

const mapStateToTodoListProps = (
    state: {todos: TodoSample[]; visibilityFilter: string}
) => ({
    todos: getVisibleTodos(
        state.todos,
        state.visibilityFilter
    )
})

const mapDispatchToTodoListProps = (
    dispatch: Dispatch<ToggleDispatch>
) => ({
    onTodoClick: (id: number) => {
        dispatch(toggleTodo(id));
    }
})

const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList