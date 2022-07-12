import {rootReducer, setupStore} from "./index";


export type RootState = ReturnType <typeof rootReducer>
export type Appstore = ReturnType<typeof setupStore>
export type AppDispatch = Appstore['dispatch']


export interface todo {
    id: number,
    title: string,
    completed: boolean,
}

export interface TodoState {
    todos: todo[],
    loading: boolean,
    error: null | string,
    count: number,
}

