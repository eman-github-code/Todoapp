import { useState } from "react";
import styles from'./form.module.css'
export default function Form({Todos,setTodos}){
    const [Todo, setTodo] =useState({name:"", done:false})
    
    function handlesubmit(e){
        e.preventDefault();
        setTodos([...Todos,Todo])
        setTodo({name:"", done:false})
    }  
    return(
        <div> 
            <form className={styles.todoform} onSubmit={handlesubmit}>
         <div className={styles.inputContainer}  >     
<input className={styles.modernInput}
onChange={(e)=>setTodo({name:e.target.value, done:false})}
 value={Todo.name} 
 type="text" 
 placeholder="Enter todo items..."/>
 
<button type="Submit" className={styles.modernButton}>Add

</button>
</div>
</form>
        </div>
    )
}