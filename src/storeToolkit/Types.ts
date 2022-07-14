import {rootReducer, setupStore} from "./index";


export type RootState = ReturnType <typeof rootReducer>
export type Appstore = ReturnType<typeof setupStore>
export type AppDispatch = Appstore['dispatch']


export interface todo {
    id: number,
    title: string,
    completed: boolean,
}

export interface colleague {
    aboutUser: string,
    age: number,
    avatar: string,
    background: string,
    education: [],
    languages: [],
    name: string,
    position: string,
    skills: [],
    startWork: string,
    userId: string,
    userName: string,
    workExp: [],
    __v: number,
    _id: string
}

export interface Colleagues {
    colleagues: colleague[]
}

export interface TodoState {
    todos: todo[],
    loading: boolean,
    error: null | string,
    count: number,
}

