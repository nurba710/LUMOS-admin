import React, { useState } from 'react'
import GlobalStyle from '../globalStyle'
import AppRouter from '../router/AppRouter'
import DatePicker from '../components/DatePicker/DatePicker'

export const App = () => {

	const [date, setDate] = useState(() => new Date())
	console.log(date.toDateString(), 'date')

	return (
		<div className='App'>
			<GlobalStyle />

			{/*<AppRouter />*/}
			<div>
				<DatePicker value={date} onChange={setDate} />
			</div>

		</div>
	)
}
