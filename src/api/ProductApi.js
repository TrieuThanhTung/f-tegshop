import axiosInstance from "../config/axios";

class ProductApi {

  getAllProduct = async () => {
    const url = '/api/products'
    return await axiosInstance.get(url);
  }

}

export default new ProductApi();