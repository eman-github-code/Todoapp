import styles from "./todoItems.module.css"
export default function TodoItems({item,Todos,setTodos}){
    function handleDelete(item){
        console.log("Delete Button Clicked for item",item);
    setTodos(Todos.filter((todo)=>todo!==item))
    
}
function handleClick(name){
   

setTodos(Todos.map((todo)=>
    todo.name=== name? {...todo, done: !todo.done}: todo));;

}
const classID=item.done?styles.completed:""

     return<div className={styles.item}>
     <div className={styles.ItemName}>
        <span className={classID} onClick={()=>handleClick(item.name)}>{item.name}</span>
     <span>
        <button onClick={()=>handleDelete(item)} className={styles.DeleteButton}>x</button>
     </span>
     </div>
     
     <hr className={styles.line}/>
    </div>
}