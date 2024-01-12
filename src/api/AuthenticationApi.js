import axiosInstance from "../config/axios";

class AuthenticationApi {

  signup = async (data) => {
    const url = "/api/auth/register";
    return await axiosInstance.post(url, data);
  } 

  verifyRegister = async (token) => {
    const url =`/api/auth/verify-registration?token=${token}`;
    return await axiosInstance.get(url);
  }
}

export default new AuthenticationApi();