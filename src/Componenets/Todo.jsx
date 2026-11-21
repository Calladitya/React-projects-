import { useState } from 'react'
import './Todo.css'

function Todo() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState([])

  return (

    <section className="todo-card">
      <div className="todo-heading">
        <span className="todo-eyebrow">YOUR DAY, ORGANIZED</span>
        <h1>My Todo App</h1>
        <p className="todo-subtitle">Small steps make a big difference.</p>
      </div>
      <div className="todo-entry">
      <input
        className="todo-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="todo-add" onClick={()=>setTodos([...todos, input])}>ADD</button>
      </div>
       <div className="todo-stats">
         <div className="todo-stat"><span>Total</span><strong>{todos.length}</strong></div>
         <div className="todo-stat"><span>Pending</span><strong>{todos.length - completed.length}</strong></div>
         <div className="todo-stat"><span>Completed</span><strong>{completed.length}</strong></div>
       </div>

      
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className={`todo-item${completed.includes(index) ? ' is-completed' : ''}`} key={index}>
           <span className="todo-text">{todo || 'Untitled task'}</span>
           <input type="checkbox"
           className="todo-checkbox"
           checked={completed.includes(index)}
           onChange={()=> {
            if (completed.includes(index)) {
              setCompleted(completed.filter(i => i !== index));
            } else {
              setCompleted([...completed, index]);
            }
           }}
           />
           <button className="todo-delete" onClick={()=>setTodos(todos.filter((_, i) => i !== index))}>Delete</button>
          </li>
        ))}
       
      </ul>
    </section>
  )
}

export default Todo
