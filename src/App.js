import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Login from './components/pages/Login'
import Logout from './components/pages/Logout'
import Cards from './components/pages/Cards'
import PrivateRoute from './components/routing/PrivateRoute'
import { connect } from 'react-redux'
import { setCurrentUser, getUsers } from './actions/userActions'
import useGetFromLocalStorage from './hooks/useGetFromLocalStorage'

function App({ current, setCurrentUser, getUsers, users }) {
	useGetFromLocalStorage('current', setCurrentUser)

	useEffect(() => {
		getUsers()
		// eslint-disable-next-line
	}, [])

	return (
		<Router>
			<div className="App">
				<nav className="nav">
					<li className="nav-item">
						<Link to='/' className="nav-link">Home</Link>
					</li>
					<li className="nav-item">
						<Link to='/login' className="nav-link">Login</Link>
					</li>
					<li className="nav-item">
						<Link to='/logout' className="nav-link">Logout</Link>
					</li>
					{current &&
						<li className="nav-item">
							Hello, {current.name}!
						</li>}
				</nav>
				<Switch>
					<PrivateRoute exact path="/" component={Cards} current={current} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/logout"
						render={(props) => <Logout {...props} setCurrentUser={setCurrentUser} />} />
				</Switch>
			</div>
		</Router>
	)
}

const mapStateToProps = state => ({
	current: state.user.current,
	users: state.user.users
})

const mapDispatchToProps = {
	setCurrentUser,
	getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
