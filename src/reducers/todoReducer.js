import { ADD_CARD, DELETE_CARD, SET_CARDS, SET_CURRENT_CARD } from '../actions/types'

const initialState = {
	cards: [{
		id: '5fcb77w2-c835-4a49-b4d3-4d0281a842xX',
		name: 'home tasks',
		authorId: '5fcb7792-c835-4a49-b4d3-4d0281a842c5',
		todos: [{
			id: 1,
			title: 'buy bread',
			done: false,
			cardId: '5fcb77w2-c835-4a49-b4d3-4d0281a842xX'
		}]
	}],
	current: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_CARD:
			return {
				...state,
				cards: [...state.cards, action.payload]
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