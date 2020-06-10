import axios from "axios";

const api = axios.create({
  baseURL: "http://172.28.43.173:3333",
});

export default api;
