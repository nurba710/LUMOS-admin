import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import TodoReducer from './slices/todoSlice'
import {todoAPI} from "../service/todoService";


export const rootReducer = combineReducers({
    todos: TodoReducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(todoAPI.middleware)
    })
}

export const store = setupStore()
