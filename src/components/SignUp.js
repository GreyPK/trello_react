import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addUser, setUsers } from '../actions/userActions'
import uuidv4 from 'uuid/v4'

const SignUp = ({ users, current, addUser, setUsers }) => {
	const [user, setUser] = useState('')

	useEffect(() => {
		const localStorageUsers = JSON.parse(localStorage.getItem('users'))
		localStorageUsers && setUsers(localStorageUsers)
	}, [])

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users))
	}, [users])

	const onSubmit = e => {
		e.preventDefault()
		if (user !== '') {
			const currentId = uuidv4()
			const newUser = {
				id: currentId,
				name: user
			}
			addUser(newUser)
			localStorage.setItem('users', JSON.stringify(users))
			setUser('')
		}
	}

	return (
		<form onSubmit={onSubmit}>
			{users.map(user => <li key={user.id}>{user.name}</li>)}
			<input type="text" value={user} onChange={e => setUser(e.target.value)} />
			<button>Add user</button>
		</form>
	)
}

const mapStateToProps = state => ({
	users: state.user.users,
	current: state.user.current
})

const mapDispatchToProps = {
	addUser,
	setUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
