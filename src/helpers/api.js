import axios from 'axios';

export const apiBaseUrl = import.meta.env.NEXT_PUBLIC_API_URL;

console.log("🚀 ~ import.meta.env:", import.meta.env)


export const api = axios.create({
  baseURL: apiBaseUrl,
});

export const feacher = (url) => api.get(url).then((res) => res.data);
