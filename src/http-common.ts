import axios, { AxiosInstance } from 'axios';

// eslint-disable-next-line
let token = "API_BEARER_TOKEN"

axios.defaults.headers.common = { Authorization: `bearer ${token}` };

// eslint-disable-next-line
const baseURL =
  // eslint-disable-next-line
  'https://api.twitter.com/2/users/1567977781107081218' +
  // eslint-disable-next-line
  '/tweets?tweet.fields=created_at,author_id&exclude=retweets,replies';
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
