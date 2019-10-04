import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
	addCard,
	deleteCard,
	getCards,
	getTodos,
	deleteTodo,
	addTodo,
	getComments,
	addComment,
	deleteComment,
} from '../../actions/todoActions'
import Card from '../Card'
import { Card as AntdCard } from 'antd'
import { Form, Input, Button } from 'antd'
import { Pagination } from 'antd'

const Cards = ({
	cards,
	cardsTotalCount,
	todos,
	comments,
	addCard,
	getCards,
	getTodos,
	deleteCard,
	deleteTodo,
	addTodo,
	getComments,
	addComment,
	deleteComment,
	currentUser,
	users,
}) => {
	const [text, setText] = useState('')

	useEffect(() => {
		getCards(1)
		getTodos()
		getComments()
		// eslint-disable-next-line
	}, [])

	const onPageChange = page => {
		getCards(page)
	}

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
		users &&
		cards &&
		todos && (
			<div>
				<AntdCard title="Add new card" style={{ width: 400 }}>
					<Form layout="inline" onSubmit={onSubmit}>
						<Form.Item>
							<Input
								type="text"
								value={text}
								onChange={e => setText(e.target.value)}
								placeholder="Card name"
							/>
						</Form.Item>
						<Form.Item>
							<Button type="primary">Add</Button>
						</Form.Item>
					</Form>
				</AntdCard>

				<div style={{ display: 'flex', flexWrap: 'wrap' }}>
					{cards.map(card => (
						<Card
							key={card.id}
							card={card}
							deleteCard={deleteCard}
							deleteTodo={deleteTodo}
							addTodo={addTodo}
							author={users.filter(user => user.id === card.authorId)[0]}
							todos={todos.filter(todo => todo.cardId === card.id)}
							comments={comments}
							addComment={addComment}
							currentUser={currentUser}
							deleteComment={deleteComment}
						/>
					))}
				</div>
				<Pagination
					defaultCurrent={1}
					onChange={onPageChange}
					total={cardsTotalCount}
					pageSize={2}
				/>
			</div>
		)
	)
}

const mapStateToProps = state => ({
	cards: state.todo.cards,
	cardsTotalCount: state.todo.cardsTotalCount,
	todos: state.todo.todos,
	users: state.user.users,
	comments: state.todo.comments,
	currentUser: state.user.current,
})

const mapDispatchToProps = {
	addCard,
	getCards,
	getTodos,
	addTodo,
	deleteCard,
	deleteTodo,
	getComments,
	addComment,
	deleteComment,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cards)
