import axios from "axios";

const apiBase = axios.create({
    baseURL: "http://localhost:8080",
})

export default apiBase;