"use client"
import React, { FormEvent, useState } from 'react'
import { useTodos } from './store/todos';

const AddTodo = () => {
  
    const [todo,setTodo]=useState("");
    const {handleAddTodo}=useTodos();

  const  handleFormSubmit =(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Your todo write here' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default AddTodo