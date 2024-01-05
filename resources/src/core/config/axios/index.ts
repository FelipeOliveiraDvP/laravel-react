import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  // baseURL: "https://sistema.ohanneadvogados.com.br",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use((res) => res.data);

export default api;
