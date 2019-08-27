import {
  ADD_CARD,
  DELETE_CARD,
  GET_CARDS,
  ADD_TODO,
  GET_TODOS,
  DELETE_TODO,
  ADD_COMMENT,
  GET_COMMENTS,
  DELETE_COMMENT,
} from '../actions/types'

const initialState = {
  cards: null,
  todos: null,
  comments: null,
  current: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      }

    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
      }

    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload),
      }

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }

    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }

    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      }

    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      }

    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload,
        ),
      }

    default:
      return state
  }
}
