import InputDelete from "../InputDelete";
import InputCheckbox from "../InputCheckbox";
import TaskText from "../TaskText";

function TaskContainer(props)
{
    return (    
    <div className="task_container">
    <div className="task_conteiner_checbox_label">
    <InputCheckbox></InputCheckbox>
    <TaskText></TaskText>
    </div>
    <InputDelete></InputDelete>
    </div>
    )
}
export default TaskContainer;