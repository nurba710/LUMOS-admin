import {combineReducers} from "redux";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {colleaguesAPI} from "../service/colleaguesService";


export const rootReducer = combineReducers({
    [colleaguesAPI.reducerPath]: colleaguesAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware:
            (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                colleaguesAPI.middleware
            ]),
    })
}

export const store = setupStore()
