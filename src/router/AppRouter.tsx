import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import ChangePasswordPage from '../pages/ChangePasswordPage/ChangePasswordPage'
import HomePage from '../pages/HomePage'
import { AdminRoutePath } from '../common/consts/routes.const'
import CreateProfilePage from '../pages/CreateProfilePage'

const AppRouter = () => {
	return (
		<Routes>
			<Route path={AdminRoutePath.HOME_PAGE} element={<HomePage />} />
			<Route path={AdminRoutePath.LOGIN_PAGE} element={<LoginPage />} />
			<Route
				path={`${AdminRoutePath.HOME_PAGE}/${AdminRoutePath.CHANGE_PASSWORD_PAGE}`}
				element={<ChangePasswordPage />}
			/>
			<Route
				path={AdminRoutePath.CREATE_PROFILE}
				element={<CreateProfilePage />}
			/>
		</Routes>
	)
}

export default AppRouter
