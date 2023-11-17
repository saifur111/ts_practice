"use client"
import React from 'react'
import { useTodos } from './store/todos'
import { useSearchParams } from 'next/navigation';

const Todos = () => {
    const{todos ,toggleTodoAscomplated,handleTodoDelete}=useTodos();
    const searchParems=useSearchParams();
    const todosFilter = searchParems.get('todos');

    let filterTodos = todos;

    if(todosFilter==="active"){
      filterTodos = filterTodos.filter((todo)=>!todo.complated);
    }
    else if(todosFilter==="completed"){
      filterTodos = filterTodos.filter((todo)=>todo.complated);
    }

  return (
    <ul>
        {
            filterTodos.map((todo)=>{
              return <li key={todo.id}>
                
                  <input type="checkbox" name="" id={`todo-${todo.id}`} checked={todo.complated} onChange={() => toggleTodoAscomplated(todo.id)} />
                  <label htmlFor={`todo-${todo.id}`}>
                    {todo.task}
                  </label>
                  {
                    todo.complated && (
                      <button type='button' onClick={()=> handleTodoDelete(todo.id)}>REMOVE</button>
                    )
                  }

              </li>
            }
        )
        }
    </ul>
    
  )
}

export default Todos