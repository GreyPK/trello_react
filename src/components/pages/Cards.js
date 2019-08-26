import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addCard, deleteCard, setCurrentCard, getCards } from '../../actions/todoActions'
import Card from '../Card'

const Cards = ({ cards, addCard, getCards, deleteCard, setCurrentCard, currentUser, users }) => {
	const [text, setText] = useState('')

	useEffect(() => {
		getCards()
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
		cards &&
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={e => setText(e.target.value)} />
				<button>Add new Card</button>
			</form>

			{cards.map(card => <Card key={card.id} card={card} />)}
		</div>
	)
}

const mapStateToProps = state => ({
	cards: state.todo.cards,
	current: state.todo.current,
	users: state.user.users,
	currentUser: state.user.current
})

const mapDispatchToProps = {
	addCard,
	getCards,
	deleteCard,
	setCurrentCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
