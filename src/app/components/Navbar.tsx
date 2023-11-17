"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const searchParems=useSearchParams();
    const todosFilter = searchParems.get('todos');
  return (
    <nav>
        <Link href="/" className={todosFilter===null?"active":""}>ALL</Link>
        <Link href="/?todos=active" className={todosFilter==="active"?"active":""}>ACTIVE</Link>
        <Link href="/?todos=completed" className={todosFilter==="completed"?"active":""}>COMPLETED</Link>
    </nav>
  )
}

export default Navbar