import React,{useState,useEffect} from 'react'

import db from './firebase.js'
import TodoItem from './TodoItem.js'
function Todo() {
    const [inval, setinVal] = useState('')
    const [todoitems, setTodo] = useState([])
    useEffect(() => {
        db.collection('Todo').onSnapshot(snap=>{
            setTodo(snap.docs.map((doc)=>({id:doc.id,data:doc.data().Todo})))
        })
    }, [])
    function dataAdd (e){
        e.preventDefault();
        db.collection('Todo').add({Todo:inval})
    }
    
    return (
        <div>
            <form>
                <input class="my-5" onChange={(e)=>{setinVal(e.target.value)}} />
                <span type="button" onClick={dataAdd} class="px-5">📌</span>
                {console.log(inval)}
            </form>
            <div class="todo-items">
                {todoitems.map((item)=>{
                    return(
                    <TodoItem item={item.data} id={item.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo
