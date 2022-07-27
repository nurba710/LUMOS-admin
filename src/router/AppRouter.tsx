import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import ChangePasswordPage from '../pages/ChangePasswordPage/ChangePasswordPage'
import HomePage from '../pages/HomePage'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/success' element={<HomePage />} />
			<Route path='/' element={<LoginPage />} />
			<Route path='/change-password' element={<ChangePasswordPage />} />
		</Routes>
	)
}

export default AppRouter
