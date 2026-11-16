import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add: (state, action) => {
            state.count += action.payload
        },
        remove: (state, action) => {
            state.count -= action.payload
        },
    }
})

export const { add, remove } = counterSlice.actions

export default counterSlice.reducer