import axios from 'axios';

const API_URL = 'http://localhost:8081/task';

class TaskService {
    createTask(taskData) {
        return axios.post(`${API_URL}/createTask`, taskData);
    }

    getTask(taskXid) {
        return axios.get(`${API_URL}/task/${taskXid}`);
    }

    updateTask(taskXid, taskData) {
        return axios.put(`${API_URL}/update/${taskXid}`, taskData);
    }

    deleteTask(taskXid) {
        return axios.delete(`${API_URL}/delete/${taskXid}`);
    }

    getAllTasks() {
        return axios.get(`${API_URL}/tasks`); // Assuming this endpoint fetches all tasks
    }
}

export default new TaskService();
