import { useUnit } from "effector-react";
import { tasksStore } from "../state/store";
import { toggleTask } from "../state/events";


const TaskList = () => {

    const tasks = useUnit(tasksStore);

    const handleToggleTask = (id) => {
        toggleTask(id);
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className={`task-item ${task.completed ? 'completed' : ''}`}
                > 
                    {task.text}
                    <button className="toggle-task-button"
                    onClick={() => handleToggleTask(task.id)}
                    >
                        {task.completed ? 'Выполнена' : 'Не выполнена'}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;