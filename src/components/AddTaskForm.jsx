import { useState } from "react";
import { addTask } from "../state/events";
import { useUnit } from "effector-react";
import { tasksStore } from "../state/store";

const AddTaskForm = () => {
    const [taskText, setTaskText] = useState('');
    const tasks = useUnit(tasksStore);

    const handleTaskForm = (e) => {
        e.preventDefault();
        if (taskText.trim()) {
            const newTask = {
                id: tasks.lenght + 1,
                text: taskText,
                completed: false,
            }
            addTask(newTask);
            setTaskText('')
        }
    }

    return (
        <form action="" onSubmit={handleTaskForm}>
            <input 
                className="task-input" 
                type="text" 
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button 
                type="submmit" 
                className="add-task-button"
            >
                Add task
            </button>
        </form>
    );
};

export default AddTaskForm;