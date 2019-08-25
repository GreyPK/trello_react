import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser, setUsers, setCurrentUser } from '../actions/userActions'
import useGetFromLocalStorage from '../hooks/useGetFromLocalStorage'
import useSetToLocalStorage from '../hooks/useSetToLocalStorage'

const SignIn = ({ users, current, setCurrentUser, setUsers }) => {
	const [text, setText] = useState('')

	useGetFromLocalStorage('users', setUsers)

	useSetToLocalStorage('current', current)

	const onSubmit = e => {
		e.preventDefault()
		const currentUser = users.filter(user => user.name === text)
		if (currentUser) {
			setCurrentUser(currentUser)
			setText('')
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<input type="text" value={text} onChange={e => setText(e.target.value)} />
			<button>Login user</button>
		</form>
	)
}

const mapStateToProps = state => ({
	users: state.user.users,
	current: state.user.current
})

const mapDispatchToProps = {
	addUser,
	setUsers,
	setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
