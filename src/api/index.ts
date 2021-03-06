import axios from "axios";

const baseURL = `http://localhost:4000/`;
const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
