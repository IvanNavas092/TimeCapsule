import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/token/refresh')
    ) {
      originalRequest._retry = true;
      try {
        const res = await axios.post('/token/refresh', {}, { withCredentials: true });
        setAuthToken(res.data.accessToken);
        originalRequest.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        logout();
        window.location.href = '/signin';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export const getAuthToken = () => {
  return window.localStorage.getItem('auth_token');
};

export const setAuthToken = (token: string) => {
  window.localStorage.setItem('auth_token', token);
};

export const logout = () => {
  const token = getAuthToken();
  window.localStorage.removeItem('auth_token');
  const options = {
    method: 'POST',
    url: '/logout',
    withCredentials: true,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };
  axios
    .request(options)
    .then((res) => {
      console.log('Logout response:', res.data);
    })
    .catch((err) => {
      console.error('Logout error:', err);
    });
};

export function isLoggedIn() {
  const token = getAuthToken();
  return token !== null && token !== 'null';
}

export const request = <T = unknown>(
  method: Method,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  let headers = {};

  if (getAuthToken() !== null && getAuthToken() !== 'null') {
    headers = { Authorization: `Bearer ${getAuthToken()}` };
  }

  return axios({
    method,
    headers: headers,
    url,
    data,
    withCredentials: true,
    ...config,
  });
};
