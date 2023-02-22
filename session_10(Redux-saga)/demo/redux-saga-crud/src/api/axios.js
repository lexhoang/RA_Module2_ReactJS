import axios from 'axios';

//Khởi tạo 1 đối tượng axios từ đường dẫn của API
export const instances = axios.create({
    baseURL: 'http://localhost:8000/'
});