"use client"
import React from 'react'
import { Todo,  useTodos } from './store/todos'
import { useSearchParams } from 'next/navigation';
import {  Button,Card,Checkbox, List, Table } from 'antd';



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
    <>
        {

            filterTodos.map((todo)=>{
              return <List key={todo.id}>
                <Card>
                  <Checkbox type="checkbox" name="" id={`todo-${todo.id}`} checked={todo.complated} onChange={() => toggleTodoAscomplated(todo.id)} ></Checkbox>
                  <label htmlFor={`todo-${todo.id}`}>
                      {todo.task}
                    </label>
                    {
                      todo.complated && (
                        <Button type="primary" onClick={()=> handleTodoDelete(todo.id)}>REMOVE</Button>
                      )
                    }
                </Card>
              </List>
            }
        )
        }
    </>
    
  )
}

export default Todos