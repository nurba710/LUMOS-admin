import React from 'react';
import {increment, decrement} from "../storeToolkit/slices/todoSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";



export const Counter = () => {
    const {count} = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()



    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> dispatch(increment(10))}>Добавить</button>
            <button onClick={()=> dispatch(decrement(10))}>Убавить</button>
            </div>
    );
};

export default Counter;