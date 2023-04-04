import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/Cart/CartContextProvider";
import {
  Button,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Text,
  CloseButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const [uniqueCart, setUniqueCart] = useState([...new Set(state.cart)]);

  //next work we have to store data some ware because we find only one data heare

  // console.log("uniqueCart", uniqueCart);

  const handleRemove = (id) => {
    dispatch({
      type: "DELETE_ITEM_FROM_CART",
      payload: id,
    });
  };

  // useEffect(() => {
  //   handleRemove();
  // }, [handleRemove]);

  const Dec = (ele) => {
    dispatch({
      type: "INC_DEC_ITEM",
      payload: ele.id,
    });
  };

  const Inc = (ele) => {
    dispatch({ type: "ADD_TO_CART", payload: ele });
  };

  return (
    <TableContainer display={"block"} maxWidth="100%">
      <Table
        variant="striped"
        colorScheme="teal"
        size={{ lg: "lg", md: "md", sm: "sm", base: "sm" }}
      >
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr fontSize="xl" fontWeight="bold">
            <Th>Items</Th>
            <Th>Price</Th>
            <Th>QUANTITY</Th>
            <Th isNumeric>SUBTOTAL</Th>
            <Th>REMOVE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {uniqueCart &&
            uniqueCart.map((ele) => {
              return (
                <Tr>
                  <Td>
                    <NavLink to={`/products/${ele.id}`}>
                      <Box
                        width="100%"
                        height="100%"
                        display="flex"
                        flexDirection={{ base: "column", md: "row" }}
                        alignItems={{
                          base: "center",
                          md: "stretch",
                          lg: "center",
                        }}
                        gap={{ base: "10px", md: "20px" }}
                      >
                        <Image
                          width={{ base: "100%", md: "100px" }}
                          height={{ base: "auto", md: "100px" }}
                          src={ele.image_link}
                          alt={ele.id}
                        />
                        <Box
                          width="100%"
                          textAlign={{ base: "center", md: "justify" }}
                        >
                          <Text as="h1">{ele.name}</Text>
                        </Box>
                      </Box>
                    </NavLink>
                  </Td>
                  <Td>$ {ele.price}</Td>
                  <Td>
                    {/* <Box
                      display="flex"
                      flexDir={{
                        lg: "row",
                        md: "row",
                        sm: "column",
                        base: "column",
                      }}
                      alignItems="center"
                      justifyContent={{
                        base: "space-between",
                        md: "flex-start",
                      }}
                    > */}
                    <ButtonGroup
                      display="flex"
                      flexDir={{
                        lg: "row",
                        md: "row",
                        sm: "column",
                        base: "column",
                      }}
                      alignItems="center"
                      justifyContent={{
                        base: "space-between",
                        md: "flex-start",
                      }}
                    >
                      <Button
                        colorScheme="teal"
                        variant="solid"
                        disabled={
                          state.cart.filter((el) => el.id === ele.id).length <=
                          1
                        }
                        onClick={() => Dec(ele)}
                      >
                        -
                      </Button>
                      <Button>
                        <Text as="h1" mx={{ base: "10px", md: "20px" }}>
                          {state.cart.filter((el) => el.id === ele.id).length}
                        </Text>
                      </Button>
                      <Button
                        colorScheme="teal"
                        variant="solid"
                        onClick={() => Inc(ele)}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                    {/* </Box> */}
                  </Td>
                  <Td isNumeric>
                    {state.cart
                      .filter((el) => el.id === ele.id)
                      .reduce((acc, el) => acc + Number(el.price), 0)
                      .toFixed(2)}
                  </Td>
                  <Td>
                    <CloseButton
                      size="md"
                      onClick={() => handleRemove(ele.id)}
                    />
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th fontSize="20px" fontWeight="bold"></Th>
            <Th fontSize="20px" fontWeight="bold">
              <Text> Total Unit :- {state.cart.length}</Text>
            </Th>
            <Th isNumeric fontSize="20px" fontWeight="bold">
              TOTAL :-
              {state.cart
                .reduce((acc, el) => acc + Number(el.price), 0)
                .toFixed(2)}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
