import {useState} from 'react';


function Add(props)
{
    const [task, setTask] = useState(''); // Estado para la tarea actual
    const [taskList, setTaskList] = useState([]); // Estado para la lista de tareas

       // Función para manejar el cambio en el input
       const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim()) { // Verifica que la tarea no esté vacía
            setTaskList([...taskList, task]); // Añade la tarea a la lista
            setTask(''); // Limpia el input
        }
    }   

    return (
    
    <div className="add_container" >
    <input type="text" className="input_text_task" />
    <button className='button_add_task' >ADD</button>
    
    </div>
    )
}
export default Add;