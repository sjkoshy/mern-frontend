import axios from 'axios';

const apiURL = 'https://my-apii-825654ca4ef9.herokuapp.com/api/characters';

const api = axios.create({
  baseURL: apiURL,
});

export default api;