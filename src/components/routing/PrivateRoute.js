import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, current, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				current ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	)
}

export default PrivateRoute
