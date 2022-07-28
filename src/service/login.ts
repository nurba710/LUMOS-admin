import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, TOKEN } from '../common/consts/auth.const'

export const loginAPI = createApi({
	reducerPath: 'login',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: build => ({
		loginPOST: build.mutation({
			query: body => ({
				url: '/auth/login',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { useLoginPOSTMutation } = loginAPI
