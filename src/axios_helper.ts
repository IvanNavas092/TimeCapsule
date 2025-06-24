import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAuthToken = () => {
  return window.localStorage.getItem('auth_token');
};

export const setAuthToken = (token: string) => {
  window.localStorage.setItem('auth_token', token);
};

export const request = <T = unknown>(
  method: Method,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {

  let headers = {}

  if (getAuthToken() !== null && getAuthToken() !== 'null') {
    headers = {'Authorization': `Bearer ${getAuthToken()}`}
  }

  return axios({
    method,
    headers: headers,
    url,
    data,
    ...config,
  });
};
