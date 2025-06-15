import Greeting from "./greeting";
import Header from "./Header";
import TodoInput  from "./TodoInput";
import TodoList from "./TodoList";


import { useState } from "react";

function App() {

  //const [task , setTask] = useState('');
  const [tasks , setTasks] = useState([]);


  const addTask = (newTask) => {
    setTasks([...tasks,newTask]);
  }
  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i) => i !== index));
  }

  // const handleAddTask = () => {
  //   if (task.trim() === '') return;
  //   setTasks([...tasks, task]);
  //   setTask('');
  // };

  // const handleDeleteTask = (index) => {
  //   const updatedTasks = tasks.filter( (_,i) => i !== index );
  //   setTasks(updatedTasks);
  // }

  // const clearAll = () => {
  //   setTasks([]);
  // }

  return (
    <div >
    
      <Header />
      
      <TodoInput onAdd={addTask}/>
      <button onClick={()=> setTasks([])} style={{ marginTop: '10px' }}>Clear All</button>
        <h3>Todo Lists:</h3>
       <TodoList tasks={tasks} deleteTask={deleteTask}/>


    </div>
  );
}

export default App;
