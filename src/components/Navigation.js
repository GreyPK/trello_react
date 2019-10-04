import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

const Navigation = ({ currentUser, location }) => {
	const [current, setCurrent] = useState('/')

	useEffect(() => {
		setCurrent(location.pathname)
		//eslint-disable-next-line
	}, [])

	const handleClick = e => setCurrent(e.key)

	return (
		<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
			<Menu.Item key="/">
				<NavLink to="/">Home</NavLink>
			</Menu.Item>
			{!currentUser ? (
				<Menu.Item key="/login">
					<NavLink to="/login">Login</NavLink>
				</Menu.Item>
			) : (
				<Menu.Item key="/logout">
					<NavLink to="/logout">Logout</NavLink>
				</Menu.Item>
			)}
			{currentUser && <Menu.Item>Hello, {currentUser.name}!</Menu.Item>}
		</Menu>
	)
}

export default withRouter(Navigation)
