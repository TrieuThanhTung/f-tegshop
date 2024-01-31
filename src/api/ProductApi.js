import axiosInstance from "../config/axios";

class ProductApi {

  getAllProduct = async () => {
    const url = '/api/products';
    return await axiosInstance.get(url);
  }

  getTrendingProduct = async () => {
    const url = '/api/products/trending';
    return await axiosInstance.get(url);
  }

  getProductById = async (id) => {
    const url = `/api/product/${id}`;
    return await axiosInstance.get(url);
  }

}

export default new ProductApi();