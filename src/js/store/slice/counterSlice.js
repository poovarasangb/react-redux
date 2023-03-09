/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const selectCount = (state) => state.counter.value;