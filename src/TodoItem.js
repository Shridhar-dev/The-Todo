import React, { useState } from 'react'
import db from './firebase';

function TodoItem(props) {
    const [einval, seteinval] = useState('')
    

    function deleteme(e){
        e.preventDefault();
        db.collection('Todo').doc(props.id).delete();
    }
    function editme(e){
        e.preventDefault();
        db.collection('Todo').doc(props.id).update({Todo:einval})
        
    }
        
      
    return (
       
        <div class="container">
            <div class="row justify-content-center align-items-center ">
            <div class="col-6 text-right">    
            <h1>{props.item}</h1>
            </div>
            <div class="col-6 text-left ">    
            <span type="button" onClick={deleteme} class="px-5">❌</span>
            <span type="button" data-toggle="collapse" data-target="#collapseExample">✒️</span>
            </div>
            </div>
            <div class="collapse" id="collapseExample">
                <input class="mx-5" onChange={(e)=>{seteinval(e.target.value)}} />
                <button class="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" onClick={editme}>Save</button>
            </div>
            
            </div>
            
        
    )
}

export default TodoItem
