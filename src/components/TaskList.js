import React from 'react'
import Task from './Task';

export default function TaskList({ tasks, toggleTask }) {
    return (
        tasks.map(task => {
            return <Task key={task.id} toggleTask={toggleTask} task={task} />
        })
    )
}
