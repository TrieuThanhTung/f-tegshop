/* eslint-disable no-unused-vars */
import axiosInstance from "../config/axios";

class UserApi {
  token = JSON.parse(localStorage.getItem('refreshToken'));

  getUserProfile = async () => {
    const url = '/api/user/profile';
    return await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

}

export default new UserApi();