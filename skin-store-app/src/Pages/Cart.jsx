import React, { useContext, useState } from "react";
import { CartContext } from "../Context/Cart/CartContextProvider";
import {
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
  Box,
  CloseButton,
} from "@chakra-ui/react";
import QuantityBtn from "../Components/QuantyBtn";
import { NavLink } from "react-router-dom";
// import { CartCard } from "../Components/CartCard";

export const Cart = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { state, dispatch } = useContext(CartContext);
  //next work we have to store data some ware because we find only one data heare

  console.log("CartPage", state.cart);

  const handleTotalCount = (val) => {
    setTotalQuantity(totalQuantity + val);
    //  dispatch({type:"INC_DEC_ITEM",payload:totalQuantity})
  };

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr fontSize="xl" fontWeight="bold">
            <Th>Items</Th>
            <Th>Price</Th>
            <Th>QUANTITY</Th>
            {/* <Th isNumeric>SUBTOTAL</Th> */}
            <Th>DELETE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {state.cart &&
            state.cart.map((ele) => {
              return (
                <Tr>
                  <Td>
                    <NavLink to={`/products/${ele.id}`}>
                      <Box
                        width="200px"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        gap="10px"
                      >
                        <Image
                          width="100px"
                          height="100px"
                          src={ele.image_link}
                          alt={ele.id}
                        />
                        <Text as="h1" width="50px" textAlign="justify">
                          {ele.name}
                        </Text>
                      </Box>
                    </NavLink>
                  </Td>
                  <Td>$ {ele.price}</Td>
                  <Td>
                    <QuantityBtn tcount={(val) => handleTotalCount(val)} />
                  </Td>
                  {/* <Td isNumeric></Td> */}
                  <Td>
                    <CloseButton
                      size="md"
                      onClick={() =>
                        dispatch({
                          type: "DELETE_ITEM_FROM_CART",
                          payload: ele.id,
                        })
                      }
                    />
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
        <Tfoot>
          <Tr>
            {/* <Th>To convert</Th> */}
            <Th></Th>
            <Th fontSize="20px" fontWeight="bold">
              Total
            </Th>
            <Th fontSize="20px" fontWeight="bold">
              Total Unit {state.total_item}
            </Th>
            <Th isNumeric>SUBTOTAL</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
