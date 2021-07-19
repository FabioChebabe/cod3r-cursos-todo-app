import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

//objeto que sera retornado pela arrow function
const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer