import { combineReducers } from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'

export default combineReducers({
	user: userReducer,
	todo: todoReducer,
})
