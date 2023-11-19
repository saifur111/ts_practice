"use client"
import Link from 'next/link';
// import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

const userFetcher =(...arg)=>fetch(...arg).then((res)=>res.json());

const Users = () => {
    // const [users,setUsers]=useState([]);
    // console.log(users);
    // useEffect(()=>{
    //     async function fetchUsers() {
    //         const data =await fetch("https://dummyjson.com/users");
            
    //         setUsers(await data.json())
            
    //     }
    //     fetchUsers();
    const {data,error}=useSWR('https://dummyjson.com/users', userFetcher)
    if(error){
        return <h1>Error To Fetching Data...</h1>
    }
    if(!data) return <h1>Loading Data...</h1>
    // },[])
  return (
    <div>
        {/* <h1>Users</h1>
        {users&&
        users?.users&&
        users?.users.map((user)=>(
            <div key={user.id}>
                <Link  href={`/users/${user.id}`}> 
                <div>{user.firstName}</div>
                </Link>
            </div>
        ))
        
        } */}
        <h1>Users</h1>
        {data&&
        
        data?.users.map((user)=>(
            <div key={user.id}>
                <Link  href={`/users/${user.id}`}> 
                <div>{user.firstName}</div>
                </Link>
            </div>
        ))
        
        }
    </div>
  )
}

export default Users