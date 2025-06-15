import { useState } from "react";

function TodoInput({onAdd}){
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if(task.trim() === '') return;
        onAdd(task);
        setTask('');
    }

    return (
        <div>
        <input type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}/>
        <button onClick={handleAdd}>Add task</button>
        
        </div>
    );
}

export default TodoInput;