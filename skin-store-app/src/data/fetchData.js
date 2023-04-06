import axios from "axios";

const API ="https://skin-store-backend.onrender.com/api/skinproducts"

export const fetchSingleProductByID = async (id) => {
  return await axios.get(`${API}/${id}`);
};

export const fetchDataBySearch = async (query, page) => {
  return await axios.get(`${API}?q=${query}&_page=${page}&_limit=10`);
};

export const SearchByCategory = async (product_type) => {
  return await axios.get(`${API}?product_type=${product_type}`);
};

export const cards = [
  {
    // title: "Design Projects 1",
    // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "	https://static.thcdn.com/images/large/webp/widgets/121-us/44/original-New_Project_%288%29-090344.jpg",
  },
  {
    // title: "Design Projects 2",
    // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://static.thcdn.com/images/large/webp/widgets/121-us/34/1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-5-770x380.jpeg-095134.jpg",
  },
  {
    // title: "Design Projects 3",
    // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://static.thcdn.com/images/large/webp/widgets/121-us/57/Shot6-770x380-095457.jpeg",
  },
];

export const basicResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

