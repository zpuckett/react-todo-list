import React from 'react'

export default function Tasks({ task, toggleTask }) {

    function handleTaskClick() {
        toggleTask(task.id )
    }

    return (
        <div>
            <label>
            <input type="checkbox" checked={task.complete} onChange={handleTaskClick} />
            {task.name}
            </label>
        </div>
    )
}
