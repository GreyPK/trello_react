import { ADD_USER, DELETE_USER, SET_CURRENT_USER, GET_USERS } from './types'

export const addUser = user => async (dispatch) => {
	const res = await fetch('/users', {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const data = await res.json()

	dispatch({ type: ADD_USER, payload: data })
}

export const getUsers = () => async (dispatch) => {
	const res = await fetch('/users')
	const data = await res.json()
	dispatch({
		type: GET_USERS, payload: data
	})
}

export const deleteUser = id => ({ type: DELETE_USER, payload: id })

export const setCurrentUser = user => ({ type: SET_CURRENT_USER, payload: user })