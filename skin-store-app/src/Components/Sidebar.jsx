import React, { useContext, useEffect, useState } from "react";
import "../style/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Box, VStack, useDisclosure, Text } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { CategoryData } from "../data/CategoryData";
import { SearchByCategory } from "../data/fetchData";
import { ProductContext } from "../Context/ProductContext/ProductContext";

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { dispatch } = useContext(ProductContext);
  const [productType, setProductTtype] = useState("");

  useEffect(() => {
    try {
      SearchByCategory(productType).then((res) => {
        // console.log(res.data);
        const products = res.data;
        return dispatch({ type: "GET_CATEGORY_PRODUCTS", payload: products });
      });
    } catch (error) {
      console.log("error:", error);
    }
  }, [productType]);

  return (
    <>
      <HamburgerIcon
        fontSize="2xl"
        color="black"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link to="/">
              <FontAwesomeIcon onClick={onClose} icon={faHouse} />
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={8} direction="column">
              {CategoryData.map((ele, i) => {
                return (
                  <Box
                    key={i}
                    width="100%"
                    borderBottom="1px solid black"
                    px="10px"
                    p="10px"
                    onClick={() => {
                      setProductTtype(
                        ele.c_name.toLowerCase().replaceAll(" ", "_")
                      );
                      setTimeout(() => {
                        onClose();
                      }, 500);
                    }}
                    _hover={{
                      cursor: "pointer",
                      color: "teal",
                      borderBottom: "1px solid teal",
                    }}
                  >
                    <NavLink to="/products" >
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Text fontSize="lg" fontWeight="bold">
                        {ele.c_name}
                      </Text>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Box>
                    </NavLink>
                  </Box>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
