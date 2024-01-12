import axios, { AxiosRequestHeaders } from "axios";
import { getAuthToken } from "@/core/providers";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  console.log("AxiosReq: ", config);

  let newHeaders = {
    ...config.headers,
  };

  const token = getAuthToken();

  if (token) {
    newHeaders = {
      ...newHeaders,
      Authorization: `Bearer ${token}`,
    };
  }

  config.headers = { ...newHeaders } as AxiosRequestHeaders;

  return config;
});

api.interceptors.response.use((res) => res.data);

export default api;
