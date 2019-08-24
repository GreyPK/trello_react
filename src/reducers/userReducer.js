import { ADD_USER, DELETE_USER, SET_CURRENT_USER, SET_USERS, CLEAR_CURRENT_USER } from '../actions/types'

const initialState = {
	users: [{
		id: '61fb16ea-034e-4472-a810-c78700f70dd4',
		name: 'ivan'
	}],
	current: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				users: [...state.users, action.payload]
			}

		case SET_USERS:
			return {
				...state,
				users: action.payload
			}

		case DELETE_USER:
			return {
				...state,
				users: state.users.filter(user => user.id !== action.payload)
			}

		case SET_CURRENT_USER:
			return {
				...state,
				current: action.payload
			}

		case CLEAR_CURRENT_USER:
			return {
				...state,
				current: null
			}

		default:
			return state
	}
}