import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addCard, deleteCard, getCards, getTodos, deleteTodo, addTodo } from '../../actions/todoActions'
import Card from '../Card'

const Cards = ({ cards, todos, addCard, getCards, getTodos, deleteCard, deleteTodo, addTodo, currentUser, users }) => {
	const [text, setText] = useState('')

	useEffect(() => {
		getCards()
		getTodos()
		// eslint-disable-next-line
	}, [])

	const onSubmit = e => {
		e.preventDefault()
		if (text !== '') {
			const newCard = {
				name: text,
				authorId: currentUser.id,
			}
			addCard(newCard)
			setText('')
		}
	}

	return (
		cards && todos &&
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={e => setText(e.target.value)} />
				<button>Add new Card</button>
			</form>

			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{cards.map(card => <Card key={card.id} card={card} deleteCard={deleteCard} deleteTodo={deleteTodo}
					addTodo={addTodo}
					author={users.filter(user => user.id === card.authorId)[0]}
					todos={todos.filter(todo => todo.cardId === card.id)} />)}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	cards: state.todo.cards,
	current: state.todo.current,
	todos: state.todo.todos,
	users: state.user.users,
	currentUser: state.user.current
})

const mapDispatchToProps = {
	addCard,
	getCards,
	getTodos,
	addTodo,
	deleteCard,
	deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
