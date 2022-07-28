import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { loginAPI } from '../service/login'
import { changePasswordAPI } from '../service/ChangePassword'

export const rootReducer = combineReducers({
	[loginAPI.reducerPath]: loginAPI.reducer,
	[changePasswordAPI.reducerPath]: changePasswordAPI.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat([loginAPI.middleware, changePasswordAPI.middleware]),
	})
}

export const store = setupStore()
