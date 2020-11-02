import React from 'react'
import AddTodo from './containers-AddTodo'
import Footer from './components-Footer'
import VisibleTodoList from './containers-VisibleTodoList'
import LogoutFooter from '../components/LogoutFooter'


const TodoApp = () => {
    const[showFooter,setFooter] = React.useState(false)
    return(
        <div>
            <AddTodo />
            <VisibleTodoList />
            <button onClick={()=> setFooter(!showFooter)}>
                {showFooter? 'hide': 'show'} footer
            </button>
            {showFooter && <Footer />}
            <LogoutFooter />
        </div>
    )
}

export default TodoApp
