import TodoItems from "./TodoItems";
import styles from "./todolist.module.css"
export default function TodoList({Todos,setTodos}){
    const sortedTodos=Todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    return(
        <div className={styles.list}>
            {sortedTodos.map((item)=>
<TodoItems key={item.name} item={item} Todos={Todos} setTodos={setTodos}/>
)}
    
        </div>
    )
}