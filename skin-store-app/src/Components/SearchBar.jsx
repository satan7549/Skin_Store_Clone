import React, { useContext, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Heading,
  Image,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Box,
  DrawerFooter,
  Card,
  CardBody,
  Stack,
  Text,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { fetchDataBySearch } from "../data/fetchData";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import { NavLink } from "react-router-dom";

export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();
  const { state, dispatch } = useContext(ProductContext);

  useEffect(() => {
    try {
      if (query !== "") {
        fetchDataBySearch(query, page).then((res) =>
          dispatch({ type: "GET_PRODUCT_BY_SEARCH", payload: res.data })
        );
      }
    } catch (error) {
      console.log("error:", error);
    }
  }, [query, page]);

  const handleClose = () => {
    onClose();
    dispatch({ type: "GET_PRODUCT_BY_SEARCH", payload: [] });
  };

  return (
    <>
      <SearchIcon fontSize="xl" color="black" onClick={onOpen} />

      <Drawer placement="top" onClose={handleClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent mt="50px" p="10px">
          {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
          <DrawerBody gap={2}>
            <InputGroup>
              <Input
                type="search"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a product or brand..."
              />
              <InputRightElement
                children={
                  <IconButton
                    aria-label="Search database"
                    bg="none"
                    onClick={() => setQuery(query)}
                    icon={<SearchIcon />}
                  />
                }
              />
            </InputGroup>
          </DrawerBody>
          <DrawerFooter hidden={query !== "" ? false : true}>
            <VStack width="full">
              <Box
                width="full"
                display="flex"
                flexDirection="column"
                gap={2}
                p={2}
                maxH="300px"
                overflowY="scroll"
              >
                {state.searchProduct &&
                  state.searchProduct.map((ele) => {
                    return (
                      <NavLink
                        to={`/products/${ele.id}`}
                        key={ele.id}
                        onClick={onClose}
                      >
                        <Card
                          height="100px"
                          width="100%"
                          direction={{ base: "column", sm: "row" }}
                          variant="outline"
                        >
                          <Image
                            objectFit="cover"
                            my="auto"
                            height="100%"
                            maxW={{ base: "100%", sm: "200px" }}
                            src={ele.image_link}
                            alt={ele.id}
                            padding="10px"
                          />

                          <Stack>
                            <CardBody>
                              <Heading size="md">{ele.name}</Heading>
                              <Text py="2">${ele.price}</Text>
                            </CardBody>
                          </Stack>
                        </Card>
                      </NavLink>
                    );
                  })}
              </Box>
              <HStack>
                <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>
                  Prev
                </Button>
                <Button onClick={() => setPage(page + 1)}>Next</Button>
              </HStack>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
