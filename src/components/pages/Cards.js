import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCard, setCards, deleteCard, setCurrentCard } from '../../actions/todoActions'
import useGetFromLocalStorage from '../../hooks/useGetFromLocalStorage'
import useSetToLocalStorage from '../../hooks/useSetToLocalStorage'
import Card from '../Card'
import uuidv4 from 'uuid/v4'

const Cards = ({ cards, addCard, setCards, deleteCard, setCurrentCard, currentUser, users }) => {
	const [text, setText] = useState('')
	useGetFromLocalStorage('cards', setCards)
	useSetToLocalStorage('cards', cards)

	const onSubmit = e => {
		e.preventDefault()
		if (text !== '') {
			const currentId = uuidv4()
			const newCard = {
				id: currentId,
				name: text,
				authorId: currentUser.id,
			}
			addCard(newCard)
			setText('')
			console.log(users)

		}
	}




	return (
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
	setCards,
	deleteCard,
	setCurrentCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
