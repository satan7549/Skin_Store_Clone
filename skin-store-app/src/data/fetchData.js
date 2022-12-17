import axios from "axios";

const API =
  "https://backenddataskinproducts-production.up.railway.app/api/skinproducts";

export const fetchSingleProductByID = async (id) => {
  return await axios.get(`${API}/${id}`);
};

export const fetchDataBySearch = async (query, page) => {
  return await axios.get(`${API}?q=${query}&_page=${page}&_limit=10`);
};

export const SearchByCategory = async (product_type) => {
  return await axios.get(`${API}?product_type=${product_type}`);
};
