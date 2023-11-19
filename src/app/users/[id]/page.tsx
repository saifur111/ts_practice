'use client'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const UserInfopage = () => {
   const router =useRouter();
   const [singleUser,setSingleUser]=useState([]);
   const {id}= useParams();

   useEffect(()=>{
        
        async function getUserById(id) {
            const data =await fetch(`https://dummyjson.com/users/${id}`);
            
            setSingleUser(await data.json())
        }
        getUserById(id);
   },[])

  return (
    <div>
        <h1>UserInfopage</h1>
        <h2>{singleUser?.firstName}</h2>
        <h2>{singleUser?.email}</h2>

        
    </div>
  )
}

export default UserInfopage