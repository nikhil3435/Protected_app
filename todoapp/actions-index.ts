let nextTodoId = 2

export const addTodo = (text: string) => {
    return ({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    })
};

export const  toggleTodo = (id: number) => {
    return ({
        type: 'TOGGLE_TODO',
        id
    })
};

export const setVisibilityFilter = (filter: string) => {
    return ({
        type: 'SET_VISIBILITY_FILTER',
        filter
    })
};