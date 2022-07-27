import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					height: '300px',
					width: '300px',
					border: '1px solid black',
					margin: '100px auto',
					alignItems: 'center',
					textAlign: 'center',
				}}>
				<div style={{ fontSize: '24px' }}>Вы успешно залогинились!!!</div>
				<div style={{ fontSize: '24px' }}>Можете поменять пароль</div>
				<NavLink to='/change-password'> Сменить пароль</NavLink>
			</div>
		</div>
	)
}

export default HomePage
