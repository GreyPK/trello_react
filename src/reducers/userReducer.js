import {
	ADD_USER,
	DELETE_USER,
	SET_CURRENT_USER,
	GET_USERS,
	ADD_USER_FAILED,
	SET_LOADING,
	GET_USERS_FAILED,
} from '../actions/types'

const initialState = {
	users: null,
	current: null,
	userError: null,
	loading: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				users: [...state.users, action.payload],
				loading: false,
			}

		case GET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			}

		case DELETE_USER:
			return {
				...state,
				users: state.users.filter(user => user.id !== action.payload),
			}

		case SET_CURRENT_USER:
			return {
				...state,
				current: action.payload,
			}

		case ADD_USER_FAILED:
		case GET_USERS_FAILED:
			return {
				...state,
				userError: action.payload,
				loading: false,
			}

		case SET_LOADING:
			return {
				...state,
				loading: true,
			}

		default:
			return state
	}
}
