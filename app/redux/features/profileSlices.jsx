import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState ={
    name:''
}
export const profileSlices = createSlice({
    name : "profile",
    initialState : initialState ,
    reducers:{
        SET_NAME:(state,action)=>{
            state.name=action.payload
        }

    }

})
export const {SET_NAME} = profileSlices.actions;
export default profileSlices.reducer;