import React, { Fragment, useState } from 'react'
import Todos from './Todos'

const Card = ({ card, todos, author, deleteCard, deleteTodo, addTodo, comments, addComment, deleteComment, currentUser }) => {
	const [text, setText] = useState('')

	const onTodoAdd = e => {
		e.preventDefault()
		if (text !== '') {
			const newTodo = {
				title: text,
				cardId: card.id,
			}
			addTodo(newTodo)
			setText('')
		}
	}

	const onChange = e => {
		setText(e.target.value)
	}

	return (
		<Fragment>
			<div style={{ margin: '10px', padding: '10px', boxShadow: '0 1px 5px 0 rgba(0,0,0,0.2)' }}>
				<h2>{card.name}</h2>
				<h4>Author: {author.name}</h4>
				<button onClick={() => deleteCard(card.id)}>Delete this card</button>
				<br />

				<form onSubmit={onTodoAdd}>
					<input type="text" value={text} onChange={onChange} />
					<button>Add new todo</button>
				</form>
				<br />

				<Todos todos={todos} deleteTodo={deleteTodo} currentUser={currentUser}
					comments={comments} addComment={addComment} deleteComment={deleteComment} />
			</div>
		</Fragment>
	)
}

export default Card
