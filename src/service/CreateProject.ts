import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, TOKEN} from '../common/consts/auth.const'
import { getStorage } from '../common/services/storage.service'
import { ourTeamType } from '../components/CreateProject/CreateProjectType'

interface projectType {
	projectName:string,
	projectLogo:string,
	aboutProject:string,
	ourContribution:string,
	technologyStack:string[],
	ourTeam:ourTeamType[],
	links:string
}

export const createProjectAPI = createApi({
	reducerPath: 'create-project',
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
		createProjectPOST:build.mutation({
			query: (body: projectType) => ({
				url:'/projects',
				method: 'POST',
				body,
			})

		})
	})
})

export const { useCreateProjectPOSTMutation } = createProjectAPI

