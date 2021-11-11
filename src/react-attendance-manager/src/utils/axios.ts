import axios from "axios"

const client = axios.create({withCredentials: true});
client.defaults.baseURL = 'http://localhost:8080';
client.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
client.defaults.headers.post['Access-Control-Allow-Origin'] = 'localhost:3000';

export default client;