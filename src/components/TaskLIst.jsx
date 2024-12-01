import { useUnit } from "effector-react";
import { tasksStore } from "../state/store";


const TaskList = () => {

    const tasks = useUnit(tasksStore);

    const handlToggleTask = (id) => {
        handlToggleTask(id)
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li
                key={task.id}
                className={`task-item ${task.completed ? 'completed' : ''}`}
                >
                    {tasks.text}
                    <button
                    onClick={() => handlToggleTask(id)}
                    >
                        {task.completed ? 'completed' : 'no-completed'}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;