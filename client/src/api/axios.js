import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://fazt-crud.matthewrivero.com/api',
    withCredentials: true
})

export default instance