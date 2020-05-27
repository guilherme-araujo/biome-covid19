import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/raw/',    
})

export default api;