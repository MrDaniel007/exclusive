import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartlist",
    initialState: {
        itema: []
    },
    reducers: {
        addCart: (state, action) => {
            state.itema.push(action.payload)
        },
        removeCart: (state, action) => {
            state.itema = state.itema.filter((x) => x.id !== action.payload)
        }
    }
})

export const {addCart, removeCart} = cartSlice.actions
export default cartSlice.reducer