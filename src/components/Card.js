import React, { Fragment } from 'react'

const Card = ({ card, deleteCard }) => {
	return (
		<Fragment>
			<div>
				<h2>{card.name}</h2>
				<h4>Author: {card.authorId}</h4>
				<button onClick={() => deleteCard(card.id)}>Delete this card</button>
			</div>
			<br />
		</Fragment>
	)
}

export default Card
