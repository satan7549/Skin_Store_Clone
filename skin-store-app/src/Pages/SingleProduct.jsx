import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProductByID } from "../data/fetchData";
import {
  Box,
  HStack,
  Image,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { CartContext } from "../Context/Cart/CartContextProvider";

export const SingleProduct = () => {
  const { dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [data, setData] = useState({});
  const [click, setClick] = useState(0);
  const [isLargerThan475] = useMediaQuery("(max-width: 475px)");

  const handleAddToCart = (item) => {
    setClick(1);
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  useEffect(() => {
    fetchSingleProductByID(id).then((res) => setData(res.data));
  }, [id]);

  return (
    <Box
      h="full"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      bg="blackAlpha.100"
    >
      {isLargerThan475 ? (
        <VStack
          justifyContent="space-around"
          shadow="md"
          direction="row"
          p={4}
        >
          <Box p={5} shadow="md" borderWidth="1px">
            <Image src={data.image_link} alt={data.id} />
          </Box>
          <Box p={5} w="md" h="md">
            <VStack>
              <Box
                display="flex"
                flexDirection="column"
                textAlign="start"
                gap={10}
                justifyContent="space-around"
              >
                <Heading fontSize="xl">Name :- {data.name}</Heading>
                <Heading fontSize="xl">Brand :- {data.brand}</Heading>
                <Heading fontSize="xl">Category :- {data.category}</Heading>
                <Heading fontSize="xl">
                  Product Type :- {data.product_type}
                </Heading>
                <Heading fontSize="xl">Price :- ${data.price}</Heading>

                <Button
                  width="100%"
                  p="-1"
                  borderRadius="none"
                  colorScheme="black"
                  _hover={{ bg: "black", color: "white" }}
                  variant="outline"
                  disabled={click === 1 ? true : false}
                  onClick={() => handleAddToCart(data)}
                >
                  ADD TO CART
                </Button>
              </Box>
            </VStack>
          </Box>
        </VStack>
      ) : (
        <HStack
          spacing={8}
          justifyContent="space-around"
          shadow="md"
          direction="row"
          p={4}
        >
          <Box p={5} shadow="md" borderWidth="1px">
            <Image src={data.image_link} alt={data.id} />
          </Box>
          <Box p={5} w="md" h="md">
            <VStack>
              <Box
                display="flex"
                flexDirection="column"
                textAlign="start"
                gap={10}
                justifyContent="space-around"
              >
                <Heading fontSize="xl">Name :- {data.name}</Heading>
                <Heading fontSize="xl">Brand :- {data.brand}</Heading>
                <Heading fontSize="xl">Category :- {data.category}</Heading>
                <Heading fontSize="xl">
                  Product Type :- {data.product_type}
                </Heading>
                <Heading fontSize="xl">Price :- ${data.price}</Heading>

                <Button
                  width="100%"
                  p="-1"
                  borderRadius="none"
                  colorScheme="black"
                  _hover={{ bg: "black", color: "white" }}
                  variant="outline"
                  disabled={click === 1 ? true : false}
                  onClick={() => handleAddToCart(data)}
                >
                  ADD TO CART
                </Button>
              </Box>
            </VStack>
          </Box>
        </HStack>
      )}

      <VStack>
        <Accordion defaultIndex={[0]} allowMultiple >
          <AccordionItem>
              <AccordionButton>
                <Box fontSize="xl" as="span" flex="1" textAlign="center">
                  Decription
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4}>{data.description}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};
