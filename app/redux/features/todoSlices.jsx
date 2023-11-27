import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState ={
    todos:[]
}
export const todoSlices = createSlice({
    name : "todo",
    initialState : initialState ,
    reducers:{
        ADD_TODO:(state,action)=>{
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        REMOVE_TODO:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!== action.payload)
        },
    }

})
export const {ADD_TODO,REMOVE_TODO} = todoSlices.actions;
export default todoSlices.reducer;