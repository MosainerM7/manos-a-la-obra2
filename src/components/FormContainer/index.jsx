import React, { useState } from 'react';
import TaskContainer from "../TaskContainer"
function FormContainer(props)
{
   const [task, setTask] = useState("");
    return (
        <><TaskContainer></TaskContainer>
        <TaskContainer></TaskContainer><TaskContainer></TaskContainer><TaskContainer></TaskContainer><TaskContainer></TaskContainer><TaskContainer></TaskContainer></>

    )
}
export default FormContainer;