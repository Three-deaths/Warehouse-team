import axios from 'axios'

let requests = axios.create({
    // baseURL: ''
    timeout: 8000
})

requests.interceptors.request.use((config) => {
    return config
})

requests.interceptors.response.use((response) => {
    return response
})

export default requests