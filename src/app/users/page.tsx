"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users,setUsers]=useState([]);
    console.log(users);
    useEffect(()=>{
        async function fetchUsers() {
            const data =await fetch("https://dummyjson.com/users");
            
            setUsers(await data.json())
            
        }
        fetchUsers();

    },[])
  return (
    <div>
        <h1>Users</h1>
        {users&&
        users?.users&&
        users?.users.map((user)=>(
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