import { ADD_CARD, DELETE_CARD, SET_CARDS, SET_CURRENT_CARD } from './types'

export const addCard = card => ({ type: ADD_CARD, payload: card })

export const setCards = cards => ({ type: SET_CARDS, payload: cards })

export const deleteCard = id => ({ type: DELETE_CARD, payload: id })

export const setCurrentCard = card => ({ type: SET_CURRENT_CARD, payload: card })