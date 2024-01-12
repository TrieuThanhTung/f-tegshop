import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8002/",
})

axiosInstance.interceptors.request.use((config) => {
  // config here

  return config;
})

axiosInstance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  return error.response.data;
}
)

export default axiosInstance;