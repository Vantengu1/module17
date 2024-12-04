
import { useEffect } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskLIst'
import { fetchTasks } from './state/effects'

function App() {

  useEffect(() => {
    fetchTasks();
  },[]);

  return (
    <div className='app-container'>
      <h1>Task list on Effector</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  )
}

export default App
