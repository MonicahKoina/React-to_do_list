import React, { useState } from 'react'

export default function Todo() {
    const[task, setTask]=useState([]);
    const[newTask, setNewTask]=useState("");
    function handleInputChange(event){
        setNewTask(event.target.value)

    }

  return (
    <>
    <div className='to-do-list'>
        <h1>TO DO LIST</h1>
        <div>
            <input type="text"
            placeholder='Enter your task' 
            value={newTask}
            onChange={handleInputChange}/>
            <button>Add</button>
        </div>
        
    </div>
    </>
  )
}
