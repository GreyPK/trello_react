import { ADD_CARD, DELETE_CARD, SET_CARDS, SET_CURRENT_CARD, GET_CARDS } from './types'

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

export const setCards = cards => ({ type: SET_CARDS, payload: cards })

export const deleteCard = id => ({ type: DELETE_CARD, payload: id })

export const setCurrentCard = card => ({ type: SET_CURRENT_CARD, payload: card })