import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Task Management System</h1>
            <nav>
                <ul>
                    <li><Link to="/create-task">Create Task</Link></li>
                    <li><Link to="/task-list">Task List</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
