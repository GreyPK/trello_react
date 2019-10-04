import {
	ADD_CARD,
	DELETE_CARD,
	GET_CARDS,
	SET_CARD_TOTAL_COUNT,
	ADD_TODO,
	GET_TODOS,
	DELETE_TODO,
	ADD_COMMENT,
	GET_COMMENTS,
	DELETE_COMMENT,
} from './types'

export const addCard = card => async dispatch => {
	const res = await fetch('/cards', {
		method: 'POST',
		body: JSON.stringify(card),
		headers: {
			'Content-Type': 'application/json',
		},
	})
	const data = await res.json()

	dispatch({ type: ADD_CARD, payload: data })
}

export const getCards = page => async dispatch => {
	const res = await fetch(`/cards?_page=${page}&_limit=2`)

	dispatch({
		type: SET_CARD_TOTAL_COUNT,
		payload: parseInt(res.headers.get('X-Total-Count')),
	})

	const data = await res.json()
	dispatch({
		type: GET_CARDS,
		payload: data,
	})
}

export const deleteCard = id => async dispatch => {
	await fetch(`/cards/${id}`, {
		method: 'delete',
	})

	dispatch({
		type: DELETE_CARD,
		payload: id,
	})
}

export const addTodo = todo => async dispatch => {
	const res = await fetch('/todos', {
		method: 'POST',
		body: JSON.stringify(todo),
		headers: {
			'Content-Type': 'application/json',
		},
	})
	const data = await res.json()

	dispatch({ type: ADD_TODO, payload: data })
}

export const getTodos = () => async dispatch => {
	const res = await fetch('/todos')
	const data = await res.json()
	dispatch({
		type: GET_TODOS,
		payload: data,
	})
}

export const deleteTodo = id => async dispatch => {
	await fetch(`/todos/${id}`, {
		method: 'delete',
	})

	dispatch({
		type: DELETE_TODO,
		payload: id,
	})
}

export const addComment = comment => async dispatch => {
	const res = await fetch('/comments', {
		method: 'POST',
		body: JSON.stringify(comment),
		headers: {
			'Content-Type': 'application/json',
		},
	})
	const data = await res.json()

	dispatch({ type: ADD_COMMENT, payload: data })
}

export const getComments = () => async dispatch => {
	const res = await fetch('/comments')
	const data = await res.json()
	dispatch({
		type: GET_COMMENTS,
		payload: data,
	})
}

export const deleteComment = id => async dispatch => {
	await fetch(`/comments/${id}`, {
		method: 'delete',
	})

	dispatch({
		type: DELETE_COMMENT,
		payload: id,
	})
}
