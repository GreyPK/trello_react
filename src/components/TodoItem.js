import React, { useState } from 'react'
import Comments from './Comments'
import { Form, Input, Button, Icon, List } from 'antd'

const TodoItem = ({
	todo,
	deleteTodo,
	comments,
	addComment,
	deleteComment,
	currentUser,
}) => {
	const [text, setText] = useState('')

	const onTodoAdd = e => {
		e.preventDefault()
		if (text !== '') {
			const newComment = {
				title: text,
				todoId: todo.id,
				userId: currentUser.id,
			}
			addComment(newComment)
			setText('')
		}
	}

	const onChange = e => {
		setText(e.target.value)
	}

	return (
		<List.Item>
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<h2>{todo.title}</h2>
					<Icon type="delete" onClick={() => deleteTodo(todo.id)} />
				</div>
				<p>{todo.description}</p>

				<h4>Comments:</h4>
				<Form layout="inline" onSubmit={onTodoAdd}>
					<Form.Item>
						<Input type="text" value={text} onChange={onChange} />
					</Form.Item>
					<Form.Item>
						<Button>Add comment</Button>
					</Form.Item>
				</Form>
				<br />
				<Comments
					comments={comments.filter(comment => comment.todoId === todo.id)}
					addComment={addComment}
					deleteComment={deleteComment}
				/>
			</div>
		</List.Item>
	)
}

export default TodoItem
