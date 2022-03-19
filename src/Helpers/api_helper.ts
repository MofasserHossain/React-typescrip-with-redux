import axios, { AxiosRequestConfig } from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://localhost:4000',
});

export const get = (url: string, config: AxiosRequestConfig) =>
  axiosApi.get<string, AxiosRequestConfig>(url, config);
