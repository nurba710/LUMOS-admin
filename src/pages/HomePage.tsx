import React from 'react'
import { NavLink } from 'react-router-dom'
import { AdminRoutePath } from '../common/consts/routes.const'


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
				<NavLink to={`${AdminRoutePath.HOME_PAGE}/${AdminRoutePath.CHANGE_PASSWORD_PAGE}`}>
					Сменить пароль
				</NavLink>
				<NavLink to={AdminRoutePath.CREATE_PROFILE}> Создать профиль</NavLink>
			</div>
		</div>
	)
}

export default HomePage
