import React, { useEffect, useState } from 'react';
import taskService from '../../services/taskService';
import './TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await taskService.getAllTasks();
                setTasks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="task-list">
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <div>
                            <strong>{task.title}</strong> - {task.description} - <b className={task.status}>{task.status}</b>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
