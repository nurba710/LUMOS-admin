import {combineReducers} from "redux";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import TodoReducer from './slices/todoSlice'
import {todoAPI} from "../service/todoService";
import {colleaguesAPI} from "../service/colleaguesService";


export const rootReducer = combineReducers({
    todos: TodoReducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
    [colleaguesAPI.reducerPath]: colleaguesAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware:
            (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                todoAPI.middleware,
                colleaguesAPI.middleware
            ]),
    })
}

export const store = setupStore()
