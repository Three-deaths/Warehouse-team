import axios from 'axios';

let axios_local = axios.create({
    // baseURL: '/api',
    timeout: 3000,
});

// 请求拦截器
axios_local.interceptors.request.use((config) => {
    return config;
});
// 响应拦截器
axios_local.interceptors.response.use((response) => {
    return response.data;
});

export default axios_local;