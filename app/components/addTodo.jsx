"use client"
import React from 'react'
import { useState,useRef } from "react";
import Todos from './todos'

import { useDispatch, useSelector } from 'react-redux';
import { SET_NAME } from '../redux/features/profileSlices';



const AddTodo = () => {
  const {name} =useSelector((state)=>state.profile)
  const dispatch =useDispatch();
  const inputName =useRef();
  
  function submitName(){
    if (inputName!=="")dispatch(SET_NAME(inputName.current.value))
    else alert("In valid Input")
  }
     
function DisplayName(){
  console.log(name);
  return(
    <h1>User Name : {name}</h1>
  )
}
    
  return (
    <>
        <div>
            <h1 className='text-center'>Todo By Redux ToolKit</h1>
            <div className="lex justify-center items-center bg-blue-300">
            <input type="text" placeholder="Enter user name ..." ref={inputName} />
            <button onClick={submitName}>Enter Name</button>
            <DisplayName/>
          </div>
            <Todos/>
        </div>
    </>
    
  )
}

export default AddTodo