import { ADD_USER, DELETE_USER, SET_CURRENT_USER, SET_USERS } from './types'

export const addUser = user => ({ type: ADD_USER, payload: user })

export const setUsers = users => ({ type: SET_USERS, payload: users })

export const deleteUser = id => ({ type: DELETE_USER, payload: id })

export const setCurrentUser = user => ({ type: SET_CURRENT_USER, payload: user })