import { ADD_USER, DELETE_USER, SET_CURRENT_USER, SET_USERS } from '../actions/types'

const initialState = {
	users: [{ id: "5fcb7792-c835-4a49-b4d3-4d0281a842c5", name: 'admin' }],
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

		default:
			return state
	}
}