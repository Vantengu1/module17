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
                id: tasks.length + 1,
                text: taskText,
                completed: false,
            }
            addTask(newTask);
            setTaskText('')
        }
    }

    return (
        <form className="add-task-form" action="" onSubmit={handleTaskForm}>
            <input 
                className="task-input" 
                type="text" 
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button 
                type="submit" 
                className="add-task-button"
            >
                Add task
            </button>
        </form>
    );
};

export default AddTaskForm;