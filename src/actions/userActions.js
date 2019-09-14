import {
	ADD_USER,
	DELETE_USER,
	SET_CURRENT_USER,
	GET_USERS,
	ADD_USER_FAILED,
	SET_LOADING,
	GET_USERS_FAILED,
} from './types'

export const addUser = user => async dispatch => {
	try {
		dispatch(setLoading())
		const res = await fetch('/users', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await res.json()

		dispatch({ type: ADD_USER, payload: data })
	} catch (err) {
		dispatch({
			type: ADD_USER_FAILED,
			payload: `Произошла ошибка: ${err.message}`,
		})
	}
}

export const getUsers = () => async dispatch => {
	try {
		const res = await fetch('/users')
		const data = await res.json()
		dispatch({
			type: GET_USERS,
			payload: data,
		})
	} catch (err) {
		dispatch({
			type: GET_USERS_FAILED,
			payload: `Произошла ошибка: ${err.message}`,
		})
	}
}

export const deleteUser = id => ({ type: DELETE_USER, payload: id })

export const setCurrentUser = user => ({
	type: SET_CURRENT_USER,
	payload: user,
})

export const setLoading = () => ({ type: SET_LOADING })
