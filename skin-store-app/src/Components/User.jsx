import React, { useContext } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth/AuthContextProvider";
import { logoutSucessAction } from "../Context/Auth/Action";
import { CartContext } from "../Context/Cart/CartContextProvider";

export const User = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { state: order } = useContext(CartContext);

  const navigate = useNavigate();

  const Logout = () => {
    dispatch(logoutSucessAction());
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={
            <FontAwesomeIcon
              fontSize="2xl"
              color={state.isAuth ? "green" : "black"}
              icon={faUser}
            />
          }
        />
        <MenuList borderRadius="2px">
          {state.isAuth ? (
            <MenuItem>
              <Button
                width="100%"
                p="-1"
                borderRadius="none"
                colorScheme="black"
                _hover={{ bg: "black", color: "white" }}
                variant="outline"
                onClick={Logout}
              >
                LOG OUT
              </Button>
            </MenuItem>
          ) : (
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
                  LOG IN
                </Button>
              </MenuItem>
            </Link>
          )}

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
          <MenuItem
            _hover={{ backgroundColor: "gray.100" }}
            onClick={() => navigate("/order")}
            py={"10px"}
          >
            Your Orders <Spacer />{" "}
            <Text as={"h2"} fontWeight={"bold"}>
              {order.order.length < 1 ? null : order.order.length}
            </Text>
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>
            Your Refferals
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
