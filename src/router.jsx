import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import WiFi from './pages/WiFi.jsx'
import Gpio from './pages/Gpio.jsx'

export default (
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="wifi" component={WiFi}/>
            <Route path="gpio" component={Gpio}/>
        </Route>
	)