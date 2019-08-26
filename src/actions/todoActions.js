import { ADD_CARD, DELETE_CARD, GET_CARDS, ADD_TODO, GET_TODOS, DELETE_TODO } from './types'

export const addCard = card => async (dispatch) => {
	const res = await fetch('/cards', {
		method: 'POST',
		body: JSON.stringify(card),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const data = await res.json()

	dispatch({ type: ADD_CARD, payload: data })
}

export const getCards = () => async (dispatch) => {
	const res = await fetch('/cards')
	const data = await res.json()
	dispatch({
		type: GET_CARDS, payload: data
	})
}

export const deleteCard = id => async (dispatch) => {
	await fetch(`/cards/${id}`, {
		method: 'delete'
	})

	dispatch({
		type: DELETE_CARD,
		payload: id
	})
}

export const addTodo = todo => async (dispatch) => {
	const res = await fetch('/todos', {
		method: 'POST',
		body: JSON.stringify(todo),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const data = await res.json()

	dispatch({ type: ADD_TODO, payload: data })
}

export const getTodos = () => async (dispatch) => {
	const res = await fetch('/todos')
	const data = await res.json()
	dispatch({
		type: GET_TODOS, payload: data
	})
}

export const deleteTodo = id => async (dispatch) => {
	await fetch(`/todos/${id}`, {
		method: 'delete'
	})

	dispatch({
		type: DELETE_TODO,
		payload: id
	})
}