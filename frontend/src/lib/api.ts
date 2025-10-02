import axios from "axios";
import Cookies from "js-cookie";
import constant from "./constant";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  
});


api.interceptors.request.use((config) => {
 
  let accessToken = Cookies.get(constant.ACCESS_TOKEN_KEY);

 
  if (!accessToken) {
    accessToken = localStorage.getItem(constant.ACCESS_TOKEN_KEY) || "";
  }

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default api;
