import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../common/consts/auth.const";
import {colleague} from "../storeToolkit/Types";

export const colleaguesAPI = createApi({
    reducerPath: 'colleaguesAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints:(build) => ({
        fetchColleagues: build.query <colleague[], number>({
            query: (limit: number = 5) => ({
                url: 'colleagues',
            })
        })
    })
})

export const {useFetchColleaguesQuery} = colleaguesAPI