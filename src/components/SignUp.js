import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser, setUsers, setCurrentUser } from '../actions/userActions'
import useGetFromLocalStorage from '../hooks/useGetFromLocalStorage'
import useSetToLocalStorage from '../hooks/useSetToLocalStorage'
import uuidv4 from 'uuid/v4'

const SignUp = ({ users, current, addUser, setCurrentUser, setUsers }) => {
	const [text, setText] = useState('')

	useGetFromLocalStorage('current', setCurrentUser)

	useSetToLocalStorage('current', current)

	const onSubmit = e => {
		e.preventDefault()
		if (text !== '') {
			const currentId = uuidv4()
			const newUser = {
				id: currentId,
				name: text
			}
			addUser(newUser)
			setCurrentUser(newUser)
			setText('')
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<input type="text" value={text} onChange={e => setText(e.target.value)} />
			<button>Create user</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
