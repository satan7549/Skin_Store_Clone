import React from "react";
import { useContext } from "react";
import "../style/ordered.css";
import {
  Box,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CartContext } from "../Context/Cart/CartContextProvider";
import OrderCancelModal from "../Components/OrderCancelModal";
import EmptyCart from "./EmptyCart";

const OrderPage = () => {
  const { state } = useContext(CartContext);

  if (state.order.length === 0) {
    return <EmptyCart name={"Order"} />;
  }

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
            <Th>ITEMS</Th>
            <Th>PRICE/UNIT</Th>
            <Th>QUANTITY</Th>
            <Th>SUBTOTAL</Th>
            <Th>EXPECTED DELEVERY</Th>
            <Th>CANCEL</Th>
          </Tr>
        </Thead>
        <Tbody>
          {state.order.map((ele) => (
            <Tr key={ele.id}>
              <Td>
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
                    height={{ base: "200px", md: "100px" }}
                    src={ele.image_link}
                    alt={ele.id}
                  />
                  <Box
                    width="100%"
                    textAlign={{ base: "center", md: "justify" }}
                  >
                    <Text as="h1">
                      {ele.name.length < 30
                        ? ele.name
                        : `${ele.name.slice(0, 30)} ...`}
                    </Text>
                  </Box>
                </Box>
              </Td>
              <Td>$ {ele.price}</Td>
              <Td>{ele.qty}</Td>
              <Td isNumeric>$ {ele.price * ele.qty}</Td>
              <Td>24th December</Td>
              <Td>
                <OrderCancelModal id={ele.id} name={ele.name} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrderPage;
