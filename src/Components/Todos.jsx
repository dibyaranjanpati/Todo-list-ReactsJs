import React from 'react'
import TodoItom from './TodoItem'

const Todos = ({todos,onDelete, onEdit}) => {
  

  return (
    <div className='container'>
    <h1 className='text-center'>Todo List</h1>
    {todos.length ===0 ? "Your Todos list Is Empty":
    todos.map((todos,i) => {
        return (
        <TodoItom key={i} index={i} todo={todos}  onDelete={onDelete} onEdit={onEdit}/>)
    })}
    
    </div>
  )
}

export default Todos