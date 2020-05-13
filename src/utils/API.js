import axios from 'axios';
import { getToken } from './Commons';

export default axios.create({
    baseURL: "http://54.179.163.208:1111/api/v1/",
    // baseURL: "http://localhost:8000/api/v1/",
    headers: {
        'Authorization': `${getToken()}`,
        // "Content-type": "application/json"
    },
    responseType: "json"
});