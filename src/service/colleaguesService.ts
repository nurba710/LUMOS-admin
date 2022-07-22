import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../common/consts/auth.const'

export const colleaguesAPI = createApi({
	reducerPath: 'colleaguesAPI',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: build => ({
		fetchColleagues: build.query({
			query: (page: number = 1) => ({
				url: `colleagues?page=${page}`,
			}),
		}),
	}),
})

export const { useFetchColleaguesQuery } = colleaguesAPI
