import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Dashboard/Home';
import TaskForm from './components/CreateTask/TaskForm';
import TaskList from './components/ViewTasks/TaskList';
import Login from './components/Login/Login';
import './App.css';

const App = () => {

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/task-list" element={<TaskList />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
