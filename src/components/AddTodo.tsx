"use client"
import React, { FormEvent, useState } from 'react'
import { useTodos } from './store/todos';
import { Layout, Menu, Button, theme,Input ,Form} from 'antd';

const { TextArea } = Input;

const AddTodo = () => {
  
    const [todo,setTodo]=useState("");
    const {handleAddTodo}=useTodos();

  const  handleFormSubmit =()=>{
    handleAddTodo(todo);
    setTodo("");
  }
  return (
    <div>
        <Form  onFinish={handleFormSubmit}>
        <TextArea style={{
            padding: '5px' ,
          }}
          onChange={(e)=>setTodo(e.target.value)}
          value={todo}
           rows={4} placeholder="Your todo write here"  />
            <Button type="primary" htmlType="submit" ghost>ADD TASK</Button>
        </Form>
    </div>
  )
}

export default AddTodo