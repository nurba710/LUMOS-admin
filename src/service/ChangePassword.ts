import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, TOKEN } from '../common/consts/auth.const'
import { getStorage } from '../common/services/storage.service'

interface bodyType {
	password_new: string
	password_old: string
}

export const changePasswordAPI = createApi({
	reducerPath: 'change-password',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = getStorage(TOKEN)
			if (token) {
				headers.set('token', `${token}`)
			}
			return headers
		},
	}),
	endpoints: build => ({
		changePasswordPOST: build.mutation({
			query: (body: bodyType) => ({
				url: '/auth/change-password',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { useChangePasswordPOSTMutation } = changePasswordAPI
