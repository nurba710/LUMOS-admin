import React from 'react'
import GlobalStyle from '../globalStyle'
import AppRouter from '../router/AppRouter'

export const App = () => {
	console.log('adsaw')
	return (
		<div className='App'>
			<GlobalStyle />
			<AppRouter />
		</div>
	)
}
