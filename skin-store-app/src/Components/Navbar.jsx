import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Searchbar } from "./SearchBar";
import { Box, Flex,Badge } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { User } from "./User";
import { CartContext } from "../Context/Cart/CartContextProvider";

export const Navbar = () => {
  const {state}=useContext(CartContext);
  return (
    <Flex px={5} className="nav">
      <Box display="flex" gap={5} justifyContent="space-around">
        <Sidebar />
        <Searchbar />
      </Box>
      <Box>
        <Link to="/">SkinStore</Link>
      </Box>
      <Box display="flex" gap={5} justifyContent="space-around">
        <User />
        <Link to="/cart">
          <FontAwesomeIcon
            fontSize="2xl"
            color="black"
            icon={faShoppingBasket}
          />
          {
            state.cart.length===0 ? null:<Badge>{state.cart.length}</Badge>
          }
          
        </Link>
      </Box>
    </Flex>
  );
};
