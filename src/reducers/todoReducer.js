import { ADD_CARD, DELETE_CARD, SET_CARDS, SET_CURRENT_CARD, GET_CARDS } from '../actions/types'

const initialState = {
	cards: null,
	current: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_CARD:
			return {
				...state,
				cards: [...state.cards, action.payload]
			}

		case GET_CARDS:
			return {
				...state,
				cards: action.payload
			}

		case SET_CARDS:
			return {
				...state,
				cards: action.payload
			}

		case DELETE_CARD:
			return {
				...state,
				cards: state.cards.filter(card => card.id !== action.payload)
			}

		case SET_CURRENT_CARD:
			return {
				...state,
				current: action.payload
			}

		default:
			return state
	}
}