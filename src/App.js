import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
const App =() =>{
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
  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
