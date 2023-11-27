"use client"
import React from 'react'
import { useState,useRef } from "react";
import Todos from './todos'

import { useDispatch, useSelector } from 'react-redux';
import { SET_NAME } from '../redux/features/profileSlices';
import { FaRegUser } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";



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
    <h1>{name}</h1>
  )
}
    
  return (
    <>
        <div>
            <h1 className='text-center'>Todo By Redux ToolKit</h1>
            <div className="flex  flex-row justify-center items-center bg-blue-300 p-10">
              <div class="relative text-gray-600 focus-within:text-gray-400">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button onClick={submitName} class="p-1 focus:outline-none focus:shadow-outline">
                    <IoMdPersonAdd/>
                    </button>
                  </span>
                  <input type="text" placeholder="Enter user name ..." ref={inputName} name="q" class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"  autocomplete="off"/>
                </div>       
          </div>
          <div className="flex  flex-row gap-2 justify-center items-center bg-blue-300 pb-5">
                <DisplayName/>
                <FaRegUser/>
          </div>
            
          <Todos/>
        </div>
    </>
    
  )
}

export default AddTodo