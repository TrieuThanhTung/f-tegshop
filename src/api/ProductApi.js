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

  getProductByCategory = async (category) => {
    const url = `/api/products/${category}`;
    return await axiosInstance.get(url);
  }

  getProductByCategoryWithSort = async (category, sort) => {
    const url = `/api/products/${category}?sort=${sort}`;
    return await axiosInstance.get(url);
  }

  getProductByCategoryWithSortAndPage = async (category, sort, page) => {
    const url = `/api/products/${category}?sort=${sort}&page=${page}`;
    return await axiosInstance.get(url);
  }
}

export default new ProductApi();