import React from 'react'
import TodoItem from './TodoItem'
import { List } from 'antd'

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
			<List>
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
			</List>
		)
	)
}

export default Todos
