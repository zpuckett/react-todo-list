import React, { useState, useRef, useEffect } from 'react';
import TaskList from './components/TaskList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'taskApp.tasks'

function App() {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTasks) setTasks(storedTasks)
  }, [])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function toggleTask(id) {
    const newTasks = [...tasks]
    const task = newTasks.find(task => task.id === id)
    task.complete = !task.complete
    setTasks(newTasks)
  }

  function handleAddTask(e) {
   const name = taskNameRef.current.value
   if (name === '') return
   setTasks(prevTasks => {
     return [...prevTasks, { id: uuidv4(), name: name, complete: false }]
   })
   taskNameRef.current.value = null;
  }
   function handleClearTasks() {
     const newTasks = tasks.filter(task => !task.complete)
     setTasks(newTasks)
   }
  
  return (
    <>
    <TaskList tasks={tasks} toggleTask={toggleTask} />
    <input ref={taskNameRef} type="text" />
    <button onClick={handleAddTask}>Add Task</button>
    <button onClick={handleClearTasks} >Clear Complete</button>
    <div>{tasks.filter(task => !task.complete).length} Remaining Task(s)</div>

    </>
  )

}
export default App;
