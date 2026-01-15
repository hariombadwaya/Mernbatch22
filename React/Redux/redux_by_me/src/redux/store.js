//step1 create the store 
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice.js"
 export const myStore = configureStore({
    reducer: {
    counter : counterReducer, 
    },
})




