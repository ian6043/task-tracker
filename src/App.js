import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";
const App =() =>{
  const[showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks]= useState([
  {
    id:1,
    text:'durrrr',
    day:'Feb 5 at 2:30pm',
    reminder:true
  },
  {
    id:2,
    text:'durrrr',
    day:'Feb 5 at 2:30pm',
    reminder:true
  },
  {
    id:3,
    text:'durrrr',
    day:'Feb 5 at 2:30pm',
    reminder:true
  },
  ])

  //Delete task
  const deleteTask =(id) =>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }
  
  // Toggle Reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=> task.id === id  ? {...task, reminder:!task.reminder}: task))
  }

  //Add task
  const addTask =(task)=>{
    const id = Math.floor(Math.random() *1000)+1
    const newTask ={id, ...task}
    setTasks([...tasks,newTask])
  }
  return (
    <div className="container">
     <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length>0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />:'No Tasks!'}
    </div>
  );
}

export default App;
