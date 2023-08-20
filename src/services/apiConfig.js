import axios from 'axios';

let apiURL;

const apiURLs = {
  production: 'https://my-apii-825654ca4ef9.herokuapp.com/api/characters',
  development: 'http://localhost:3030/api/characters'
}

if (window.location.hostname === "localhost") {
  apiURL = apiURLs.development;
} else {
  apiURL = apiURLs.production;
}

const api = axios.create({
  baseURL: apiURL,
});

export default api;