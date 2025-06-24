import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = <T = unknown>(
  method: Method,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return axios({
    method,
    url,
    data,
    ...config,
  });
};
