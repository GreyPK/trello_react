import React, { Fragment } from 'react'

const Card = ({ card, authorName }) => {
	return (
		<Fragment>
			<div>
				<h2>{card.name}</h2>
				<h4>Author: {authorName}</h4>
			</div>
			<br />
		</Fragment>
	)
}

export default Card
