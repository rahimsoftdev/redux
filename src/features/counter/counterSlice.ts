import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        add: (state, action) => {
            state += action.payload
        },
        remove: (state, action) => {
            state -= action.payload
        },
    }
})

export const { add, remove } = counterSlice.actions

export default counterSlice.reducer