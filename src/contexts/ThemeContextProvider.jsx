// import React from 'react';

import { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
const counterReducer = (state, action) => {
    return state + action.payload
}


const ThemeContextProvider = ({ children }) => {

    const [count, countDispatch] = useReducer(counterReducer, 0)
    return (
        <ThemeContext.Provider value={{ count, countDispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;

