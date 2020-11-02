import { combineReducers } from 'redux'
import todos from './reducers-todos'
import visibilityFilter from './reducers-visibilityFilter'
import LoginReducer from '../components/LoginReducer'

export const AppReducer = combineReducers({
    todos,
    visibilityFilter,
    LoginReducer
});
