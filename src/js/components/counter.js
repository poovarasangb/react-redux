import 'scss/init.scss';

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from '../store/slice/counterSlice';
import { CounterSlice } from "../store/slice/counterSlice";

const {
    increment, decrement
} = CounterSlice.actions;

export const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const handleClick = useCallback((event) => {
        if (event.currentTarget.value === "+"){
            dispatch(increment());
        } else {
            dispatch(decrement());
        }
    }, [dispatch]);

    return (
        <div>
            <div className="row">
                <button
                    className="button"
                    aria-label="Increment value"
                    onClick={handleClick}
                    value="+"
                >
          +
                </button>
                <span className="value">{count}</span>
                <button
                    value="-"
                    className="button"
                    aria-label="Decrement value"
                    onClick={handleClick}
                >
          -
                </button>
            </div>
        </div>
    );
};