import React, { Fragment, useState } from 'react'
import Todos from './Todos'
import { Form, Input, Button, Icon } from 'antd'

const Card = ({
	card,
	todos,
	author,
	deleteCard,
	deleteTodo,
	addTodo,
	comments,
	addComment,
	deleteComment,
	currentUser,
}) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const onTodoAdd = e => {
		e.preventDefault()
		if (title !== '') {
			const newTodo = {
				title,
				description,
				cardId: card.id,
			}
			addTodo(newTodo)
			setTitle('')
			setDescription('')
		}
	}

	const onChangeText = e => {
		setTitle(e.target.value)
	}

	const onChangeDescription = e => {
		setDescription(e.target.value)
	}

	return (
		<Fragment>
			<div
				style={{
					margin: '10px',
					padding: '10px',
					boxShadow: '0 1px 5px 0 rgba(0,0,0,0.2)',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<h1>{card.name}</h1>
					<Icon type="delete" onClick={() => deleteCard(card.id)} />
				</div>
				<h4>Author: {author.name}</h4>
				<br />

				<Form layout="vertical" onSubmit={onTodoAdd}>
					<Form.Item>
						<Input
							type="text"
							value={title}
							onChange={onChangeText}
							placeholder="New todo title"
						/>
					</Form.Item>
					<Form.Item>
						<Input.TextArea
							rows={4}
							placeholder="Description"
							value={description}
							onChange={onChangeDescription}
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Add todo
						</Button>
					</Form.Item>
				</Form>
				<br />

				<Todos
					todos={todos}
					deleteTodo={deleteTodo}
					currentUser={currentUser}
					comments={comments}
					addComment={addComment}
					deleteComment={deleteComment}
				/>
			</div>
		</Fragment>
	)
}

export default Card
