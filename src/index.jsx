import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import './styles/index.scss'
import routes from "./router.jsx"

render(
	<Router history={browserHistory}>
		{routes}
	</Router>
, document.getElementById('app'))