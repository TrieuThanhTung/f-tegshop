import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8002/",
})

axiosInstance.interceptors.request.use((config) => {
  // const token = JSON.parse(localStorage.getItem('accessToken'));
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
},
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  return error.response;
}
)

export default axiosInstance;