import axios from 'axios';

const api = axios.create({
    baseURL: 'https://djs-backend.herokuapp.com',
});

export default api;