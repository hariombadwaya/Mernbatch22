import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        username:"Zaid Khan",
        name1: 22
    },
    reducers:{
        changeName:(state, actions)=>{
            console.log("Hello")
            state.username = actions.payload;
        },
        changeAge: (state , actions)=>{
            state.name1 = actions.payload;
        }
    }
})
export const {changeName, changeAge} = userSlice.actions;
export default userSlice.reducer;