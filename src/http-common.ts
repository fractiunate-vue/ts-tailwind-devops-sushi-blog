import axios, { AxiosInstance } from 'axios';

// eslint-disable-next-line
let token = "API_BEARER_TOKEN"
// axios.defaults.headers.common = { Authorization: `bearer ${token}` };

// TODO: Update baseURL to match the API endpoint from dotenv
// eslint-disable-next-line
const baseURL = 'http://localhost:8080/api/v1';

const apiClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Content-type': 'application/json',
  },
});

export default apiClient;
