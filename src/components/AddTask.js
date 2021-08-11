import { useState } from "react"
const AddTask = ({onAdd}) => {
    
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [highlight, setHighlight] = useState(false)
    
    const onSubmit =(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add a Task')
            return
        }

        onAdd({text,day,time,reminder: highlight})

        setDay('')
        setHighlight(false)
        setText('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Add Task' 
                    value={text} 
                    onChange={(e)=> setText(e.target.value)}
                />
            </div>
            <div className = 'form-control'>   
            <label>Day</label>
                <input 
                    type='date' 
                    value={day} 
                    onChange={(e)=> setDay(e.target.value)}
                />        
            </div> 
            <div className = 'form-control'>
                <label for="appt">Time</label>
                <input 
                    type='time' 
                    id="appt" name="appt"
                    value={time} 
                    onChange={(e)=>setTime(e.target.value)} 
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Highlight Task</label>
                <input 
                    type='checkbox'
                    checked ={highlight}
                    placeholder='Set Reminder' 
                    value={highlight}
                    onChange={(e)=> setHighlight(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>

    )
}

export default AddTask
