import axios from "axios";

const api = axios.create({
  baseURL: "http://172.28.43.173:3333", //windows
  // baseURL: "http://192.168.0.104:3333", //ubuntu
});

export default api;
