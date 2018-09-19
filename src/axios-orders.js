import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-46e6c.firebaseio.com/'
});

export default instance;