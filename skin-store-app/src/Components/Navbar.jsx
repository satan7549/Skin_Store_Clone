import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Searchbar } from "./SearchBar";
import { Box, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { User } from "./User";

export const Navbar = () => {
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
        </Link>
      </Box>
    </Flex>
  );
};
