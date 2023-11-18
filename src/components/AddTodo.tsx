"use client"
import React, { FormEvent, useState } from 'react'
import { useTodos } from './store/todos';
import { message, Space, Button, theme,Input ,Form} from 'antd';

const { TextArea } = Input;

const AddTodo = () => {
  
    const [todo,setTodo]=useState("");
    const {handleAddTodo}=useTodos();
    const [messageApi, contextHolder] = message.useMessage();

  const  handleFormSubmit =()=>{
    handleAddTodo(todo);
    setTodo("");
  }
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Your Task Added Successfully .',
    });
  };
  return (
    <div>
        {contextHolder}
        <Form  onFinish={handleFormSubmit}>
        <TextArea style={{
            padding: '5px' ,
          }}
          onChange={(e)=>setTodo(e.target.value)}
          value={todo}
            placeholder="Your todo write here"  />\
           <Space>
              <Button type="primary" onClick={success} htmlType="submit" ghost>ADD TASK</Button>
           </Space>
        </Form>
    </div>
  )
}

export default AddTodo