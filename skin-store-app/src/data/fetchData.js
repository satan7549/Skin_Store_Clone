import axios from "axios"
//get Data from search {query}

export const fetchDataBySearch = () => {
   return axios.get(`https://backenddataskinproducts-production.up.railway.app/api/skinproducts`) 
}
