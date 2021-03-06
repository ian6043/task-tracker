import {FaTimes} from 'react-icons/fa'

const Task = ({task , onDelete , onToggle}) => {
    return (
        <div className={`task ${task.highlight ? 'highlight': ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>
                {task.text}{' '}
                <FaTimes 
                 style ={{color:'black'}}
                 onClick={()=>onDelete(task.id)}
                />
            </h3>
            <p>{task.day+" at "+ task.time}</p>
        </div>
    )
}

export default Task
