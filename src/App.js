import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState} from "react"
import AddTask from "./components/AddTask";
const App =() =>{
  const[showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks]= useState([ 
    {
    id:1,
    text:'Sample Task 1',
    day:'Feb 5',
    time:'2:30',
    highlight:true
  },
  {
    id:2,
    text:'Sample Task 2',
    day:'Feb 5',
    time:'2:30',
    highlight:true
  },
  {
    id:3,
    text:'Sample Task 3',
    day:'Feb 5',
    time:'2:30',
    highlight:true
  },
])

 
  //Delete task
  const deleteTask =(id) =>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }
  
  // Toggle Highlight
  const toggleHighlight=(id)=>{
    setTasks(tasks.map((task)=> task.id === id  ? {...task, highlight:!task.highlight}: task))
  }

  //Add task
  const addTask =(task)=>{
    const id = Math.floor(Math.random() *100000)+1
    const newTask ={id, ...task}
    setTasks([...tasks,newTask])
  }

  return (
    <div className="container">
     <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length>0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleHighlight} />:'No Tasks!'}
    </div>
  );
}

export default App;
