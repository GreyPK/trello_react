import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({
	todos,
	deleteTodo,
	comments,
	addComment,
	deleteComment,
	currentUser,
}) => {
	return (
		comments && (
			<ul>
				{todos.map(todo => (
					<TodoItem
						todo={todo}
						key={todo.id}
						deleteTodo={deleteTodo}
						comments={comments}
						addComment={addComment}
						deleteComment={deleteComment}
						currentUser={currentUser}
					/>
				))}
			</ul>
		)
	)
}

export default Todos
