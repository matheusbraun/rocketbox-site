import axios from 'axios';

const api = axios.create({
	baseURL: 'https://braunrocketbox-backend.herokuapp.com'
});

export default api;
