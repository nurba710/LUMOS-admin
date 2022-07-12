import {TodoState} from "../Types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState:TodoState  = {
    todos: [],
    loading: false,
    error: '',
    count: 0,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        increment(state,action) {
            state.count += action.payload;
        },
        decrement: function (state, action: PayloadAction<number>) {
            state.count -= action.payload
        }
    }
})

export const {increment, decrement} = todoSlice.actions


export default todoSlice.reducer
