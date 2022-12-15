import React from "react";
import "../style/navbar.css";
import "../style/sidebar.css";
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
import { Link } from "react-router-dom";

export const category = [
  "Lip Liner",
  "Lipstick",
  "Foundation",
  "Eyeliner",
  "Eyeshadow",
  "Blush",
  "Bronzer",
  "Mascara",
  "Eyebrow",
  "Nail Polish",
];

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
              {category.map((ele, i) => {
                return (
                  <Box
                    key={i}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    borderBottom="2px solid black"
                    px="10px"
                    p="10px"
                    onClick={() => alert(`${ele}`)}
                    _hover={{ cursor: "pointer" }}
                  >
                    <Text fontSize="lg" fontWeight="bold">
                      {ele}
                    </Text>
                    <FontAwesomeIcon icon={faChevronRight} />
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
