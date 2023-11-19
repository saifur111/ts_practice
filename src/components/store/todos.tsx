"use client"
import { ReactNode, createContext, useContext, useState } from "react";
export type Todo ={
    id:string;
    task:string;
    complated:boolean;
    createdAt:Date ;
}

export type TodosContext={
    todos:Todo[];
    handleAddTodo:(task:string)=> void;   //call signature
    toggleTodoAscomplated:(id: string)=>void;
    handleTodoDelete:(id: string)=>void;
}

export const todosContext=createContext<TodosContext | null>(null);


export const TodosProvider =({children}:{children:ReactNode})=>{

    const [todos,setTodos] = useState<Todo[]>(()=>{
        const newTodos=localStorage.getItem("todos")||"[]";
        return JSON.parse(newTodos) as Todo[]
    });
    const _id:string =Math.random().toString();

    const handleAddTodo =(task:string)=>{
        setTodos((prev)=>{
            const newTodos:Todo[]=[
                {
                    id: _id,
                    task,
                    complated:false,
                    createdAt: new Date(),
                },
                ...prev
            ]
            localStorage.setItem("todos",JSON.stringify(newTodos));
            return newTodos;
            })
        }
        // Checked Box if the task complated ..
        const toggleTodoAscomplated = (id: string)=> {
            setTodos((prev)=>{
                const newTodos:Todo[] = prev.map((task:Todo)=>{
                    if(task.id=== id){
                        return {
                            ...task,
                            complated : !task.complated,
                        }
                    }
                    return task;

                })
                localStorage.setItem("todos",JSON.stringify(newTodos));
                return newTodos;
            })
            
        }
        // If the task is deleted

        const handleTodoDelete =(id:string)=>{
            
            setTodos((prev)=>{
                const newTodos:Todo[] = prev.filter((task)=>task.id!==id);
                localStorage.setItem("todos",JSON.stringify(newTodos));
                return newTodos;
            })
        }
        
        return(
            <todosContext.Provider value={{todos, handleAddTodo,toggleTodoAscomplated,handleTodoDelete}}>
                {children}
            </todosContext.Provider>
        )
}


//context api
export function useTodos(){
    const todosContextValue =useContext(todosContext);
    if(!todosContextValue){
         throw new Error('UseTodos used outside of Provider')
    }
    return todosContextValue;
}
