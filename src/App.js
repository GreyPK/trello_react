import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './components/pages/Login'
import Logout from './components/pages/Logout'
import Cards from './components/pages/Cards'
import Navigation from './components/Navigation'
import PrivateRoute from './components/routing/PrivateRoute'
import { connect } from 'react-redux'
import { setCurrentUser, getUsers } from './actions/userActions'
import useGetFromLocalStorage from './hooks/useGetFromLocalStorage'

function App({ current, setCurrentUser, getUsers, userError }) {
	useGetFromLocalStorage('current', setCurrentUser)

	useEffect(() => {
		getUsers()
		// eslint-disable-next-line
	}, [])

	return userError ? (
		<h4>{userError}</h4>
	) : (
		<Router>
			<div className="App">
				<Navigation currentUser={current} />
				<Switch>
					<PrivateRoute exact path="/" component={Cards} current={current} />
					<Route exact path="/login" component={Login} />
					<Route
						exact
						path="/logout"
						render={props => (
							<Logout {...props} setCurrentUser={setCurrentUser} />
						)}
					/>
				</Switch>
			</div>
		</Router>
	)
}

const mapStateToProps = state => ({
	current: state.user.current,
	userError: state.user.userError,
})

const mapDispatchToProps = {
	setCurrentUser,
	getUsers,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
