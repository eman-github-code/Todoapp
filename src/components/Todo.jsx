import { useState } from "react"
import Footer from "./footer";
import TodoList from "./TodoList";
import Form from "./Form";
export default function Todo(){
    
    const[Todos, setTodos]=useState([]) 
    const completedTodos=Todos.filter((todo)=>todo.done).length
    const totalTodos = Todos.length
     return<div>
        <Form Todos={Todos} setTodos={setTodos}/>
        <TodoList Todos={Todos} setTodos={setTodos} />
        <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
</div>
    
}
