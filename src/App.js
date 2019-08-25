import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Login from './components/pages/Login'
import Cards from './components/pages/Cards'
import PrivateRoute from './components/routing/PrivateRoute'
import { connect } from 'react-redux'
import { setCurrentUser } from './actions/userActions'
import useGetFromLocalStorage from './hooks/useGetFromLocalStorage'

function App({ current, setCurrentUser }) {
	useGetFromLocalStorage('current', setCurrentUser)
	console.log(current);

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
				</nav>
				<Switch>
					<PrivateRoute exact path="/" component={Cards} current={current} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	)
}

const mapStateToProps = state => ({
	current: state.user.current
})

const mapDispatchToProps = {
	setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
