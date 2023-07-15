import React from 'react'

const TodoItom = ({index,todo,onDelete, onEdit}) => {
  return (
    <div>
      <h2>{todo.title} </h2>
      <h5>{todo.desc}</h5> 
      <button className="btn btn-danger" onClick={()=> {onDelete(todo)}}>Delete</button>         
      <button className="btn btn-warning m-3" onClick={()=> {onEdit(index)}}>Edit</button>      
      </div>
  )
}

export default TodoItom