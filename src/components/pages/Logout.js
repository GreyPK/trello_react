import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const Logout = ({ setCurrentUser }) => {
	useEffect(() => {
		setCurrentUser(null)
		localStorage.setItem('current', null)
	}, [setCurrentUser])

	return <Redirect to="/login" />
}

export default Logout
