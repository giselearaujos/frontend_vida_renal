import axios from 'axios';

// eslint-disable-next-line no-undef
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: apiBaseUrl,
});

export const feacher = (url) => api.get(url).then((res) => res.data);
