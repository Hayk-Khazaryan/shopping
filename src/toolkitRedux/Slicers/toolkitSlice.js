import { createSlice } from "@reduxjs/toolkit"

const initialState = {
       cartItems: []
}

const toolkitSlice = createSlice({
       name: "toolkit",
       initialState,
       reducers: {
              ADD_TO_BASKET(state, action) {
                     let isExist = false
                     state.cartItems.map(item => {
                            if (item.id === action.payload.id) {
                                   isExist = true
                                   item.count = item.count + 1
                            }
                     })
                     if (!isExist) {
                            state.cartItems.push(action.payload)
                     }
              },
              CHANGE_PRODUCT_COUNT(state, action) {
                     state.cartItems.map(item => {
                            if (action.payload.id === item.id) {
                                   let count = action.payload.count
                                   item.count = count
                            }
                     })
              },
              REMOVE_BASKET(state, action) {
                     const filterItems = state.cartItems.filter(item =>
                            item.id !== action.payload.id
                     )
                     state.cartItems = filterItems
              }
       }
})


export const { ADD_TO_BASKET, CHANGE_PRODUCT_COUNT, REMOVE_BASKET } = toolkitSlice.actions
export const selectCartItems = state => state.reducer.cartItems
export default toolkitSlice.reducer


