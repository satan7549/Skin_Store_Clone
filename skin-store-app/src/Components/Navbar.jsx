import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Searchbar } from "./SearchBar";
import { Box } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <div className="nav">
      <Box display="flex" gap={5} justifyContent="space-around" >
      <Sidebar />
      <Searchbar />
      </Box>
      <Box>
      <Link to="/">SkinStore</Link>
      </Box>
      <Box display="flex" gap={5} justifyContent="space-around" >
      <Link to="#">Profile</Link>
      <Link to="#" >Cart</Link>
      </Box>
    </div>
  );
};
