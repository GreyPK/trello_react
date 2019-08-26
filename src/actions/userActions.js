import { ADD_USER, DELETE_USER, SET_CURRENT_USER, SET_USERS, GET_USERS } from './types'

const apiUrl = 'https://my-json-server.typicode.com/GreyPK/fake-json-server'

export const addUser = user => ({ type: ADD_USER, payload: user })

export const getUsers = () => async (dispatch) => {
	const res = await fetch(`${apiUrl}/users`)
	const data = await res.json()
	dispatch({
		type: GET_USERS, payload: data
	})
}

export const setUsers = users => ({ type: SET_USERS, payload: users })

export const deleteUser = id => ({ type: DELETE_USER, payload: id })

export const setCurrentUser = user => ({ type: SET_CURRENT_USER, payload: user })