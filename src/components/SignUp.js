import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser, setCurrentUser } from '../actions/userActions'
import useGetFromLocalStorage from '../hooks/useGetFromLocalStorage'
import useSetToLocalStorage from '../hooks/useSetToLocalStorage'

const SignUp = ({ current, addUser, setCurrentUser }) => {
	const [text, setText] = useState('')

	useGetFromLocalStorage('current', setCurrentUser)

	useSetToLocalStorage('current', current)

	const onSubmit = e => {
		e.preventDefault()
		if (text !== '') {
			const newUser = {
				name: text,
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
	current: state.user.current,
})

const mapDispatchToProps = {
	addUser,
	setCurrentUser,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp)
