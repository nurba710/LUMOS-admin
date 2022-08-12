import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, TOKEN } from '../common/consts/auth.const'
import { getStorage } from '../common/services/storage.service'

export const profileAPI = createApi({
	reducerPath: 'profileAPI',
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
		profilePOST: build.mutation({
			query: body => ({
				url: '/collaborators',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { useProfilePOSTMutation } = profileAPI
