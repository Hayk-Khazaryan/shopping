import { combineReducers, configureStore } from "@reduxjs/toolkit"
import toolkitReducer from "./Slicers/toolkitSlice"

const rootReducer = combineReducers({
       reducer: toolkitReducer
})

export const store = configureStore({
       reducer: rootReducer,
})