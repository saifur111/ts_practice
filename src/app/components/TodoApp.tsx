import React from 'react'
import AddTodo from './addTodo'
import Todos from './Todos'
import Navbar from './Navbar'

const TodoApp = () => {
  return (
    <div>
        <h2>TODO APP</h2>
        <AddTodo/>
        <Navbar/>
        <Todos/>
    </div>
    
  )
}

export default TodoApp