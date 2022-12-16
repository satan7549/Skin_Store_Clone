import axios from "axios";

const API="https://backenddataskinproducts-production.up.railway.app/api/skinproducts"

// export const fetchAllProducts = async () => {
//   return axios.get(
//     `https://backenddataskinproducts-production.up.railway.app/api/skinproducts`
//   );
// };

export const fetchDataBySearch = async (query) => {
  return await axios.get(
    `${API}?q=${query}`
  );
};


export const SearchByCategory = async (product_type) => {
  return await axios.get(
    `${API}?product_type=${product_type}`
  );
};

