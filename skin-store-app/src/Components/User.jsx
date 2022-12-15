import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ButtonGroup,
  scaleFadeConfig,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <>
      <Menu>
        <MenuButton>
          <FontAwesomeIcon fontSize="2xl" color="black" icon={faUser} />
        </MenuButton>
        <MenuList borderRadius="2px">
          <Link to="/login">
            <MenuItem>
              <Button
                width="100%"
                p="-1"
                borderRadius="none"
                colorScheme="black"
                _hover={{ bg: "black", color: "white" }}
                variant="outline"
              >
                Login
              </Button>
            </MenuItem>
          </Link>
          <MenuItem>
            <Button
              width="100%"
              p="-1"
              borderRadius="none"
              colorScheme="black"
              _hover={{ bg: "black", color: "white" }}
              variant="outline"
            >
              Register
            </Button>
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>Wishlist</MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>
            Your Orders
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>
            Your Refferals
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
