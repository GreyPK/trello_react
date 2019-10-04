import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ current }) => {
	return (
		<nav className="nav">
			<li className="nav-item">
				<Link to="/" className="nav-link">
					Home
				</Link>
			</li>
			{current ? (
				<li className="nav-item">
					<Link to="/logout" className="nav-link">
						Logout
					</Link>
				</li>
			) : (
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>
			)}
			{current && <li className="nav-item">Hello, {current.name}!</li>}
		</nav>
	)
}

export default Navigation
