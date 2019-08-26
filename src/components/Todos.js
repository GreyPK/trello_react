import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos, deleteTodo }) => {
	return (
		<ul>
			{todos.map(todo => <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} />)}
		</ul>
	)
}

export default Todos
