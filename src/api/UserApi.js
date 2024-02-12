/* eslint-disable no-unused-vars */
import axiosInstance from "../config/axios";

class UserApi {
  token = JSON.parse(localStorage.getItem('accessToken'));

  getUserProfile = async () => {
    const url = '/api/user/profile';
    console.log('get' + url, `Bearer ${this.token}`)
    return await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

}

export default new UserApi();