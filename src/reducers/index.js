import { combineReducers } from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'
import commentReducer from './commentReducer'

export default combineReducers({
	user: userReducer,
	todo: todoReducer,
	comment: commentReducer
})