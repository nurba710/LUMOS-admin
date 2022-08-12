import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// local
import { Provider } from 'react-redux'
import { App } from './pages/App'
import reportWebVitals from './reportWebVitals'
import { store } from './storeToolkit'
import { Global } from './Style'

ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Global />
				<App />
			</Router>
		</Provider>,
	document.getElementById('root')
)

reportWebVitals()
