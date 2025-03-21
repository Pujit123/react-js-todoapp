import React, { useState } from 'react';
import './App.css'
 import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';


function App() {
  
  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const [editId,setEditId] = useState(0);


  const handleSubmit = (e) => {
      e.preventDefault();

      if(editId){
        const editTodo = todos.find((i) => i.id === editId);
        const updatedTodos = todos.map((t) => 
        t.id === editTodo.id ? (t = {id: t.id,todo} ): {id : t.id,todo:t.todo});

        setTodos(updatedTodos);
        setEditId(0);
        setTodo("");
        return ;
      }

      if(todo !== ""){  // adding the items in a todos array in the form of object having id (unique)
        // setTodos([{id:`${todo}-${Date.now()}` ,todo},...todos]);
        setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
        setTodo(""); 
      }
  }

  const handleDelete = (id)=>{
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  }

  const handleEdit = (id) =>{

    const editTodo = todos.find((i)=> i.id == id);
    setTodo(editTodo.todo);
    setEditId(id);


  }


  return (
    <>
      <div className='App'>
        <div className='container'>
          <h1>Todo List App</h1>

          <TodoForm handleSubmit={handleSubmit} todo = {todo} editId={editId} setTodo={setTodo} />

          <TodosList todos = {todos} handleEdit = {handleEdit}  handleDelete = {handleDelete} />
        </div>
      </div>
      
      
    </>
  )
}

export default App