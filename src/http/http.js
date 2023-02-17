import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const privateApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Utility to add JWT
export const setAuthHeader = token => {
  privateApi.defaults.headers.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  privateApi.defaults.headers.Authorization = '';
};
