import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "js/store/slice/counterSlice.js";

export default configureStore({
    reducer: {
        counter: CounterSlice.reducer
    }
});