'use client'
import { useParams, useRouter } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
import useSWR from 'swr';



const UserInfopage = () => {
//    const router =useRouter();
//    const [singleUser,setSingleUser]=useState([]);
   const {id}= useParams();
   const userFetcher =(...arg)=>fetch(...arg).then((res)=>res.json());

//    useEffect(()=>{
        
//         async function getUserById(id) {
//             const data =await fetch(`https://dummyjson.com/users/${id}`);
            
//             setSingleUser(await data.json())
//         }
//         getUserById(id);
//    },[])
   const {data,error}=useSWR(`https://dummyjson.com/users/${id}`, userFetcher)
    if(error){
    return <h1>Error To Fetching Data...</h1>
}
    if(!data) return <h1>Loading Data...</h1>

  return (
    <div>
        {/* <h1>UserInfopage</h1>
        <h2>{singleUser?.firstName}</h2>
        <h2>{singleUser?.email}</h2> */}

        <h1>UserInfopage</h1>
        <h2>{data?.firstName}</h2>
        <h2>{data?.email}</h2>

        
    </div>
  )
}

export default UserInfopage