import axios from "axios";

const apiBase = axios.create({
    baseURL: "http://localhost:8080",
});

apiBase.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {  
    return Promise.reject(error); 
  }
);

export default apiBase;
