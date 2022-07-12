import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {todo} from "../storeToolkit/Types";


export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllTodo: build.query<todo[], number>({
            query: (limit = 10) => ({
                url: `/todos`,
                params: {
                    _limit: limit,
                }
            })

        })
    })

})

export const {useFetchAllTodoQuery} = todoAPI;