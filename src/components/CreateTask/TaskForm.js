import React, { useState } from 'react';
import taskService from '../../services/taskService';
import './TaskForm.css';

const TaskForm = () => {
    const [task, setTask] = useState({ title: '', description: '', status: 'Pending' });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await taskService.createTask(task);
            alert('Task created successfully');
            setTask({ title: '', description: '', status: 'Pending' });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h2>Create New Task</h2>
            <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
            <input type="text" name="description" value={task.description} onChange={handleChange} placeholder="Description" required />
            <select name="status" value={task.status} onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit">Create Task</button>
        </form>
    );
};

export default TaskForm;
