import axios from "axios";
//get Data from search {query}

export const fetchAllProducts = async () => {
  return axios.get(
    `https://backenddataskinproducts-production.up.railway.app/api/skinproducts`
  );
};

export const fetchDataBySearch = async (query) => {
  return axios.get(
    `https://backenddataskinproducts-production.up.railway.app/api/skinproducts?q=${query}`
  );
};


export const SearchByCategory = async (product_type) => {
  return axios.get(
    `https://backenddataskinproducts-production.up.railway.app/api/skinproducts?product_type=${product_type}`
  );
};

