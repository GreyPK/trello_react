import React from 'react'

const TodoItem = ({ todo, deleteTodo }) => {
	return (
		<li>
			{todo.title}

			<button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
		</li>
	)
}

export default TodoItem
