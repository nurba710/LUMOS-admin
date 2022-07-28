import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import ChangePasswordPage from '../pages/ChangePasswordPage/ChangePasswordPage'
import HomePage from '../pages/HomePage'
import { AdminRoutePath } from '../common/consts/routes.const'

const AppRouter = () => {
	return (
		<Routes>
			<Route path={AdminRoutePath.HOME_PAGE} element={<HomePage />} />
			<Route path={AdminRoutePath.LOGIN_PAGE} element={<LoginPage />} />
			<Route path={AdminRoutePath.CHANGE_PASSWORD_PAGE} element={<ChangePasswordPage />} />
		</Routes>
	)
}

export default AppRouter
