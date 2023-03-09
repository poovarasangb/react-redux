import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./slice/counterSlice";

export default configureStore({
    reducer: {
        counter: CounterSlice.reducer
    }
});