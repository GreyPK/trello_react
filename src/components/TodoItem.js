import React, { useState } from 'react'
import Comments from './Comments'

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
		<li>
			{todo.title}

			<button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
			<br />

			<h4>Comments:</h4>
			<form onSubmit={onTodoAdd}>
				<input type="text" value={text} onChange={onChange} />
				<button>Add new comment</button>
			</form>
			<br />

			<Comments
				comments={comments.filter(comment => comment.todoId === todo.id)}
				addComment={addComment}
				deleteComment={deleteComment}
			/>
		</li>
	)
}

export default TodoItem
